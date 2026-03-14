'use client';

import { motion } from 'framer-motion';
import { audienceCards } from '@/data/siteConfig';

export default function AudienceSection() {
  return (
    <section className="target-audience">
      <div className="container">
        <h2 className="section-title">Who We Help Succeed</h2>
        <p className="section-subtitle">Tailored programs for every career stage</p>
        <div className="audience-grid">
          {audienceCards.map((card, index) => (
            <motion.div
              key={card.title}
              className="audience-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -8, borderColor: 'var(--secondary-teal)' }}
              transition={{ type: 'spring', stiffness: 300, delay: index * 0.1 }}
            >
              <div className="audience-icon"><card.icon /></div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
