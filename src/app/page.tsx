'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { PnrForm } from '@/components/PnrForm';
import { PnrResultCard } from '@/components/PnrResultCard';
import { StatusDecoderModal } from '@/components/StatusDecoderModal';
import { FreeHostingModal } from '@/components/FreeHostingModal';
import { FaqSection } from '@/components/FaqSection';
import { SeoContent } from '@/components/SeoContent';
import { AdPlaceholder } from '@/components/AdPlaceholder';
import { Footer } from '@/components/Footer';
import { PnrData, PnrApiResponse } from '@/types/pnr';
import { getPnrStatus } from '@/lib/pnr-service';
import { Sparkles, ShieldCheck, Zap } from 'lucide-react';

export default function HomePage() {
  const [pnrData, setPnrData] = useState<PnrData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [searchError, setSearchError] = useState('');
  const [isDecoderOpen, setIsDecoderOpen] = useState(false);
  const [isHostingGuideOpen, setIsHostingGuideOpen] = useState(false);

  const handleSearch = async (pnr: string) => {
    setIsLoading(true);
    setSearchError('');

    try {
      // 1. Attempt API route first
      let resolvedData: PnrData | null = null;
      try {
        const response = await fetch(`/api/pnr?pnr=${encodeURIComponent(pnr)}`);
        if (response.ok) {
          const resData: PnrApiResponse = await response.json();
          if (resData.success && resData.data) {
            resolvedData = resData.data;
          }
        }
      } catch {
        // API route unavailable, fallback below
      }

      // 2. Client-side resilience fallback
      if (!resolvedData) {
        resolvedData = await getPnrStatus(pnr);
      }

      setPnrData(resolvedData);

      // Scroll to results smoothly
      setTimeout(() => {
        const el = document.getElementById('pnr-result-section');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Unable to fetch PNR status';
      setSearchError(msg);
      setPnrData(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRefresh = async () => {
    if (!pnrData) return;
    setIsRefreshing(true);
    try {
      let resolvedData: PnrData | null = null;
      try {
        const response = await fetch(`/api/pnr?pnr=${encodeURIComponent(pnrData.pnr)}`);
        if (response.ok) {
          const resData: PnrApiResponse = await response.json();
          if (resData.success && resData.data) {
            resolvedData = resData.data;
          }
        }
      } catch {
        // Fallback
      }

      if (!resolvedData) {
        resolvedData = await getPnrStatus(pnrData.pnr);
      }

      setPnrData(resolvedData);
    } catch {
      // Ignore
    } finally {
      setIsRefreshing(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Navbar */}
      <Header
        onOpenDecoder={() => setIsDecoderOpen(true)}
        onOpenHostingGuide={() => setIsHostingGuideOpen(true)}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <section id="check" className="relative pt-10 pb-12 sm:pt-16 sm:pb-20 overflow-hidden bg-gradient-to-b from-indigo-50/70 via-white to-slate-50 border-b border-slate-200/60">
          {/* Subtle background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-72 bg-gradient-to-tr from-indigo-200/30 via-sky-200/20 to-transparent blur-3xl pointer-events-none" />

          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
            {/* Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-semibold mb-6 shadow-sm">
              <Zap className="h-3.5 w-3.5 text-indigo-600 fill-indigo-600" />
              <span>Real-Time CRIS Charting &amp; RAC Movement Updates</span>
            </div>

            {/* Main SEO H1 */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
              Indian Railways <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-sky-600 bg-clip-text text-transparent">
                PNR Status Live Check
              </span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Instantly check your 10-digit IRCTC PNR status, current seat/berth allocation, RAC confirmation chances, and live chart preparation status.
            </p>

            {/* Search Box */}
            <div className="mt-8">
              <PnrForm
                onSearch={handleSearch}
                isLoading={isLoading}
                currentPnr={pnrData?.pnr || ''}
              />
            </div>

            {searchError && (
              <div className="mt-4 max-w-md mx-auto p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs sm:text-sm font-medium">
                {searchError}
              </div>
            )}

            {/* Trust Badges */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 font-medium">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                100% Free &amp; No Login Required
              </span>
              <span className="flex items-center gap-1.5">
                <Sparkles className="h-4 w-4 text-indigo-600" />
                Live Confirmation Probability
              </span>
              <span className="flex items-center gap-1.5">
                <Zap className="h-4 w-4 text-amber-500" />
                Fastest CRIS Database Sync
              </span>
            </div>
          </div>
        </section>

        {/* Top Ad Placeholder */}
        <AdPlaceholder slotName="Header Responsive Banner" size="leaderboard" />

        {/* Results Section */}
        {pnrData && (
          <section id="pnr-result-section" className="px-4 sm:px-6">
            <PnrResultCard
              data={pnrData}
              onRefresh={handleRefresh}
              isRefreshing={isRefreshing}
            />
          </section>
        )}

        {/* Middle Ad Placement */}
        {pnrData && <AdPlaceholder slotName="Post-Result In-Feed Banner" size="leaderboard" />}

        {/* SEO Comprehensive Content */}
        <SeoContent />

        {/* SEO FAQ Section */}
        <FaqSection />
      </main>

      {/* Modals */}
      <StatusDecoderModal
        isOpen={isDecoderOpen}
        onClose={() => setIsDecoderOpen(false)}
      />

      <FreeHostingModal
        isOpen={isHostingGuideOpen}
        onClose={() => setIsHostingGuideOpen(false)}
      />

      {/* Footer */}
      <Footer
        onOpenDecoder={() => setIsDecoderOpen(true)}
        onOpenHostingGuide={() => setIsHostingGuideOpen(true)}
      />
    </div>
  );
}
