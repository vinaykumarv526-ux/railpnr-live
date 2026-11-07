'use client';

import React from 'react';
import { Train, ShieldCheck, Activity, Sparkles } from 'lucide-react';

interface HeaderProps {
  onOpenDecoder?: () => void;
  onOpenHostingGuide?: () => void;
}

export function Header({ onOpenDecoder, onOpenHostingGuide }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <a href="/" className="flex items-center gap-3 group">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-blue-700 via-indigo-600 to-sky-500 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
            <Train className="h-6 w-6 stroke-[2.2]" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-xl tracking-tight text-slate-900">
                Rail<span className="text-indigo-600">PNR</span>
              </span>
              <span className="px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 rounded">
                Live
              </span>
            </div>
            <p className="text-[11px] text-slate-500 -mt-0.5 hidden sm:block">
              Fastest Indian Railways PNR Status & Confirmation
            </p>
          </div>
        </a>

        {/* Navigation & Actions */}
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-emerald-700 text-xs font-medium">
            <Activity className="h-3.5 w-3.5 text-emerald-600 animate-pulse" />
            <span>CRIS Server Active</span>
          </div>

          <button
            onClick={onOpenDecoder}
            className="text-xs font-semibold px-3 py-1.5 text-slate-700 hover:text-indigo-600 hover:bg-slate-100 rounded-lg transition-colors flex items-center gap-1.5"
          >
            <ShieldCheck className="h-4 w-4 text-indigo-500" />
            <span className="hidden sm:inline">Status Code</span> Decoder
          </button>

          <button
            onClick={onOpenHostingGuide}
            className="text-xs font-semibold px-3 py-1.5 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border border-indigo-200/80 rounded-lg transition-colors flex items-center gap-1.5"
          >
            <Sparkles className="h-3.5 w-3.5 text-indigo-600" />
            <span>Free Hosting Guide</span>
          </button>
        </div>
      </div>
    </header>
  );
}
