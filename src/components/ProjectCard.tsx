import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
  onTagClick?: (tag: string) => void;
  onClick?: (projectId: string) => void;
  key?: React.Key;
}

export function ProjectCard({ project, index, onTagClick, onClick }: ProjectCardProps) {
  const cardVariants = {
    initial: { opacity: 0, y: 30, scale: 0.98 },
    animate: { opacity: 1, y: 0, scale: 1 },
    hover: { 
      y: -12, 
      transition: { duration: 0.4, ease: "easeOut" } 
    }
  };

  const imageVariants = {
    initial: { scale: 1.1, rotate: 0 },
    hover: { 
      scale: 1,
      rotate: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <motion.div
      layout
      initial="initial"
      whileInView="animate"
      whileHover="hover"
      whileTap={{ scale: 0.97 }}
      exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1]
      }}
      viewport={{ once: true, margin: "-50px" }}
      className="group cursor-pointer"
      onClick={() => onClick?.(project.id)}
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-secondary mb-8 shadow-sm group-hover:shadow-2xl group-hover:shadow-primary/10 transition-all duration-700 border border-border/50">
        <motion.img
          src={project.image}
          alt={project.title}
          variants={imageVariants}
          className="w-full h-full object-cover origin-center grayscale group-hover:grayscale-0 transition-all duration-1000"
          referrerPolicy="no-referrer"
        />
        
        {/* Overlay with glass effect */}
        <div className="absolute inset-0 bg-dark/20 opacity-0 group-hover:opacity-100 backdrop-blur-[2px] transition-all duration-700 flex items-center justify-center">
          <motion.div 
            initial={{ scale: 0.5, opacity: 0, y: 20 }}
            whileHover={{ scale: 1.1, opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="w-16 h-16 bg-white text-dark rounded-full flex items-center justify-center shadow-2xl transform transition-transform group-hover:rotate-12"
          >
            <ArrowUpRight size={32} strokeWidth={2.5} className="text-primary" />
          </motion.div>
        </div>

        {/* Subtle gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        {/* Category Badge */}
        <div className="absolute top-6 left-6 px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-[9px] font-black uppercase tracking-widest text-dark shadow-lg transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          {project.category}
        </div>
      </div>

      <div className="flex flex-col space-y-5 px-4">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-3 flex items-center">
              <span className="w-6 h-px bg-primary/40 mr-3" />
              {project.year}
            </p>
            <h3 className="text-3xl font-black tracking-tighter uppercase group-hover:gradient-text transition-all duration-500 leading-none">
              {project.title}
            </h3>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2.5">
          {project.tags.map(tag => (
            <motion.button
              key={tag}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.stopPropagation();
                onTagClick?.(tag);
              }}
              className="px-4 py-1.5 bg-white border border-border/50 hover:border-primary/30 hover:bg-primary/5 rounded-xl text-[9px] font-bold uppercase tracking-widest transition-all duration-300 shadow-sm"
            >
              {tag}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
