import type { Metadata } from 'next';
import { Inter, Roboto_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' });
const robotoMono = Roboto_Mono({ subsets: ['latin'], display: 'swap', variable: '--font-mono' });

export const metadata: Metadata = {
  metadataBase: new URL('https://cinnastratech.com'),
  title: {
    default: 'CinnAstra Tech – Premier Software Testing Training Institute',
    template: '%s | CinnAstra Tech'
  },
  description: 'Master manual and automated software testing. Guaranteed internship, expert-led training in Selenium, Playwright, AI testing, and more. Transform your career with CinnAstra Tech.',
  keywords: ['Software Testing Training', 'Selenium Course', 'Playwright Automation', 'QA Course with Internship', 'AI in Testing', 'API Testing Training'],
  authors: [{ name: 'CinnAstra Tech Team' }],
  creator: 'CinnAstra Tech',
  publisher: 'CinnAstra Tech',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'CinnAstra Tech – Innovate Beyond Boundaries',
    description: 'Premier software testing training institute with guaranteed internship and placement support.',
    url: 'https://cinnastratech.com',
    siteName: 'CinnAstra Tech',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CinnAstra Tech – Software Testing Training',
    description: 'Transform your career with expert-led software testing courses.',
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${robotoMono.variable} font-sans`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
