import React from 'react';
import { motion } from 'motion/react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({ title, subtitle, align = 'left' }: SectionHeadingProps) {
  return (
    <div className={`mb-24 ${align === 'center' ? 'text-center mx-auto' : ''}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-6 block">
          {title.split(' ')[0]}
        </span>
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 uppercase leading-[0.9]">
          {title.split(' ').slice(1).join(' ') ? (
            <>
              {title.split(' ')[0]} <span className="gradient-text">{title.split(' ').slice(1).join(' ')}</span>
            </>
          ) : (
            <span className="gradient-text">{title}</span>
          )}
        </h2>
        {subtitle && (
          <p className={`text-xl text-muted max-w-2xl font-light leading-relaxed ${align === 'center' ? 'mx-auto' : ''}`}>
            {subtitle}
          </p>
        )}
      </motion.div>
    </div>
  );
}
