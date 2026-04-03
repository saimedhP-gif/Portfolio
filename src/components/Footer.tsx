import React from 'react';
import { Mail, Github, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-dark text-white py-24 px-6 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-50%] left-[-10%] w-[50%] h-[100%] bg-primary/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter uppercase leading-none">
              Porandla <br />
              <span className="text-primary">Saimedh</span>
            </h2>
            <p className="text-white/60 max-w-md text-lg font-light leading-relaxed">
              Crafting digital experiences that balance aesthetics with functionality. 
              Currently based in Hyderabad, working globally.
            </p>
          </div>
          <div className="flex flex-col md:items-end justify-between">
            <div className="flex space-x-4 mb-12 md:mb-0">
              <a href="https://github.com/saimedhP-gif" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-primary hover:border-primary hover:-translate-y-1 transition-all group">
                <Github size={20} className="text-white/70 group-hover:text-white transition-colors" />
              </a>
              <a href="https://www.linkedin.com/in/sai-medh" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-primary hover:border-primary hover:-translate-y-1 transition-all group">
                <Linkedin size={20} className="text-white/70 group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-primary hover:border-primary hover:-translate-y-1 transition-all group">
                <Instagram size={20} className="text-white/70 group-hover:text-white transition-colors" />
              </a>
              <a href="mailto:saimedhp@gmail.com" className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-primary hover:border-primary hover:-translate-y-1 transition-all group">
                <Mail size={20} className="text-white/70 group-hover:text-white transition-colors" />
              </a>
            </div>
            <div className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em] mt-8">
              © {new Date().getFullYear()} PORANDLA SAIMEDH. All rights reserved.
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-widest text-white/40">
          <div className="flex space-x-8 mb-6 md:mb-0">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
          <div className="flex items-center">
            Designed & Built with <span className="text-primary mx-2">♥</span> Precision
          </div>
        </div>
      </div>
    </footer>
  );
}
