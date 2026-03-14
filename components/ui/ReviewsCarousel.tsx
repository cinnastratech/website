'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import reviews from '@/data/reviews';

function getStars(count: number) {
  return '★'.repeat(count) + (count < 5 ? '☆'.repeat(5 - count) : '');
}

export default function ReviewsCarousel() {
  const [current, setCurrent] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = reviews.length;

  useEffect(() => {
    const update = () => setCardsToShow(window.innerWidth > 768 ? 3 : 1);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const maxSlide = Math.max(0, total - cardsToShow);
  const totalDots = Math.ceil(total / cardsToShow);

  const goTo = useCallback((idx: number) => {
    setCurrent(Math.min(Math.max(idx, 0), maxSlide));
  }, [maxSlide]);

  const autoSlide = useCallback(() => {
    setCurrent(prev => (prev >= maxSlide ? 0 : prev + 1));
  }, [maxSlide]);

  const resetAuto = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(autoSlide, 4000);
  }, [autoSlide]);

  useEffect(() => {
    intervalRef.current = setInterval(autoSlide, 4000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [autoSlide]);

  const move = (dir: number) => {
    let next = current + dir * cardsToShow;
    if (next < 0) next = maxSlide;
    if (next > maxSlide) next = 0;
    setCurrent(next);
    resetAuto();
  };

  const cardWidth = cardsToShow === 1 ? 300 : 350;
  const translateX = current * (cardWidth + 30);

  return (
    <section className="reviews-section gradient-green">
      <div className="container">
        <h2 className="section-title">Learning Journeys</h2>
        <div
          className="reviews-carousel"
          onMouseEnter={() => { if (intervalRef.current) clearInterval(intervalRef.current); }}
          onMouseLeave={() => resetAuto()}
        >
          <div className="reviews-track" style={{ transform: `translateX(-${translateX}px)` }}>
            {reviews.map((r, i) => (
              <div key={i} className="review-card">
                <div className="review-stars">{getStars(r.stars)}</div>
                <p className="review-text">{r.text}</p>
                <div className="reviewer-info">
                  <div className="reviewer-avatar">👤</div>
                  <div className="reviewer-details" style={{ marginLeft: 12 }}>
                    <h4>{r.name}</h4>
                    <span>{r.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="carousel-controls">
          <button className="carousel-btn prev-btn" onClick={() => move(-1)} aria-label="Previous">❮</button>
          <button className="carousel-btn next-btn" onClick={() => move(1)} aria-label="Next">❯</button>
        </div>
        <div className="carousel-dots">
          {Array.from({ length: totalDots }).map((_, i) => (
            <button
              key={i}
              className={`carousel-dot${i === Math.floor(current / cardsToShow) ? ' active' : ''}`}
              onClick={() => { goTo(i * cardsToShow); resetAuto(); }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
