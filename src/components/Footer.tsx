import React from 'react';
import { Train, Heart, Shield } from 'lucide-react';

interface FooterProps {
  onOpenDecoder?: () => void;
  onOpenHostingGuide?: () => void;
}

export function Footer({ onOpenDecoder, onOpenHostingGuide }: FooterProps) {
  return (
    <footer className="w-full bg-slate-900 text-slate-400 text-xs border-t border-slate-800 mt-auto print:hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Col 1 */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
                <Train className="h-5 w-5" />
              </div>
              <span className="font-black text-lg text-white tracking-tight">RailPNR Live</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Fast, accurate, and free Indian Railways live PNR status, RAC allotment updates, and confirmation probability tracker.
            </p>
          </div>

          {/* Col 2 */}
          <div className="space-y-2">
            <h5 className="font-bold text-white text-xs uppercase tracking-wider">Quick Tools</h5>
            <ul className="space-y-1.5">
              <li>
                <a href="#check" className="hover:text-white transition-colors">
                  PNR Status Enquiry
                </a>
              </li>
              <li>
                <button onClick={onOpenDecoder} className="hover:text-white transition-colors text-left">
                  Waitlist Abbreviations (GNWL/RLWL/PQWL)
                </button>
              </li>
              <li>
                <button onClick={onOpenHostingGuide} className="hover:text-white transition-colors text-left text-sky-400">
                  Deploy &amp; Host for Free Guide
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="space-y-2">
            <h5 className="font-bold text-white text-xs uppercase tracking-wider">Official Resources</h5>
            <ul className="space-y-1.5">
              <li>
                <a
                  href="https://www.irctc.co.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  IRCTC NextGen Booking Portal
                </a>
              </li>
              <li>
                <a
                  href="https://www.indianrail.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Indian Railways Passenger Enquiry
                </a>
              </li>
              <li>
                <a
                  href="https://enquiry.indianrail.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  National Train Enquiry System (NTES)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4 */}
          <div className="space-y-2">
            <h5 className="font-bold text-white text-xs uppercase tracking-wider flex items-center gap-1">
              <Shield className="h-3.5 w-3.5 text-emerald-400" />
              <span>Security &amp; Privacy</span>
            </h5>
            <p className="text-xs text-slate-400 leading-relaxed">
              We never store your personal passenger details or credit card data. All searches are securely processed.
            </p>
          </div>
        </div>

        {/* Legal Disclaimer Box */}
        <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 text-[11px] text-slate-400 leading-relaxed mb-8">
          <p>
            <strong>Disclaimer:</strong> RailPNR is an independent passenger utility and travel information portal. We are <strong>not affiliated, associated, authorized, endorsed by, or in any way officially connected</strong> with Indian Railways, IRCTC, CRIS, or the Government of India. The official website of Indian Railways is accessible at{' '}
            <a href="https://www.indianrail.gov.in" className="text-indigo-400 hover:underline">
              indianrail.gov.in
            </a>{' '}
            and IRCTC at{' '}
            <a href="https://www.irctc.co.in" className="text-indigo-400 hover:underline">
              irctc.co.in
            </a>.
          </p>
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 RailPNR Live. Crafted with Next.js &amp; Tailwind CSS.</p>
          <p className="flex items-center gap-1">
            Built for travelers with <Heart className="h-3 w-3 text-rose-500 fill-rose-500" /> • Ready for 100% Free Hosting
          </p>
        </div>
      </div>
    </footer>
  );
}
