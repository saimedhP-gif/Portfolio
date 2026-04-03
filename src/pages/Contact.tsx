import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from '../components/SectionHeading';
import { Send, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="pt-32 pb-20 px-6 overflow-hidden relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[30%] h-[30%] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          title="Let's Work Together" 
          subtitle="Have a project in mind or just want to say hello? I'd love to hear from you."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6">
              <motion.a 
                href="mailto:saimedhp@gmail.com"
                whileHover={{ scale: 1.02 }}
                className="flex items-center p-6 bg-white border border-border/50 rounded-[2rem] shadow-sm hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 transition-all group"
              >
                <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                  <Mail size={28} className="text-primary" />
                </div>
                <div className="ml-6">
                  <p className="text-[10px] font-black text-muted uppercase tracking-[0.2em] mb-1">Email</p>
                  <p className="text-xl font-black tracking-tighter group-hover:text-primary transition-colors">
                    saimedhp@gmail.com
                  </p>
                </div>
              </motion.a>

              <motion.a 
                href="tel:+919704093430"
                whileHover={{ scale: 1.02 }}
                className="flex items-center p-6 bg-white border border-border/50 rounded-[2rem] shadow-sm hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 transition-all group"
              >
                <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                  <Phone size={28} className="text-primary" />
                </div>
                <div className="ml-6">
                  <p className="text-[10px] font-black text-muted uppercase tracking-[0.2em] mb-1">Phone</p>
                  <p className="text-xl font-black tracking-tighter group-hover:text-primary transition-colors">
                    +91 97040 93430
                  </p>
                </div>
              </motion.a>

              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="flex items-center p-6 bg-white border border-border/50 rounded-[2rem] shadow-sm hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 transition-all group"
              >
                <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                  <MapPin size={28} className="text-primary" />
                </div>
                <div className="ml-6">
                  <p className="text-[10px] font-black text-muted uppercase tracking-[0.2em] mb-1">Location</p>
                  <p className="text-xl font-black tracking-tighter group-hover:text-primary transition-colors">
                    Hyderabad, India
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="p-10 bg-dark text-white rounded-[2.5rem] relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h4 className="text-2xl font-black tracking-tighter mb-4 uppercase relative z-10">Availability</h4>
              <p className="text-white/70 text-lg font-light leading-relaxed mb-8 relative z-10">
                I'm currently open to new opportunities and freelance projects. 
                Typical response time is within 24 hours.
              </p>
              <div className="flex items-center space-x-4 relative z-10 bg-white/10 w-fit px-5 py-3 rounded-2xl backdrop-blur-sm border border-white/10">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </div>
                <span className="font-black uppercase tracking-[0.2em] text-[10px]">Available for work</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-10 rounded-[2.5rem] border border-border/50 shadow-xl shadow-primary/5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted flex items-center">
                    <span className="w-3 h-px bg-muted/30 mr-2" />
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-secondary/50 border border-border/50 rounded-2xl p-5 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium"
                    placeholder="John Doe"
                    value={formState.name}
                    onChange={e => setFormState({...formState, name: e.target.value})}
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted flex items-center">
                    <span className="w-3 h-px bg-muted/30 mr-2" />
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full bg-secondary/50 border border-border/50 rounded-2xl p-5 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium"
                    placeholder="john@example.com"
                    value={formState.email}
                    onChange={e => setFormState({...formState, email: e.target.value})}
                  />
                </div>
              </div>
              
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted flex items-center">
                  <span className="w-3 h-px bg-muted/30 mr-2" />
                  Subject
                </label>
                <input
                  type="text"
                  required
                  className="w-full bg-secondary/50 border border-border/50 rounded-2xl p-5 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium"
                  placeholder="Project Inquiry"
                  value={formState.subject}
                  onChange={e => setFormState({...formState, subject: e.target.value})}
                />
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted flex items-center">
                  <span className="w-3 h-px bg-muted/30 mr-2" />
                  Message
                </label>
                <textarea
                  required
                  rows={6}
                  className="w-full bg-secondary/50 border border-border/50 rounded-2xl p-5 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none font-medium leading-relaxed"
                  placeholder="Tell me about your project..."
                  value={formState.message}
                  onChange={e => setFormState({...formState, message: e.target.value})}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitted}
                className="w-full bg-primary text-white rounded-2xl py-5 font-black uppercase tracking-[0.2em] text-[11px] flex items-center justify-center space-x-4 hover:bg-primary-dark hover:shadow-2xl hover:shadow-primary/20 transition-all transform hover:-translate-y-1 disabled:opacity-50 disabled:transform-none mt-4"
              >
                {isSubmitted ? (
                  <span>Message Sent!</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
