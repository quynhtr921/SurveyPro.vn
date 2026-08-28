import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Bot, 
  CheckCircle2, 
  RotateCw, 
  Loader2, 
  Sparkles,
  Lock,
  X
} from 'lucide-react';

interface CaptchaModalProps {
  isOpen: boolean;
  onSuccess: () => void;
  onCancel?: () => void;
}

const PUZZLE_ICONS = [
  { id: 'car', label: 'Ô tô', symbol: '🚗' },
  { id: 'shield', label: 'Bảo vệ', symbol: '🛡️' },
  { id: 'heart', label: 'Trái tim', symbol: '❤️' },
  { id: 'star', label: 'Ngôi sao', symbol: '⭐' },
];

export const CaptchaModal: React.FC<CaptchaModalProps> = ({
  isOpen,
  onSuccess,
  onCancel,
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [targetPuzzle, setTargetPuzzle] = useState(PUZZLE_ICONS[0]);
  const [shuffledIcons, setShuffledIcons] = useState(PUZZLE_ICONS);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Initialize random puzzle challenge when modal opens
  useEffect(() => {
    if (isOpen) {
      setIsChecked(false);
      setIsVerifying(false);
      setIsSuccess(false);
      setErrorMessage(null);

      const randomTarget = PUZZLE_ICONS[Math.floor(Math.random() * PUZZLE_ICONS.length)];
      setTargetPuzzle(randomTarget);
      setShuffledIcons([...PUZZLE_ICONS].sort(() => Math.random() - 0.5));
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleCheckboxClick = () => {
    if (isVerifying || isSuccess) return;

    setIsVerifying(true);
    setErrorMessage(null);

    // Simulate authentic security handshake
    setTimeout(() => {
      setIsVerifying(false);
      setIsChecked(true);
      setIsSuccess(true);

      setTimeout(() => {
        onSuccess();
      }, 700);
    }, 900);
  };

  const handleSelectIcon = (iconId: string) => {
    if (isSuccess || isVerifying) return;

    if (iconId === targetPuzzle.id) {
      setIsVerifying(true);
      setErrorMessage(null);

      setTimeout(() => {
        setIsVerifying(false);
        setIsSuccess(true);
        setTimeout(() => {
          onSuccess();
        }, 700);
      }, 500);
    } else {
      setErrorMessage('Lựa chọn chưa chính xác, vui lòng thử lại.');
      // Re-shuffle
      setShuffledIcons([...PUZZLE_ICONS].sort(() => Math.random() - 0.5));
    }
  };

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-150">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/70">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-xs">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-tight">
                Xác thực bảo mật (CAPTCHA)
              </h3>
              <p className="text-xs text-slate-500">
                Kiểm tra bạn có phải người thật
              </p>
            </div>
          </div>

          {onCancel && (
            <button
              onClick={onCancel}
              className="w-7 h-7 rounded-lg hover:bg-slate-200/60 text-slate-400 hover:text-slate-600 flex items-center justify-center transition cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 space-y-5">
          <div className="text-center space-y-1">
            <p className="text-xs sm:text-sm text-slate-600">
              Hệ thống phòng chống tự động phát hiện hoạt động nhanh. Vui lòng hoàn thành xác thực bên dưới để tiếp tục nhận thưởng:
            </p>
          </div>

          {/* Primary Cloudflare-style Checkbox */}
          <div 
            onClick={handleCheckboxClick}
            className={`p-4 rounded-xl border-2 transition-all flex items-center justify-between cursor-pointer ${
              isSuccess 
                ? 'bg-emerald-50/80 border-emerald-500 text-emerald-900' 
                : 'bg-slate-50 hover:bg-slate-100/80 border-slate-200 hover:border-indigo-400'
            }`}
          >
            <div className="flex items-center gap-3.5">
              <div 
                className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all ${
                  isSuccess
                    ? 'bg-emerald-600 border-emerald-600 text-white'
                    : isVerifying
                    ? 'bg-slate-100 border-indigo-500'
                    : 'bg-white border-slate-400 hover:border-indigo-500'
                }`}
              >
                {isVerifying ? (
                  <Loader2 className="w-4 h-4 text-indigo-600 animate-spin" />
                ) : isSuccess ? (
                  <CheckCircle2 className="w-4 h-4 text-white" />
                ) : null}
              </div>

              <span className="text-xs sm:text-sm font-bold text-slate-800 select-none">
                {isSuccess ? 'Xác thực thành công ✓' : isVerifying ? 'Đang kiểm tra bảo mật...' : 'Tôi không phải là người máy'}
              </span>
            </div>

            <div className="flex flex-col items-end opacity-70">
              <ShieldCheck className="w-5 h-5 text-indigo-600" />
              <span className="text-[9px] text-slate-400 font-semibold tracking-tighter">SURVEY-SECURE</span>
            </div>
          </div>

          {/* Alternative Quick Icon Challenge */}
          {!isSuccess && (
            <div className="bg-indigo-50/50 rounded-xl p-3.5 border border-indigo-100/80 space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-700">
                  Hoặc bấm chọn biểu tượng: <strong className="text-indigo-600 font-bold">{targetPuzzle.label} {targetPuzzle.symbol}</strong>
                </span>
                <span className="text-[10px] text-slate-400 font-medium">1 chạm</span>
              </div>

              <div className="grid grid-cols-4 gap-2">
                {shuffledIcons.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleSelectIcon(item.id)}
                    className="p-2.5 bg-white hover:bg-indigo-50 border border-slate-200 hover:border-indigo-400 rounded-xl text-center text-xl transition active:scale-95 cursor-pointer flex flex-col items-center justify-center gap-1 shadow-2xs"
                  >
                    <span>{item.symbol}</span>
                    <span className="text-[10px] text-slate-500 font-medium">{item.label}</span>
                  </button>
                ))}
              </div>

              {errorMessage && (
                <p className="text-xs text-red-500 font-medium text-center pt-1">
                  {errorMessage}
                </p>
              )}
            </div>
          )}

          {/* Success message banner */}
          {isSuccess && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-center text-xs font-bold text-emerald-700 animate-in fade-in flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>Xác thực hoàn tất! Đang tiếp tục câu hỏi...</span>
            </div>
          )}

          {/* Footer note */}
          <div className="text-center text-[11px] text-slate-400 flex items-center justify-center gap-1">
            <Lock className="w-3 h-3 text-slate-400" />
            <span>Bảo mật dữ liệu khảo sát và chống gian lận tự động</span>
          </div>
        </div>
      </div>
    </div>
  );
};
