export interface Passenger {
  number: number;
  bookingStatus: string; // e.g. "W/L 24", "RAC 5", "CNF"
  currentStatus: string; // e.g. "CNF", "RAC 2", "W/L 12"
  coach?: string; // e.g. "B4", "S3", "A1"
  berthNumber?: string | number; // e.g. 42
  berthType?: string; // e.g. "MB", "SL", "LB", "UB", "SU"
  berthFullName?: string; // e.g. "Middle Berth"
  confirmProbability?: number; // 0-100
}

export interface PnrData {
  pnr: string;
  trainNumber: string;
  trainName: string;
  fromStation: string;
  fromStationCode: string;
  toStation: string;
  toStationCode: string;
  boardingStation: string;
  boardingStationCode: string;
  reservationUpto: string;
  reservationUptoCode: string;
  journeyDate: string; // "14 Nov 2026"
  departureTime?: string;
  arrivalTime?: string;
  journeyClass: string; // "3A", "2A", "SL", "1A", "CC", "EC"
  className: string;
  totalPassengers: number;
  chartStatus: 'Prepared' | 'Not Prepared';
  chartPreparationTimeNote?: string;
  bookingFare?: number;
  passengers: Passenger[];
  overallStatus: 'Confirmed' | 'RAC' | 'Waitlisted' | 'Cancelled';
  overallProbability: number;
  timestamp: string;
  source: 'live_api' | 'demo_simulator';
}

export interface PnrApiResponse {
  success: boolean;
  data?: PnrData;
  error?: string;
  message?: string;
}
