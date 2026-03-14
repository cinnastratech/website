'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { addons } from '@/data/features';

function AddonCard({ addon, index, onVisible }: { addon: typeof addons[0], index: number, onVisible: (index: number) => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.6 });

  useEffect(() => {
    if (isInView) {
      onVisible(index);
    }
  }, [isInView, index, onVisible]);

  return (
    <div ref={ref} className="scroll-content-card">
      <motion.div
        className="addon-card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -8 }}
        transition={{ type: 'spring', stiffness: 280 }}
        style={{ width: '100%', maxWidth: '700px' }}
      >
        <h3 className="flex items-center gap-2"><addon.icon className="w-6 h-6" /> {addon.title}</h3>
        {addon.freeTag && <p className="free-tag">{addon.freeTag}</p>}
        <ul>
          {addon.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

export default function AddonsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="addons" id="addons">
      <div className="container">
        <div className="sticky-scroll-section">
          {/* Left Column - Sticky */}
          <div className="sticky-left">
            <div>
              <h2 className="section-title" style={{ textAlign: 'left', margin: 0 }}>Career Acceleration</h2>
              <p className="section-subtitle" style={{ textAlign: 'left', margin: '0.5rem 0 2rem 0', maxWidth: '300px' }}>
                Go beyond learning with exclusive benefits
              </p>
            </div>
            
            <ul className="sticky-nav">
              {addons.map((addon, index) => (
                <li 
                  key={addon.title} 
                  className={`sticky-nav-item ${activeIndex === index ? 'active' : ''}`}
                  onClick={() => {
                    const el = document.getElementById(`addon-${index}`);
                    el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }}
                >
                  {addon.title}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Scrolling */}
          <div className="sticky-right">
            {addons.map((addon, index) => (
              <div id={`addon-${index}`} key={addon.title}>
                <AddonCard 
                  addon={addon} 
                  index={index} 
                  onVisible={setActiveIndex} 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
