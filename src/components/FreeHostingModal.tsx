'use client';

import React from 'react';
import { X, Sparkles, Globe, Rocket, Search, DollarSign, CheckCircle2 } from 'lucide-react';

interface FreeHostingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function FreeHostingModal({ isOpen, onClose }: FreeHostingModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-slate-200 flex items-center justify-between bg-gradient-to-r from-indigo-900 to-blue-900 text-white">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-white/10 text-white border border-white/20">
              <Sparkles className="h-6 w-6 text-sky-300" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">100% Free Hosting & SEO Traffic Roadmap</h3>
              <p className="text-xs text-indigo-200">How to deploy this website for $0 and rank on Google</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-white/70 hover:text-white rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 text-slate-800 text-sm">
          {/* Step 1 */}
          <div className="flex items-start gap-3.5">
            <div className="p-2 rounded-xl bg-indigo-50 text-indigo-600 font-bold shrink-0 mt-0.5">
              <Rocket className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-base">1. Deploy Free on Vercel (0 Cost Forever)</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                This project is built with Next.js App Router, which deploys to Vercel with zero server maintenance.
              </p>
              <ol className="list-decimal list-inside text-xs text-slate-600 mt-2 space-y-1 bg-slate-50 p-3 rounded-xl border border-slate-200">
                <li>Create a free account at <strong>vercel.com</strong> (Sign in with GitHub).</li>
                <li>Push this repository to your GitHub account: <code className="bg-slate-200 px-1 py-0.5 rounded text-[11px]">git push origin main</code>.</li>
                <li>Click <strong>&quot;Add New Project&quot;</strong> on Vercel and import your repository.</li>
                <li>(Optional) Add <code className="bg-slate-200 px-1 py-0.5 rounded text-[11px]">RAPIDAPI_KEY</code> in Environment Variables for live API queries.</li>
                <li>Click <strong>Deploy</strong>. In 60 seconds, your website is live worldwide with free global CDN and SSL!</li>
              </ol>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start gap-3.5">
            <div className="p-2 rounded-xl bg-blue-50 text-blue-600 font-bold shrink-0 mt-0.5">
              <Globe className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-base">2. Connect a Free or Cheap Custom Domain</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Google ranks custom domains (e.g. <code className="bg-slate-100 px-1.5 py-0.5 rounded font-mono text-[11px]">railpnrcheck.in</code> or <code className="bg-slate-100 px-1.5 py-0.5 rounded font-mono text-[11px]">pnrstatuslive.com</code>) much faster.
                You can get <code className="font-mono text-indigo-600">.in</code> or <code className="font-mono text-indigo-600">.com</code> domains for ₹299–₹600/year, or start on the free <code className="font-mono text-indigo-600">.vercel.app</code> subdomain.
              </p>
              <div className="mt-2 text-xs text-slate-600 bg-blue-50/50 p-3 rounded-xl border border-blue-100">
                Go to Vercel Dashboard ➔ Settings ➔ Domains ➔ Add your domain. Vercel automatically generates free automated SSL certificates.
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-start gap-3.5">
            <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600 font-bold shrink-0 mt-0.5">
              <Search className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-base">3. Google Search Console & SEO Traffic Indexing</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Indian train travel keywords receive over <strong>30 million monthly searches</strong>. We have already pre-configured:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2 text-xs">
                <div className="flex items-center gap-1.5 p-2 bg-slate-50 rounded-lg border border-slate-200">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Automated <strong>/sitemap.xml</strong></span>
                </div>
                <div className="flex items-center gap-1.5 p-2 bg-slate-50 rounded-lg border border-slate-200">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Schema.org JSON-LD FAQ Markup</span>
                </div>
                <div className="flex items-center gap-1.5 p-2 bg-slate-50 rounded-lg border border-slate-200">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>OpenGraph Social Previews</span>
                </div>
                <div className="flex items-center gap-1.5 p-2 bg-slate-50 rounded-lg border border-slate-200">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Core Web Vitals 95+ score</span>
                </div>
              </div>
              <p className="text-xs text-slate-600 mt-2">
                Submit your URL in <strong>Google Search Console</strong> and enter <code className="bg-slate-100 px-1 py-0.5 rounded font-mono text-[11px]">yourdomain.com/sitemap.xml</code> to index within 24-48 hours.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex items-start gap-3.5">
            <div className="p-2 rounded-xl bg-amber-50 text-amber-600 font-bold shrink-0 mt-0.5">
              <DollarSign className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-base">4. Monetizing Your Traffic</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Once daily traffic reaches 1,000+ visitors:
              </p>
              <ul className="list-disc list-inside text-xs text-slate-600 mt-1 space-y-1">
                <li><strong>Google AdSense:</strong> High travel CPC in India (placeholders already integrated).</li>
                <li><strong>Travel Affiliates:</strong> MakeMyTrip, Agoda, Booking.com, and ixigo affiliate links.</li>
                <li><strong>Train Food Delivery / Tatkal Tools:</strong> RailRestro, Zoop affiliate programs.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 flex justify-between items-center">
          <span className="text-xs text-slate-500">Free forever on Vercel Starter plan</span>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl transition-colors"
          >
            Got it, Let&apos;s go!
          </button>
        </div>
      </div>
    </div>
  );
}
