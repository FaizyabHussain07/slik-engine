import React from 'react';

const BentoCard = ({ children, className = "", title, subtitle, icon: Icon, badge }) => {
  return (
    <div className={`group relative overflow-hidden bg-white dark:bg-slate-800 rounded-[2rem] border border-gray-100 dark:border-slate-700 p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-500/10 hover:-translate-y-1 ${className}`}>
      {/* Decorative background blob */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-500/5 rounded-full blur-3xl group-hover:bg-brand-500/10 transition-colors duration-500"></div>
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-6">
          {Icon && (
            <div className="w-14 h-14 bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 rounded-2xl flex items-center justify-center shadow-sm border border-brand-100/50 dark:border-brand-800/50 group-hover:scale-110 transition-transform duration-500">
              <Icon size={28} />
            </div>
          )}
          {badge && (
            <span className="px-3 py-1 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-[10px] font-black uppercase tracking-widest rounded-full border border-emerald-100 dark:border-emerald-800">
              {badge}
            </span>
          )}
        </div>
        
        {title && <h3 className="text-xl font-black text-slate-900 dark:text-white mb-2 tracking-tight">{title}</h3>}
        {subtitle && <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-4">{subtitle}</p>}
        
        <div className="mt-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default BentoCard;
