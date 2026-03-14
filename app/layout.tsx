import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://cinnastratech.com'),
  title: {
    default: 'CinnAstraTech – Premier Software Testing Training Institute',
    template: '%s | CinnAstraTech'
  },
  description: 'Master manual and automated software testing. Guarnateed internship, expert-led training in Selenium, Playwright, AI testing, and more. Transform your career with CinnAstraTech.',
  keywords: ['Software Testing Training', 'Selenium Course', 'Playwright Automation', 'QA Course with Internship', 'AI in Testing', 'API Testing Training'],
  authors: [{ name: 'CinnAstraTech Team' }],
  creator: 'CinnAstraTech',
  publisher: 'CinnAstraTech',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'CinnAstraTech – Innovate Beyond Boundaries',
    description: 'Premier software testing training institute with guaranteed internship and placement support.',
    url: 'https://cinnastratech.com',
    siteName: 'CinnAstraTech',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CinnAstraTech – Software Testing Training',
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
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
