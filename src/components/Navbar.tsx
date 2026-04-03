import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, FileDown } from 'lucide-react';
import { cn } from '../lib/utils';

interface NavbarProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Academic & Experience' },
  { id: 'lab', label: 'Lab' },
  { id: 'contact', label: 'Contact' },
];

export function Navbar({ activePage, setActivePage }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4',
        isScrolled ? 'bg-white/70 backdrop-blur-xl border-b border-border/50 shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <button 
          onClick={() => setActivePage('home')}
          className="text-2xl font-black tracking-tighter font-display uppercase group flex items-center space-x-2"
        >
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white text-xs transform group-hover:rotate-12 transition-transform">PS</div>
          <span className="gradient-text">SAIMEDH</span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              className={cn(
                'text-sm font-semibold transition-all hover:text-primary relative py-1 uppercase tracking-wider',
                activePage === item.id ? 'text-primary' : 'text-muted'
              )}
            >
              {item.label}
              {activePage === item.id && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                />
              )}
            </button>
          ))}
          <a
            href="#"
            download="Saimedh_Resume.pdf"
            className="flex items-center space-x-2 px-5 py-2.5 bg-primary text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <FileDown size={14} />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-border p-6 md:hidden flex flex-col space-y-4"
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActivePage(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={cn(
                  'text-lg font-medium text-left',
                  activePage === item.id ? 'text-primary' : 'text-muted'
                )}
              >
                {item.label}
              </button>
            ))}
            <a
              href="#"
              download="Saimedh_Resume.pdf"
              className="flex items-center justify-center space-x-2 px-6 py-4 bg-primary text-white rounded-2xl text-sm font-bold uppercase tracking-widest"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FileDown size={18} />
              <span>Download Resume</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
