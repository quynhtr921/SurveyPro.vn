import React from 'react';
import { useSurvey } from '../context/SurveyContext';
import { formatVND } from '../utils/format';
import { 
  CheckCircle2, 
  TrendingUp, 
  Wallet, 
  Banknote, 
  Award,
  Clock,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

interface StatsBannerProps {
  onOpenWithdraw: () => void;
  onStartFirstUncompleted: () => void;
}

export const StatsBanner: React.FC<StatsBannerProps> = ({ onOpenWithdraw, onStartFirstUncompleted }) => {
  const { balance, totalWithdrawn, completedSurveys } = useSurvey();
  const completedCount = Object.keys(completedSurveys).length;
  const progressPercent = Math.round((completedCount / 30) * 100);
  const totalEarnedAllTime = balance + totalWithdrawn;

  return (
    <div className="mb-8">
      {/* Hero Highlight Card */}
      <div className="relative overflow-hidden rounded-2xl bg-white border border-slate-200 p-6 sm:p-7 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Left Column: Progress & Welcome */}
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-snug">
              Xin chào người dùng <span className="text-indigo-600">Vuthithuy81</span>
            </h2>

            <p className="text-slate-500 text-sm leading-relaxed max-w-xl">
              Chào mừng bạn đến với nền tảng khảo sát ý kiến trực tuyến. Tham gia trả lời các câu hỏi nhanh để tích lũy phần thưởng và rút tiền về tài khoản ngân hàng một cách dễ dàng, tiện lợi.
            </p>

            {/* Overall Progress Bar */}
            <div className="pt-1">
              <div className="flex justify-between items-center text-xs font-medium mb-1.5 text-slate-500">
                <span className="flex items-center gap-1.5 font-medium text-slate-700">
                  <Award className="w-4 h-4 text-indigo-600" />
                  Tiến độ: <strong className="text-slate-900">{completedCount}/30 bài</strong>
                </span>
                <span className="text-indigo-600 font-bold">{progressPercent}%</span>
              </div>
              <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200/80 p-0.5">
                <div 
                  className="h-full rounded-full bg-indigo-600 transition-all duration-500 ease-out"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap gap-3">
              <button
                id="banner-btn-start"
                onClick={onStartFirstUncompleted}
                className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-bold text-sm shadow-sm hover:bg-indigo-700 transition active:scale-95 flex items-center gap-2 cursor-pointer"
              >
                <span>Làm khảo sát ngay</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="banner-btn-withdraw"
                onClick={onOpenWithdraw}
                className="px-5 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm border border-slate-200 shadow-sm transition active:scale-95 flex items-center gap-2 cursor-pointer"
              >
                <Banknote className="w-4 h-4 text-emerald-600" />
                <span>Rút tiền về ngân hàng</span>
              </button>
            </div>
          </div>

          {/* Right Column: 4 Minimalist Stat Cards */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3">
            {/* Stat 1: Số dư ví */}
            <div className="bg-emerald-50/60 border border-emerald-100 rounded-xl p-4 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-emerald-800 font-medium">Số dư khả dụng</span>
                <div className="w-7 h-7 rounded-lg bg-emerald-100/80 text-emerald-700 flex items-center justify-center">
                  <Wallet className="w-3.5 h-3.5" />
                </div>
              </div>
              <div className="text-lg sm:text-xl font-bold text-emerald-600 truncate">
                {formatVND(balance)}
              </div>
              <span className="text-[10px] text-emerald-700 mt-1 font-medium">Sẵn sàng rút ngay</span>
            </div>

            {/* Stat 2: Đã rút */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-slate-500 font-medium">Đã rút về TK</span>
                <div className="w-7 h-7 rounded-lg bg-slate-200/70 text-slate-700 flex items-center justify-center">
                  <TrendingUp className="w-3.5 h-3.5" />
                </div>
              </div>
              <div className="text-lg sm:text-xl font-bold text-slate-800 truncate">
                {formatVND(totalWithdrawn)}
              </div>
              <span className="text-[10px] text-slate-400 mt-1">100% thành công</span>
            </div>

            {/* Stat 3: Tổng tích lũy */}
            <div className="bg-indigo-50/50 border border-indigo-100 rounded-xl p-4 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-indigo-700 font-medium">Tổng kiếm được</span>
                <div className="w-7 h-7 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center">
                  <Award className="w-3.5 h-3.5" />
                </div>
              </div>
              <div className="text-lg sm:text-xl font-bold text-indigo-700 truncate">
                {formatVND(totalEarnedAllTime)}
              </div>
              <span className="text-[10px] text-indigo-500 mt-1 font-medium">Từ 30 bài khảo sát</span>
            </div>

            {/* Stat 4: Bài đã làm */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-slate-500 font-medium">Đã hoàn thành</span>
                <div className="w-7 h-7 rounded-lg bg-slate-200/70 text-slate-700 flex items-center justify-center">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
              </div>
              <div className="text-lg sm:text-xl font-bold text-slate-800">
                {completedCount} <span className="text-xs font-normal text-slate-400">/ 30 bài</span>
              </div>
              <span className="text-[10px] text-slate-400 mt-1">Còn {30 - completedCount} bài</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
