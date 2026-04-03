import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ExternalLink, Calendar, User, Wrench } from 'lucide-react';
import { Project } from '../types';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

export function ProjectDetail({ project, onBack }: ProjectDetailProps) {
  return (
    <div className="pt-32 pb-20 px-6 overflow-hidden relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-[10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={onBack}
          className="group flex items-center space-x-3 text-[10px] font-black uppercase tracking-[0.2em] text-muted hover:text-primary transition-colors mb-16"
        >
          <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          </div>
          <span>Back to Projects</span>
        </motion.button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-6 flex items-center">
                <span className="w-6 h-px bg-primary/40 mr-3" />
                {project.category} — {project.year}
              </p>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.9] mb-12">
                {project.title}
              </h1>
              
              <div className="aspect-[16/9] rounded-[2.5rem] overflow-hidden bg-secondary mb-16 shadow-2xl shadow-primary/5 border border-border/50">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="prose prose-xl max-w-none prose-headings:font-black prose-headings:tracking-tighter prose-headings:uppercase prose-p:font-light prose-p:leading-relaxed prose-p:text-muted">
                <h2 className="text-4xl mb-8">Overview</h2>
                <p className="text-xl mb-12">
                  {project.longDescription || project.description}
                </p>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="sticky top-32 space-y-8"
            >
              <div className="p-10 bg-white border border-border/50 rounded-[2.5rem] shadow-xl shadow-primary/5 space-y-10">
                {project.role && (
                  <div>
                    <div className="flex items-center space-x-3 text-primary mb-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <User size={14} />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-[0.2em]">Role</span>
                    </div>
                    <p className="text-xl font-bold tracking-tight">{project.role}</p>
                  </div>
                )}

                {project.timeline && (
                  <div>
                    <div className="flex items-center space-x-3 text-primary mb-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <Calendar size={14} />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-[0.2em]">Timeline</span>
                    </div>
                    <p className="text-xl font-bold tracking-tight">{project.timeline}</p>
                  </div>
                )}

                {project.tools && (
                  <div>
                    <div className="flex items-center space-x-3 text-primary mb-4">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <Wrench size={14} />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-[0.2em]">Tools</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map(tool => (
                        <span key={tool} className="px-4 py-2 bg-secondary rounded-xl text-[10px] font-bold uppercase tracking-widest text-muted">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {project.link && (
                  <div className="pt-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-3 w-full py-5 bg-dark text-white rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] hover:bg-primary hover:shadow-xl hover:shadow-primary/20 transition-all transform hover:-translate-y-1 group"
                    >
                      <span>Visit Project</span>
                      <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                  </div>
                )}
              </div>

              <div className="p-10 border border-border/50 bg-white/50 rounded-[2.5rem]">
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted mb-6 flex items-center">
                  <span className="w-4 h-px bg-muted/30 mr-3" />
                  Project Tags
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-4 py-2 bg-white border border-border/50 rounded-xl text-[9px] font-bold uppercase tracking-widest text-muted shadow-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
