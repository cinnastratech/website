import type { Trainer } from '@/types';
import { UserRound } from 'lucide-react';

interface TrainerSectionProps {
  trainer: Trainer;
}

export default function TrainerSection({ trainer }: TrainerSectionProps) {
  return (
    <section className="trainer-section" style={{ backgroundColor: '#020505', color: '#ffffff' }}>
      <div className="trainer-card" style={{ borderColor: 'var(--primary-teal)' }}>
        <div className="trainer-header">
          <div className="trainer-avatar"><UserRound className="w-8 h-8 md:w-10 md:h-10 text-white" /></div>
          <div className="trainer-title">
            <h2 style={{ color: 'var(--primary-teal)' }}>{trainer.name}</h2>
            <p className="subtitle" style={{ color: 'var(--text-gray)' }}>{trainer.subtitle}</p>
          </div>
        </div>
        {trainer.bio.map((para, i) => (
          <p key={i} style={{ color: 'rgba(255, 255, 255, 0.7)' }}>{para}</p>
        ))}
        <div className="trainer-highlights" style={{ borderTopColor: 'rgba(255, 255, 255, 0.1)' }}>
          {trainer.highlights.map((h) => (
            <div key={h.label} className="highlight-item">
              <div className="highlight-icon" style={{ background: 'rgba(6, 254, 180, 0.1)', color: 'var(--primary-teal)' }}><h.icon /></div>
              <div className="highlight-text" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                <strong style={{ color: 'var(--primary-teal)' }}>{h.label}</strong>
                {h.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
