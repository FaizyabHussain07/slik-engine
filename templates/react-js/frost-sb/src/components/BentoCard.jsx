import React from 'react';

const BentoCard = ({ children, className = "", title, subtitle, icon: Icon, badge }) => {
  return (
    <div className={`group relative overflow-hidden glass-card p-8 ${className}`}>
      {/* Decorative background blob */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-[var(--color-accent)]/5 rounded-full blur-3xl group-hover:bg-[var(--color-accent)]/10 transition-colors duration-500"></div>
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-6">
          {Icon && (
            <div className="w-14 h-14 bg-[var(--color-accent-muted)] text-[var(--color-accent)] rounded-2xl flex items-center justify-center border border-[var(--glass-border)] group-hover:scale-110 transition-transform duration-500">
              <Icon size={28} />
            </div>
          )}
          {badge && (
            <span className="px-3 py-1 bg-emerald-500/10 text-emerald-500 text-[10px] font-bold uppercase tracking-widest rounded-full border border-emerald-500/20">
              {badge}
            </span>
          )}
        </div>
        
        {title && <h3 className="text-xl font-bold text-[var(--text-main)] mb-2 tracking-tight">{title}</h3>}
        {subtitle && <p className="text-[var(--text-secondary)] font-medium leading-relaxed mb-4">{subtitle}</p>}
        
        <div className="mt-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default BentoCard;
