export type QuestionType = 'multiple_choice' | 'text';

export interface QuestionOption {
  id: string;
  text: string;
  fixedReward?: number;
}

export interface Question {
  id: number;
  text: string;
  type?: QuestionType;
  placeholder?: string;
  suggestions?: string[];
  noReward?: boolean;
  options?: QuestionOption[];
}

export interface Survey {
  id: number;
  title: string;
  category: string;
  description: string;
  iconName: string;
  estimatedMinutes: number;
  questions: Question[];
}

export interface CompletedSurveyRecord {
  surveyId: number;
  completedAt: string;
  earnedAmount: number;
  answers: { questionId: number; selectedOption: string; rewardEarned: number }[];
}

export interface Bank {
  id: string;
  code: string;
  shortName: string;
  fullName: string;
  bin: string;
  color: string;
  bgColor: string;
}

export interface WithdrawalTransaction {
  id: string;
  bankCode: string;
  bankName: string;
  accountNumber: string;
  accountHolder: string;
  amount: number;
  fee: number;
  receivedAmount: number;
  status: 'processing' | 'completed' | 'failed';
  createdAt: string;
  completedAt?: string;
  transactionRef: string;
}
