import type { Metadata } from 'next';
import LegalClient from './LegalClient';

export const metadata: Metadata = {
  title: 'Legal Compliance | Terms, Refund & Disclaimers',
  description: 'Review CinnAstraTech official terms and conditions, refund policies, and legal disclaimers.',
};

export default function LegalPage() {
  return <LegalClient />;
}
