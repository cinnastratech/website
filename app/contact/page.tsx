import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with CinnAstraTech mentors for career guidance and enrollment in our software testing courses.',
};

export default function ContactPage() {
  return <ContactClient />;
}
