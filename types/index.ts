import { LucideIcon } from 'lucide-react';

export interface ContactInfo {
  phone1: string;
  phone2: string;
  whatsapp: string;
  email: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface CourseNavItem {
  label: string;
  href: string;
}

export interface TrainerHighlight {
  icon: LucideIcon;
  label: string;
  value: string;
}

export interface Trainer {
  id: string;
  name: string;
  subtitle: string;
  bio: string[];
  highlights: TrainerHighlight[];
}

export interface TopicItem {
  subtitle: string;
}

export interface Topic {
  title: string;
  items: (string | TopicItem)[];
}

export interface Course {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  intro: string[];
  headerBgClass: string;
  learningOutcomes: string[];
  tools: string[];
  trainerId: string;
  topics: Topic[];
  ctaTitle: string;
  ctaText: string;
}

export interface Review {
  stars: number;
  text: string;
  name: string;
  role: string;
}

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  scrollToContact?: boolean;
}

export interface Addon {
  icon: LucideIcon;
  title: string;
  freeTag?: string;
  items: string[];
}

export interface AudienceCard {
  icon: LucideIcon;
  title: string;
  description: string;
}
