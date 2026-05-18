import React from 'react';

const SectionTitle = ({ title, subtitle, align = 'center' }) => {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center mx-auto' : 'text-left'} max-w-3xl`} data-aos="fade-up">
      {subtitle && (
        <span className="text-sm font-bold tracking-wider uppercase text-gradient mb-3 block">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-slate-900 mb-6">
        {title}
      </h2>
      <div className={`h-1.5 w-20 bg-gradient-to-r from-indigo-600 to-sky-500 rounded-full ${align === 'center' ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

export default SectionTitle;
