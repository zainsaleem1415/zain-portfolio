import { motion, AnimatePresence } from 'framer-motion';
import Header from './Header';
import About from './About';
import { X, MapPin, Phone, Linkedin, Instagram, Dribbble, Twitter } from 'lucide-react';
import { useState } from 'react';

const Hero2 = () => {
  const [showAboutModal, setShowAboutModal] = useState(false);

  // Stagger animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  return (
    <div className="relative min-h-screen w-screen bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] text-white font-sans selection:bg-yellow-500 overflow-hidden flex flex-col">
      <Header onOpenAbout={() => setShowAboutModal(true)} />

      {/* Modal Overlay */}
      <AnimatePresence>
        {showAboutModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={() => setShowAboutModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-6xl h-[90vh] bg-[#111] rounded-3xl overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowAboutModal(false)}
                className="absolute top-6 right-6 z-50 p-2 bg-[#222] hover:bg-yellow-500 hover:text-white transition-colors duration-300 rounded-full"
              >
                <X size={24} />
              </button>
              <div className="h-full overflow-y-auto custom-scrollbar">
                <div className="transform scale-90 origin-top">
                  <About />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.main
        className="flex-grow relative z-10 container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-12 gap-4 h-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >

        {/* Left Column */}
        <div className="md:col-span-4 flex flex-col justify-between space-y-6 z-20">
          {/* Header Text */}
          <motion.div variants={itemVariants}>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white/90 leading-[0.9]">
              ZEESHAN<br />
              <span className="text-white/50">NAME</span>
            </h1>
            <p className="text-xl text-yellow-500 font-medium mt-2 tracking-widest uppercase">
              Senior Web Developer
            </p>
          </motion.div>

          {/* Overview Card */}
          <motion.div
            variants={itemVariants}
            className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-xl hover:bg-white/10 transition-colors duration-300"
          >
            <h3 className="text-xl font-bold mb-4 border-b border-white/10 pb-2">A brief overview of me</h3>
            <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
              <div>
                <span className="text-green-400 font-bold text-xl block">180+</span>
                <span className="text-gray-400">Projects</span>
              </div>
              <div>
                <span className="text-green-400 font-bold text-xl block">10+</span>
                <span className="text-gray-400">Years Exp.</span>
              </div>
              <div>
                <span className="text-green-400 font-bold text-xl block">50+</span>
                <span className="text-gray-400">Clients</span>
              </div>
              <div>
                <span className="text-green-400 font-bold text-xl block">5+</span>
                <span className="text-gray-400">Awards</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              I'm a Full Stack Developer & UI/UX Designer blending engineering with art.
              I build high-performance, beautiful web applications that solve real-world problems.
              "Code like an engineer, design like an artist."
            </p>
          </motion.div>

          {/* Skills & Contact */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <h4 className="text-yellow-500 font-bold mb-2 uppercase tracking-wide">Skills</h4>
              <ul className="text-gray-300 text-sm space-y-1 font-medium">
                <li>React / Next.js</li>
                <li>Three.js / WebGL</li>
                <li>UI / UX Design</li>
                <li>Node.js / Python</li>
                <li>Motion Graphics</li>
              </ul>
            </div>

            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-yellow-500" />
                <span>New Delhi, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-yellow-500" />
                <span>+91 987 654 3210</span>
              </div>
              <div className="flex gap-4 mt-4 text-white">
                <a href="#" className="hover:text-yellow-500 transition-colors"><Linkedin size={20} /></a>
                <a href="#" className="hover:text-yellow-500 transition-colors"><Instagram size={20} /></a>
                <a href="#" className="hover:text-yellow-500 transition-colors"><Dribbble size={20} /></a>
                <a href="#" className="hover:text-yellow-500 transition-colors"><Twitter size={20} /></a>
              </div>
              <p className="text-xs text-gray-500 mt-1">@zeeshan_dev</p>
            </div>
          </motion.div>
        </div>

        {/* Center Image */}
        <div className="md:col-span-4 relative flex items-end justify-center z-10">
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/20 via-transparent to-transparent opacity-50 blur-3xl"></div>
          <motion.img
            src="/1.png"
            alt="Portrait"
            className="w-full h-auto object-contain max-h-[85vh] drop-shadow-2xl z-10"
            initial={{ opacity: 0, scale: 0.95, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </div>

        {/* Right Column */}
        <div className="md:col-span-4 flex flex-col justify-between space-y-6 z-20">

          {/* Education */}
          <motion.div variants={itemVariants} className="bg-[#2a382a] border-l-4 border-green-500 p-4 rounded-r-xl self-end w-full max-w-sm">
            <h4 className="text-green-400 font-bold uppercase mb-1">Education</h4>
            <p className="text-white text-sm font-medium">B.Tech in Computer Science</p>
            <p className="text-gray-400 text-xs">University of Technology</p>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div variants={itemVariants} className="flex-grow flex flex-col justify-center space-y-4 pl-4">
            {[
              { year: '2023-Present', role: 'Senior Frontend Dev', company: 'Tech Corp' },
              { year: '2021-2023', role: 'UI/UX Designer', company: 'Creative Studio' },
              { year: '2019-2021', role: 'Junior Developer', company: 'Startup Inc' },
              { year: '2018-2019', role: 'Intern', company: 'Design Agency' },
            ].map((exp, index) => (
              <div key={index} className="relative pl-6 border-l border-gray-700 hover:border-yellow-500 transition-colors group">
                <span className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-gray-600 group-hover:bg-yellow-500 transition-colors"></span>
                <span className="inline-block bg-gray-800 text-xs px-2 py-0.5 rounded text-gray-400 mb-1">{exp.year}</span>
                <h5 className="text-white font-bold text-sm">{exp.role}</h5>
                <p className="text-gray-500 text-xs">{exp.company}</p>
              </div>
            ))}
          </motion.div>

          {/* Partners Card */}
          <motion.div
            variants={itemVariants}
            className="bg-black/40 backdrop-blur-md border border-white/10 p-6 rounded-2xl relative overflow-hidden"
          >
            <h4 className="text-green-400 font-bold uppercase mb-4 text-sm tracking-wider">Premier Partners</h4>
            <div className="grid grid-cols-4 gap-4 opacity-70">
              {/* Placeholders for logos */}
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="h-8 bg-white/10 rounded flex items-center justify-center text-[10px] text-gray-500 hover:bg-white/20 hover:text-white transition-all cursor-pointer">
                  LOGO
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </motion.main>
    </div>
  );
};

export default Hero2;