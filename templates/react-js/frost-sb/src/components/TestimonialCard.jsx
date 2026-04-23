import React from 'react';
import { Quote } from 'lucide-react';

const TestimonialCard = ({ content, author, role, avatar }) => {
  return (
    <div className="glass-card p-8 relative overflow-hidden group">
      <div className="absolute top-6 right-8 text-[var(--color-accent)]/5 group-hover:text-[var(--color-accent)]/10 transition-colors duration-500">
        <Quote size={64} fill="currentColor" />
      </div>
      
      <p className="text-[var(--text-secondary)] font-medium leading-relaxed mb-8 relative z-10 italic">
        "{content}"
      </p>
      
      <div className="flex items-center gap-4 relative z-10">
        <div className="w-12 h-12 rounded-xl overflow-hidden bg-[var(--color-accent-muted)] border-2 border-[var(--glass-border)] shadow-sm">
          <img src={avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${author}`} alt={author} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="font-bold text-[var(--text-main)] leading-none">{author}</h4>
          <p className="text-[var(--text-muted)] text-[10px] font-bold uppercase tracking-widest mt-1">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
