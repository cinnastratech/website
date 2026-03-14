import { ContactInfo, CourseNavItem, AudienceCard } from '@/types';

export const contactInfo: ContactInfo = {
  phone1: '+917305629985',
  phone2: '+918754568413',
  whatsapp: '919629227944',
  email: 'admin@cinnastratech.com',
};

export const courseNavItems: CourseNavItem[] = [
  { label: 'Software Testing Fundamentals', href: '/courses/fundamentals' },
  { label: 'Automation Testing with Selenium', href: '/courses/selenium' },
  { label: 'API with Rest Assured', href: '/courses/api-rest' },
  { label: 'Playwright Automation Testing', href: '/courses/playwright' },
  { label: 'Cloud Testing', href: '/courses/cloud' },
  { label: 'AI Testing', href: '/courses/ai' },
];

import { GraduationCap, RefreshCw, Rocket } from 'lucide-react';

export const audienceCards: AudienceCard[] = [
  {
    icon: GraduationCap,
    title: 'Freshers',
    description: 'Launch your tech career with hands-on training in modern testing methodologies and tools',
  },
  {
    icon: RefreshCw,
    title: 'Career Switchers',
    description: 'Transition smoothly into testing with our comprehensive curriculum designed for professionals',
  },
  {
    icon: Rocket,
    title: 'Returning Professionals',
    description: 'Restart your testing career with automation expertise and latest industry practices',
  },
];

export const siteMeta = {
  title: 'CinnAstra Tech - Innovate Beyond Boundaries',
  description: 'CinnAstra Tech - Software Testing Training',
  themeColor: '#2d6a6a',
};
