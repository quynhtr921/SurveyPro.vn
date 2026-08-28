import React, { useState, useEffect } from 'react';
import { useSurvey } from '../context/SurveyContext';
import { VIETNAM_BANKS } from '../data/banks';
import { Bank } from '../types';
import { formatVND } from '../utils/format';
import { 
  X, 
  ArrowDownToLine, 
  CheckCircle2, 
  Loader2, 
  Building2, 
  CreditCard, 
  User, 
  Wallet, 
  Sparkles, 
  ShieldCheck, 
  Receipt,
  Copy,
  Check,
  Coins,
  AlertCircle
} from 'lucide-react';

interface WithdrawModalProps {
  isOpen: boolean;
  onClose: () => void;
  onViewHistory: () => void;
}

export const WithdrawModal: React.FC<WithdrawModalProps> = ({ isOpen, onClose, onViewHistory }) => {
  const { 
    balance, 
    isWithdrawing, 
    initialCountdown,
    withdrawalCountdown, 
    withdrawalSuccess, 
    currentWithdrawal,
    submitWithdrawal, 
    resetWithdrawalStatus 
  } = useSurvey();

  const [selectedBank, setSelectedBank] = useState<Bank>(VIETNAM_BANKS[0]);
  const [accountNumber, setAccountNumber] = useState('');
  const [accountHolder, setAccountHolder] = useState('');
  const [amount, setAmount] = useState<number>(0);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [copiedRef, setCopiedRef] = useState(false);

  // Set default amount when modal opens or balance updates
  useEffect(() => {
    if (balance > 0 && amount === 0) {
      setAmount(balance);
    }
  }, [balance, isOpen]);

  if (!isOpen) return null;

  const handleQuickAmount = (val: number) => {
    if (val > balance) {
      setAmount(balance);
    } else {
      setAmount(val);
    }
    setErrorMessage(null);
  };

  const handleAccountHolderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Force uppercase format without accents or standard upper
    const upper = e.target.value.toUpperCase();
    setAccountHolder(upper);
    setErrorMessage(null);
  };

  const handleAccountNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow numbers
    const clean = e.target.value.replace(/[^0-9]/g, '');
    setAccountNumber(clean);
    setErrorMessage(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (balance <= 0) {
      setErrorMessage('Số dư khả dụng hiện tại là 0đ. Hãy làm khảo sát để nhận thưởng trước nhé!');
      return;
    }

    if (!accountNumber.trim()) {
      setErrorMessage('Vui lòng nhập số tài khoản ngân hàng (STK)');
      return;
    }

    if (!accountHolder.trim()) {
      setErrorMessage('Vui lòng nhập tên chủ tài khoản ngân hàng');
      return;
    }

    if (amount <= 0) {
      setErrorMessage('Vui lòng nhập số tiền hợp lệ muốn rút');
      return;
    }

    if (amount > balance) {
      setErrorMessage(`Số tiền rút (${formatVND(amount)}) không được vượt quá số dư hiện có (${formatVND(balance)})`);
      return;
    }

    const success = submitWithdrawal(
      selectedBank.code,
      selectedBank.shortName,
      accountNumber.trim(),
      accountHolder.trim(),
      amount
    );

    if (!success) {
      setErrorMessage('Không thể thực hiện yêu cầu rút tiền. Vui lòng kiểm tra lại số dư.');
    }
  };

  const handleClose = () => {
    if (isWithdrawing) {
      // Don't close while 10s countdown is in progress
      return;
    }
    resetWithdrawalStatus();
    onClose();
  };

  const handleCopyRef = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedRef(true);
    setTimeout(() => setCopiedRef(false), 2000);
  };

  // Determine current step in the processing window
  const getProcessingStep = (countdown: number, totalDuration: number) => {
    const total = totalDuration || 10;
    const elapsed = total - countdown;
    const ratio = elapsed / total;

    if (ratio < 0.28) {
      return {
        step: 1,
        title: 'Đang kết nối hệ thống liên ngân hàng NAPAS 24/7...',
        detail: `Khởi tạo giao dịch chuyển tiền đến ${selectedBank.shortName}`,
      };
    } else if (ratio < 0.62) {
      return {
        step: 2,
        title: 'Đang xác thực thông tin chủ tài khoản & STK...',
        detail: `Kiểm tra số tài khoản ${accountNumber} - ${accountHolder}`,
      };
    } else if (ratio < 0.88) {
      return {
        step: 3,
        title: 'Đang thực hiện lệnh chuyển khoản tự động...',
        detail: `Chuyển số tiền ${formatVND(currentWithdrawal?.amount || amount)} vào tài khoản`,
      };
    } else {
      return {
        step: 4,
        title: 'Đang xác nhận kết quả từ ngân hàng thụ hưởng...',
        detail: 'Chuẩn bị hoàn tất giao dịch trong giây lát',
      };
    }
  };

  const currentStepInfo = getProcessingStep(withdrawalCountdown, initialCountdown);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-3 sm:p-6 overflow-y-auto">
      <div className="relative w-full max-w-xl bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden text-slate-800 my-auto animate-in fade-in zoom-in-95 duration-150">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between bg-white">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
              <ArrowDownToLine className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                Rút Tiền Về Ngân Hàng
              </h3>
              <p className="text-xs text-slate-500">
                Giao dịch được xử lý bởi bot online 24/7
              </p>
            </div>
          </div>

          {!isWithdrawing && (
            <button
              id="btn-close-withdraw-modal"
              onClick={handleClose}
              className="w-8 h-8 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-600 flex items-center justify-center transition cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Modal Body: 3 States: FORM | 10s PROCESSING | SUCCESS */}
        <div className="p-5 sm:p-6">
          {/* ======================================================== */}
          {/* STATE 2: 10s PROCESSING COUNTDOWN */}
          {/* ======================================================== */}
          {isWithdrawing && (
            <div className="text-center py-4 space-y-5">
              {/* Circular countdown gauge */}
              <div className="relative w-32 h-32 mx-auto flex items-center justify-center">
                {/* SVG Progress Circle */}
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
                  <circle
                    cx="60"
                    cy="60"
                    r="52"
                    stroke="currentColor"
                    strokeWidth="8"
                    className="text-slate-100"
                    fill="transparent"
                  />
                  <circle
                    cx="60"
                    cy="60"
                    r="52"
                    stroke="currentColor"
                    strokeWidth="8"
                    className="text-indigo-600 transition-all duration-1000 ease-linear"
                    fill="transparent"
                    strokeDasharray={2 * Math.PI * 52}
                    strokeDashoffset={2 * Math.PI * 52 * (1 - ((initialCountdown || 10) - withdrawalCountdown) / (initialCountdown || 10))}
                    strokeLinecap="round"
                  />
                </svg>

                {/* Center Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-black text-slate-900 tracking-tight">
                    {withdrawalCountdown}s
                  </span>
                  <span className="text-[10px] text-indigo-600 font-bold uppercase tracking-wider">
                    Đang xử lý
                  </span>
                </div>
              </div>

              {/* Status Text */}
              <div className="space-y-1 max-w-md mx-auto">
                <h4 className="text-base font-bold text-slate-900 flex items-center justify-center gap-2">
                  <Loader2 className="w-4 h-4 text-indigo-600 animate-spin" />
                  {currentStepInfo.title}
                </h4>
                <p className="text-xs text-slate-500">
                  {currentStepInfo.detail}
                </p>
              </div>

              {/* Progress Steps Timeline */}
              <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200 text-left space-y-2 max-w-md mx-auto">
                <div className="flex items-center gap-2.5 text-xs">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] ${
                    currentStepInfo.step >= 1 ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-500'
                  }`}>
                    {currentStepInfo.step > 1 ? '✓' : '1'}
                  </div>
                  <span className={currentStepInfo.step >= 1 ? 'text-slate-800 font-medium' : 'text-slate-400'}>
                    Kết nối cổng Napas 24/7
                  </span>
                </div>

                <div className="flex items-center gap-2.5 text-xs">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] ${
                    currentStepInfo.step >= 2 ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-500'
                  }`}>
                    {currentStepInfo.step > 2 ? '✓' : '2'}
                  </div>
                  <span className={currentStepInfo.step >= 2 ? 'text-slate-800 font-medium' : 'text-slate-400'}>
                    Xác thực STK & Chủ tài khoản ({accountHolder || 'Tài khoản'})
                  </span>
                </div>

                <div className="flex items-center gap-2.5 text-xs">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] ${
                    currentStepInfo.step >= 3 ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-500'
                  }`}>
                    {currentStepInfo.step > 3 ? '✓' : '3'}
                  </div>
                  <span className={currentStepInfo.step >= 3 ? 'text-slate-800 font-medium' : 'text-slate-400'}>
                    Chuyển khoản {formatVND(currentWithdrawal?.amount || amount)}
                  </span>
                </div>
              </div>

              <p className="text-[11px] text-slate-400">
                Vui lòng không đóng cửa sổ trong khi hệ thống đang xử lý lệnh chuyển tiền.
              </p>
            </div>
          )}

          {/* ======================================================== */}
          {/* STATE 3: WITHDRAWAL SUCCESS RECEIPT */}
          {/* ======================================================== */}
          {!isWithdrawing && withdrawalSuccess && currentWithdrawal && (
            <div className="text-center py-2 space-y-5">
              {/* Success Badge */}
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                <Check className="w-7 h-7 stroke-[3]" />
              </div>

              <div>
                <h4 className="text-xl font-bold text-slate-900">
                  Rút Tiền Thành Công!
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  Số tiền đã được chuyển thành công vào tài khoản ngân hàng của bạn.
                </p>
              </div>

              {/* Receipt Card */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-left space-y-2.5 shadow-sm">
                <div className="flex items-center justify-between pb-2.5 border-b border-slate-200">
                  <span className="text-xs text-slate-500">Số tiền đã chuyển</span>
                  <span className="text-xl font-black text-emerald-600">
                    +{formatVND(currentWithdrawal.amount)}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs py-1">
                  <span className="text-slate-500">Mã giao dịch:</span>
                  <div className="text-right flex items-center justify-end gap-1.5 font-mono text-slate-800 font-medium">
                    <span>{currentWithdrawal.transactionRef}</span>
                    <button
                      onClick={() => handleCopyRef(currentWithdrawal.transactionRef)}
                      className="text-slate-400 hover:text-indigo-600 p-0.5 cursor-pointer"
                      title="Sao chép mã"
                    >
                      {copiedRef ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs py-1 border-t border-slate-200/60">
                  <span className="text-slate-500">Ngân hàng thụ hưởng:</span>
                  <span className="text-right font-bold text-slate-800">{currentWithdrawal.bankName} ({currentWithdrawal.bankCode})</span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs py-1 border-t border-slate-200/60">
                  <span className="text-slate-500">Số tài khoản:</span>
                  <span className="text-right font-mono font-bold text-slate-800">{currentWithdrawal.accountNumber}</span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs py-1 border-t border-slate-200/60">
                  <span className="text-slate-500">Chủ tài khoản:</span>
                  <span className="text-right font-bold text-slate-800">{currentWithdrawal.accountHolder}</span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs py-1 border-t border-slate-200/60">
                  <span className="text-slate-500">Thời gian:</span>
                  <span className="text-right text-slate-600">
                    {new Date(currentWithdrawal.completedAt || Date.now()).toLocaleTimeString('vi-VN')} {new Date(currentWithdrawal.completedAt || Date.now()).toLocaleDateString('vi-VN')}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs py-1 border-t border-slate-200/60">
                  <span className="text-slate-500">Trạng thái:</span>
                  <span className="text-right font-bold text-emerald-600 flex items-center justify-end gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Thành công (100%)
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-2.5 justify-center pt-1">
                <button
                  id="btn-continue-earning"
                  onClick={handleClose}
                  className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm shadow-sm active:scale-95 transition cursor-pointer"
                >
                  Làm thêm khảo sát kiếm tiền
                </button>

                <button
                  id="btn-view-history-from-success"
                  onClick={() => {
                    handleClose();
                    onViewHistory();
                  }}
                  className="px-5 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-semibold text-xs sm:text-sm border border-slate-200 shadow-sm active:scale-95 transition flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Receipt className="w-4 h-4 text-slate-500" />
                  <span>Xem lịch sử rút tiền</span>
                </button>
              </div>
            </div>
          )}

          {/* ======================================================== */}
          {/* STATE 1: WITHDRAWAL FORM */}
          {/* ======================================================== */}
          {!isWithdrawing && !withdrawalSuccess && (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Available balance banner */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-500">Số dư khả dụng:</span>
                  <div className="text-lg sm:text-xl font-bold text-emerald-600 mt-0.5">
                    {formatVND(balance)}
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-600 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm">
                  <ShieldCheck className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Chuyển 24/7 (từ 1s - 60s)</span>
                </div>
              </div>

              {/* Error notification if any */}
              {errorMessage && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-3 flex items-start gap-2 text-red-600 text-xs">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* 1. Bank Select */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-indigo-600" />
                  1. Chọn ngân hàng hoặc ví điện tử:
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-1.5 max-h-36 overflow-y-auto p-1 bg-slate-50 rounded-xl border border-slate-200">
                  {VIETNAM_BANKS.map((b) => {
                    const isSelected = selectedBank.id === b.id;
                    return (
                      <button
                        type="button"
                        key={b.id}
                        onClick={() => setSelectedBank(b)}
                        className={`p-2 rounded-lg border text-left transition flex flex-col justify-between cursor-pointer ${
                          isSelected
                            ? 'bg-indigo-50 border-indigo-500 text-indigo-900 shadow-xs'
                            : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-xs">{b.code}</span>
                          {isSelected && <Check className="w-3 h-3 text-indigo-600 font-bold" />}
                        </div>
                        <span className="text-[10px] text-slate-400 truncate mt-0.5">{b.shortName}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. Account Number (STK) */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                  <CreditCard className="w-3.5 h-3.5 text-indigo-600" />
                  2. Số tài khoản ngân hàng (STK):
                </label>
                <input
                  id="input-account-number"
                  type="text"
                  required
                  placeholder="Nhập số tài khoản (ví dụ: 19036789...)"
                  value={accountNumber}
                  onChange={handleAccountNumberChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-mono text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                />
              </div>

              {/* 3. Account Holder Name */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-indigo-600" />
                  3. Tên chủ tài khoản (In hoa không dấu):
                </label>
                <input
                  id="input-account-holder"
                  type="text"
                  required
                  placeholder="NGUYEN VAN A"
                  value={accountHolder}
                  onChange={handleAccountHolderChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-bold uppercase text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                />
              </div>

              {/* 4. Withdrawal Amount */}
              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                    <Coins className="w-3.5 h-3.5 text-indigo-600" />
                    4. Số tiền muốn rút (VNĐ):
                  </label>
                  <button
                    type="button"
                    onClick={() => handleQuickAmount(balance)}
                    className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 underline cursor-pointer"
                  >
                    Rút toàn bộ
                  </button>
                </div>

                <input
                  id="input-withdraw-amount"
                  type="number"
                  required
                  min={1000}
                  max={balance > 0 ? balance : 1000}
                  placeholder="Nhập số tiền..."
                  value={amount || ''}
                  onChange={(e) => {
                    setAmount(Number(e.target.value));
                    setErrorMessage(null);
                  }}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm sm:text-base font-bold text-emerald-600 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                />

                {/* Quick amount chips */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {[10000, 20000, 50000, 100000].map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => handleQuickAmount(preset)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-medium border transition cursor-pointer ${
                        amount === preset
                          ? 'bg-indigo-50 border-indigo-400 text-indigo-700 font-bold'
                          : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {formatVND(preset)}
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => handleQuickAmount(balance)}
                    className="px-2.5 py-1 rounded-lg text-xs font-bold bg-indigo-50 border border-indigo-200 text-indigo-700 hover:bg-indigo-100 transition cursor-pointer"
                  >
                    Tất cả ({formatVND(balance)})
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  id="btn-submit-withdraw"
                  disabled={balance <= 0}
                  className={`w-full py-3 rounded-xl font-bold text-sm shadow-sm transition flex items-center justify-center gap-2 cursor-pointer ${
                    balance > 0
                      ? 'bg-indigo-600 hover:bg-indigo-700 text-white active:scale-95'
                      : 'bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200'
                  }`}
                >
                  <ArrowDownToLine className="w-4 h-4" />
                  <span>Xác nhận rút tiền (Xử lý từ 1s - 60s)</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-slate-400 text-[11px]">
                <ShieldCheck className="w-3.5 h-3.5 text-indigo-500" />
                <span>Bảo mật giao dịch mã hóa • Tiền về tài khoản từ 1s - 60s</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
