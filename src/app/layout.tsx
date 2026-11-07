import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { SEO_FAQS } from '@/lib/constants';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://railpnr-live.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'PNR Status Check - Live Indian Railway IRCTC PNR Status & Confirmation',
  description:
    'Check Indian Railways PNR status online in real-time. Instant live berth allocation, RAC movement, chart status (prepared/not prepared), and confirmation probability prediction for IRCTC train tickets.',
  keywords: [
    'PNR status',
    'PNR status check',
    'Indian Railway PNR status',
    'IRCTC live PNR status',
    'train ticket confirmation status',
    'live PNR check',
    'train chart preparation time',
    'GNWL confirmation probability',
    'RAC ticket status',
    'Indian railways live enquiry',
    'tatkal waitlist status',
  ],
  authors: [{ name: 'RailPNR Team' }],
  creator: 'RailPNR',
  publisher: 'RailPNR',
  formatDetection: {
    telephone: false,
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: 'PNR Status Check - Live Indian Railway IRCTC PNR Status & Confirmation',
    description:
      'Fast, free, and accurate IRCTC Indian Railways live PNR status check, RAC allotment updates, and confirmation probability predictor.',
    url: siteUrl,
    siteName: 'RailPNR Live',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PNR Status Check - Live Indian Railway IRCTC PNR Status',
    description:
      'Check Indian Railways PNR status online in real-time with berth allocation, RAC updates, and confirmation chance prediction.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org Structured Data for Google rich snippets
  const jsonLdWebsite = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'RailPNR Live',
    url: siteUrl,
    applicationCategory: 'TravelApplication',
    operatingSystem: 'All',
    description:
      'Free real-time Indian Railways PNR Status enquiry, RAC confirmation predictor, and live charting tracker.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'INR',
    },
  };

  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: SEO_FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 selection:bg-indigo-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
