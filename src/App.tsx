/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { SurveyProvider, useSurvey } from './context/SurveyContext';
import { Header } from './components/Header';
import { StatsBanner } from './components/StatsBanner';
import { SurveyList } from './components/SurveyList';
import { SurveyRunnerModal } from './components/SurveyRunnerModal';
import { WithdrawModal } from './components/WithdrawModal';
import { TransactionHistoryModal } from './components/TransactionHistoryModal';
import { SURVEYS_LIST } from './data/surveys';
import { Survey } from './types';
import { 
  ShieldCheck, 
  Sparkles, 
  Coins, 
  CreditCard, 
  Lock, 
  CheckCircle2 
} from 'lucide-react';

function MainAppContent() {
  const { startSurvey, completedSurveys, balance } = useSurvey();
  const [isWithdrawModalOpen, setIsWithdrawModalOpen] = useState(false);
  const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false);

  const handleSelectSurvey = (survey: Survey) => {
    startSurvey(survey);
  };

  const handleStartFirstUncompleted = () => {
    const uncompleted = SURVEYS_LIST.find((s) => !completedSurveys[s.id]);
    if (uncompleted) {
      startSurvey(uncompleted);
    } else {
      startSurvey(SURVEYS_LIST[0]);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col selection:bg-indigo-500 selection:text-white font-sans">
      {/* Top Sticky Header */}
      <Header
        onOpenWithdraw={() => setIsWithdrawModalOpen(true)}
        onOpenHistory={() => setIsHistoryModalOpen(true)}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Real-time Dashboard Stats & Hero */}
        <StatsBanner
          onOpenWithdraw={() => setIsWithdrawModalOpen(true)}
          onStartFirstUncompleted={handleStartFirstUncompleted}
        />

        {/* 30 Surveys Explorer & Runner */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-800 tracking-tight flex items-center gap-2.5">
                Danh Sách Khảo Sát
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Chọn bất kỳ bài khảo sát nào để trả lời 5 câu hỏi và nhận thưởng tiền mặt ngay lập tức.
              </p>
            </div>
          </div>

          <SurveyList onSelectSurvey={handleSelectSurvey} />
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 bg-white border-t border-slate-200 text-slate-500 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-xs">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-slate-800 font-bold text-sm">
                <div className="w-6 h-6 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
                  <Coins className="w-3.5 h-3.5" />
                </div>
                SurveyPro.vn • Khảo Sát Kiếm Tiền
              </div>
              <p className="text-slate-500 leading-relaxed">
                Nền tảng khảo sát trực tuyến uy tín, thu thập phản hồi khách hàng và tích lũy phần thưởng sau mỗi câu trả lời.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-slate-800 font-bold text-sm">
                <div className="w-6 h-6 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
                  <CreditCard className="w-3.5 h-3.5" />
                </div>
                Rút Tiền Ngân Hàng 24/7
              </div>
              <p className="text-slate-500 leading-relaxed">
                Hỗ trợ rút tiền về tất cả các ngân hàng Việt Nam (VCB, TCB, MB, BIDV, VPBank, ACB, TPBank...) & ví MoMo, ZaloPay.Xử lý giao dịch nhanh chóng , tự động.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-slate-800 font-bold text-sm">
                <div className="w-6 h-6 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                Cam Kết & Bảo Mật
              </div>
              <p className="text-slate-500 leading-relaxed">
                Bảo mật thông tin tài khoản người dùng tuyệt đối. Hệ thống chuyển khoản tự động qua cổng NAPAS 24/7.
              </p>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">
            <span>© 2026 SurveyPro.vn.</span>
            <div className="flex items-center gap-4 font-medium">
              <button
                onClick={() => setIsWithdrawModalOpen(true)}
                className="text-slate-600 hover:text-indigo-600 transition cursor-pointer"
              >
                Rút tiền
              </button>
              <button
                onClick={() => setIsHistoryModalOpen(true)}
                className="text-slate-600 hover:text-indigo-600 transition cursor-pointer"
              >
                Lịch sử
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Active Survey Taking Modal */}
      <SurveyRunnerModal onOpenWithdraw={() => setIsWithdrawModalOpen(true)} />

      {/* Withdrawal Modal (with 10-second processing flow) */}
      <WithdrawModal
        isOpen={isWithdrawModalOpen}
        onClose={() => setIsWithdrawModalOpen(false)}
        onViewHistory={() => setIsHistoryModalOpen(true)}
      />

      {/* Transaction History Modal */}
      <TransactionHistoryModal
        isOpen={isHistoryModalOpen}
        onClose={() => setIsHistoryModalOpen(false)}
        onOpenWithdraw={() => setIsWithdrawModalOpen(true)}
      />
    </div>
  );
}

export default function App() {
  return (
    <SurveyProvider>
      <MainAppContent />
    </SurveyProvider>
  );
}
