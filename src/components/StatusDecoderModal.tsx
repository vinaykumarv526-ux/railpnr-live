'use client';

import React from 'react';
import { X, ShieldCheck, HelpCircle } from 'lucide-react';
import { PNR_STATUS_CODES } from '@/lib/constants';

interface StatusDecoderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function StatusDecoderModal({ isOpen, onClose }: StatusDecoderModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-indigo-100 text-indigo-700">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">PNR Status Codes Decoder</h3>
              <p className="text-xs text-slate-500">Official Indian Railways abbreviations & confirmation hierarchy</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-200/60 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content list */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-4">
          {PNR_STATUS_CODES.map((item) => (
            <div
              key={item.code}
              className="p-4 rounded-2xl border border-slate-200/90 hover:border-indigo-200 bg-white hover:bg-slate-50/50 transition-colors"
            >
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <div className="flex items-center gap-2">
                  <span className="font-mono font-black text-sm px-2.5 py-0.5 rounded-lg bg-indigo-50 text-indigo-700 border border-indigo-200">
                    {item.code}
                  </span>
                  <span className="font-bold text-slate-900 text-sm">{item.name}</span>
                </div>
                <span
                  className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                    item.confirmationChance === 'Guaranteed'
                      ? 'bg-emerald-100 text-emerald-800'
                      : item.confirmationChance === 'High'
                      ? 'bg-teal-100 text-teal-800'
                      : item.confirmationChance === 'Medium'
                      ? 'bg-amber-100 text-amber-800'
                      : 'bg-rose-100 text-rose-800'
                  }`}
                >
                  {item.confirmationChance} Chance
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
            </div>
          ))}

          <div className="p-4 rounded-2xl bg-indigo-50 border border-indigo-100 text-xs text-indigo-900 flex items-start gap-2.5">
            <HelpCircle className="h-5 w-5 text-indigo-600 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Tip for Travelers:</strong> GNWL has significantly higher chances of confirmation than PQWL or RLWL because the railway reserves the highest cancellation churn quota for train origin stations.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition-colors"
          >
            Close Decoder
          </button>
        </div>
      </div>
    </div>
  );
}
