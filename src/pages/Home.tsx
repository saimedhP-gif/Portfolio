import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Award, GraduationCap, Sparkles, FileDown } from 'lucide-react';
import { ProjectCard } from '../components/ProjectCard';
import { PROJECTS } from '../constants';

interface HomeProps {
  setActivePage: (page: string) => void;
  onProjectClick: (projectId: string) => void;
}

export function Home({ setActivePage, onProjectClick }: HomeProps) {
  const featuredProjects = PROJECTS.slice(0, 2);

  return (
    <div className="pt-32 pb-20 px-6 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="mb-40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="inline-flex items-center space-x-3 px-4 py-1.5 rounded-full bg-white border border-border/50 text-[10px] font-bold tracking-[0.2em] uppercase mb-10 shadow-sm">
                  <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-muted">Available for new opportunities</span>
                </div>
                <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-[0.8] mb-10 uppercase">
                  <span className="block">PORANDLA</span>
                  <span className="gradient-text">SAIMEDH</span>
                </h1>
                <p className="text-xl md:text-3xl text-muted max-w-2xl text-balance leading-tight font-display font-light">
                  Computer Science Engineer specializing in <span className="text-dark font-medium">Artificial Intelligence</span> and <span className="text-dark font-medium">Machine Learning</span>. 
                </p>
              </motion.div>
            </div>
            <div className="lg:col-span-4 flex flex-col items-start lg:items-end space-y-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl group-hover:bg-primary/30 transition-colors -z-10" />
                <div className="w-full aspect-[4/5] rounded-3xl bg-white p-3 shadow-2xl border border-white/50 overflow-hidden">
                  <img
                    src="https://picsum.photos/seed/saimedh/800/1000"
                    alt="PORANDLA SAIMEDH"
                    className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
              <div className="flex flex-col items-start lg:items-end space-y-8 w-full">
                <button
                  onClick={() => setActivePage('contact')}
                  className="group relative flex items-center justify-between w-full lg:w-auto lg:space-x-6 px-8 py-4 bg-dark text-white rounded-2xl overflow-hidden transition-all hover:shadow-2xl hover:shadow-dark/20"
                >
                  <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  <span className="relative z-10 text-lg font-bold tracking-tighter uppercase">Let's collaborate</span>
                  <ArrowRight size={24} className="relative z-10 group-hover:translate-x-2 transition-transform" />
                </button>
                <a
                  href="#"
                  download="Saimedh_Resume.pdf"
                  className="group flex items-center space-x-4 text-sm font-bold tracking-widest uppercase text-muted hover:text-primary transition-all"
                >
                  <span>Download Resume</span>
                  <div className="w-10 h-10 bg-white border border-border group-hover:bg-primary group-hover:text-white group-hover:border-primary rounded-full flex items-center justify-center transition-all shadow-sm">
                    <FileDown size={18} />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Academic Excellence Bento Grid */}
        <section className="mb-48">
          <div className="flex flex-col mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-4">Highlights</span>
            <h2 className="text-5xl font-black tracking-tighter uppercase">Academic & Leadership</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <motion.div
              whileHover={{ y: -8 }}
              className="md:col-span-2 p-12 bg-white border border-border/50 rounded-[2.5rem] flex flex-col justify-between min-h-[400px] shadow-sm hover:shadow-2xl hover:shadow-primary/5 transition-all"
            >
              <div className="flex justify-between items-start">
                <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center text-primary">
                  <GraduationCap size={32} />
                </div>
                <div className="px-4 py-1.5 bg-primary/10 text-primary rounded-full text-[10px] font-bold uppercase tracking-widest">
                  Leadership
                </div>
              </div>
              <div>
                <h3 className="text-4xl font-black tracking-tighter mb-6 uppercase leading-none">Google Student <br /> Ambassador</h3>
                <p className="text-muted text-lg max-w-md leading-relaxed">
                  Representing Google on campus, organizing technical workshops, and fostering a community of student developers.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -8 }}
              className="p-12 bg-dark text-white rounded-[2.5rem] flex flex-col justify-between min-h-[400px] shadow-xl"
            >
              <div className="text-7xl font-black tracking-tighter gradient-text">8.96</div>
              <div>
                <h3 className="text-2xl font-bold tracking-tighter mb-3 uppercase">Diploma CGPA</h3>
                <p className="text-white/50 text-sm leading-relaxed">Academic excellence in Computer Science and Engineering during diploma studies.</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              className="p-12 bg-primary text-white rounded-[2.5rem] flex flex-col justify-between min-h-[400px] shadow-xl shadow-primary/20"
            >
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
                <Sparkles size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold tracking-tighter mb-3 uppercase">Creative Lab</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-6">Experimenting with AI-driven visual storytelling and generative motion.</p>
                <button 
                  onClick={() => setActivePage('lab')}
                  className="group flex items-center space-x-2 text-xs font-bold uppercase tracking-widest"
                >
                  <span>Explore Lab</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              className="md:col-span-4 p-12 bg-white border border-border/50 rounded-[2.5rem] flex flex-col md:flex-row md:items-center justify-between min-h-[300px] shadow-sm hover:shadow-2xl hover:shadow-primary/5 transition-all"
            >
              <div className="max-w-xl">
                <h3 className="text-5xl font-black tracking-tighter mb-6 uppercase leading-none">Technical <br /> Proficiency</h3>
                <p className="text-muted text-lg leading-relaxed">
                  Mastering the technologies of tomorrow. From core programming to 
                  advanced machine learning models and intelligent systems.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 mt-8 md:mt-0 md:max-w-xs justify-end">
                {['Python', 'C++', 'Java', 'AI/ML', 'React', 'SQL'].map(tag => (
                  <span key={tag} className="px-5 py-2.5 bg-secondary border border-border/50 rounded-xl text-[10px] font-bold uppercase tracking-widest shadow-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Detailed About Section */}
        <section className="mb-48 py-32 relative">
          <div className="absolute inset-0 bg-white -mx-6 -z-10" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="sticky top-32"
              >
                <span className="text-xs font-bold uppercase tracking-[0.4em] text-primary mb-8 block">About Me</span>
                <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.8] mb-12">
                  The <br /> Engineer <br /> Behind <br /> The Code
                </h2>
                <div className="w-24 h-2 bg-primary rounded-full" />
              </motion.div>
            </div>
            
            <div className="lg:col-span-7 space-y-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <p className="text-3xl md:text-4xl text-dark leading-[1.1] font-serif italic mb-10">
                  "Engineering is about solving complex problems with <span className="text-primary">elegant</span>, efficient, and scalable solutions."
                </p>
                <p className="text-xl text-muted leading-relaxed font-light">
                  I believe in a logic-driven approach, where every line of code is written with performance and scalability in mind. 
                  My goal is to build intelligent systems that solve real-world problems and push the boundaries of what's possible with AI.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-16 border-t border-border/50">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 text-primary">Background</h4>
                  <p className="text-muted leading-relaxed font-light">
                    Fascinated by the logic of systems from a young age, I pursued Computer Science and Engineering. 
                    Starting with a Diploma and now pursuing B.Tech at CMR Institute of Technology, 
                    I've consistently maintained high academic standards while exploring the depths of AI and ML.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 text-primary">Approach</h4>
                  <p className="text-muted leading-relaxed font-light">
                    My work bridges the gap between core engineering principles and advanced artificial intelligence. 
                    I specialize in developing efficient algorithms and intelligent models, often incorporating 
                    generative AI to explore new frontiers in computer science.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Selected Works Preview */}
        <section className="mb-40">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-4 block">Portfolio</span>
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.8]">Selected <br /> Works</h2>
            </div>
            <button
              onClick={() => setActivePage('projects')}
              className="group flex items-center space-x-3 text-sm font-bold uppercase tracking-widest"
            >
              <span className="border-b-2 border-dark group-hover:border-primary group-hover:text-primary transition-all pb-1">View all projects</span>
              <div className="w-10 h-10 rounded-full border border-dark group-hover:border-primary group-hover:bg-primary group-hover:text-white flex items-center justify-center transition-all">
                <ArrowRight size={18} />
              </div>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {featuredProjects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index} 
                onClick={onProjectClick}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
