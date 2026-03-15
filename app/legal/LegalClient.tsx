"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LegalClient() {
  const [activeTab, setActiveTab] = useState("terms");

  const tabs = [
    { id: "terms", label: "Terms & Conditions" },
    { id: "refund", label: "Refund Policy" },
    { id: "disclaimers", label: "Legal Disclaimers" },
  ];

  const content = {
    terms: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
        <section>
          <h3 style={{ color: 'var(--primary-teal)', marginBottom: '1.2rem', fontSize: '1.4rem' }}>1. Course Delivery and Access</h3>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem', color: '#9ca3af', lineHeight: '1.6' }}>
            <li>• All training sessions will be conducted online via designated platforms (Zoom/Google Meet/Microsoft Teams). Login credentials and joining links will be shared via email and WhatsApp.</li>
            <li>• Session recordings will be made available to enrolled students for a period of 2 years from the batch end date for revision purposes.</li>
            <li>• Course materials including presentations, practice exercises, sample projects, and reference documents will be provided via secure cloud storage or LMS portal.</li>
            <li>• The Student is responsible for ensuring stable internet connectivity and appropriate hardware (computer with microphone and camera) to participate in live sessions.</li>
            <li>• The Institute reserves the right to modify the course schedule, content, or instructors with reasonable notice to students, provided the overall course objectives remain unchanged.</li>
          </ul>
        </section>
        <section>
          <h3 style={{ color: 'var(--primary-teal)', marginBottom: '1.2rem', fontSize: '1.4rem' }}>2. Attendance Requirements</h3>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem', color: '#9ca3af', lineHeight: '1.6' }}>
            <li>• Students are expected to attend a minimum of 75%-80% of live sessions to be eligible for course completion certification & internship opportunities.</li>
            <li>• In case of unavoidable absence, the student must inform the Institute at least 24-48 hours in advance. Recorded sessions will be available for review.</li>
            <li>• Repeated unexcused absences (more than 5 consecutive sessions) may result in removal from the batch without refund.</li>
          </ul>
        </section>
        <section>
          <h3 style={{ color: 'var(--primary-teal)', marginBottom: '1.2rem', fontSize: '1.4rem' }}>3. Payment Terms</h3>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem', color: '#9ca3af', lineHeight: '1.6' }}>
            <li>• The registration fee is due at the time of enrollment and is non-refundable under any circumstances.</li>
            <li>• For full payment option: The entire course fee must be paid before the batch start date.</li>
            <li>• For installment plans: Payments must be made as per the agreed schedule. Late payment will attract a penalty (₹500 / 5% per week of delay).</li>
            <li>• Failure to pay fees as per schedule may result in suspension of access to course materials and live sessions until payment is cleared.</li>
            <li>• Accepted payment methods: Bank Transfer, UPI, Credit Card, and other designated digital methods.</li>
          </ul>
        </section>
      </div>
    ),
    refund: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <section>
          <h3 style={{ color: 'var(--primary-teal)', marginBottom: '1.2rem', fontSize: '1.4rem' }}>Refund and Cancellation Policy</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: '#9ca3af', lineHeight: '1.8' }}>
            <p>
              At CinnAstra Tech, we are committed to providing high-quality training. Our refund policy ensures clarity and fairness for both the students and the institute.
            </p>
            <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid var(--primary-teal)' }}>
              <strong>Non-Refundable Fees:</strong> The registration fee paid at the time of enrollment is strictly non-refundable and non-transferable under any circumstances, as it covers administrative and seat reservation costs.
            </div>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <li>• Refund is provided only for those cases with valid reasons and supporting proofs.</li>
              <li>• The sole discretion for any refund request lies with the company norms and policies.</li>
              <li>• No refund will be issued for students who are removed from the batch due to lack of attendance or violation of conduct policies.</li>
              <li>• Approved refunds will be processed through the original payment method within a reasonable time frame as per company procedures.</li>
            </ul>
          </div>
        </section>
      </div>
    ),
    disclaimers: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
        <section>
          <h3 style={{ color: 'var(--primary-teal)', marginBottom: '1rem', fontSize: '1.4rem' }}>Results & Testimonials</h3>
          <p style={{ color: '#9ca3af', lineHeight: '1.8' }}>
            The success stories, testimonials, and placement outcomes shared by CinnAstra Tech reflect the experiences of individual learners. These results are not typical for every participant and may vary based on individual effort, prior knowledge, learning pace, and market conditions. We do not guarantee employment or specific salary outcomes.
          </p>
        </section>
        <section>
          <h3 style={{ color: 'var(--primary-teal)', marginBottom: '1rem', fontSize: '1.4rem' }}>Educational Disclaimer</h3>
          <p style={{ color: '#9ca3af', lineHeight: '1.8' }}>
            CinnAstra Tech provides professional training and skill development programs. These courses enhance practical knowledge and industry readiness but do not constitute a formal academic degree from a university or government-recognized educational institution.
          </p>
        </section>
        <section>
          <h3 style={{ color: 'var(--primary-teal)', marginBottom: '1rem', fontSize: '1.4rem' }}>Placement Assistance</h3>
          <p style={{ color: '#9ca3af', lineHeight: '1.8' }}>
            We provide placement assistance including resume guidance, mock interviews, and job notifications. However, we do not guarantee job placement with any specific company. Final hiring decisions are made solely by the recruiting organizations.
          </p>
        </section>
        <section>
          <h3 style={{ color: 'var(--primary-teal)', marginBottom: '1rem', fontSize: '1.4rem' }}>Internship Policy</h3>
          <p style={{ color: '#9ca3af', lineHeight: '1.8' }}>
            Internships are designed to provide practical exposure. Participation requires meeting program requirements, including course completion, assignment submission, and professional conduct.
          </p>
        </section>
        <section>
          <h3 style={{ color: 'var(--primary-teal)', marginBottom: '1rem', fontSize: '1.4rem' }}>General Legal Disclaimer</h3>
          <p style={{ color: '#9ca3af', lineHeight: '1.8' }}>
            The information provided by CinnAstra Tech is for general informational and educational purposes only. While we strive for accuracy, we make no warranties regarding completeness or reliability. CinnAstra Tech is not liable for any direct or indirect losses arising from the use of our training materials or participation in our programs.
          </p>
        </section>
      </div>
    ),
  };

  return (
    <main style={{ backgroundColor: '#020505', minHeight: '100vh', color: '#ffffff', paddingTop: 'clamp(100px, 15vh, 140px)', paddingBottom: '100px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           style={{ textAlign: 'center', marginBottom: 'clamp(3rem, 8vw, 5rem)' }}
         >
           <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', fontWeight: 900, marginBottom: '1.5rem', letterSpacing: '-2px', lineHeight: 1 }}>
             Legal <span style={{ color: 'var(--primary-teal)' }}>Compliance</span>
           </h1>
           <p style={{ color: '#9ca3af', fontSize: 'clamp(1rem, 3vw, 1.25rem)', maxWidth: '700px', margin: '0 auto', lineHeight: 1.6 }}>
             Transparency and professional conduct are at the core of our operations. Review our official terms and policies.
           </p>
         </motion.div>
 
         {/* Tab Navigation */}
         <div 
           className="legal-tabs-scroll-container"
           style={{ 
             display: 'flex', 
             justifyContent: 'center', 
             gap: '0.75rem', 
             marginBottom: 'clamp(2rem, 6vw, 4rem)',
             padding: '4px',
             background: 'rgba(255, 255, 255, 0.03)',
             borderRadius: '100px',
             width: 'fit-content',
             margin: '0 auto clamp(2rem, 6vw, 4rem) auto',
             border: '1px solid rgba(255, 255, 255, 0.05)',
             overflowX: 'auto',
             maxWidth: '100%',
             scrollbarWidth: 'none',
             msOverflowStyle: 'none',
             WebkitOverflowScrolling: 'touch'
           }}
         >
           <style jsx>{`
             .legal-tabs-scroll-container::-webkit-scrollbar {
               display: none;
             }
             @media (max-width: 640px) {
               .legal-tabs-scroll-container {
                 justify-content: flex-start;
                 border-radius: 16px;
                 padding: 8px;
                 flex-wrap: nowrap;
               }
             }
           `}</style>
           {tabs.map((tab) => (
             <button
               key={tab.id}
               onClick={() => setActiveTab(tab.id)}
               style={{
                 padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1.2rem, 4vw, 2rem)',
                 borderRadius: '100px',
                 border: 'none',
                 background: activeTab === tab.id ? 'var(--primary-teal)' : 'transparent',
                 color: activeTab === tab.id ? '#020505' : '#ffffff',
                 fontWeight: 700,
                 cursor: 'pointer',
                 transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                 fontSize: 'clamp(0.85rem, 2.5vw, 1rem)',
                 boxShadow: activeTab === tab.id ? '0 10px 30px rgba(6, 254, 180, 0.2)' : 'none',
                 whiteSpace: 'nowrap'
               }}
             >
               {tab.label}
             </button>
           ))}
         </div>
 
         {/* Tab Content */}
         <div style={{ 
           background: 'rgba(255, 255, 255, 0.02)', 
           backdropFilter: 'blur(20px)',
           border: '1px solid rgba(255, 255, 255, 0.05)', 
           borderRadius: 'clamp(24px, 5vw, 32px)', 
           padding: 'clamp(1.5rem, 6vw, 4rem)',
           minHeight: '400px',
           boxShadow: '0 40px 100px rgba(0, 0, 0, 0.4)'
         }}>
           <AnimatePresence mode="wait">
             <motion.div
               key={activeTab}
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -10 }}
               transition={{ duration: 0.4 }}
             >
               {content[activeTab as keyof typeof content]}
             </motion.div>
           </AnimatePresence>
         </div>
      </div>
    </main>
  );
}
