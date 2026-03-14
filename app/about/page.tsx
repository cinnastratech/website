import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about CinnAstraTech, a premier software testing institute empowering individuals with industry-ready QA skills through hands-on training.',
};

export default function AboutPage() {
  return (
    <div className="course-header" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <h1 className="section-title">About <span className="cinn">CinnAstra</span><span className="astra">Tech</span></h1>
        <div className="course-intro" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p>
            CinnAstraTech is a premier software testing training institute dedicated to empowering individuals with the skills needed to excel in the ever-evolving world of technology.
          </p>
          <p>
            Our mission is to bridge the gap between academic learning and industry requirements by providing comprehensive, hands-on training in both fundamental and advanced software testing methodologies.
          </p>
          <p>
            From manual testing to AI-powered automation, we cover the entire spectrum of quality assurance to ensure our students are ready for the challenges of tomorrow.
          </p>
          <div style={{ marginTop: '3rem' }}>
            <Link href="/#contact" className="cta-button">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
