import { motion, AnimatePresence } from 'framer-motion';
import { X, ContactRound, Briefcase, Mail, ExternalLink } from 'lucide-react';
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { useState } from 'react';

import { CONTACT_INFO, SOCIAL_LINKS } from '../constants/socials';
import { personalInfo, stats as aboutStats, skills, experience, education } from '../constants/aboutData';

const Hero = () => {
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const stats = [
    { value: "08+", label: "Months Exp." },
    { value: "12", label: "Projects" },
    { value: "99%", label: "Satisfaction" },
  ];

  const services = [
    { title: "FULL-STACK DEV", desc: "Building scalable, high-performance web applications." },
    { title: "UI/UX DESIGN", desc: "Creating intuitive, user-centered digital experiences." },
    { title: "BRAND STRATEGY", desc: "Visual storytelling that makes brands unforgettable." },
    { title: "PROTOTYPING", desc: "Interactive mockups to validate ideas fast." }
  ];

  return (
    <div className="relative h-screen w-[100vw] bg-[#E3E3E1] text-[#1a1a1a] font-['Inter'] selection:bg-black selection:text-white overflow-hidden flex flex-col">

      {/* Top Bar */}
      <nav className="w-full z-50 px-8 py-6 flex justify-between items-center fixed top-0 left-0">
        <div className="flex items-center gap-2 border py-1 bg-[#1a1a1a] px-4 rounded-full">
          <div className="relative flex h-4 w-4">
            <span className="animate-ping absolute h-full w-full rounded-full bg-green-500 opacity-75"></span>
            <div className="relative rounded-full h-4 w-4 bg-green-500"></div>
          </div>
          <span className="font-['Oswald'] text-lg mb-1 text-white font-semibold tracking-wider">Open to Work</span>
        </div>

        <button
          onClick={() => setShowAboutModal(true)}
          className="group relative bg-[#1a1a1a] text-white px-6 py-2 rounded-full flex items-center justify-center transition-all duration-500 hover:bg-black min-w-32 h-10 overflow-hidden"
        >
          <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 transform -translate-y-[150%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
            <Briefcase size={24} />
          </div>
          <span className="font-medium text-sm tracking-wide transition-all duration-300 group-hover:translate-y-[150%] group-hover:opacity-0">
            About Me
          </span>
        </button>
      </nav>

      <main className="flex-grow flex flex-col justify-center px-6 md:px-12 pt-20 pb-6 h-full max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-8 items-center flex-grow">

          {/* Left Column */}
          <motion.div className="md:col-span-4 space-y-4 lg:space-y-6" initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.h3 variants={fadeInUp} className="text-lg md:text-xl font-serif text-gray-600">Hey. I'm Zeeshan,</motion.h3>
            <motion.div variants={fadeInUp} className="leading-none">
              <h1 className="font-['Oswald'] font-bold text-4xl lg:text-6xl xl:text-7xl text-[#1a1a1a]">A WEB<br />DEVELOPER</h1>
            </motion.div>
            <motion.p variants={fadeInUp} className="text-gray-600 max-w-sm text-base lg:text-lg leading-snug">
              Transforming complex ideas into seamless digital realities with clean, scalable code.
            </motion.p>

            <motion.button
              onClick={() => setShowContactModal(true)}
              variants={fadeInUp}
              className="group relative flex items-center justify-center bg-[#1a1a1a] text-white rounded-full transition-all duration-500 hover:bg-black min-w-40 h-12 overflow-hidden"
            >
              <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 transform -translate-y-[150%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                <ContactRound size={24} />
              </div>
              <span className="font-medium tracking-wide transition-all duration-300 group-hover:translate-y-[150%] group-hover:opacity-0">
                CONTACT ME
              </span>
            </motion.button>
          </motion.div>

          {/* Center Column */}
          <motion.div
            className="md:col-span-4 h-[55vh] lg:h-[65vh] flex items-end justify-center relative self-end mb-[-2px] z-10"
            initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          >
            <div className="absolute top-0 w-full h-full bg-[#D1D1CD] rounded-t-[100px] rounded-b-[150px] lg:rounded-b-[200px] z-0 shadow-xl"></div>
            <div className="absolute top-0 w-full h-full flex items-end justify-center overflow-hidden rounded-b-[150px] lg:rounded-b-[200px] z-10">
              <img src="/1.png" alt="Portrait" className="w-auto h-[110%] object-cover object-bottom" />
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div className="md:col-span-4 flex flex-row md:flex-col justify-around md:justify-center md:items-end md:gap-10 text-center md:text-right" initial="hidden" animate="visible" variants={staggerContainer}>
            {stats.map((stat, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <h2 className="font-['Oswald'] font-bold text-3xl lg:text-5xl text-[#1a1a1a] leading-none">{stat.value}</h2>
                <p className="font-serif italic text-gray-500 text-sm lg:text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8 mt-6 pt-6 border-t border-gray-400/30" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {services.map((service, index) => (
            <div key={index} className="space-y-1">
              <h4 className="font-['Oswald'] font-bold text-sm lg:text-base uppercase tracking-wider">{service.title}</h4>
              <p className="text-gray-500 text-xs lg:text-sm leading-tight max-w-[180px] hidden sm:block">{service.desc}</p>
            </div>
          ))}
        </motion.div>
      </main>

      <AnimatePresence>
        {/* About Modal */}
        {showAboutModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md" onClick={() => setShowAboutModal(false)}>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-[95vw] max-w-6xl h-[85vh] bg-[#111] rounded-3xl overflow-hidden border border-white/10" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setShowAboutModal(false)} className="absolute top-6 right-6 z-50 p-2 bg-white/10 hover:bg-pink-500 rounded-full transition-colors">
                <X size={20} className="text-white" />
              </button>
              <div className="h-full overflow-y-auto p-8 lg:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {/* Left Col: Bio & Personal Info */}
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-4xl lg:text-5xl font-['Oswald'] font-bold text-white uppercase mb-2">About <span className="text-gray-500">Me</span></h2>
                      <p className="text-gray-400 leading-relaxed">
                        I am a passionate Full Stack Developer with a knack for identifying problems and solving them through code.
                        I specialize in building clean, modern, and responsive web applications.
                      </p>
                    </div>

                    <div className="space-y-4">
                      {personalInfo.slice(0, 5).map((item, index) => (
                        <div key={index} className="flex justify-between border-b border-white/10 pb-2 text-sm">
                          <span className="text-gray-500">{item.label}</span>
                          <span className={`font-bold uppercase ${item.isGreen ? 'text-green-500' : 'text-white'}`}>{item.value}</span>
                        </div>
                      ))}
                    </div>

                    {/* Latest Experience */}
                    <div>
                      <h3 className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-4">Latest Experience</h3>
                      <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                        <span className="text-green-500 text-[10px] font-bold tracking-widest uppercase mb-1 block">{experience[0].time}</span>
                        <h4 className="text-xl font-['Oswald'] text-white font-bold uppercase">{experience[0].title}</h4>
                        <p className="text-gray-400 text-sm mt-2">{experience[0].description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Right Col: Stats & Skills */}
                  <div className="space-y-8">
                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      {aboutStats.map((stat, index) => (
                        <div key={index} className="bg-white/5 p-6 rounded-2xl text-center border border-white/5 hover:bg-white/10 transition-colors">
                          <h3 className="text-3xl font-bold text-white font-['Oswald']">{stat.number}<span className="text-green-500 text-lg">{stat.suffix}</span></h3>
                          <p className="text-[10px] uppercase tracking-widest text-gray-400 mt-1">{stat.text}</p>
                        </div>
                      ))}
                    </div>

                    {/* Top Skills */}
                    <div>
                      <h3 className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-4">Core Technologies</h3>
                      <div className="grid grid-cols-4 gap-4">
                        {skills.slice(0, 8).map((skill, index) => (
                          <div key={index} className="aspect-square bg-white/5 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all group" title={skill.label}>
                            <skill.icon size={28} style={{ color: skill.color }} className="filter grayscale group-hover:grayscale-0 transition-all duration-300" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* Contact Quick View Modal (Updated to be more noticeable) */}
        {showContactModal && (
          <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setShowContactModal(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-xl"
            />

            <motion.div
              initial={{ y: 100, scale: 0.9, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 100, scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-md bg-gradient-to-b from-[#222] to-[#111] p-1 rounded-[2.5rem] border border-white/20 shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative bg-[#111] rounded-[2.3rem] p-8">
                <button onClick={() => setShowContactModal(false)} className="absolute top-6 right-6 p-2 text-white/40 hover:text-white hover:bg-white/10 rounded-full transition-all">
                  <X size={20} />
                </button>

                {/* Profile Circle in Modal */}
                <div className="flex flex-col items-center mb-8">
                  <div className="relative w-24 h-24 rounded-full border-2 border-green-500/50 p-1 mb-4">
                    <div className="w-full h-full rounded-full overflow-hidden bg-[#222]">
                      <img src="/1.png" alt="Zeeshan" className="w-full h-full object-cover object-top scale-125 translate-y-2" />
                    </div>
                    <div className="absolute bottom-0 right-0 w-6 h-6 bg-green-500 rounded-full border-4 border-[#111] flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  <h2 className="font-['Oswald'] text-3xl text-white tracking-tight">LET'S WORK TOGETHER</h2>
                  <p className="text-gray-400 text-sm mt-1">Typically responds within 2 hours</p>
                </div>

                <div className="space-y-4">
                  <motion.a
                    whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                    href={`mailto:${CONTACT_INFO.EMAIL}`}
                    className="flex items-center justify-between p-4 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 hover:border-green-500/50 transition-all group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-green-500/20 rounded-xl text-green-500 group-hover:bg-green-500 group-hover:text-black transition-colors">
                        <Mail size={20} />
                      </div>
                      <div className="text-left">
                        <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Email Me</p>
                        <p className="text-sm text-gray-200">{CONTACT_INFO.EMAIL}</p>
                      </div>
                    </div>
                    <ExternalLink size={16} className="text-gray-600 group-hover:text-white" />
                  </motion.a>

                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { icon: <FaWhatsapp size={22} />, url: SOCIAL_LINKS.WHATSAPP, color: "hover:bg-green-500/20 hover:text-green-500" },
                      { icon: <FaLinkedin size={22} />, url: SOCIAL_LINKS.LINKEDIN, color: "hover:bg-blue-500/20 hover:text-blue-500" },
                      { icon: <FaGithub size={22} />, url: SOCIAL_LINKS.GITHUB, color: "hover:bg-white/10 hover:text-white" }
                    ].map((social, i) => (
                      <motion.a
                        key={i} whileHover={{ y: -5 }}
                        href={social.url} target="_blank"
                        className={`flex items-center justify-center p-4 bg-white/5 rounded-2xl text-white/40 transition-all ${social.color}`}
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Hero;