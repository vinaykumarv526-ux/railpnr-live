'use client';

import React, { useState, useEffect } from 'react';
import { Search, Loader2, Clipboard, History, X } from 'lucide-react';
import { SAMPLE_PNRS } from '@/lib/constants';

interface PnrFormProps {
  onSearch: (pnr: string) => Promise<void>;
  isLoading: boolean;
  currentPnr?: string;
}

export function PnrForm({ onSearch, isLoading, currentPnr = '' }: PnrFormProps) {
  const [pnrInput, setPnrInput] = useState(currentPnr);
  const [inputError, setInputError] = useState('');
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  // Load recent searches from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('railpnr_recent');
      if (saved) {
        setRecentSearches(JSON.parse(saved).slice(0, 5));
      }
    } catch {
      // Ignore storage errors
    }
  }, []);

  const saveRecent = (pnr: string) => {
    try {
      const updated = [pnr, ...recentSearches.filter((item) => item !== pnr)].slice(0, 5);
      setRecentSearches(updated);
      localStorage.setItem('railpnr_recent', JSON.stringify(updated));
    } catch {
      // Ignore storage errors
    }
  };

  const removeRecent = (e: React.MouseEvent, pnrToRemove: string) => {
    e.stopPropagation();
    const updated = recentSearches.filter((item) => item !== pnrToRemove);
    setRecentSearches(updated);
    try {
      localStorage.setItem('railpnr_recent', JSON.stringify(updated));
    } catch {
      // Ignore
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow numeric input, maximum 10 digits
    const val = e.target.value.replace(/\D/g, '').slice(0, 10);
    setPnrInput(val);
    if (inputError) setInputError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const clean = pnrInput.trim();
    if (clean.length !== 10) {
      setInputError('Please enter a complete 10-digit PNR number.');
      return;
    }
    setInputError('');
    saveRecent(clean);
    await onSearch(clean);
  };

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      const cleaned = text.replace(/\D/g, '').slice(0, 10);
      if (cleaned) {
        setPnrInput(cleaned);
        if (cleaned.length === 10) {
          saveRecent(cleaned);
          await onSearch(cleaned);
        }
      }
    } catch {
      // Clipboard denied
    }
  };

  const selectPnr = (pnr: string) => {
    setPnrInput(pnr);
    setInputError('');
    saveRecent(pnr);
    onSearch(pnr);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Search Container */}
      <div className="bg-white rounded-2xl shadow-xl shadow-indigo-500/10 border border-slate-200/90 p-4 sm:p-6 transition-all">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <input
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={10}
                value={pnrInput}
                onChange={handleInputChange}
                placeholder="Enter 10-digit PNR number..."
                className={`w-full h-14 pl-4 pr-24 sm:pr-28 text-lg sm:text-xl font-mono tracking-wider text-slate-900 placeholder:text-slate-400 placeholder:font-sans placeholder:tracking-normal bg-slate-50 border ${
                  inputError ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-100'
                } rounded-xl outline-none transition-all font-semibold`}
                autoComplete="off"
              />

              {/* Paste button & Character count */}
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                {pnrInput.length > 0 && (
                  <span className={`text-xs font-mono font-medium ${pnrInput.length === 10 ? 'text-emerald-600 font-bold' : 'text-slate-400'}`}>
                    {pnrInput.length}/10
                  </span>
                )}
                {pnrInput.length === 0 && (
                  <button
                    type="button"
                    onClick={handlePaste}
                    className="flex items-center gap-1 text-xs font-semibold px-2.5 py-1 text-indigo-600 hover:text-indigo-700 bg-indigo-50 hover:bg-indigo-100/80 rounded-md transition-colors"
                    title="Paste from clipboard"
                  >
                    <Clipboard className="h-3.5 w-3.5" />
                    <span className="hidden xs:inline">Paste</span>
                  </button>
                )}
                {pnrInput.length > 0 && (
                  <button
                    type="button"
                    onClick={() => setPnrInput('')}
                    className="p-1 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-200/60"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading || pnrInput.length !== 10}
              className="h-14 px-8 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-base rounded-xl shadow-lg shadow-indigo-600/25 flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  <span>Checking...</span>
                </>
              ) : (
                <>
                  <Search className="h-5 w-5 stroke-[2.5]" />
                  <span>Check Status</span>
                </>
              )}
            </button>
          </div>

          {inputError && (
            <p className="text-sm text-rose-600 font-medium flex items-center gap-1.5">
              <span>⚠️</span> {inputError}
            </p>
          )}

          {/* Quick Sample PNR buttons */}
          <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center gap-2 text-xs text-slate-500">
            <span className="font-medium text-slate-600">Sample PNRs to test:</span>
            {SAMPLE_PNRS.map((sample) => (
              <button
                key={sample.pnr}
                type="button"
                onClick={() => selectPnr(sample.pnr)}
                className="px-2.5 py-1 rounded-full bg-slate-100 hover:bg-indigo-50 hover:text-indigo-700 border border-slate-200 transition-colors font-medium flex items-center gap-1.5"
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    sample.type === 'CNF' ? 'bg-emerald-500' : sample.type === 'RAC' ? 'bg-amber-500' : 'bg-rose-500'
                  }`}
                />
                <span>{sample.label}</span>
              </button>
            ))}
          </div>
        </form>

        {/* Recent Searches */}
        {recentSearches.length > 0 && (
          <div className="mt-3 pt-3 border-t border-slate-100 flex flex-wrap items-center gap-2 text-xs">
            <span className="text-slate-400 flex items-center gap-1">
              <History className="h-3 w-3" /> Recent:
            </span>
            {recentSearches.map((pnr) => (
              <div
                key={pnr}
                onClick={() => selectPnr(pnr)}
                className="group cursor-pointer inline-flex items-center gap-1.5 px-2.5 py-1 bg-slate-50 hover:bg-slate-100 text-slate-700 rounded-md border border-slate-200 transition-colors font-mono"
              >
                <span>{pnr}</span>
                <button
                  type="button"
                  onClick={(e) => removeRecent(e, pnr)}
                  className="text-slate-400 hover:text-rose-500 rounded p-0.5"
                  title="Remove"
                >
                  <X className="h-3 w-3" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
