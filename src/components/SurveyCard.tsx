import React from 'react';
import { Survey } from '../types';
import { useSurvey } from '../context/SurveyContext';
import { SurveyIcon } from './SurveyIcon';
import { formatVND } from '../utils/format';
import { 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  Clock, 
  Coins, 
  RotateCcw,
  Check
} from 'lucide-react';

interface SurveyCardProps {
  survey: Survey;
  onSelect: (survey: Survey) => void;
}

export const SurveyCard: React.FC<SurveyCardProps> = ({ survey, onSelect }) => {
  const { completedSurveys } = useSurvey();
  const completedRecord = completedSurveys[survey.id];
  const isCompleted = !!completedRecord;

  return (
    <div
      id={`survey-card-${survey.id}`}
      className={`group relative flex flex-col justify-between rounded-xl border p-4 sm:p-5 transition-all duration-200 shadow-sm ${
        isCompleted
          ? 'bg-slate-50/60 border-slate-200 hover:border-slate-300'
          : 'bg-white border-slate-200 hover:border-indigo-400 hover:shadow-md'
      }`}
    >
      {/* Top Header Row */}
      <div>
        <div className="flex items-center justify-between mb-3">
          {/* Survey Index & Category Badge */}
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 text-[10px] font-bold uppercase rounded tracking-wider border border-indigo-100/60">
              {survey.category}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            {isCompleted ? (
              <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 text-[10px] font-bold uppercase rounded border border-emerald-100 flex items-center gap-1">
                <Check className="w-2.5 h-2.5 stroke-[3]" /> Xong
              </span>
            ) : (
              <span className="text-xs text-slate-400 font-medium font-mono">
                #{survey.id.toString().padStart(2, '0')}
              </span>
            )}
          </div>
        </div>

        {/* Main Content Info */}
        <div className="flex items-start gap-3 mb-2">
          <div
            className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 border transition-all ${
              isCompleted
                ? 'bg-emerald-50 border-emerald-100 text-emerald-600'
                : 'bg-slate-50 border-slate-200 text-indigo-600 group-hover:bg-indigo-50'
            }`}
          >
            <SurveyIcon name={survey.iconName} className="w-5 h-5" />
          </div>

          <div className="flex-1 min-w-0">
            <h3 className={`font-bold text-sm sm:text-base leading-snug truncate group-hover:text-indigo-600 transition-colors ${
              isCompleted ? 'text-slate-600' : 'text-slate-900'
            }`}>
              {survey.title}
            </h3>
            <p className="text-xs text-slate-500 line-clamp-2 mt-1 leading-relaxed">
              {survey.description}
            </p>
          </div>
        </div>
      </div>

      {/* Footer / Bottom Row */}
      <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <span>5 câu hỏi</span>
        </div>

        {isCompleted ? (
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-emerald-600">
              +{formatVND(completedRecord.earnedAmount)}
            </span>
            <button
              id={`btn-retake-${survey.id}`}
              onClick={() => onSelect(survey)}
              className="text-xs px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition flex items-center gap-1 cursor-pointer font-medium"
            >
              <RotateCcw className="w-3 h-3" />
              Làm lại
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <button
              id={`btn-start-${survey.id}`}
              onClick={() => onSelect(survey)}
              className="px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs shadow-sm active:scale-95 transition flex items-center gap-1.5 cursor-pointer"
            >
              <span>Bắt đầu</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
