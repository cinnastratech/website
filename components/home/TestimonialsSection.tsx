"use client";

import React from "react";
import { motion } from "framer-motion";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container" style={{ margin: '0 auto' }}>
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="testimonials-header"
        >
          <h2>Proven Outcomes.</h2>
          <p>
            Discover how our hands-on training helps students secure top QA roles and build flawless software.
          </p>
        </motion.div>
      </div>

      <div className="testimonials-scroller-full">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </section>
  );
}
