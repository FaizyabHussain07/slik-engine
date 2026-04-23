import React from 'react';
import { Check } from 'lucide-react';

const PricingCard = ({ plan, price, features, highlighted = false, description }) => {
  return (
    <div className={`relative p-8 rounded-[2.5rem] transition-all duration-500 ${highlighted ? 'bg-[#0f172a] text-white scale-105 shadow-2xl z-10' : 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-gray-100 dark:border-slate-700 shadow-sm'}`}>
      {highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full">
          Most Popular
        </div>
      )}
      
      <div className="mb-8 text-center">
        <h3 className="text-xl font-black mb-2 uppercase tracking-widest">{plan}</h3>
        <p className={`${highlighted ? 'text-slate-400' : 'text-slate-500 dark:text-slate-400'} text-sm font-medium mb-6`}>{description}</p>
        <div className="flex items-end justify-center gap-1">
          <span className="text-4xl font-black">${price}</span>
          <span className={`${highlighted ? 'text-slate-500' : 'text-slate-400'} font-bold mb-1`}>/mo</span>
        </div>
      </div>
      
      <div className="space-y-4 mb-10">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${highlighted ? 'bg-brand-600' : 'bg-brand-100 dark:bg-brand-900/30'}`}>
              <Check size={12} className={highlighted ? 'text-white' : 'text-brand-600'} />
            </div>
            <span className={`text-sm font-medium ${highlighted ? 'text-slate-300' : 'text-slate-600 dark:text-slate-300'}`}>{feature}</span>
          </div>
        ))}
      </div>
      
      <button className={`w-full py-4 rounded-full font-black uppercase tracking-widest text-xs transition-all ${highlighted ? 'bg-brand-600 hover:bg-brand-700 text-white shadow-lg shadow-brand-600/30' : 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:opacity-90'}`}>
        Choose Plan
      </button>
    </div>
  );
};

export default PricingCard;
