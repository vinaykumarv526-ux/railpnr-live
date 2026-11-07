'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { SEO_FAQS } from '@/lib/constants';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="w-full max-w-4xl mx-auto my-12 px-4 sm:px-6">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-2">
          <HelpCircle className="h-3.5 w-3.5" />
          <span>Frequently Asked Questions</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Everything You Need to Know About Indian Railway PNR
        </h2>
        <p className="text-sm text-slate-500 mt-2 max-w-2xl mx-auto">
          Clear, verified answers to common questions on charting, RAC allotment, Tatkal waitlist, and IRCTC confirmation.
        </p>
      </div>

      <div className="space-y-3">
        {SEO_FAQS.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="border border-slate-200 rounded-2xl bg-white overflow-hidden transition-all shadow-sm"
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-indigo-600 transition-colors text-sm sm:text-base"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-indigo-600' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 bg-slate-50/50">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
