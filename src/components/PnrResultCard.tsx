'use client';

import React from 'react';
import { PnrData } from '@/types/pnr';
import {
  Train,
  Calendar,
  Clock,
  ArrowRight,
  Share2,
  Printer,
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  Sparkles,
} from 'lucide-react';

interface PnrResultCardProps {
  data: PnrData;
  onRefresh: () => void;
  isRefreshing?: boolean;
}

export function PnrResultCard({ data, onRefresh, isRefreshing }: PnrResultCardProps) {
  const isConfirmed = data.overallStatus === 'Confirmed';
  const isRac = data.overallStatus === 'RAC';
  const isChartPrepared = data.chartStatus === 'Prepared';

  const shareText = `🚆 *IRCTC PNR Status Check*\nPNR: *${data.pnr}*\nTrain: *${data.trainNumber} - ${data.trainName}*\nFrom: ${data.fromStation} (${data.fromStationCode}) ➡️ To: ${data.toStation} (${data.toStationCode})\nDate: *${data.journeyDate}*\nStatus: *${data.overallStatus}* (${data.overallProbability}% Chance)\nChart: *${data.chartStatus}*\n\nChecked via RailPNR Live`;

  const handleShareWhatsApp = () => {
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handlePrint = () => {
    window.print();
  };

  const handleOfficialCheck = () => {
    window.open(`https://www.indianrail.gov.in/enquiry/PNR/PnrEnquiry.html?locale=en`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-8 bg-white rounded-3xl shadow-xl shadow-slate-200/80 border border-slate-200 overflow-hidden print:shadow-none print:border-none">
      {/* Top Banner - Train Info */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-900 text-white p-5 sm:p-7 relative overflow-hidden">
        <div className="absolute -right-8 -bottom-8 opacity-10 pointer-events-none">
          <Train className="w-64 h-64 text-white" />
        </div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="font-mono text-sm sm:text-base font-extrabold tracking-wider bg-white/10 px-2.5 py-0.5 rounded-lg border border-white/20">
                PNR: {data.pnr}
              </span>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-lg bg-indigo-500/30 text-indigo-200 border border-indigo-400/30">
                {data.journeyClass} • {data.className}
              </span>
              {data.source === 'demo_simulator' && (
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-sky-500/20 text-sky-200 border border-sky-400/20">
                  ⚡ Simulation Mode
                </span>
              )}
            </div>

            <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white flex items-center gap-2">
              <span>{data.trainNumber}</span>
              <span className="text-slate-300 font-normal">|</span>
              <span className="text-sky-300">{data.trainName}</span>
            </h2>
          </div>

          <div className="flex items-center gap-2 print:hidden">
            <button
              onClick={onRefresh}
              disabled={isRefreshing}
              className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors flex items-center gap-1.5 border border-white/10"
              title="Refresh status"
            >
              <RotateCcw className={`h-4 w-4 ${isRefreshing ? 'animate-spin' : ''}`} />
              <span className="hidden sm:inline">Refresh</span>
            </button>
            <button
              onClick={handleShareWhatsApp}
              className="p-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition-colors flex items-center gap-1.5 shadow-md shadow-emerald-950/20"
              title="Share on WhatsApp"
            >
              <Share2 className="h-4 w-4" />
              <span className="hidden sm:inline">Share</span>
            </button>
            <button
              onClick={handlePrint}
              className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors flex items-center gap-1.5 border border-white/10"
              title="Print ticket"
            >
              <Printer className="h-4 w-4" />
              <span className="hidden sm:inline">Print</span>
            </button>
          </div>
        </div>

        {/* Route Visualizer */}
        <div className="mt-6 pt-5 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
          <div>
            <p className="text-xs text-slate-300 font-medium">Boarding Station</p>
            <p className="text-lg font-bold text-white tracking-wide">{data.fromStation}</p>
            <div className="flex items-center gap-2 mt-0.5 text-xs text-sky-200">
              <span className="font-mono font-bold bg-white/10 px-1.5 py-0.5 rounded">{data.fromStationCode}</span>
              {data.departureTime && (
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" /> Dep: {data.departureTime}
                </span>
              )}
            </div>
          </div>

          <div className="hidden sm:flex flex-col items-center justify-center">
            <div className="flex items-center gap-2 text-indigo-300 font-mono text-xs">
              <Calendar className="h-3.5 w-3.5" />
              <span>{data.journeyDate}</span>
            </div>
            <div className="w-full flex items-center justify-center my-1">
              <div className="h-0.5 flex-1 bg-gradient-to-r from-transparent via-indigo-400 to-transparent"></div>
              <ArrowRight className="h-5 w-5 text-indigo-300 mx-2" />
              <div className="h-0.5 flex-1 bg-gradient-to-r from-transparent via-indigo-400 to-transparent"></div>
            </div>
            <span className="text-[11px] text-slate-400">{data.totalPassengers} Passenger(s)</span>
          </div>

          <div className="sm:text-right">
            <p className="text-xs text-slate-300 font-medium">Destination Station</p>
            <p className="text-lg font-bold text-white tracking-wide">{data.toStation}</p>
            <div className="flex items-center sm:justify-end gap-2 mt-0.5 text-xs text-sky-200">
              <span className="font-mono font-bold bg-white/10 px-1.5 py-0.5 rounded">{data.toStationCode}</span>
              {data.arrivalTime && (
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" /> Arr: {data.arrivalTime}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Chart Status Banner & Confirmation Probability */}
      <div className="p-4 sm:p-6 bg-slate-50 border-b border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        {/* Charting Box */}
        <div className={`p-4 rounded-2xl border flex items-start gap-3 ${
          isChartPrepared
            ? 'bg-emerald-50/80 border-emerald-200 text-emerald-950'
            : 'bg-amber-50/80 border-amber-200 text-amber-950'
        }`}>
          {isChartPrepared ? (
            <CheckCircle2 className="h-6 w-6 text-emerald-600 shrink-0 mt-0.5" />
          ) : (
            <AlertTriangle className="h-6 w-6 text-amber-600 shrink-0 mt-0.5" />
          )}
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm">
                Chart Status: {data.chartStatus}
              </span>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                isChartPrepared ? 'bg-emerald-200 text-emerald-800' : 'bg-amber-200 text-amber-800'
              }`}>
                {isChartPrepared ? 'Allocations Locked' : 'Pending 4-Hr Window'}
              </span>
            </div>
            <p className="text-xs mt-1 text-slate-600 leading-relaxed">
              {data.chartPreparationTimeNote || 'Charts are usually finalized 4 hours prior to scheduled train departure.'}
            </p>
          </div>
        </div>

        {/* Probability Box */}
        <div className="p-4 rounded-2xl border border-slate-200 bg-white shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between text-xs font-semibold mb-2">
            <span className="text-slate-600 flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-indigo-600" />
              Confirmation Probability
            </span>
            <span className={`font-bold ${
              data.overallProbability >= 80 ? 'text-emerald-600' : data.overallProbability >= 60 ? 'text-amber-600' : 'text-rose-600'
            }`}>
              {data.overallProbability}% Chance ({isConfirmed ? 'Confirmed' : isRac ? 'High RAC' : 'Waitlisted'})
            </span>
          </div>

          <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden p-0.5">
            <div
              className={`h-full rounded-full transition-all duration-700 ${
                data.overallProbability >= 80
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-500'
                  : data.overallProbability >= 60
                  ? 'bg-gradient-to-r from-amber-400 to-orange-500'
                  : 'bg-gradient-to-r from-rose-500 to-pink-500'
              }`}
              style={{ width: `${data.overallProbability}%` }}
            />
          </div>
          <p className="text-[11px] text-slate-500 mt-2">
            Calculated based on booking quota, seat vacancy trend, and historical IRCTC confirmation patterns.
          </p>
        </div>
      </div>

      {/* Passengers Table */}
      <div className="p-4 sm:p-7">
        <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center justify-between">
          <span>Passenger Details ({data.passengers.length})</span>
          <span className="text-xs font-normal text-slate-500">Live allotment updated</span>
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                <th className="py-3 px-3">Passenger</th>
                <th className="py-3 px-3">Booking Status</th>
                <th className="py-3 px-3">Current Status</th>
                <th className="py-3 px-3">Coach / Berth</th>
                <th className="py-3 px-3">Berth Type</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {data.passengers.map((p) => {
                const isPsgConfirmed = p.currentStatus.includes('CNF');
                const isPsgRac = p.currentStatus.includes('RAC');

                return (
                  <tr key={p.number} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-3 font-semibold text-slate-900">
                      Passenger #{p.number}
                    </td>
                    <td className="py-4 px-3 font-mono text-xs text-slate-600">
                      <span className="bg-slate-100 px-2 py-1 rounded">
                        {p.bookingStatus}
                      </span>
                    </td>
                    <td className="py-4 px-3">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold font-mono ${
                          isPsgConfirmed
                            ? 'bg-emerald-100 text-emerald-800'
                            : isPsgRac
                            ? 'bg-amber-100 text-amber-800'
                            : 'bg-rose-100 text-rose-800'
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            isPsgConfirmed ? 'bg-emerald-500' : isPsgRac ? 'bg-amber-500' : 'bg-rose-500'
                          }`}
                        />
                        {p.currentStatus}
                      </span>
                    </td>
                    <td className="py-4 px-3 font-medium text-slate-800">
                      {p.coach ? (
                        <div className="flex items-center gap-1.5 font-bold">
                          <span className="bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded border border-indigo-200 text-xs font-mono">
                            {p.coach}
                          </span>
                          <span className="text-slate-700">Seat {p.berthNumber}</span>
                        </div>
                      ) : (
                        <span className="text-xs text-slate-400 italic">
                          {isChartPrepared ? 'No berth assigned' : 'Visible upon charting'}
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-3 text-xs text-slate-600">
                      {p.berthFullName || p.berthType ? (
                        <span className="font-medium text-slate-700">
                          {p.berthFullName || p.berthType}
                        </span>
                      ) : (
                        <span className="text-slate-400">--</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Footer verification note & Indian Railways Direct Link */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 print:hidden">
          <p>
            Last refreshed: <span className="font-mono text-slate-700">{new Date(data.timestamp).toLocaleTimeString()}</span>
          </p>
          <button
            onClick={handleOfficialCheck}
            className="text-indigo-600 hover:text-indigo-800 font-semibold flex items-center gap-1 hover:underline"
          >
            <span>Cross-verify on Indian Railways Official Portal</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
