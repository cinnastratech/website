'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { courseNavItems } from '@/data/siteConfig';
import EnrollmentForm from '@/components/ui/EnrollmentForm';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [enrollModalOpen, setEnrollModalOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    setDropdownOpen(false);
    setEnrollModalOpen(false);
    document.body.style.overflow = '';
  }, []);

  const toggleMenu = () => {
    const next = !menuOpen;
    setMenuOpen(next);
    setDropdownOpen(false);
    setEnrollModalOpen(false);
    document.body.style.overflow = next ? 'hidden' : '';
  };

  const handleLinkClick = () => {
    closeMenu();
  };

  const scrollToContact = () => {
    closeMenu();
    window.location.href = '/contact';
  };

  const scrollToFeatures = () => {
    closeMenu();
    if (pathname === '/') {
      const el = document.getElementById('features');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#features';
    }
  };

  return (
    <>
      <div
        className={`nav-overlay${menuOpen || enrollModalOpen ? ' active' : ''}`}
        onClick={closeMenu}
      />
      
      {/* Enrollment Modal */}
      <AnimatePresence>
        {enrollModalOpen && (
          <div className="enroll-modal-container">
            <motion.div
              className="enroll-modal-content"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="modal-close" 
                onClick={() => setEnrollModalOpen(false)}
                aria-label="Close modal"
              >
                &times;
              </button>
              <div style={{ padding: '0.5rem' }}>
                <EnrollmentForm 
                  compact 
                  title="Enroll Now" 
                  subtitle="Start your career in Software Testing today."
                  onSuccess={() => setEnrollModalOpen(false)}
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        style={{ zIndex: enrollModalOpen ? 2001 : 1000 }}
      >
        <nav className="navbar">
          <div className="nav-left">
            <Link href="/" className="logo" onClick={handleLinkClick}>
              <Image src="/Logo.png" alt="CinnAstraTech Logo" width={32} height={32} className="logo-img" priority />
              <span className="logo-text">
                CINNASTRA
              </span>
            </Link>
          </div>

          <div className="nav-center">
            <ul className={`nav-links${menuOpen ? ' mobile-active' : ''}`}>
              <li>
                <Link href="/" onClick={handleLinkClick}>Home</Link>
              </li>
              <li>
                <Link href="/about" onClick={handleLinkClick}>About</Link>
              </li>
              <li className="dropdown"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}>
                <button
                  className="dropdown-toggle"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  aria-expanded={dropdownOpen}
                >
                  Courses <span className="arrow">▾</span>
                </button>
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      className="dropdown-menu"
                      initial={{ opacity: 0, y: 10, x: '-50%' }}
                      animate={{ opacity: 1, y: 0, x: '-50%' }}
                      exit={{ opacity: 0, y: 10, x: '-50%' }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="mega-menu-col">
                        <h4><span className="gradient-keyword">Fundamentals</span></h4>
                        <Link href="/courses/fundamentals" className="mega-menu-item" onClick={handleLinkClick}>
                          <span className="title">Software Testing</span>
                          <span className="description">Master core concepts and QA methodologies</span>
                        </Link>
                        <Link href="/courses/cloud" className="mega-menu-item" onClick={handleLinkClick}>
                          <span className="title">Cloud Testing</span>
                          <span className="description">Modern infrastructure validation strategies</span>
                        </Link>
                      </div>
                      <div className="mega-menu-col">
                        <h4><span className="gradient-keyword">Automation</span></h4>
                        <Link href="/courses/selenium" className="mega-menu-item" onClick={handleLinkClick}>
                          <span className="title">Selenium</span>
                          <span className="description">Industry-standard web automation framework</span>
                        </Link>
                        <Link href="/courses/playwright" className="mega-menu-item" onClick={handleLinkClick}>
                          <span className="title">Playwright</span>
                          <span className="description">Next-gen web testing with speed and reliability</span>
                        </Link>
                        <Link href="/courses/api-rest" className="mega-menu-item" onClick={handleLinkClick}>
                          <span className="title">API Rest Assured</span>
                          <span className="description">Backend validation and service automation</span>
                        </Link>
                        <Link href="/courses/ai" className="mega-menu-item" onClick={handleLinkClick}>
                          <span className="title">AI Testing</span>
                          <span className="description">Integrating machine learning in QA workflows</span>
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
              <li>
                <button 
                  className="nav-btn-link" 
                  onClick={scrollToFeatures}
                >
                  Features
                </button>
              </li>
              <li>
                <Link href="/contact" onClick={handleLinkClick}>Contact</Link>
              </li>
            </ul>
          </div>

          <div className="nav-right">
            <button 
              className={`cta-button nav-cta compact${pathname === '/contact' ? ' disabled' : ''}`} 
              onClick={() => {
                if (pathname !== '/contact') setEnrollModalOpen(true);
              }}
              style={{ opacity: pathname === '/contact' ? 0.5 : 1, cursor: pathname === '/contact' ? 'default' : 'pointer' }}
            >
              Enroll Now
            </button>
            <button
              className={`menu-toggle${menuOpen ? ' active' : ''}`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </nav>
      </motion.header>

      <style jsx>{`
        .enroll-modal-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 3000;
          padding: 1.5rem;
          pointer-events: none;
        }
        .enroll-modal-content {
          background: #05070a;
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 32px;
          padding: 2.5rem;
          max-width: 500px;
          width: 100%;
          position: relative;
          box-shadow: 0 50px 100px rgba(0, 0, 0, 0.8);
          pointer-events: auto;
        }
        .modal-close {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          background: rgba(255, 255, 255, 0.05);
          border: none;
          color: #9ca3af;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 10;
        }
        .modal-close:hover {
          background: rgba(255, 255, 255, 0.1);
          color: #ffffff;
        }
        @media (max-width: 640px) {
          .enroll-modal-content {
            padding: 1.5rem;
            border-radius: 24px;
          }
        }
      `}</style>
    </>
  );
}
