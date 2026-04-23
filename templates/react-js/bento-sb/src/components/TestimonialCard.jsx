import React from 'react';
import { Quote } from 'lucide-react';

const TestimonialCard = ({ content, author, role, avatar }) => {
  return (
    <div className="bg-white dark:bg-slate-800 p-8 rounded-[2rem] border border-gray-100 dark:border-slate-700 shadow-sm relative overflow-hidden group">
      <div className="absolute top-6 right-8 text-slate-100 dark:text-slate-700 group-hover:text-brand-500/10 transition-colors duration-500">
        <Quote size={64} fill="currentColor" />
      </div>
      
      <p className="text-slate-600 dark:text-slate-300 font-medium leading-relaxed mb-8 relative z-10 italic">
        "{content}"
      </p>
      
      <div className="flex items-center gap-4 relative z-10">
        <div className="w-12 h-12 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-700 border-2 border-white dark:border-slate-800 shadow-sm">
          <img src={avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${author}`} alt={author} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="font-black text-slate-900 dark:text-white leading-none">{author}</h4>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
