import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SectionHeading } from '../components/SectionHeading';
import { ProjectCard } from '../components/ProjectCard';
import { PROJECTS } from '../constants';

interface ProjectsProps {
  onProjectClick: (projectId: string) => void;
}

export function Projects({ onProjectClick }: ProjectsProps) {
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [tagFilter, setTagFilter] = useState<string | null>(null);
  
  const categories = ['All', 'AI & ML', 'Open Source', 'UX/UI Design', 'Web Design', 'Product Design', 'University Project'];

  const filteredProjects = PROJECTS.filter(p => {
    const matchesCategory = categoryFilter === 'All' || p.category === categoryFilter;
    const matchesTag = !tagFilter || p.tags.includes(tagFilter);
    return matchesCategory && matchesTag;
  });

  const clearFilters = () => {
    setCategoryFilter('All');
    setTagFilter(null);
  };

  return (
    <div className="pt-32 pb-20 px-6 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-[10%] left-[-10%] w-[30%] h-[30%] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[30%] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <span className="text-xs font-bold uppercase tracking-[0.4em] text-primary mb-6 block">Portfolio</span>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.8] mb-8">
            Selected <br /> <span className="gradient-text">Works</span>
          </h1>
          <p className="text-xl text-muted max-w-2xl font-light leading-relaxed">
            A collection of projects ranging from AI research to professional design solutions.
          </p>
        </div>

        {/* Filters */}
        <div className="space-y-8 mb-24">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted mr-4">Filter by Category:</span>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => {
                  setCategoryFilter(category);
                  setTagFilter(null);
                }}
                className={`px-6 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all transform hover:-translate-y-0.5 active:translate-y-0 ${
                  categoryFilter === category && !tagFilter
                    ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                    : 'bg-white border border-border/50 text-muted hover:border-primary/30 hover:text-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {tagFilter && (
            <div className="flex items-center gap-4 animate-in fade-in slide-in-from-left-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted mr-4">Active Tag:</span>
              <div className="flex items-center space-x-3 px-5 py-2.5 bg-dark text-white rounded-xl text-[10px] font-bold uppercase tracking-widest shadow-lg">
                <span>{tagFilter}</span>
                <button 
                  onClick={() => setTagFilter(null)}
                  className="ml-2 hover:text-primary transition-colors text-lg leading-none"
                >
                  ×
                </button>
              </div>
              <button 
                onClick={clearFilters}
                className="text-[10px] font-bold uppercase tracking-widest text-muted hover:text-primary transition-colors underline underline-offset-4"
              >
                Clear all
              </button>
            </div>
          )}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index} 
                onTagClick={(tag) => {
                  setTagFilter(tag);
                  setCategoryFilter('All');
                }}
                onClick={onProjectClick}
              />
            ))}
          </AnimatePresence>
        </motion.div>
        
        <AnimatePresence>
          {filteredProjects.length === 0 && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="py-32 text-center"
            >
              <div className="w-20 h-20 bg-secondary rounded-3xl flex items-center justify-center mx-auto mb-8">
                <span className="text-4xl">🔍</span>
              </div>
              <p className="text-muted text-2xl font-light">No projects found matching these filters.</p>
              <button 
                onClick={clearFilters}
                className="mt-10 px-10 py-4 bg-primary text-white rounded-2xl font-bold uppercase tracking-widest hover:bg-primary-dark hover:shadow-2xl hover:shadow-primary/20 transition-all transform hover:-translate-y-1"
              >
                Reset Filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
