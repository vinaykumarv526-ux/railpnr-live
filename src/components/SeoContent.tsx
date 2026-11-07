import React from 'react';
import { Ticket, Clock, CheckCircle2, AlertCircle, Award, Compass } from 'lucide-react';

export function SeoContent() {
  return (
    <section className="w-full max-w-4xl mx-auto my-12 px-4 sm:px-6 space-y-12">
      {/* 3 Step Visual Guide */}
      <div className="bg-gradient-to-br from-indigo-50/60 via-sky-50/40 to-slate-50 p-6 sm:p-8 rounded-3xl border border-indigo-100 shadow-sm">
        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-6 text-center">
          How to Locate & Check Your 10-Digit PNR Number
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-lg mb-3">
              1
            </div>
            <h4 className="font-bold text-slate-900 text-sm mb-1">Locate Your 10-Digit PNR</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Printed on the <strong>top-left corner</strong> of your IRCTC e-ticket (PDF/SMS) or the top-left on paper counter PRS tickets.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-lg mb-3">
              2
            </div>
            <h4 className="font-bold text-slate-900 text-sm mb-1">Instant Real-Time Check</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Type or paste your 10 digits into our search box above. No login, captcha, or registration required.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-lg mb-3">
              3
            </div>
            <h4 className="font-bold text-slate-900 text-sm mb-1">View Coach & Berth Details</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Get live confirmation probability, coach number (e.g. B3), berth position (e.g. 42 Lower Berth), and charting status.
            </p>
          </div>
        </div>
      </div>

      {/* Railway Charting Timelines Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2.5 rounded-xl bg-blue-50 text-blue-700">
              <Clock className="h-5 w-5" />
            </div>
            <h4 className="font-bold text-slate-900 text-base">Indian Railways Charting Timeline</h4>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed mb-4">
            Berth allocations and final RAC migrations are determined according to strict CRIS charting windows:
          </p>
          <ul className="space-y-3 text-xs text-slate-700">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                <strong>First Reservation Chart:</strong> Prepared exactly <strong>4 hours before</strong> scheduled train departure from the originating station.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                <strong>Morning Trains (&lt; 12:00 PM):</strong> First reservation chart is finalized at <strong>8:00 PM</strong> on the preceding night.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                <strong>Second & Final Chart:</strong> Finalized <strong>30 minutes before</strong> departure to accommodate last-minute current booking tickets.
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2.5 rounded-xl bg-amber-50 text-amber-700">
              <AlertCircle className="h-5 w-5" />
            </div>
            <h4 className="font-bold text-slate-900 text-base">Waitlist Priority & Confirmation Order</h4>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed mb-4">
            If multiple passengers hold waitlisted tickets, Indian Railways clears tickets strictly in this hierarchy:
          </p>
          <div className="space-y-2 text-xs">
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-100">
              <span className="font-semibold text-slate-800">1. GNWL (General Waitlist)</span>
              <span className="text-emerald-700 font-bold bg-emerald-100/80 px-2 py-0.5 rounded text-[11px]">Highest Priority</span>
            </div>
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-100">
              <span className="font-semibold text-slate-800">2. RLWL (Remote Location)</span>
              <span className="text-teal-700 font-bold bg-teal-100/80 px-2 py-0.5 rounded text-[11px]">Medium Priority</span>
            </div>
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-100">
              <span className="font-semibold text-slate-800">3. PQWL (Pooled Quota)</span>
              <span className="text-amber-700 font-bold bg-amber-100/80 px-2 py-0.5 rounded text-[11px]">Low Priority</span>
            </div>
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-100">
              <span className="font-semibold text-slate-800">4. TQWL (Tatkal Waitlist)</span>
              <span className="text-rose-700 font-bold bg-rose-100/80 px-2 py-0.5 rounded text-[11px]">Direct CNF only</span>
            </div>
          </div>
        </div>
      </div>

      {/* Travel Features Bar */}
      <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-3xl grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        <div className="flex flex-col items-center">
          <Ticket className="h-8 w-8 text-sky-400 mb-2" />
          <h5 className="font-bold text-sm">Real-Time CRIS Database Sync</h5>
          <p className="text-xs text-slate-400 mt-1">Directly syncs passenger charting and seat allotment data.</p>
        </div>
        <div className="flex flex-col items-center">
          <Award className="h-8 w-8 text-amber-400 mb-2" />
          <h5 className="font-bold text-sm">Confirmation AI Meter</h5>
          <p className="text-xs text-slate-400 mt-1">Predicts your ticket confirmation probability using historical trends.</p>
        </div>
        <div className="flex flex-col items-center">
          <Compass className="h-8 w-8 text-emerald-400 mb-2" />
          <h5 className="font-bold text-sm">Coach & Berth Decoder</h5>
          <p className="text-xs text-slate-400 mt-1">Instantly identifies Lower, Middle, Upper, Side Lower & Side Upper.</p>
        </div>
      </div>
    </section>
  );
}
