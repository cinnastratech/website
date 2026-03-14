"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface EnrollmentFormProps {
  onSuccess?: () => void;
  compact?: boolean;
  title?: string;
  subtitle?: string;
}

const courses = [
  "Software Testing Fundamentals",
  "Selenium Automation",
  "Playwright Automation",
  "API Rest Assured",
  "Cloud Testing",
  "AI-Driven QA",
  "General Inquiry"
];

export default function EnrollmentForm({ onSuccess, compact, title, subtitle }: EnrollmentFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: 'Software Testing Fundamentals'
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');

    try {
      // NOTE: This URL should be replaced with the actual Google Apps Script Web App URL
      const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxs0-your-script-id/exec';
      
      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Common for Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          type: 'Lead'
        }),
      });

      // Since mode is 'no-cors', we can't reliably check response.ok
      // We'll assume success if no error is thrown
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', course: 'Software Testing Fundamentals' });
      if (onSuccess) setTimeout(onSuccess, 3000);
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: compact ? '0.75rem 1rem' : '1rem 1.25rem',
    background: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '12px',
    color: '#ffffff',
    fontSize: '1rem',
    outline: 'none',
    transition: 'all 0.3s ease',
  };

  const labelStyle: React.CSSProperties = {
    fontSize: '0.85rem',
    fontWeight: 600,
    color: '#9ca3af',
    marginBottom: '0.5rem',
    display: 'block'
  };

  return (
    <div style={{ width: '100%' }}>
      {(title || subtitle) && (
        <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
          {title && <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.5rem' }}>{title}</h2>}
          {subtitle && <p style={{ color: '#9ca3af' }}>{subtitle}</p>}
        </div>
      )}

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        <div>
          <label style={labelStyle}>Full Name</label>
          <input
            type="text"
            required
            placeholder="John Doe"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            style={inputStyle}
            onFocus={(e) => e.target.style.borderColor = 'var(--primary-teal)'}
            onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
          />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: compact ? '1fr' : '1fr 1fr', gap: '1rem' }}>
          <div>
            <label style={labelStyle}>Email Address</label>
            <input
              type="email"
              required
              placeholder="john@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              style={inputStyle}
              onFocus={(e) => e.target.style.borderColor = 'var(--primary-teal)'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
            />
          </div>
          <div>
            <label style={labelStyle}>Phone Number</label>
            <input
              type="tel"
              required
              placeholder="+91 XXXXX XXXXX"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              style={inputStyle}
              onFocus={(e) => e.target.style.borderColor = 'var(--primary-teal)'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
            />
          </div>
        </div>

        <div style={{ position: 'relative' }}>
          <label style={labelStyle}>Interested Course</label>
          <div 
            onClick={() => setDropdownOpen(!dropdownOpen)}
            style={{ ...inputStyle, cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
          >
            <span style={{ color: formData.course ? '#fff' : '#9ca3af' }}>{formData.course}</span>
            <motion.span
              animate={{ rotate: dropdownOpen ? 180 : 0 }}
              style={{ fontSize: '0.8rem', color: '#6b7280' }}
            >
              ▼
            </motion.span>
          </div>
          
          <AnimatePresence>
            {dropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  right: 0,
                  marginTop: '0.5rem',
                  background: '#0d1117',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '12px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                  zIndex: 100,
                  maxHeight: '200px',
                  overflowY: 'auto',
                }}
              >
                {courses.map(course => (
                  <div
                    key={course}
                    onClick={() => {
                      setFormData({ ...formData, course });
                      setDropdownOpen(false);
                    }}
                    style={{
                      padding: '0.75rem 1rem',
                      cursor: 'pointer',
                      fontSize: '0.9rem',
                      transition: 'background 0.2s ease',
                      backgroundColor: formData.course === course ? 'rgba(6, 254, 180, 0.1)' : 'transparent',
                      color: formData.course === course ? 'var(--primary-teal)' : '#fff',
                    }}
                    onMouseEnter={(e) => {
                      if (formData.course !== course) e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
                    }}
                    onMouseLeave={(e) => {
                      if (formData.course !== course) e.currentTarget.style.backgroundColor = 'transparent';
                    }}
                  >
                    {course}
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <button
          type="submit"
          disabled={loading || status === 'success'}
          style={{
            marginTop: '0.5rem',
            padding: '1rem',
            background: status === 'success' ? '#059669' : 'var(--primary-teal)',
            color: '#020505',
            border: 'none',
            borderRadius: '12px',
            fontWeight: 800,
            fontSize: '1rem',
            cursor: loading ? 'not-allowed' : 'pointer',
            transition: 'all 0.3s ease',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          {loading ? (
            <div className="spinner" style={{ width: '20px', height: '20px', border: '2px solid rgba(0,0,0,0.2)', borderTop: '2px solid #000', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
          ) : status === 'success' ? (
            'Application Sent!'
          ) : (
            'Apply Now'
          )}
        </button>

        <AnimatePresence>
          {status === 'success' && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ color: '#06feb4', textAlign: 'center', fontSize: '0.9rem', fontWeight: 600 }}
            >
              Thank you! Our team will call you back shortly.
            </motion.p>
          )}
          {status === 'error' && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ color: '#ef4444', textAlign: 'center', fontSize: '0.9rem', fontWeight: 600 }}
            >
              Something went wrong. Please try again later.
            </motion.p>
          )}
        </AnimatePresence>
      </form>

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
