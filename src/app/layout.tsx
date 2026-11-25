import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import ScrollControls from '@/components/ScrollControls';
import { SITE_CONFIG } from '@/data/siteContent';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#0B2C4A',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.siteUrl),
  title: {
    default: 'SR22 Insurance in Memphis, TN',
    template: '%s',
  },
  description:
    'Same-day SR-22 filing help in Memphis, TN. Call (901) 695-4119 for a quote that meets Tennessee DPS requirements.',
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/assets/favicon.svg',
    apple: '/assets/logo.svg',
  },
  openGraph: {
    type: 'website',
    url: `${SITE_CONFIG.siteUrl}/`,
    title: 'SR22 Insurance in Memphis, TN',
    description:
      'Same-day SR-22 filing help in Memphis, TN. Call (901) 695-4119 for a quote that meets Tennessee DPS requirements.',
    images: [
      {
        url: '/assets/photo-keys.webp',
        width: 1200,
        height: 800,
        alt: 'Bluff SR22 Insurance Memphis',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SR22 Insurance in Memphis, TN',
    description:
      'Same-day SR-22 filing help in Memphis, TN. Call (901) 695-4119 for a quote that meets Tennessee DPS requirements.',
    images: ['/assets/photo-keys.webp'],
  },
  alternates: {
    canonical: `${SITE_CONFIG.siteUrl}/`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <body>
        <Header />
        {children}
        <ScrollControls />
      </body>
    </html>
  );
}
