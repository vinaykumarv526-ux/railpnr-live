'use client';

import React from 'react';

interface AdPlaceholderProps {
  slotName?: string;
  size?: 'leaderboard' | 'rectangle' | 'banner';
}

export function AdPlaceholder({ slotName = 'Ad Placement', size = 'leaderboard' }: AdPlaceholderProps) {
  // Can be easily connected to Google AdSense / Media.net / Travel affiliate banners
  return (
    <div className="w-full max-w-4xl mx-auto my-6 px-4 print:hidden">
      <div
        className={`w-full rounded-2xl border border-dashed border-slate-300 bg-slate-50/70 flex flex-col items-center justify-center p-4 text-center ${
          size === 'leaderboard' ? 'min-h-[90px]' : 'min-h-[140px]'
        }`}
      >
        <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-1">
          Sponsored / Advertisement
        </span>
        <p className="text-xs text-slate-500 font-medium">
          {slotName} — Ready for Google AdSense or Travel Affiliate Banner
        </p>
      </div>
    </div>
  );
}
