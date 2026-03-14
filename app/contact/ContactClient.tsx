"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, MessageSquare, Mail } from "lucide-react";
import EnrollmentForm from "@/components/ui/EnrollmentForm";
import FAQSection from "@/components/home/FAQSection";

export default function ContactClient() {
  const contactInfo = [
    {
      icon: <Phone size={24} />,
      label: "Call Us",
      values: ["+91-7305629985", "+91-8754568413"],
      link: "tel:+917305629985"
    },
    {
      icon: <MessageSquare size={24} />,
      label: "WhatsApp",
      values: ["+91-9629227944"],
      link: "https://wa.me/919629227944"
    },
    {
      icon: <Mail size={24} />,
      label: "Email",
      values: ["contact@cinnastratech.com"],
      link: "mailto:contact@cinnastratech.com"
    }
  ];

  return (
    <main style={{ backgroundColor: '#020505', minHeight: '100vh', color: '#ffffff', paddingTop: '140px', paddingBottom: '100px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 1.5fr', gap: '5rem', alignItems: 'start' }}>
          
          {/* Left Column: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, marginBottom: '1.5rem', letterSpacing: '-2px' }}>
              Get in <span style={{ color: 'var(--primary-teal)' }}>Touch</span>
            </h1>
            <p style={{ color: '#9ca3af', fontSize: '1.2rem', marginBottom: '3rem', lineHeight: 1.6 }}>
              Have questions about our courses or careers? Reach out to us and our mentors will guide you.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              {contactInfo.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                  <div style={{ 
                    background: 'rgba(6, 254, 180, 0.1)', 
                    padding: '1rem', 
                    borderRadius: '16px', 
                    color: 'var(--primary-teal)',
                    border: '1px solid rgba(6, 254, 180, 0.2)'
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '0.9rem', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700, marginBottom: '0.5rem' }}>
                      {item.label}
                    </h3>
                    {item.values.map((val, vIdx) => (
                      <a 
                        key={vIdx} 
                        href={item.link}
                        style={{ display: 'block', fontSize: '1.25rem', fontWeight: 600, color: '#ffffff', textDecoration: 'none', transition: 'color 0.3s ease' }}
                        onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary-teal)'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#ffffff'}
                      >
                        {val}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </motion.div>

          {/* Right Column: Enrollment Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ 
              background: 'rgba(255, 255, 255, 0.02)', 
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.05)', 
              borderRadius: '32px', 
              padding: '3rem',
              boxShadow: '0 40px 100px rgba(0, 0, 0, 0.4)'
            }}
          >
            <EnrollmentForm 
              title="Apply for Enrollment" 
              subtitle="Fill the form and we will call you back within 24 hours."
            />
          </motion.div>

        </div>
      </div>
      
      <div style={{ marginTop: '5rem' }}>
        <FAQSection />
      </div>
    </main>
  );
}
