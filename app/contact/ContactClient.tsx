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
    <main className="contact-main">
      <div className="contact-container">
        <div className="contact-grid">
          
          {/* Left Column: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="contact-info-col"
          >
            <h1 className="contact-title">
              Get in <span style={{ color: 'var(--primary-teal)' }}>Touch</span>
            </h1>
            <p className="contact-description">
              Have questions about our courses or careers? Reach out to us and our mentors will guide you.
            </p>

            <div className="contact-info-list">
              {contactInfo.map((item, idx) => (
                <div key={idx} className="contact-info-item">
                  <div className="contact-icon-wrapper">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="contact-info-label">
                      {item.label}
                    </h3>
                    {item.values.map((val, vIdx) => (
                      <a 
                        key={vIdx} 
                        href={item.link}
                        className="contact-info-value"
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
            className="contact-form-card"
          >
            <EnrollmentForm 
              title="Apply for Enrollment" 
              subtitle="Fill the form and we will call you back within 24 hours."
            />
          </motion.div>

        </div>
      </div>
      
      <div className="contact-faq-section">
        <FAQSection />
      </div>

      <style jsx>{`
        .contact-main {
          background-color: #020505;
          min-height: 100vh;
          color: #ffffff;
          padding-top: 140px;
          padding-bottom: 100px;
        }
        .contact-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 5rem;
          align-items: start;
        }
        .contact-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 900;
          margin-bottom: 1.5rem;
          letter-spacing: -2px;
        }
        .contact-description {
          color: #9ca3af;
          font-size: 1.2rem;
          margin-bottom: 3rem;
          line-height: 1.6;
        }
        .contact-info-list {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }
        .contact-info-item {
          display: flex;
          gap: 1.5rem;
          align-items: flex-start;
        }
        .contact-icon-wrapper {
          background: rgba(6, 254, 180, 0.1);
          padding: 1rem;
          border-radius: 16px;
          color: var(--primary-teal);
          border: 1px solid rgba(6, 254, 180, 0.2);
        }
        .contact-info-label {
          font-size: 0.9rem;
          color: #6b7280;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }
        .contact-info-value {
          display: block;
          font-size: 1.25rem;
          font-weight: 600;
          color: #ffffff;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .contact-info-value:hover {
          color: var(--primary-teal);
        }
        .contact-form-card {
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 32px;
          padding: 3rem;
          box-shadow: 0 40px 100px rgba(0, 0, 0, 0.4);
        }
        .contact-faq-section {
          margin-top: 5rem;
        }

        @media (max-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
          .contact-main {
            padding-top: 100px;
          }
          .contact-form-card {
            padding: 2rem;
          }
        }

        @media (max-width: 640px) {
          .contact-title {
            font-size: 2.5rem;
          }
          .contact-description {
            font-size: 1.1rem;
            margin-bottom: 2rem;
          }
          .contact-info-value {
            font-size: 1.1rem;
          }
          .contact-info-list {
            gap: 2rem;
          }
        }
      `}</style>
    </main>
  );
}
