'use client';

import { motion } from 'framer-motion';

interface ContactCTAProps {
  title?: string;
  ctaText?: string;
}

export default function ContactCTA({ title, ctaText }: ContactCTAProps) {
  return (
    <section className="cta-split-section" id="contact">
      <div className="cta-split-container">
        <motion.div
          className="cta-text-left"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {title || "Claim Your Future in QA Today."}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {ctaText || "Enroll in any software testing course and unlock a guaranteed, hands-on internship worth ₹10,000 absolutely free. Become the gatekeeper of quality."}
          </motion.p>
        </motion.div>

        <motion.div
          className="cta-actions-right"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <a
            href="https://wa.me/919629227944"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-white"
            style={{ textAlign: 'center', width: '100%' }}
          >
            Chat on WhatsApp
          </a>
          <button
            className="btn-outline-white"
            onClick={() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contact Us
          </button>
        </motion.div>
      </div>
    </section>
  );
}
