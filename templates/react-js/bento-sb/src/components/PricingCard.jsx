import React from 'react';
import { Check } from 'lucide-react';

const PricingCard = ({ plan, price, features, highlighted = false, description }) => {
  return (
    <div className={`relative p-8 rounded-card transition-all duration-500 ${highlighted ? 'bg-surface-muted ring-2 ring-brand scale-105 shadow-premium z-10' : 'bg-surface text-text-main border border-border-base shadow-sm'}`}>
      {highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full">
          Most Popular
        </div>
      )}
      
      <div className="mb-8 text-center">
        <h3 className="text-xl font-black mb-2 uppercase tracking-widest text-text-main">{plan}</h3>
        <p className={`${highlighted ? 'text-text-secondary' : 'text-text-muted'} text-sm font-medium mb-6`}>{description}</p>
        <div className="flex items-end justify-center gap-1">
          <span className="text-4xl font-black text-text-main">${price}</span>
          <span className={`${highlighted ? 'text-text-secondary' : 'text-text-muted'} font-bold mb-1`}>/mo</span>
        </div>
      </div>
      
      <div className="space-y-4 mb-10">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${highlighted ? 'bg-brand' : 'bg-brand-muted/20'}`}>
              <Check size={12} className={highlighted ? 'text-white' : 'text-brand'} />
            </div>
            <span className={`text-sm font-medium ${highlighted ? 'text-text-main' : 'text-text-secondary'}`}>{feature}</span>
          </div>
        ))}
      </div>
      
      <button className={`w-full py-4 rounded-btn font-black uppercase tracking-widest text-xs transition-all ${highlighted ? 'bg-brand hover:bg-brand-hover text-white shadow-brand-glow' : 'bg-text-main text-surface hover:opacity-90'}`}>
        Choose Plan
      </button>
    </div>
  );
};

export default PricingCard;
