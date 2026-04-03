import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from '../components/SectionHeading';
import { EDUCATIONS, SKILLS, EXPERIENCES } from '../constants';
import { Award, BookOpen, CheckCircle2, Briefcase, MapPin, Terminal, Cpu, Layers } from 'lucide-react';

export function Education() {
  const getSkillIcon = (category: string) => {
    switch (category) {
      case 'Technical Proficiency':
        return <Terminal size={16} className="text-primary" />;
      case 'AI & Machine Learning':
        return <Cpu size={16} className="text-primary" />;
      case 'Core Engineering':
        return <Layers size={16} className="text-primary" />;
      default:
        return null;
    }
  };

  return (
    <div className="pt-32 pb-20 px-6 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-[20%] right-[-10%] w-[30%] h-[30%] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] left-[-10%] w-[30%] h-[30%] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <span className="text-xs font-bold uppercase tracking-[0.4em] text-primary mb-6 block">Journey</span>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.8] mb-8">
            Academic & <br /> <span className="gradient-text">Experience</span>
          </h1>
          <p className="text-xl text-muted max-w-2xl font-light leading-relaxed">
            A journey of continuous learning, leadership, and technical excellence in the field of Computer Science and AI.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Timeline */}
          <div className="lg:col-span-7 space-y-24">
            {/* Experience Section */}
            <section>
              <div className="flex items-center space-x-6 mb-16">
                <div className="w-14 h-14 bg-dark text-white rounded-2xl flex items-center justify-center shadow-lg">
                  <Briefcase size={28} />
                </div>
                <h2 className="text-4xl font-black tracking-tighter uppercase">Experience & Leadership</h2>
              </div>
              
              <div className="space-y-20 relative">
                <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border/50" />
                {EXPERIENCES.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="relative pl-12"
                  >
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
                      className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-sm z-10" 
                    />
                    <div className="mb-8">
                      <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] bg-primary/5 px-3 py-1 rounded-full">{exp.period}</span>
                      <h3 className="text-3xl font-black tracking-tighter mt-4 uppercase leading-none">{exp.role}</h3>
                      <div className="flex flex-wrap items-center gap-4 mt-3">
                        <p className="text-xl font-medium text-dark/70 font-serif italic">{exp.company}</p>
                        {exp.location && (
                          <div className="flex items-center space-x-1.5 text-muted text-xs font-bold uppercase tracking-widest">
                            <MapPin size={12} className="text-primary" />
                            <span>{exp.location}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <ul className="space-y-5">
                      {exp.details.map((detail, i) => (
                        <motion.li 
                          key={i}
                          initial={{ opacity: 0, x: 10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.5 + (i * 0.1) }}
                          className="flex items-start space-x-4 text-muted text-lg font-light leading-relaxed"
                        >
                          <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0" />
                          <span>{detail}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Education Section */}
            <section>
              <div className="flex items-center space-x-6 mb-16">
                <div className="w-14 h-14 bg-dark text-white rounded-2xl flex items-center justify-center shadow-lg">
                  <BookOpen size={28} />
                </div>
                <h2 className="text-4xl font-black tracking-tighter uppercase">Academic Foundations</h2>
              </div>

              <div className="space-y-20 relative">
                <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border/50" />
                {EDUCATIONS.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="relative pl-12"
                  >
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
                      className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-sm z-10" 
                    />
                    <div className="mb-6">
                      <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] bg-primary/5 px-3 py-1 rounded-full">{edu.period}</span>
                      <h3 className="text-3xl font-black tracking-tighter mt-4 uppercase leading-none">{edu.degree}</h3>
                      <p className="text-xl font-medium text-dark/70 font-serif italic mt-2">{edu.institution}</p>
                    </div>
                    {edu.honors && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.4 }}
                        className="inline-flex items-center space-x-2 px-4 py-1.5 bg-dark text-white text-[10px] font-bold uppercase tracking-widest rounded-lg mb-8 shadow-lg"
                      >
                        <Award size={14} className="text-primary" />
                        <span>{edu.honors}</span>
                      </motion.div>
                    )}
                    <ul className="space-y-5">
                      {edu.details.map((detail, i) => (
                        <motion.li 
                          key={i}
                          initial={{ opacity: 0, x: 10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.5 + (i * 0.1) }}
                          className="flex items-start space-x-4 text-muted text-lg font-light leading-relaxed"
                        >
                          <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0" />
                          <span>{detail}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </section>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-12 bg-white border border-border/50 rounded-[2.5rem] shadow-sm"
            >
              <h4 className="text-2xl font-black tracking-tighter mb-10 uppercase">Certifications</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  'Google UX Design Professional Certificate',
                  'Advanced Interaction Design — Interaction Design Foundation',
                  'Front-End Web Development — Meta',
                  'Design Systems for Scale — Figma Academy'
                ].map((cert, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center space-x-4 p-5 bg-secondary rounded-2xl border border-transparent hover:border-primary/20 transition-all group"
                  >
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                      <CheckCircle2 size={16} />
                    </div>
                    <span className="text-sm font-bold tracking-tight leading-tight">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Skills */}
          <div className="lg:col-span-5 space-y-10">
            <div className="sticky top-32 space-y-10">
              {SKILLS.map((skillGroup, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-10 bg-white border border-border/50 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all"
                >
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-10 flex items-center">
                    <span className="mr-3 p-2 bg-primary/5 rounded-lg">{getSkillIcon(skillGroup.category)}</span>
                    {skillGroup.category}
                  </h4>
                  <div className="space-y-8">
                    {skillGroup.items.map((skill, i) => (
                      <div key={i} className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-xs font-bold uppercase tracking-widest text-dark">{skill.name}</span>
                          <span className="text-[10px] font-black text-primary bg-primary/5 px-2 py-0.5 rounded-md">{skill.level}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ 
                              type: "spring", 
                              stiffness: 50, 
                              damping: 15, 
                              delay: 0.2 + (i * 0.05) 
                            }}
                            className="h-full bg-primary rounded-full shadow-[0_0_10px_rgba(99,102,241,0.3)]"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-10 bg-dark text-white rounded-[2.5rem] relative overflow-hidden group shadow-2xl"
              >
                <motion.div 
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute -right-10 -top-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-colors"
                />
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-8 relative z-10">
                  <BookOpen size={28} className="text-primary" />
                </div>
                <h4 className="text-3xl font-black tracking-tighter mb-6 uppercase relative z-10 leading-none">AI & ML <br /> Focus</h4>
                <p className="text-white/60 leading-relaxed relative z-10 font-light text-lg">
                  Currently exploring the intersection of Artificial Intelligence and 
                  Machine Learning, specifically focusing on how deep learning models 
                  can be optimized for real-time applications.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
