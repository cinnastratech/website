import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import courses from '@/data/courses';
import trainers from '@/data/trainers';
import CourseHeader from '@/components/course/CourseHeader';
import TopicsSection from '@/components/course/TopicsSection';
import TrainerSection from '@/components/course/TrainerSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import ContactCTA from '@/components/ui/ContactCTA';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return courses.map((c) => ({ id: c.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const course = courses.find((c) => c.id === id);
  if (!course) return { title: 'Course Not Found' };
  return {
    title: `${course.title} | CinnAstraTech`,
    description: course.description,
  };
}

export default async function CoursePage({ params }: Props) {
  const { id } = await params;
  const course = courses.find((c) => c.id === id);
  if (!course) notFound();

  const trainer = trainers.find((t) => t.id === course.trainerId);

  // Omit icon (a React component function) to fix Next.js Server-to-Client serialization error
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { icon, ...clientSafeCourse } = course;

  return (
    <>
      <CourseHeader course={clientSafeCourse as any} />
      {trainer && <TrainerSection trainer={trainer} />}
      <TopicsSection topics={course.topics} />
      <TestimonialsSection />
      <ContactCTA
        title={course.ctaTitle}
        ctaText={course.ctaText}
      />
    </>
  );
}
