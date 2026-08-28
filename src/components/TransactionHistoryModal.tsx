import React, { useState } from 'react';
import { useSurvey } from '../context/SurveyContext';
import { WithdrawalTransaction } from '../types';
import { formatVND } from '../utils/format';
import { 
  X, 
  History, 
  CheckCircle2, 
  Clock, 
  ArrowDownToLine, 
  Building2, 
  Copy, 
  Check, 
  Receipt,
  Sparkles
} from 'lucide-react';

interface TransactionHistoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenWithdraw: () => void;
}

export const TransactionHistoryModal: React.FC<TransactionHistoryModalProps> = ({ 
  isOpen, 
  onClose, 
  onOpenWithdraw 
}) => {
  const { transactions, totalWithdrawn } = useSurvey();
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [selectedTx, setSelectedTx] = useState<WithdrawalTransaction | null>(null);

  if (!isOpen) return null;

  const handleCopy = (ref: string) => {
    navigator.clipboard.writeText(ref);
    setCopiedId(ref);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-3 sm:p-6 overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden text-slate-800 my-auto animate-in fade-in zoom-in-95 duration-150">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between bg-white">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
              <History className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                Lịch Sử Rút Tiền
              </h3>
              <p className="text-xs text-slate-500">
                Tổng đã rút thành công:{' '}
                <strong className="text-emerald-600 font-bold">{formatVND(totalWithdrawn)}</strong>
              </p>
            </div>
          </div>

          <button
            id="btn-close-history-modal"
            onClick={onClose}
            className="w-8 h-8 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-600 flex items-center justify-center transition cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6">
          {transactions.length > 0 ? (
            <div className="space-y-2.5 max-h-96 overflow-y-auto pr-1">
              {transactions.map((tx) => (
                <div
                  key={tx.id}
                  className="bg-slate-50 border border-slate-200 hover:border-slate-300 rounded-xl p-3.5 transition shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2.5"
                >
                  {/* Left info */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm text-slate-900">{tx.bankName}</span>
                      <span className="text-xs px-2 py-0.5 rounded-md bg-white text-slate-600 font-mono border border-slate-200">
                        {tx.bankCode}
                      </span>
                      <span className="flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Thành công
                      </span>
                    </div>

                    <div className="text-xs text-slate-500 flex flex-wrap items-center gap-x-2.5 gap-y-0.5">
                      <span>STK: <strong className="text-slate-800 font-mono">{tx.accountNumber}</strong></span>
                      <span>•</span>
                      <span>Chủ TK: <strong className="text-slate-800">{tx.accountHolder}</strong></span>
                    </div>

                    <div className="text-[11px] text-slate-400 flex items-center gap-2 pt-0.5">
                      <Clock className="w-3 h-3" />
                      <span>{new Date(tx.completedAt || tx.createdAt).toLocaleTimeString('vi-VN')} ngày {new Date(tx.completedAt || tx.createdAt).toLocaleDateString('vi-VN')}</span>
                      <span>•</span>
                      <span className="font-mono text-slate-500">Mã: {tx.transactionRef}</span>
                      <button
                        onClick={() => handleCopy(tx.transactionRef)}
                        className="text-slate-400 hover:text-indigo-600 transition cursor-pointer"
                        title="Sao chép mã"
                      >
                        {copiedId === tx.transactionRef ? (
                          <Check className="w-3 h-3 text-emerald-600" />
                        ) : (
                          <Copy className="w-3 h-3" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Right: Amount */}
                  <div className="text-right sm:self-center shrink-0">
                    <div className="text-base sm:text-lg font-black text-emerald-600">
                      +{formatVND(tx.amount)}
                    </div>
                    <span className="text-[10px] text-slate-400">Đã nhận tiền 100%</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-10 space-y-3 bg-slate-50 rounded-xl border border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
                <Receipt className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-slate-800">Chưa có giao dịch rút tiền nào</h4>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Hãy làm các bài khảo sát để nhận thưởng tiền mặt và thực hiện lệnh rút tiền đầu tiên nhé!
              </p>
              <div className="pt-1">
                <button
                  onClick={() => {
                    onClose();
                    onOpenWithdraw();
                  }}
                  className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-xs active:scale-95 transition cursor-pointer"
                >
                  Rút tiền ngay
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-3.5 sm:p-4 border-t border-slate-100 bg-white flex justify-between items-center text-xs text-slate-500">
          <span>Hệ thống chuyển khoản liên ngân hàng 24/7 NAPAS</span>
          <button
            onClick={onClose}
            className="px-3.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium transition cursor-pointer"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};
