"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Do I need prior coding experience?",
    answer: "No prior coding experience is required for our fundamentals course. We start from the basics and guide you step-by-step.",
  },
  {
    question: "Do you provide placement assistance?",
    answer: "Yes, we offer placement support, resume building sessions, and a guaranteed internship with every course enrollment.",
  },
  {
    question: "Are the classes live or recorded?",
    answer: "We offer live interactive sessions with expert trainers. Recordings are also made available for you to review later.",
  },
  {
    question: "What is the duration of the courses?",
    answer: "Course durations typically range from 4 to 8 weeks, depending on the specific curriculum and depth of the topic.",
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section style={{ backgroundColor: '#000000', color: '#ffffff', padding: '80px 1.5rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, marginBottom: '1rem', letterSpacing: '-1px' }}>
            Frequently Asked Questions
          </h2>
          <p style={{ color: '#9ca3af', fontSize: '1.125rem', lineHeight: 1.6 }}>
            Everything you need to know about our courses and training.
          </p>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqs.map((faq, index) => (
            <div 
              key={index}
              style={{ 
                border: '1px solid rgba(255, 255, 255, 0.1)', 
                borderRadius: '12px',
                overflow: 'hidden',
                background: 'rgba(255, 255, 255, 0.02)'
              }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '1.5rem',
                  background: 'transparent',
                  border: 'none',
                  color: '#ffffff',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  textAlign: 'left'
                }}
              >
                {faq.question}
                <span style={{ 
                  color: 'var(--primary-teal)', 
                  transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease'
                }}>
                  ▼
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div style={{ padding: '0 1.5rem 1.5rem', color: '#9ca3af', lineHeight: 1.6 }}>
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
