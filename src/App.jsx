import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import Navigation from './components/Navigation';
import PageTransition from './components/PageTransition';
import Links from './components/Links';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Sync Theme with System Class
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Reset scroll position on section change for a clean entry
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeSection]);

  const renderSection = () => {
    switch (activeSection) {
      case 'home': return <Hero />;
      case 'about': return <About />;
      case 'portfolio': return <Portfolio />;
      case 'contact': return <Contact />;
      case 'links': return <Links />;
      default: return <Hero />;
    }
  };

  return (
    <div className="selection:bg-green-500 selection:text-white">
      <CustomCursor />

      {/* Theme Toggle (Optional: keep here or move to Header/Nav) 
          If you want to keep your specific theme logic, it stays here.
      */}

      <main className="min-h-screen relative bg-[#E3E3E1] dark:bg-black transition-colors duration-700 ease-in-out">
        <AnimatePresence mode="wait">
          {/* The KEY is vital here. It tells AnimatePresence that 
              the component has changed so it can run the 'exit' animation (Split-Cut).
          */}
          <PageTransition key={activeSection}>
            {renderSection()}
          </PageTransition>
        </AnimatePresence>
      </main>

      <Navigation 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
        isDarkMode={isDarkMode}
        toggleTheme={() => setIsDarkMode(!isDarkMode)}
      />
    </div>
  );
}

export default App;