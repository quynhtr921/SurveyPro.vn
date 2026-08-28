import React, { useState, useEffect } from 'react';
import { useSurvey } from '../context/SurveyContext';
import { SurveyIcon } from './SurveyIcon';
import { CaptchaModal } from './CaptchaModal';
import { formatVND, isZeroRewardQuestion } from '../utils/format';
import { SURVEYS_LIST } from '../data/surveys';
import { 
  X, 
  CheckCircle2, 
  Coins, 
  Sparkles, 
  ArrowRight, 
  Award, 
  Wallet, 
  ArrowDownToLine, 
  RotateCcw,
  Check,
  Send,
  PenTool,
  HelpCircle
} from 'lucide-react';

interface SurveyRunnerModalProps {
  onOpenWithdraw: () => void;
}

export const SurveyRunnerModal: React.FC<SurveyRunnerModalProps> = ({ onOpenWithdraw }) => {
  const { 
    activeSurvey, 
    activeQuestionIndex, 
    currentAnswers, 
    lastAwardedReward, 
    closeSurvey, 
    answerQuestion,
    startSurvey 
  } = useSurvey();

  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [textInput, setTextInput] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [justAwardedAmount, setJustAwardedAmount] = useState<number | null>(null);
  const [isZeroBonus, setIsZeroBonus] = useState<boolean>(false);

  // Captcha security state: exactly 1 captcha per survey, randomly assigned to any question (0, 1, 2, 3, 4)
  const [captchaTriggerIndex, setCaptchaTriggerIndex] = useState<number>(0);
  const [hasSolvedCaptcha, setHasSolvedCaptcha] = useState<boolean>(false);
  const [isCaptchaOpen, setIsCaptchaOpen] = useState<boolean>(false);
  const [pendingAnswer, setPendingAnswer] = useState<{ questionId: number; answerValue: string } | null>(null);

  // Initialize random captcha position when a survey starts or switches
  useEffect(() => {
    if (activeSurvey) {
      const qCount = activeSurvey.questions.length || 5;
      // Pick a random question index (could be 0 - right at the very beginning, or 1, 2, 3, 4)
      const randomIdx = Math.floor(Math.random() * qCount);
      setCaptchaTriggerIndex(randomIdx);
      setHasSolvedCaptcha(false);
    }
  }, [activeSurvey?.id]);

  // Reset text input when switching questions
  useEffect(() => {
    setTextInput('');
    setSelectedOptionId(null);
  }, [activeQuestionIndex, activeSurvey]);

  if (!activeSurvey) return null;

  const currentQuestion = activeSurvey.questions[activeQuestionIndex];
  const isFinished = currentAnswers.length >= activeSurvey.questions.length;
  const progressPercent = Math.round(((activeQuestionIndex + (isFinished ? 1 : 0)) / activeSurvey.questions.length) * 100);
  const totalEarnedInSurvey = currentAnswers.reduce((sum, a) => sum + a.rewardEarned, 0);

  // Execute answer submission and reward calculation
  const executeAnswerSubmission = (questionId: number, answerValue: string) => {
    setIsSubmitting(true);
    const reward = answerQuestion(questionId, answerValue);
    
    setJustAwardedAmount(reward);
    setIsZeroBonus(reward === 0);

    setTimeout(() => {
      setSelectedOptionId(null);
      setTextInput('');
      setIsSubmitting(false);
      setJustAwardedAmount(null);
      setIsZeroBonus(false);
    }, 650);
  };

  // Check if CAPTCHA should appear: exactly once per survey at the designated question
  const shouldTriggerCaptcha = (): boolean => {
    return !hasSolvedCaptcha && activeQuestionIndex === captchaTriggerIndex;
  };

  const handleSelectOption = (optionId: string) => {
    if (isSubmitting || isFinished) return;
    setSelectedOptionId(optionId);

    if (shouldTriggerCaptcha()) {
      setPendingAnswer({ questionId: currentQuestion.id, answerValue: optionId });
      setIsCaptchaOpen(true);
      return;
    }

    executeAnswerSubmission(currentQuestion.id, optionId);
  };

  const handleSubmitText = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (isSubmitting || isFinished) return;
    
    const valueToSubmit = textInput.trim() || (currentQuestion.suggestions?.[0] || 'Hoàn toàn đồng ý');

    if (shouldTriggerCaptcha()) {
      setPendingAnswer({ questionId: currentQuestion.id, answerValue: valueToSubmit });
      setIsCaptchaOpen(true);
      return;
    }

    executeAnswerSubmission(currentQuestion.id, valueToSubmit);
  };

  const handleCaptchaSuccess = () => {
    setHasSolvedCaptcha(true);
    setIsCaptchaOpen(false);
    if (pendingAnswer) {
      executeAnswerSubmission(pendingAnswer.questionId, pendingAnswer.answerValue);
      setPendingAnswer(null);
    }
  };

  const handleNextSurvey = () => {
    const nextSurvey = SURVEYS_LIST.find((s) => s.id === activeSurvey.id + 1) || SURVEYS_LIST[0];
    startSurvey(nextSurvey);
  };

  const isCurrentQZeroReward = isZeroRewardQuestion(activeSurvey.id, currentQuestion?.id || 1, currentQuestion?.noReward);

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-3 sm:p-6 overflow-y-auto">
        <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden text-slate-800 my-auto animate-in fade-in zoom-in-95 duration-150">
          
          {/* Floating Reward Pop Effect */}
          {justAwardedAmount !== null && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none animate-bounce">
              {justAwardedAmount > 0 ? (
                <div className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-black text-xl shadow-xl flex items-center gap-2 border border-indigo-400">
                  <Coins className="w-6 h-6 animate-spin text-amber-300" />
                  <span>+{formatVND(justAwardedAmount)}</span>
                </div>
              ) : (
                <div className="px-5 py-2 rounded-xl bg-slate-800 text-white font-bold text-sm shadow-xl flex items-center gap-2 border border-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Đã ghi nhận ý kiến • +0đ</span>
                </div>
              )}
            </div>
          )}

          {/* Modal Top Header */}
          <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between bg-white">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
                <SurveyIcon name={activeSurvey.iconName} className="w-4 h-4" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] px-2 py-0.5 rounded font-bold uppercase bg-indigo-50 text-indigo-600 border border-indigo-100">
                    Bài #{activeSurvey.id}/30
                  </span>
                  <span className="text-xs text-slate-400 hidden sm:inline">{activeSurvey.category}</span>
                </div>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-tight mt-0.5 line-clamp-1">
                  {activeSurvey.title}
                </h3>
              </div>
            </div>

            <button
              id="btn-close-survey-modal"
              onClick={closeSurvey}
              className="w-8 h-8 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-600 flex items-center justify-center transition cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Progress Bar Header */}
          {!isFinished && (
            <div className="px-5 sm:px-6 pt-3.5 pb-2 bg-slate-50/50 border-b border-slate-100">
              <div className="flex justify-between items-center text-xs font-semibold text-slate-500 mb-1.5">
                <span className="flex items-center gap-1.5 text-indigo-600 font-bold">
                  <Sparkles className="w-3.5 h-3.5" />
                  Câu hỏi {activeQuestionIndex + 1} / {activeSurvey.questions.length}
                </span>
                <span className="text-slate-500 flex items-center gap-1">
                  <Coins className="w-3.5 h-3.5 text-amber-500" />
                  Thưởng: <strong className="text-slate-800">200đ - 600đ/câu</strong>
                </span>
              </div>
              <div className="w-full h-1.5 bg-slate-200/80 rounded-full overflow-hidden">
                <div
                  className="h-full bg-indigo-600 transition-all duration-300 rounded-full"
                  style={{ width: `${((activeQuestionIndex) / activeSurvey.questions.length) * 100}%` }}
                />
              </div>
            </div>
          )}

          {/* Modal Main Content */}
          <div className="p-5 sm:p-7">
            {!isFinished ? (
              /* Active Question Screen */
              <div className="space-y-5">
                {/* Question Text */}
                <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 sm:p-5">
                  <div className="flex items-center justify-between mb-1">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-indigo-600">
                      Câu hỏi {activeQuestionIndex + 1}
                    </div>
                    {currentQuestion.type === 'text' && (
                      <span className="text-[10px] bg-indigo-100/70 text-indigo-700 font-bold px-2 py-0.5 rounded-md flex items-center gap-1">
                        <PenTool className="w-3 h-3" /> Câu hỏi điền ý kiến
                      </span>
                    )}
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                    {currentQuestion.text}
                  </h4>
                </div>

                {/* Question Content: TEXT INPUT OR MULTIPLE CHOICE */}
                {currentQuestion.type === 'text' ? (
                  /* Form câu hỏi điền (Text input/textarea) */
                  <form onSubmit={handleSubmitText} className="space-y-3.5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Nhập câu trả lời hoặc nhận xét của bạn:
                      </label>
                      <textarea
                        rows={3}
                        value={textInput}
                        onChange={(e) => setTextInput(e.target.value)}
                        placeholder={currentQuestion.placeholder || 'Nhập ý kiến hoặc chia sẻ ngắn gọn của bạn tại đây...'}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition resize-none"
                      />
                    </div>

                    {/* Quick suggestion tags if available */}
                    {currentQuestion.suggestions && currentQuestion.suggestions.length > 0 && (
                      <div className="space-y-1.5">
                        <span className="text-[11px] font-medium text-slate-500">Gợi ý nhanh (nhấp để chọn):</span>
                        <div className="flex flex-wrap gap-1.5">
                          {currentQuestion.suggestions.map((sug, sIdx) => (
                            <button
                              key={sIdx}
                              type="button"
                              onClick={() => setTextInput(sug)}
                              className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 hover:bg-indigo-50 hover:text-indigo-700 border border-slate-200 text-slate-700 transition cursor-pointer"
                            >
                              {sug}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="pt-1">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm shadow-sm active:scale-95 transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                      >
                        <Send className="w-4 h-4" />
                        <span>Gửi câu trả lời & Nhận thưởng</span>
                      </button>
                    </div>
                  </form>
                ) : (
                  /* Multiple Choice Options List */
                  <div className="space-y-2.5">
                    {currentQuestion.options?.map((option, idx) => {
                      const isSelected = selectedOptionId === option.id;
                      const letterPrefix = String.fromCharCode(65 + idx); // A, B, C, D

                      return (
                        <button
                          key={option.id}
                          id={`option-btn-${option.id}`}
                          disabled={isSubmitting}
                          onClick={() => handleSelectOption(option.id)}
                          className={`w-full text-left p-3.5 sm:p-4 rounded-xl border transition-all duration-150 flex items-center justify-between group cursor-pointer ${
                            isSelected
                              ? 'bg-indigo-50 border-indigo-500 text-indigo-900 ring-2 ring-indigo-500/20 shadow-sm'
                              : 'bg-white hover:bg-slate-50/80 border-slate-200 hover:border-indigo-300 text-slate-700 hover:text-slate-900'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span
                              className={`w-7 h-7 rounded-lg font-bold text-xs flex items-center justify-center transition shrink-0 ${
                                isSelected
                                  ? 'bg-indigo-600 text-white'
                                  : 'bg-slate-100 text-slate-500 group-hover:text-slate-800 border border-slate-200/60'
                              }`}
                            >
                              {letterPrefix}
                            </span>
                            <span className="text-xs sm:text-sm font-medium leading-relaxed">
                              {option.text}
                            </span>
                          </div>

                          <div className="shrink-0 ml-2">
                            {isSelected ? (
                              <div className="w-5 h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center">
                                <Check className="w-3 h-3 stroke-[3]" />
                              </div>
                            ) : (
                              <div className="text-[11px] px-2 py-0.5 rounded-full bg-slate-100 text-indigo-600 border border-slate-200 font-semibold group-hover:border-indigo-200 transition">
                                +200đ - 600đ
                              </div>
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* Helper tip */}
                <p className="text-center text-xs text-slate-400 flex items-center justify-center gap-1.5 pt-1">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
                  Trả lời câu hỏi để nhận thưởng ngẫu nhiên tích lũy vào số dư.
                </p>
              </div>
            ) : (
              /* Finished Survey Celebratory Screen */
              <div className="text-center space-y-5 py-2">
                <div className="w-16 h-16 rounded-2xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center mx-auto shadow-sm">
                  <Award className="w-8 h-8 font-black" />
                </div>

                <div>
                  <h4 className="text-xl sm:text-2xl font-bold text-slate-900">
                    Hoàn Thành Khảo Sát #{activeSurvey.id}!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Bạn đã trả lời xuất sắc 5/5 câu hỏi và hoàn tất khảo sát.
                  </p>
                </div>

                {/* Total Earned Highlight Box */}
                <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-4 sm:p-5 max-w-md mx-auto shadow-sm">
                  <span className="text-[11px] text-emerald-800 uppercase font-bold tracking-wider">
                    Tổng tiền thưởng nhận được
                  </span>
                  <div className="text-3xl font-black text-emerald-600 mt-1">
                    +{formatVND(totalEarnedInSurvey)}
                  </div>
                  <div className="text-xs text-emerald-700 mt-1 font-medium flex items-center justify-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Đã cộng trực tiếp vào số dư ví của bạn
                  </div>
                </div>

                {/* Answers Breakdown */}
                <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200 text-left max-h-44 overflow-y-auto space-y-1.5">
                  <div className="text-xs font-bold text-slate-700 mb-1">Chi tiết 5 câu trả lời:</div>
                  {currentAnswers.map((ans, idx) => (
                    <div key={idx} className="flex justify-between items-center text-xs py-1 border-b border-slate-200/60 last:border-none">
                      <span className="text-slate-600 font-medium">
                        Câu {idx + 1}: Trả lời hoàn tất
                      </span>
                      <span className={ans.rewardEarned > 0 ? "text-emerald-600 font-bold" : "text-slate-500 font-semibold"}>
                        +{formatVND(ans.rewardEarned)}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-2.5 justify-center pt-2">
                  <button
                    id="modal-btn-next-survey"
                    onClick={handleNextSurvey}
                    className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm shadow-sm active:scale-95 transition flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Làm khảo sát tiếp theo</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    id="modal-btn-withdraw-now"
                    onClick={() => {
                      closeSurvey();
                      onOpenWithdraw();
                    }}
                    className="px-5 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs sm:text-sm border border-slate-200 shadow-sm active:scale-95 transition flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <ArrowDownToLine className="w-4 h-4 text-emerald-600" />
                    <span>Rút tiền về ngân hàng</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Security CAPTCHA Modal Verification */}
      <CaptchaModal
        isOpen={isCaptchaOpen}
        onSuccess={handleCaptchaSuccess}
        onCancel={() => {
          setIsCaptchaOpen(false);
          setPendingAnswer(null);
          setSelectedOptionId(null);
        }}
      />
    </>
  );
};
