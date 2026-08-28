import React, { useMemo, useState } from 'react';
import { SURVEYS_LIST } from '../data/surveys';
import { Survey } from '../types';
import { useSurvey } from '../context/SurveyContext';
import { SurveyCard } from './SurveyCard';
import { Search, Filter, Layers, CheckCircle2, Sparkles, X } from 'lucide-react';

interface SurveyListProps {
  onSelectSurvey: (survey: Survey) => void;
}

export const SurveyList: React.FC<SurveyListProps> = ({ onSelectSurvey }) => {
  const { completedSurveys } = useSurvey();
  const [filterTab, setFilterTab] = useState<'all' | 'uncompleted' | 'completed'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const completedCount = Object.keys(completedSurveys).length;
  const uncompletedCount = 30 - completedCount;

  // Extract unique categories
  const categories = useMemo(() => {
    const set = new Set<string>();
    SURVEYS_LIST.forEach((s) => set.add(s.category));
    return Array.from(set);
  }, []);

  const filteredSurveys = useMemo(() => {
    return SURVEYS_LIST.filter((survey) => {
      const isCompleted = !!completedSurveys[survey.id];

      // Tab filter
      if (filterTab === 'uncompleted' && isCompleted) return false;
      if (filterTab === 'completed' && !isCompleted) return false;

      // Category filter
      if (selectedCategory !== 'all' && survey.category !== selectedCategory) return false;

      // Search filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = survey.title.toLowerCase().includes(q);
        const matchesDesc = survey.description.toLowerCase().includes(q);
        const matchesCat = survey.category.toLowerCase().includes(q);
        if (!matchesTitle && !matchesDesc && !matchesCat) return false;
      }

      return true;
    });
  }, [filterTab, selectedCategory, searchQuery, completedSurveys]);

  return (
    <section className="space-y-5">
      {/* Search & Filter Header Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 bg-white border border-slate-200 p-3 sm:p-4 rounded-2xl shadow-sm">
        {/* Status Filter Tabs */}
        <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-xl border border-slate-200/60 self-start">
          <button
            id="tab-all-surveys"
            onClick={() => setFilterTab('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
              filterTab === 'all'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Tất cả (30)</span>
          </button>

          <button
            id="tab-uncompleted-surveys"
            onClick={() => setFilterTab('uncompleted')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
              filterTab === 'uncompleted'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Chưa làm ({uncompletedCount})</span>
          </button>

          <button
            id="tab-completed-surveys"
            onClick={() => setFilterTab('completed')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
              filterTab === 'completed'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Đã làm ({completedCount})</span>
          </button>
        </div>

        {/* Search Box */}
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            id="input-search-survey"
            type="text"
            placeholder="Tìm kiếm chủ đề khảo sát..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-8 py-2 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Category Pills (Horizontal scrollable) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
            selectedCategory === 'all'
              ? 'bg-indigo-600 text-white shadow-sm'
              : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200 shadow-sm'
          }`}
        >
          Tất cả danh mục
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
              selectedCategory === cat
                ? 'bg-indigo-50 text-indigo-700 font-bold border border-indigo-200'
                : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200 shadow-sm'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid of 30 Survey Cards */}
      {filteredSurveys.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSurveys.map((survey) => (
            <SurveyCard key={survey.id} survey={survey} onSelect={onSelectSurvey} />
          ))}
        </div>
      ) : (
        <div className="py-16 text-center bg-white rounded-2xl border border-slate-200 shadow-sm">
          <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-3">
            <Search className="w-5 h-5" />
          </div>
          <h4 className="text-sm font-bold text-slate-800 mb-1">Không tìm thấy bài khảo sát nào</h4>
          <p className="text-xs text-slate-500 mb-4">
            Vui lòng thử từ khóa tìm kiếm khác hoặc chuyển danh mục.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
              setFilterTab('all');
            }}
            className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition cursor-pointer"
          >
            Xóa bộ lọc
          </button>
        </div>
      )}
    </section>
  );
};
