import React from 'react';
import { motion } from 'framer-motion';

const PageTransition = ({ children, className }) => {
    // Custom easing for that "heavy" mechanical feel
    const transitionEase = [0.76, 0, 0.24, 1];

    return (
        <div className={`w-full min-h-screen relative overflow-hidden ${className}`}>
            {/* Main Content Fade-in */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full"
            >
                {children}
            </motion.div>

            {/* Top Half Curtain */}
            <motion.div
                className="fixed top-0 left-0 w-full h-[50vh] bg-[#1a1a1a] z-[9999] pointer-events-none"
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{ 
                    duration: 0.8, 
                    ease: transitionEase 
                }}
                style={{ originY: 0 }} // Scales UP to the top
            />

            {/* Bottom Half Curtain */}
            <motion.div
                className="fixed bottom-0 left-0 w-full h-[50vh] bg-[#1a1a1a] z-[9999] pointer-events-none"
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{ 
                    duration: 0.8, 
                    ease: transitionEase 
                }}
                style={{ originY: 1 }} // Scales DOWN to the bottom
            />

            {/* Logo/Dot in the Middle during the cut */}
            <motion.div
                className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[10000] pointer-events-none"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0, scale: 0 }}
                exit={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.4 }}
            >
                <div className="flex items-center gap-2 bg-green-500 px-6 py-2 rounded-full shadow-2xl">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <span className="text-white font-bold tracking-[0.3em] uppercase text-[10px] font-['Oswald']">
                        Zeeshan
                    </span>
                </div>
            </motion.div>
        </div>
    );
};

export default PageTransition;