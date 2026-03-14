'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import type { Course } from '@/types';

interface CourseHeaderProps {
  course: Course;
}

export default function CourseHeader({ course }: CourseHeaderProps) {
  return (
    <section className="course-header" style={{ backgroundColor: '#020505', backgroundImage: 'none', color: '#ffffff' }}>
      <div className="course-header-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1>{course.title}</h1>
          <div className="course-intro">
            {course.intro.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {course.learningOutcomes && course.learningOutcomes.length > 0 && (
            <div className="learning-outcomes">
              <h3>🎯 What You&apos;ll Learn</h3>
              <ul>
                {course.learningOutcomes.map((o, i) => (
                  <li key={i}>{o}</li>
                ))}
              </ul>
            </div>
          )}

          {course.tools && course.tools.length > 0 && (
            <div className="tools-used">
              <h4>🛠️ Tools & Technologies</h4>
              <div className="tools-badges">
                {course.tools.map((tool) => (
                  <span key={tool} className="tool-badge">{tool}</span>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
