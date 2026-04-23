import React from 'react';
import { Check } from 'lucide-react';

const PricingCard = ({ plan, price, features, highlighted = false, description }) => {
  return (
    <div className={`relative p-8 rounded-[var(--card-radius)] transition-all duration-500 ${highlighted ? 'bg-[var(--color-accent)] text-white scale-105 shadow-2xl z-10 shadow-blue-500/20' : 'glass-card text-[var(--text-main)]'}`}>
      {highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-white text-[var(--color-accent)] text-[10px] font-bold uppercase tracking-[0.2em] rounded-full shadow-lg">
          Most Popular
        </div>
      )}
      
      <div className="mb-8 text-center">
        <h3 className="text-xl font-bold mb-2 uppercase tracking-widest">{plan}</h3>
        <p className={`${highlighted ? 'text-blue-100' : 'text-[var(--text-secondary)]'} text-sm font-medium mb-6`}>{description}</p>
        <div className="flex items-end justify-center gap-1">
          <span className="text-4xl font-bold">${price}</span>
          <span className={`${highlighted ? 'text-blue-200' : 'text-[var(--text-muted)]'} font-bold mb-1`}>/mo</span>
        </div>
      </div>
      
      <div className="space-y-4 mb-10">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${highlighted ? 'bg-white/20' : 'bg-[var(--color-accent-muted)]'}`}>
              <Check size={12} className={highlighted ? 'text-white' : 'text-[var(--color-accent)]'} />
            </div>
            <span className={`text-sm font-medium ${highlighted ? 'text-blue-50' : 'text-[var(--text-secondary)]'}`}>{feature}</span>
          </div>
        ))}
      </div>
      
      <button className={`w-full py-4 rounded-[var(--button-radius)] font-bold uppercase tracking-widest text-[10px] transition-all ${highlighted ? 'bg-white text-[var(--color-accent)] hover:bg-blue-50 shadow-xl' : 'btn-primary'}`}>
        Choose Plan
      </button>
    </div>
  );
};

export default PricingCard;
