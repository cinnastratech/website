"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Do I need prior coding experience?",
    answer: "No. Our courses start from fundamentals, so even beginners with no programming background can learn easily.",
  },
  {
    question: "Do you provide placement assistance?",
    answer: "Yes. We provide placement guidance including resume preparation, interview training, mock interviews, and referral support.",
  },
  {
    question: "Are the classes live or recorded?",
    answer: "All classes are conducted live by industry experts. Recorded sessions may also be provided for revision.",
  },
  {
    question: "What is the duration of the courses?",
    answer: "Course durations typically range from 4 to 8 weeks, depending on the specific curriculum and topic depth.",
  },
  {
    question: "Will I get hands-on project experience?",
    answer: "Yes. Our training includes real-time projects, practical exercises, and assignments to provide industry-level experience.",
  },
  {
    question: "Who are the trainers?",
    answer: "Our trainers are experienced industry professionals with more than 15 years of experience in software testing and automation.",
  },
  {
    question: "Will I receive a certificate after completing the course?",
    answer: "Yes. Students will receive a Course Completion Certificate from CinnaAstra Tech after successfully finishing the program.",
  },
  {
    question: "What tools and technologies will I learn?",
    answer: "You will learn Selenium, Playwright, API Testing, Postman, Automation Framework concepts, and Cloud Testing fundamentals.",
  },
  {
    question: "Is this course suitable for freshers?",
    answer: "Yes. The course is designed for fresh graduates, job seekers, and professionals who want to switch to a testing career.",
  },
  {
    question: "Do you provide interview preparation support?",
    answer: "Yes. We conduct mock interviews, resume reviews, and share real-time interview questions to help students prepare confidently.",
  },
  {
    question: "What is the batch size?",
    answer: "We maintain small batch sizes (4–6 students) to provide personalized attention and effective learning.",
  },
  {
    question: "Do you provide internship opportunities?",
    answer: "Yes. Our program includes internship opportunities through our partner organizations. Students will get exposure to real-time testing projects and industry workflows, which helps them gain practical experience before entering the job market.",
  },
  {
    question: "Will I get course materials and recordings?",
    answer: "Yes. Students will receive study materials, notes, and recorded sessions for future reference.",
  },
  {
    question: "Can working professionals join this course?",
    answer: "Yes. Our class timings are designed to be flexible so working professionals can attend without difficulty.",
  },
  {
    question: "What are the payment options available?",
    answer: "We offer several secure payment methods: Bank Transfer (NEFT/RTGS), UPI / QR Code, Debit Card, and PayPal for international students. We also provide flexible installment plans to make our courses accessible to everyone.",
  },
  {
    question: "How can I enroll in the course?",
    answer: "You can enroll through our website registration form or by contacting our team directly via phone or email.",
  },
  {
    question: "Will the course include real-time industry scenarios?",
    answer: "Yes. Our training includes real-world testing scenarios and practical use cases from industry projects.",
  },
  {
    question: "Do you provide guidance for automation framework development?",
    answer: "Yes. Students will learn automation framework concepts and how to implement them in real projects.",
  },
  {
    question: "What career opportunities are available after completing this course?",
    answer: "Students can apply for roles such as Software Test Engineer, Automation Test Engineer, QA Analyst, and SDET roles.",
  },
  {
    question: "How will this course help me in my career growth?",
    answer: "This course will help you gain practical skills, industry exposure, and confidence to succeed in software testing careers.",
  },
  {
    question: "What kind of projects will I work on during the internship?",
    answer: "Students will work on real-time software testing projects, including manual testing, automation scenarios, and API testing tasks used in real industry environments.",
  },
  {
    question: "Will I receive an internship certificate?",
    answer: "Yes. After successfully completing the internship, students will receive an Internship Completion Certificate, which can be added to their resume and professional profiles.",
  },
  {
    question: "How will the internship help my career?",
    answer: "The internship provides hands-on industry experience, improves practical testing skills, and helps students build confidence for job interviews and real project environments.",
  },
  {
    question: "Is the internship mandatory for all students?",
    answer: "The internship is recommended for students who want real-time project exposure, but participation may depend on course completion and performance during the training program.",
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
