import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Briefcase, FileText, Contact2Icon, Link, Menu } from 'lucide-react';

const navItems = [
  { id: 'home', label: 'ME', icon: User },
  { id: 'about', label: 'About', icon: Briefcase },
  { id: 'portfolio', label: 'Portfolio', icon: FileText },
  { id: 'contact', label: 'Contact', icon: Contact2Icon },
  { id: 'links', label: 'Links', icon: Link },
];

function Navigation({ activeSection, setActiveSection }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!isHovered) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 3000);

      return () => clearTimeout(timer);
    } else {
      setIsVisible(true);
    }
  }, [isHovered]);

  const navVariants = {
    hidden: {
      width: 50,
      height: 50,
      borderRadius: 50,
      opacity: 0.4,
      scale: 0.8,
    },
    visible: {
      width: 'auto',
      height: 'auto',
      borderRadius: 9999,
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 14,
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <motion.nav
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial="hidden"
      animate={isVisible || isHovered ? "visible" : "hidden"}
      variants={navVariants}
      className="fixed z-50 top-6 left-1/2 -translate-x-1/2 overflow-hidden shadow-2xl cursor-pointer"
    >
      <div className="relative flex items-center justify-center gap-1 md:gap-2 p-2 bg-black/60 backdrop-blur-lg border border-white/10 rounded-full h-full w-full">
        {/* Menu Icon for collapsed state */}
        <AnimatePresence>
          {(!isVisible && !isHovered) && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Menu className="text-white" size={24} />
            </motion.div>
          )}
        </AnimatePresence>

        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <motion.button
              key={item.id}
              variants={itemVariants}
              onClick={() => setActiveSection(item.id)}
              className={`relative flex items-center justify-center gap-2 px-3 md:px-6 py-2 md:py-3 rounded-full transition-colors duration-300 ${isActive ? 'text-black' : 'text-white hover:text-gray-300'
                }`}
            >
              {isActive && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-white rounded-full"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}

              <item.icon size={18} className="relative z-10" />

              {(isVisible || isHovered) && (
                <span className="relative z-10 font-medium text-sm hidden sm:block">
                  {item.label}
                </span>
              )}
            </motion.button>
          );
        })}
      </div>
    </motion.nav>
  );
}

export default Navigation;