'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import courses from '@/data/courses';

export default function CoursesOverview() {
  return (
    <section className="courses-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What You&apos;ll Master
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Comprehensive curriculum covering the entire testing landscape
        </motion.p>
        <div className="bento-grid">
          {courses.map((course, index) => {
            let spanClass = "span-4";
            if (course.id === 'fundamentals' || course.id === 'api-rest') spanClass = "span-8";
            if (course.id === 'cloud' || course.id === 'ai') spanClass = "span-6";

            return (
              <motion.div 
                key={course.id} 
                className={`bento-card ${spanClass}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -8 }} 
                transition={{ type: 'spring', stiffness: 280, delay: index * 0.1 }}
              >
                <Link href={`/courses/${course.id}`} className="flex flex-col h-full">
                  <div className="course-icon"><course.icon /></div>
                  <h3>{course.title}</h3>
                  <p>{course.description}</p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
