import React, { createContext, useContext, useEffect, useState } from 'react';
import { SURVEYS_LIST } from '../data/surveys';
import { CompletedSurveyRecord, Survey, WithdrawalTransaction } from '../types';
import { calculateQuestionReward, triggerBigWinConfetti, triggerRewardConfetti } from '../utils/format';

interface SurveyContextType {
  balance: number;
  totalWithdrawn: number;
  completedSurveys: Record<number, CompletedSurveyRecord>;
  transactions: WithdrawalTransaction[];
  activeSurvey: Survey | null;
  activeQuestionIndex: number;
  currentAnswers: { questionId: number; selectedOption: string; rewardEarned: number }[];
  lastAwardedReward: number | null;
  currentWithdrawal: WithdrawalTransaction | null;
  initialCountdown: number;
  withdrawalCountdown: number;
  isWithdrawing: boolean;
  withdrawalSuccess: boolean;

  // Actions
  startSurvey: (survey: Survey) => void;
  closeSurvey: () => void;
  answerQuestion: (questionId: number, optionId: string) => number;
  submitWithdrawal: (bankCode: string, bankName: string, accountNumber: string, accountHolder: string, amount: number) => boolean;
  resetWithdrawalStatus: () => void;
  resetAllData: () => void;
  addBonusReward: (amount: number) => void;
}

const STORAGE_KEYS = {
  BALANCE: 'survey_app_balance_v1',
  COMPLETED: 'survey_app_completed_v1',
  TRANSACTIONS: 'survey_app_transactions_v1',
  WITHDRAWN: 'survey_app_withdrawn_v1',
};

const SurveyContext = createContext<SurveyContextType | undefined>(undefined);

export const SurveyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [balance, setBalance] = useState<number>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.BALANCE);
    return saved ? Number(saved) : 0;
  });

  const [totalWithdrawn, setTotalWithdrawn] = useState<number>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.WITHDRAWN);
    return saved ? Number(saved) : 0;
  });

  const [completedSurveys, setCompletedSurveys] = useState<Record<number, CompletedSurveyRecord>>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.COMPLETED);
    return saved ? JSON.parse(saved) : {};
  });

  const [transactions, setTransactions] = useState<WithdrawalTransaction[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.TRANSACTIONS);
    return saved ? JSON.parse(saved) : [];
  });

  // Active survey taking state
  const [activeSurvey, setActiveSurvey] = useState<Survey | null>(null);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState<number>(0);
  const [currentAnswers, setCurrentAnswers] = useState<
    { questionId: number; selectedOption: string; rewardEarned: number }[]
  >([]);
  const [lastAwardedReward, setLastAwardedReward] = useState<number | null>(null);

  // Withdrawal active processing state
  const [isWithdrawing, setIsWithdrawing] = useState<boolean>(false);
  const [initialCountdown, setInitialCountdown] = useState<number>(10);
  const [withdrawalCountdown, setWithdrawalCountdown] = useState<number>(10);
  const [currentWithdrawal, setCurrentWithdrawal] = useState<WithdrawalTransaction | null>(null);
  const [withdrawalSuccess, setWithdrawalSuccess] = useState<boolean>(false);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.BALANCE, balance.toString());
  }, [balance]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.WITHDRAWN, totalWithdrawn.toString());
  }, [totalWithdrawn]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.COMPLETED, JSON.stringify(completedSurveys));
  }, [completedSurveys]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.TRANSACTIONS, JSON.stringify(transactions));
  }, [transactions]);

  // Handle 10s withdrawal timer
  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    if (isWithdrawing && withdrawalCountdown > 0) {
      timer = setInterval(() => {
        setWithdrawalCountdown((prev) => {
          if (prev <= 1) {
            // Reached 0 - complete withdrawal!
            setIsWithdrawing(false);
            setWithdrawalSuccess(true);
            triggerBigWinConfetti();

            if (currentWithdrawal) {
              const completedRecord: WithdrawalTransaction = {
                ...currentWithdrawal,
                status: 'completed',
                completedAt: new Date().toISOString(),
              };

              setTransactions((prevTx) => [completedRecord, ...prevTx]);
              setTotalWithdrawn((prev) => prev + completedRecord.amount);
              setCurrentWithdrawal(completedRecord);
            }
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isWithdrawing, withdrawalCountdown, currentWithdrawal]);

  const startSurvey = (survey: Survey) => {
    setActiveSurvey(survey);
    setActiveQuestionIndex(0);
    setCurrentAnswers([]);
    setLastAwardedReward(null);
  };

  const closeSurvey = () => {
    setActiveSurvey(null);
    setActiveQuestionIndex(0);
    setCurrentAnswers([]);
    setLastAwardedReward(null);
  };

  const answerQuestion = (questionId: number, optionId: string): number => {
    if (!activeSurvey) return 0;

    const currentQ = activeSurvey.questions[activeQuestionIndex];
    // Calculate reward: 50 out of 150 questions give 0đ, other 100 give random 200đ - 600đ
    const reward = calculateQuestionReward(activeSurvey.id, questionId, currentQ?.noReward);
    setLastAwardedReward(reward);

    if (reward > 0) {
      triggerRewardConfetti(0.5);
      setBalance((prev) => prev + reward);
    }

    const newAnswer = { questionId, selectedOption: optionId, rewardEarned: reward };
    const updatedAnswers = [...currentAnswers, newAnswer];
    setCurrentAnswers(updatedAnswers);

    // Check if finished survey (5 questions total)
    if (activeQuestionIndex + 1 >= activeSurvey.questions.length) {
      const totalEarnedInSurvey = updatedAnswers.reduce((sum, item) => sum + item.rewardEarned, 0);

      const record: CompletedSurveyRecord = {
        surveyId: activeSurvey.id,
        completedAt: new Date().toISOString(),
        earnedAmount: totalEarnedInSurvey,
        answers: updatedAnswers,
      };

      setCompletedSurveys((prev) => ({
        ...prev,
        [activeSurvey.id]: record,
      }));

      triggerBigWinConfetti();
    } else {
      setActiveQuestionIndex((prev) => prev + 1);
    }

    return reward;
  };

  const submitWithdrawal = (
    bankCode: string,
    bankName: string,
    accountNumber: string,
    accountHolder: string,
    amount: number
  ): boolean => {
    if (amount <= 0 || amount > balance) {
      return false;
    }

    // Deduct immediately from balance to prevent double spending
    setBalance((prev) => Math.max(0, prev - amount));

    const refNumber = 'RT1029384756';

    const newTransaction: WithdrawalTransaction = {
      id: 'TX_' + Date.now(),
      bankCode,
      bankName,
      accountNumber,
      accountHolder: accountHolder.toUpperCase(),
      amount,
      fee: 0,
      receivedAmount: amount,
      status: 'processing',
      createdAt: new Date().toISOString(),
      transactionRef: refNumber,
    };

    // Randomized duration strictly between 10 and 19 seconds
    const randomDuration = Math.floor(Math.random() * 10) + 10;

    setCurrentWithdrawal(newTransaction);
    setInitialCountdown(randomDuration);
    setWithdrawalCountdown(randomDuration);
    setIsWithdrawing(true);
    setWithdrawalSuccess(false);

    return true;
  };

  const resetWithdrawalStatus = () => {
    setIsWithdrawing(false);
    setInitialCountdown(10);
    setWithdrawalCountdown(10);
    setWithdrawalSuccess(false);
    setCurrentWithdrawal(null);
  };

  const resetAllData = () => {
    setBalance(0);
    setTotalWithdrawn(0);
    setCompletedSurveys({});
    setTransactions([]);
    localStorage.removeItem(STORAGE_KEYS.BALANCE);
    localStorage.removeItem(STORAGE_KEYS.WITHDRAWN);
    localStorage.removeItem(STORAGE_KEYS.COMPLETED);
    localStorage.removeItem(STORAGE_KEYS.TRANSACTIONS);
  };

  const addBonusReward = (amount: number) => {
    setBalance((prev) => prev + amount);
    triggerRewardConfetti();
  };

  return (
    <SurveyContext.Provider
      value={{
        balance,
        totalWithdrawn,
        completedSurveys,
        transactions,
        activeSurvey,
        activeQuestionIndex,
        currentAnswers,
        lastAwardedReward,
        currentWithdrawal,
        initialCountdown,
        withdrawalCountdown,
        isWithdrawing,
        withdrawalSuccess,
        startSurvey,
        closeSurvey,
        answerQuestion,
        submitWithdrawal,
        resetWithdrawalStatus,
        resetAllData,
        addBonusReward,
      }}
    >
      {children}
    </SurveyContext.Provider>
  );
};

export const useSurvey = () => {
  const context = useContext(SurveyContext);
  if (!context) {
    throw new Error('useSurvey must be used within a SurveyProvider');
  }
  return context;
};
