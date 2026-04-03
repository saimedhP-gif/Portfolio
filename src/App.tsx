/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { Education } from './pages/Education';
import { Contact } from './pages/Contact';
import { CreativeLab } from './pages/CreativeLab';
import { ProjectDetail } from './pages/ProjectDetail';
import { PROJECTS } from './constants';
import { Key, ExternalLink } from 'lucide-react';

declare global {
  interface Window {
    aistudio: {
      hasSelectedApiKey: () => Promise<boolean>;
      openSelectKey: () => Promise<void>;
    };
  }
}

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [hasApiKey, setHasApiKey] = useState(false);

  const handleProjectClick = (projectId: string) => {
    setSelectedProjectId(projectId);
    setActivePage('project-detail');
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const checkKey = async () => {
      if (window.aistudio) {
        const hasKey = await window.aistudio.hasSelectedApiKey();
        setHasApiKey(hasKey);
      }
    };
    checkKey();
  }, []);

  const handleOpenKeySelector = async () => {
    if (window.aistudio) {
      await window.aistudio.openSelectKey();
      setHasApiKey(true); // Assume success as per instructions
    }
  };

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home setActivePage={setActivePage} onProjectClick={handleProjectClick} />;
      case 'projects':
        return <Projects onProjectClick={handleProjectClick} />;
      case 'project-detail':
        const project = PROJECTS.find(p => p.id === selectedProjectId);
        if (!project) return <Projects onProjectClick={handleProjectClick} />;
        return <ProjectDetail project={project} onBack={() => setActivePage('projects')} />;
      case 'education':
        return <Education />;
        case 'lab':
        if (!hasApiKey) {
          return (
            <div className="pt-40 pb-20 px-6 flex flex-col items-center justify-center min-h-[70vh] text-center relative overflow-hidden">
              {/* Decorative Background */}
              <div className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center">
                <div className="w-[40vw] h-[40vw] bg-primary/5 rounded-full blur-[120px]" />
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white border border-border/50 p-12 rounded-[3rem] shadow-2xl shadow-primary/5 max-w-2xl w-full relative overflow-hidden"
              >
                <div className="w-24 h-24 bg-secondary rounded-[2rem] flex items-center justify-center mb-8 mx-auto rotate-3">
                  <Key size={40} className="text-primary -rotate-3" />
                </div>
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-6">
                  API Key <span className="text-primary">Required</span>
                </h2>
                <p className="text-muted text-lg font-light leading-relaxed mb-10 max-w-md mx-auto">
                  To use the Creative Lab's advanced generation features, you need to select a paid Google Cloud API key.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <button
                    onClick={handleOpenKeySelector}
                    className="w-full sm:w-auto px-10 py-5 bg-dark text-white rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] hover:bg-primary hover:shadow-xl hover:shadow-primary/20 transition-all transform hover:-translate-y-1"
                  >
                    Select API Key
                  </button>
                  <a
                    href="https://ai.google.dev/gemini-api/docs/billing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-10 py-5 bg-secondary text-primary rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] flex items-center justify-center space-x-3 hover:bg-primary/10 transition-all"
                  >
                    <span>Billing Docs</span>
                    <ExternalLink size={16} />
                  </a>
                </div>
              </motion.div>
            </div>
          );
        }
        return (
          <CreativeLab 
            onResetKey={() => setHasApiKey(false)} 
            onSelectKey={handleOpenKeySelector} 
          />
        );
      case 'contact':
        return <Contact />;
      default:
        return <Home setActivePage={setActivePage} onProjectClick={handleProjectClick} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
