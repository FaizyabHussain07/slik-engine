import React from 'react';
import { Quote } from 'lucide-react';

const TestimonialCard = ({ content, author, role, avatar }) => {
  return (
    <div className="bg-surface p-8 rounded-card border border-border-base shadow-sm relative overflow-hidden group">
      <div className="absolute top-6 right-8 text-surface-muted group-hover:text-brand/10 transition-colors duration-500">
        <Quote size={64} fill="currentColor" />
      </div>
      
      <p className="text-text-secondary font-medium leading-relaxed mb-8 relative z-10 italic">
        "{content}"
      </p>
      
      <div className="flex items-center gap-4 relative z-10">
        <div className="w-12 h-12 rounded-2xl overflow-hidden bg-surface-muted border-2 border-surface shadow-sm">
          <img src={avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${author}`} alt={author} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="font-black text-text-main leading-none">{author}</h4>
          <p className="text-text-muted text-xs font-bold uppercase tracking-widest mt-1">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
