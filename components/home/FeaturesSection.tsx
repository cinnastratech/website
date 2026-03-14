'use client';

import { motion } from 'framer-motion';
import { features } from '@/data/features';

export default function FeaturesSection() {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="features" id="features">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          The Complete QA Learning Experience
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Everything you need to master software testing and launch your tech career, all in one platform.
        </motion.p>
        <div className="features-grid">
          {features.map((f, index) => (
            <motion.div
              key={f.title}
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5, background: 'rgba(255,255,255,0.05)' }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onClick={f.scrollToContact ? scrollToContact : undefined}
              style={f.scrollToContact ? { cursor: 'pointer' } : {}}
            >
              <div className="feature-icon"><f.icon /></div>
              <h3>{f.title}</h3>
              <p>{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
