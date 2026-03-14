'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import PixelBlast from '@/components/ui/PixelBlast';

export default function HeroSection() {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="hero"
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {/* PixelBlast animated background */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0, opacity: 0.6 }}>
        <PixelBlast
          variant="square"
          pixelSize={10}
          color="#06feb4"
          patternScale={5}
          patternDensity={0.5}
          enableRipples={false}
          rippleSpeed={0.55}
          rippleThickness={0.13}
          rippleIntensityScale={0.7}
          speed={0.6}
          transparent
          edgeFade={0.3}
        />
      </div>

      <div className="hero-content">
        <motion.div 
          className="hero-pill"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Innovate Beyond Boundaries
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Master the Art of <br />
          <span className="gradient-keyword">Software Testing.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{ maxWidth: '800px', margin: '0 auto 2.5rem' }}
        >
          Transform your career with elite QA training. From manual fundamentals to AI-driven automation, become the gatekeeper of flawless code.
        </motion.p>
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Link href="/contact" className="cta-button inline-block">
            Start Your Journey
          </Link>
        </motion.div>

        {/* Trusted Partners Section */}
        <motion.div 
          className="trusted-partners"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          <span className="partners-title" style={{ textAlign: 'center', margin: '0 auto', display: 'block' }}>
            Trusted Industry Partners
          </span>
          <div className="partners-logos" style={{ display: 'flex', justifyContent: 'center', width: '100%', marginTop: '0.5rem' }}>
            <div className="partner-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px' }}>
              <Image 
                src="/android-chrome-192x192.png" 
                alt="MergeX" 
                width={40} 
                height={40} 
                className="partner-logo"
                style={{ opacity: 0.8 }}
              />
              <span className="partner-name" style={{ display: 'block', textAlign: 'center', width: '100%' }}>mergex</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
