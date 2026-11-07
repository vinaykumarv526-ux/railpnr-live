export interface PnrStatusCode {
  code: string;
  name: string;
  description: string;
  confirmationChance: 'Guaranteed' | 'High' | 'Medium' | 'Low' | 'Nil';
}

export const PNR_STATUS_CODES: PnrStatusCode[] = [
  {
    code: 'CNF',
    name: 'Confirmed',
    description: 'Seat / Berth is confirmed. Coach and berth number will be visible after chart preparation or immediately for AC/Sleeper.',
    confirmationChance: 'Guaranteed',
  },
  {
    code: 'RAC',
    name: 'Reservation Against Cancellation',
    description: 'You are guaranteed to travel on the train! You share a side-lower berth with another RAC passenger, and will get a full berth if someone cancels before chart preparation.',
    confirmationChance: 'High',
  },
  {
    code: 'GNWL',
    name: 'General Waitlist',
    description: 'Most common waitlist type with the highest confirmation probability. Issued when passengers book from the originating station or nearby stations.',
    confirmationChance: 'Medium',
  },
  {
    code: 'RLWL',
    name: 'Remote Location Waitlist',
    description: 'Issued for intermediate stations that have a dedicated quota. Confirms only if passengers traveling between those specific intermediate stations cancel.',
    confirmationChance: 'Medium',
  },
  {
    code: 'PQWL',
    name: 'Pooled Quota Waitlist',
    description: 'Shared by multiple smaller intermediate stations. Has lower confirmation priority compared to General Waitlist.',
    confirmationChance: 'Low',
  },
  {
    code: 'TQWL',
    name: 'Tatkal Waitlist',
    description: 'Issued when Tatkal quota seats are fully booked. Confirms directly to CNF without going through RAC. Low probability unless mass cancellations occur.',
    confirmationChance: 'Low',
  },
  {
    code: 'CAN',
    name: 'Cancelled',
    description: 'The ticket has been cancelled by the passenger or by Indian Railways. Eligible refund is processed to the original payment source.',
    confirmationChance: 'Nil',
  },
];

export const BERTH_TYPES: Record<string, string> = {
  LB: 'Lower Berth',
  MB: 'Middle Berth',
  UB: 'Upper Berth',
  SL: 'Side Lower',
  SU: 'Side Upper',
  SM: 'Side Middle (3E coaches)',
  WS: 'Window Seat (Chair Car)',
  AS: 'Aisle Seat (Chair Car)',
  MS: 'Middle Seat (Chair Car)',
};

export const CLASS_NAMES: Record<string, string> = {
  '1A': 'First AC (Executive AC)',
  '2A': 'AC 2-Tier',
  '3A': 'AC 3-Tier',
  '3E': 'AC 3 Economy',
  CC: 'AC Chair Car',
  EC: 'Executive Chair Car',
  EA: 'Anubhuti Class',
  SL: 'Sleeper Class',
  '2S': 'Second Sitting',
};

export const SAMPLE_PNRS = [
  { pnr: '2849182390', label: 'Confirmed (Rajdhani Exp)', type: 'CNF' },
  { pnr: '4512984021', label: 'RAC (Vande Bharat Exp)', type: 'RAC' },
  { pnr: '6391028475', label: 'Waitlisted (Duronto Exp)', type: 'WL' },
];

export const SEO_FAQS = [
  {
    question: 'What is a 10-digit Indian Railways PNR number?',
    answer:
      'PNR stands for "Passenger Name Record". It is a unique 10-digit numeric code assigned to every train ticket booked through IRCTC (online) or Indian Railways PRS counter tickets. It contains itinerary details, passenger details, booking quota, berth allotment, and live journey status.',
  },
  {
    question: 'How can I check my live PNR status online for free?',
    answer:
      'Enter your 10-digit PNR number into our search tool above and click "Check Live Status". Our system fetches the latest charting, berth confirmation, and RAC movement directly in real-time with zero fees and no login required.',
  },
  {
    question: 'When is the railway reservation chart prepared?',
    answer:
      'The initial reservation chart is typically prepared 4 hours before the scheduled departure time of the train from the originating station. For morning trains departing before 12:00 PM, charts are usually finalized around 8:00 PM the previous evening. A second and final chart is finalized 30 minutes before departure.',
  },
  {
    question: 'What is the difference between RAC and Waiting List (WL)?',
    answer:
      'RAC (Reservation Against Cancellation) passengers are officially allowed to board the train and get a confirmed sitting berth (usually a shared Side Lower berth). In contrast, passengers with a fully waitlisted ticket (WL) after final chart preparation are NOT permitted to board reserved coaches; IRCTC e-tickets with waitlist are automatically cancelled and refunded.',
  },
  {
    question: 'Can I travel with a Waitlisted (WL) e-ticket on the train?',
    answer:
      'No. If all passenger statuses on an IRCTC online e-ticket remain in Waiting List (WL) after final chart preparation, the ticket is automatically cancelled and the fare is refunded directly to your bank account. Travelling in reserved coaches with a waitlisted e-ticket is treated as travelling without a ticket.',
  },
  {
    question: 'What do GNWL, RLWL, and PQWL mean?',
    answer:
      'GNWL (General Waitlist) has the highest confirmation chances because it applies to trains starting from the main origin station. RLWL (Remote Location Waitlist) applies to intermediate designated stations. PQWL (Pooled Quota Waitlist) is shared across small stations along the route and typically has lower confirmation priority.',
  },
  {
    question: 'How is confirmation probability calculated?',
    answer:
      'Confirmation probability is calculated by analyzing historical passenger cancellation patterns, train route popularity, season/holiday demand, days left until the journey, and the specific quota type (GNWL vs RLWL vs PQWL). Higher percentages (e.g. >80%) indicate a strong chance of getting a confirmed berth before chart preparation.',
  },
];
