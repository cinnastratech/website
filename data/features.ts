import { Feature, Addon } from '@/types';
import { Video, PhoneCall, MonitorPlay, Briefcase, Target, Trophy } from 'lucide-react';

export const features: Feature[] = [
  {
    icon: Video,
    title: 'Fully Live Classes',
    description: 'Master manual and automation testing through interactive, real-time sessions with hands-on coding.',
  },
  {
    icon: PhoneCall,
    title: 'On-Demand Mentorship',
    description: 'Never get stuck on a bug. Get instant, 1-on-1 support and have your complex technical questions answered anytime.',
    scrollToContact: true,
  },
  {
    icon: MonitorPlay,
    title: 'Lifetime Session Access',
    description: 'Review your classes anytime. Access our complete library of recorded sessions to brush up on testing frameworks and core concepts.',
  },
];

export const addons: Addon[] = [
  {
    icon: Briefcase,
    title: 'Real-World Internship',
    freeTag: 'Free - Cost Included in Training Package',
    items: [
      'Internship Opportunities - Mandated',
      'Work with industry-standard tools and processes',
      'Build your professional portfolio',
    ],
  },
  {
    icon: Target,
    title: 'Interview Preparation',
    freeTag: 'Free - Cost Included in Training Package',
    items: [
      'Mock interviews with industry experts',
      'Resume building and optimization',
      'Technical and HR interview guidance',
    ],
  },
  {
    icon: Trophy,
    title: 'Certification Prep(Available on Request)',
    items: [
      'ISTQB Certification guidance',
      'Agile CSM Certification preparation',
      'Practice tests and study materials',
    ],
  },
];
