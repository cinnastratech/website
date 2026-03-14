'use client';

import { motion } from 'framer-motion';
import type { Topic } from '@/types';

interface TopicsSectionProps {
  topics: Topic[];
}

export default function TopicsSection({ topics }: TopicsSectionProps) {
  return (
    <section className="topics-section" style={{ backgroundColor: '#020505', color: '#ffffff' }}>
      <div className="container">
        <h2 className="section-title" style={{ color: '#ffffff' }}>Curriculum</h2>
        {topics.map((topic, idx) => (
          <motion.div
            key={topic.title}
            className="topic-card"
            style={{ background: '#0a0f0f', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: idx * 0.05, duration: 0.5 }}
            whileHover={{ x: 5 }}
          >
            <h3>
              <span className="topic-number">{idx + 1}</span>
              {topic.title}
            </h3>
            <ul>
              {topic.items.map((item, j) => (
                typeof item === 'string' ? (
                  <li key={j} style={{ color: 'rgba(255, 255, 255, 0.7)' }}>{item}</li>
                ) : (
                  <li key={j} className="topic-subtitle">{item.subtitle}</li>
                )
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
