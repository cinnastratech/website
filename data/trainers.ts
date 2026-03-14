import type { Trainer } from '@/types';
import { Timer, Activity, Building2, Cloud, FlaskConical, Blocks, Link, Plug, Bot, Compass, Brain } from 'lucide-react';

const trainers: Trainer[] = [
  {
    id: 'madhumita',
    name: 'Madhumita',
    subtitle: 'Software Cloud QA & Test Management Professional',
    bio: [
      'Madhumita is a Software QA professional with 15+ years of extensive experience across Agile and Scrum-driven delivery models, enterprise domain-focused testing, and cloud-based application validation. She brings deep expertise in Functional testing practices, requirement analysis, sprint-level quality planning, and continuous quality alignment within fast-paced Agile environments. Her strengths include Scrum facilitation from a QA perspective, cross-functional collaboration, domain-intensive testing strategies, and cloud platform quality assurance, ensuring business-critical systems meet both functional and non-functional expectations.',
      'At CinnAstra Tech, Madhu delivers outcome-driven training focused on Testing processes, Agile-based execution, domain-oriented testing, and cloud-enabled validation practices. Her methodical and learner-focused approach helps professionals strengthen testing fundamentals, apply quality standards effectively, and contribute with confidence across real project environments.',
    ],
    highlights: [
      { icon: Timer, label: '15+ Years', value: 'QA Experience' },
      { icon: Activity, label: 'Agile & Scrum', value: 'Delivery Focus' },
      { icon: Building2, label: 'Domain-Intensive', value: 'Testing Strategies' },
      { icon: Cloud, label: 'Cloud Validation', value: 'Quality Assurance' },
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
    id: 'ramasv',
    name: 'Rama SV',
    subtitle: 'QA, API & Test Governance Expert',
    bio: [
      'Rama SV is a highly experienced Quality Assurance professional with over 18+ years of industry experience delivering quality solutions across diverse enterprise platforms and global delivery models.',
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
