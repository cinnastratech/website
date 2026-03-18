import type { Trainer } from '@/types';
import { Timer, Activity, Building2, Cloud, FlaskConical, Blocks, Link, Plug, Bot, Compass, Brain } from 'lucide-react';

const trainers: Trainer[] = [
  {
    id: 'madhumitha',
    name: 'Madhumitha',
    subtitle: 'Experienced Cloud QA & Test Management Specialist',
    bio: [
      'Madhumitha is an experienced Cloud QA and Test Management specialist with 15+ years of experience in enterprise-level quality assurance. Her expertise spans Agile/Scrum delivery, enterprise domain testing, and cloud validation across major platforms including AWS and Azure.',
      'She has extensive experience working in cloud testing environments, helping teams validate applications across Public, Private, and Hybrid cloud infrastructures. Her practical approach to teaching complex cloud concepts has made her a beloved mentor among students, particularly valued for her ability to break down intricate concepts into clear, actionable knowledge.',
      'At CinnAstra Tech, Madhumitha leads the Cloud Testing track, guiding students through real-world cloud testing scenarios, performance testing strategies, and security validation in cloud environments. Students consistently highlight her patience, clarity, and real-world insights as key factors in their learning success.',
    ],
    highlights: [
      { icon: Timer, label: '15+ Years', value: 'QA Experience' },
      { icon: Cloud, label: 'AWS & Azure', value: 'Cloud Validation' },
      { icon: Activity, label: 'Agile/Scrum', value: 'Expert Delivery' },
      { icon: Building2, label: 'Enterprise', value: 'Domain Testing' },
    ],
  },
  {
    id: 'kausalya',
    name: 'Kausalya',
    subtitle: 'Software Testing & Test Automation Specialist',
    bio: [
      'Kausalya is a highly skilled Software Testing and Test Automation Specialist with 15+ years of experience delivering robust testing solutions for enterprise-scale applications. She is exceptionally strong in Selenium with Java, custom automation framework design, and REST API validation, enabling reliable and maintainable test ecosystems.',
      'Her expertise includes Automation Architecture, framework optimization, test data handling, integration testing, and stability-driven regression design, ensuring consistent quality across complex application landscapes.',
      'At CinnAstra Tech, Kausalya leads hands-on, implementation-focused training on real project automation frameworks, Java-based testing practices, and API-driven validation strategies.',
    ],
    highlights: [
      { icon: Timer, label: '15+ Years', value: 'Experience' },
      { icon: FlaskConical, label: 'Selenium + Java', value: 'Automation' },
      { icon: Blocks, label: 'Frameworks', value: 'Design & Optimization' },
      { icon: Link, label: 'REST APIs', value: 'Validation' },
    ],
  },
  {
    id: 'rama',
    name: 'Rama',
    subtitle: 'QA, API & Test Governance Expert',
    bio: [
      'Rama is a highly experienced Quality Assurance professional with over 18+ years of industry experience delivering quality solutions across diverse enterprise platforms and global delivery models.',
      'She has extensive expertise in test governance, functional validation, API verification, Selenium-driven automation, and ServiceNow testing. Her strengths include test process orchestration, quality control frameworks, stakeholder coordination, and release readiness assessment.',
      'At CinnAstra Tech, Rama focuses on mentoring professionals in practical test management practices, API-focused validation, and disciplined testing approaches.',
    ],
    highlights: [
      { icon: Timer, label: '18+ Years', value: 'Industry Experience' },
      { icon: Plug, label: 'API Verification', value: 'Quality Validation' },
      { icon: Bot, label: 'Selenium', value: 'Automation Expertise' },
      { icon: Compass, label: 'Test Governance', value: 'Release Readiness' },
    ],
  },
  {
    id: 'karthika',
    name: 'Karthika',
    subtitle: 'AI-Enabled Testing & QA Leadership',
    bio: [
      'Karthika is a skilled Quality Assurance and Test Management professional with more than 15 years of experience, with strong expertise in AI-enabled testing tools and modern quality practices.',
      'She has hands-on experience in test management, API testing, Selenium automation, and manual testing, with a solid understanding of testing methodologies and structured validation techniques.',
      'At CinnAstra Tech, Karthika focuses on practical, future-ready training, helping learners understand how to combine AI-assisted testing, technical skills, and sound testing principles to succeed in real project environments.',
    ],
    highlights: [
      { icon: Timer, label: '15+ Years', value: 'QA & Test Management' },
      { icon: Brain, label: 'AI-Enabled Testing', value: 'Tools & Best Practices' },
      { icon: Plug, label: 'API Testing', value: 'Validation & Automation' },
      { icon: Bot, label: 'Selenium', value: 'Automation Expertise' },
    ],
  },
];

export default trainers;
