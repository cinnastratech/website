import type { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';

export const metadata: Metadata = {
  title: 'Home | CinnAstra Tech – Innovate Beyond Boundaries',
  description: 'Master software testing with CinnAstra Tech. Expert-led courses in Selenium, Playwright, Cloud Testing, and AI-powered QA. Guaranteed internships available.',
};
import AudienceSection from '@/components/home/AudienceSection';
import CoursesOverview from '@/components/home/CoursesOverview';
import FeaturesSection from '@/components/home/FeaturesSection';
import AddonsSection from '@/components/home/AddonsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import FAQSection from '@/components/home/FAQSection';
import PaymentOptions from '@/components/course/PaymentOptions';
import ContactCTA from '@/components/ui/ContactCTA';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AudienceSection />
      <CoursesOverview />
      <FeaturesSection />
      <AddonsSection />
      <TestimonialsSection />
      <FAQSection />
      <PaymentOptions />
      <div id="contact">
        <ContactCTA />
      </div>
    </>
  );
}
