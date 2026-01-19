import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Search } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Man-O-Man',
    category: 'Web App',
    tech: 'React • Node.js',
    description: 'The Clothing Brand Fashion you deserve.',
    link: 'https://github.com/ZeeshanMalik1/Man-O-Man',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'School Mgmt System',
    category: 'Full Stack',
    tech: 'MERN Stack',
    description: 'Comprehensive school management solution.',
    link: 'https://github.com/ZeeshanMalik1/school-mangemet-system',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'UOS Merit Check',
    category: 'Tools',
    tech: 'CSS • JavaScript',
    description: 'Merit calculation tool for UOS students.',
    link: 'https://github.com/ZeeshanMalik1/uos-merit-check',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'SIHS Portal',
    category: 'Web App',
    tech: 'JavaScript • Firebase',
    description: 'Student portal for SIHS institute.',
    link: 'https://github.com/ZeeshanMalik1/sihs-new-1',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 5,
    title: 'My Portfolio',
    category: 'Web App',
    tech: 'React • Framer Motion',
    description: 'Personal portfolio showcasing my work.',
    link: 'https://github.com/ZeeshanMalik1/my_portfolio',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 6,
    title: 'Medical College',
    category: 'Website',
    tech: 'HTML • CSS • JS',
    description: 'Informational website for Sargodha Medical College.',
    link: 'https://github.com/ZeeshanMalik1/sargodha-medical-collage',
    image: 'https://images.unsplash.com/photo-1519494026892-80ba456f30f0?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 7,
    title: 'Harvard Clone',
    category: 'Website',
    tech: 'Frontend',
    description: 'Replica of the Harvard University website.',
    link: 'https://github.com/ZeeshanMalik1/harvard',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 8,
    title: 'Usman\'s Gallery',
    category: 'Website',
    tech: 'Grid Layout',
    description: 'A curated photo gallery display.',
    link: 'https://github.com/ZeeshanMalik1/usman-s-gallery',
    image: 'https://images.unsplash.com/photo-1500051638674-ff996a0ec29e?q=80&w=600&auto=format&fit=crop'
  },
];

const filters = ['All', 'Web App', 'Full Stack', 'Website', 'Tools'];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="bg-[#E3E3E1] text-[#1a1a1a] py-24 min-h-screen w-[98.5vw] relative overflow-hidden font-['Oswald']">

      {/* Background Decorative Text (Matches History Section) */}
      <div className="absolute top-20 text-center w-full overflow-hidden pointer-events-none opacity-[0.04]">
        <h1 className="text-[15rem] font-bold uppercase whitespace-nowrap leading-none">
          PORTFOLIO
        </h1>
      </div>

      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">

        {/* Header Section (Synced with About Header) */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="space-y-4">
            <div className="flex items-center border w-fit px-4 py-2 text-white rounded-full bg-black gap-3">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute h-full w-full rounded-full bg-[#e3e3e1] "></span>
                <div className="rounded-full h-2 w-2 bg-[#e3e3e1]"></div>
              </div>
              <span className="text-[10px] font-bold tracking-widest uppercase">My Showcase</span>
            </div>
            <h2 className="font-bold text-5xl lg:text-8xl uppercase leading-[0.85]">
              FEATURED <br /> <span className="text-gray-400">CREATIONS</span>
            </h2>
          </div>

          {/* Custom Filter Pills */}
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full border text-[11px] font-bold uppercase tracking-widest transition-all duration-300
                  ${activeFilter === filter
                    ? 'bg-black text-white border-black'
                    : 'border-gray-400/30 text-gray-500 hover:border-black hover:text-black'}
                `}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: "circOut" }}
                className="group relative"
              >
                {/* Image Container with Custom Border logic */}
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-white shadow-sm border border-transparent group-hover:border-green-500/50 transition-colors duration-500">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />

                  {/* Modern Overlay */}
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[2px] flex flex-col justify-end p-8">
                    <div className="flex justify-between items-start mb-4">
                      <div className="space-y-1">
                        <span className="text-green-500 text-[10px] font-bold tracking-[0.3em] uppercase block transform -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                          {project.category}
                        </span>
                        <h3 className="text-2xl font-bold text-white uppercase transform -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                          {project.title}
                        </h3>
                      </div>
                      <div className="flex gap-2">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white/10 rounded-full hover:bg-green-500 transition-colors text-white"
                        >
                          <ExternalLink size={18} />
                        </a>
                      </div>
                    </div>

                    {/* Tech Tags */}
                    <div className="pt-4 border-t border-white/10 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                      <span className="font-sans text-[11px] text-gray-400 italic">{project.tech}</span>
                      <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                    </div>
                  </div>
                </div>

                {/* Visible Info Below (optional, keep clean) */}
                <div className="mt-4 flex justify-between items-center px-2">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">0{project.id} / Project</span>
                  <div className="h-[1px] flex-grow mx-4 bg-gray-400/20"></div>
                  <Search size={14} className="text-gray-400" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;