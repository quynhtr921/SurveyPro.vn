import React, { useState } from 'react';
import { useSurvey } from '../context/SurveyContext';
import { formatVND } from '../utils/format';
import { 
  Wallet, 
  ArrowDownToLine, 
  CheckCircle2, 
  History, 
  Award,
  Sparkles,
  HelpCircle,
  RotateCcw
} from 'lucide-react';

interface HeaderProps {
  onOpenWithdraw: () => void;
  onOpenHistory: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenWithdraw, onOpenHistory }) => {
  const { balance, totalWithdrawn, completedSurveys, resetAllData, addBonusReward } = useSurvey();
  const [showHelp, setShowHelp] = useState(false);
  const [showConfirmReset, setShowConfirmReset] = useState(false);

  const completedCount = Object.keys(completedSurveys).length;
  const totalEarnedAllTime = balance + totalWithdrawn;

  return (
    <>
      <header className="sticky top-0 z-40 bg-white border-b border-slate-200 text-slate-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Brand Logo & Name */}
            <div className="flex items-center space-x-2.5 sm:space-x-3 shrink-0">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-indigo-600 flex items-center justify-center shadow-sm shrink-0">
                <span className="text-white font-black text-base sm:text-lg">S</span>
              </div>
              <div>
                <h1 className="text-base sm:text-xl font-bold tracking-tight text-slate-900 flex items-center">
                  SurveyPro<span className="text-indigo-600">.vn</span>
                </h1>
                <p className="text-xs text-slate-400 hidden md:block">
                  Khảo sát kiếm tiền trực tuyến
                </p>
              </div>
            </div>

            {/* Quick Stats & Navigation */}
            <div className="flex items-center space-x-1.5 sm:space-x-3">
              {/* Balance Widget (Mobile Optimized) */}
              <div 
                id="header-balance-widget"
                className="bg-slate-50 border border-slate-200 rounded-xl px-2 sm:px-3.5 py-1 sm:py-1.5 flex items-center gap-1.5 sm:gap-2.5 shrink-0 shadow-xs"
              >
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                  <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div className="flex flex-col items-start sm:items-end">
                  <span className="text-[9px] sm:text-[10px] text-slate-400 uppercase font-semibold tracking-wider leading-none">Số dư</span>
                  <div className="text-xs sm:text-base font-black text-emerald-600 tracking-tight whitespace-nowrap mt-0.5">
                    {formatVND(balance)}
                  </div>
                </div>
              </div>

              {/* Withdraw Button */}
              <button
                id="header-btn-withdraw"
                onClick={onOpenWithdraw}
                className="rounded-xl bg-indigo-600 px-2.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-bold text-white shadow-sm hover:bg-indigo-700 active:scale-95 transition-all flex items-center gap-1 sm:gap-1.5 shrink-0 cursor-pointer"
              >
                <ArrowDownToLine className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="inline">Rút tiền</span>
              </button>

              {/* History Button */}
              <button
                id="header-btn-history"
                onClick={onOpenHistory}
                title="Lịch sử rút tiền"
                className="p-1.5 sm:p-2 rounded-xl bg-white hover:bg-slate-50 text-slate-600 hover:text-slate-900 border border-slate-200 transition cursor-pointer shrink-0"
              >
                <History className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>

              {/* Help Button */}
              <button
                id="header-btn-help"
                onClick={() => setShowHelp(true)}
                title="Hướng dẫn"
                className="p-2 rounded-xl bg-white hover:bg-slate-50 text-slate-600 hover:text-slate-900 border border-slate-200 transition cursor-pointer hidden md:flex items-center shrink-0"
              >
                <HelpCircle className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Guide Modal */}
      {showHelp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
          <div className="bg-white border border-slate-200 rounded-2xl max-w-lg w-full p-6 text-slate-800 shadow-xl relative animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <h3 className="text-base font-bold flex items-center gap-2 text-slate-900">
                <Award className="w-5 h-5 text-indigo-600" /> Quy định & Hướng dẫn nhận thưởng
              </h3>
              <button
                onClick={() => setShowHelp(false)}
                className="w-8 h-8 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-600 flex items-center justify-center transition cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="py-4 space-y-3 text-sm text-slate-600 leading-relaxed">
              <div className="flex items-start gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200/80">
                <div className="w-6 h-6 rounded-full bg-indigo-50 text-indigo-600 border border-indigo-100 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  1
                </div>
                <div>
                  <strong className="text-slate-900 font-semibold">30 bài khảo sát thực tế:</strong> Mỗi bài gồm 5 câu hỏi trắc nghiệm chất lượng về công nghệ, tiêu dùng, lối sống.
                </div>
              </div>

              <div className="flex items-start gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200/80">
                <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  2
                </div>
                <div>
                  <strong className="text-slate-900 font-semibold">Thưởng 200đ - 600đ/câu:</strong> Tiền thưởng được cộng trực tiếp vào số dư ví ngay sau mỗi câu trả lời.
                </div>
              </div>

              <div className="flex items-start gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200/80">
                <div className="w-6 h-6 rounded-full bg-indigo-50 text-indigo-600 border border-indigo-100 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  3
                </div>
                <div>
                  <strong className="text-slate-900 font-semibold">Rút tiền siêu tốc 10 giây:</strong> Hỗ trợ tất cả ngân hàng Việt Nam & ví điện tử. Hệ thống tự động chuyển khoản qua cổng liên ngân hàng.
                </div>
              </div>
            </div>

            <div className="pt-3 flex justify-between items-center border-t border-slate-100">
              <button
                onClick={() => {
                  setShowHelp(false);
                  setShowConfirmReset(true);
                }}
                className="text-xs text-slate-400 hover:text-red-600 flex items-center gap-1 cursor-pointer transition font-medium"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Đặt lại dữ liệu gốc
              </button>
              <button
                onClick={() => setShowHelp(false)}
                className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs cursor-pointer transition shadow-sm"
              >
                Đã hiểu, Bắt đầu làm!
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Reset confirmation */}
      {showConfirmReset && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
          <div className="bg-white border border-slate-200 rounded-2xl max-w-sm w-full p-6 text-slate-800 shadow-xl animate-in fade-in zoom-in-95 duration-150">
            <h4 className="text-base font-bold text-red-600 mb-2">Xác nhận làm mới toàn bộ?</h4>
            <p className="text-sm text-slate-500 mb-5">
              Hành động này sẽ xóa số dư, đặt lại 30 bài khảo sát và lịch sử rút tiền để bạn trải nghiệm lại từ đầu.
            </p>
            <div className="flex justify-end gap-2.5">
              <button
                onClick={() => setShowConfirmReset(false)}
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 text-sm font-medium transition cursor-pointer"
              >
                Hủy
              </button>
              <button
                onClick={() => {
                  resetAllData();
                  setShowConfirmReset(false);
                }}
                className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white text-sm font-bold shadow-sm transition cursor-pointer"
              >
                Đồng ý xóa
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
