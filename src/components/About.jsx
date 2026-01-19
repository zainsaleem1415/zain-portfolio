import React from 'react';
import { motion } from 'framer-motion';
import { Download, GraduationCap, ArrowUpRight } from 'lucide-react';


import { CONTACT_INFO } from '../constants/socials';

import { personalInfo, stats, skills, experience, education } from '../constants/aboutData';

// --- Sub-Components ---

const CircularSkill = ({ label, value, icon: Icon, color }) => {
    const radius = 36;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (value / 100) * circumference;

    return (
        <div className="group flex flex-col items-center justify-center p-4">
            <div className="relative w-24 h-24 flex items-center justify-center">
                {/* SVG Circle */}
                <svg className="w-full h-full transform -rotate-90">
                    <circle
                        cx="48" cy="48" r={radius}
                        fill="transparent"
                        stroke="currentColor"
                        strokeWidth="6"
                        className="text-gray-300/30"
                    />
                    <motion.circle
                        cx="48" cy="48" r={radius}
                        fill="transparent"
                        stroke={color}
                        strokeWidth="6"
                        strokeDasharray={circumference}
                        initial={{ strokeDashoffset: circumference }}
                        whileInView={{ strokeDashoffset: offset }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        viewport={{ once: true }}
                        strokeLinecap="round"
                    />
                </svg>
                {/* Single Icon in Center */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <Icon
                        size={28}
                        style={{ color: color }}
                        className="transition-transform duration-300 group-hover:scale-125"
                    />
                </div>
            </div>
            {/* Label and Percentage */}
            <div className="mt-4 text-center">
                <p className="font-['Oswald'] font-bold text-xs uppercase tracking-widest text-[#1a1a1a]">{label}</p>
                <p className="font-mono text-[10px] text-gray-400 font-bold">{value}%</p>
            </div>
        </div>
    );
};

const ResumeItem = ({ time, title, subtitle, description }) => (
    <div className="group relative pl-8 pb-10 last:pb-0 border-l border-gray-400/30">
        <div className="absolute -left-[1px] top-0 h-full w-[1px] bg-black scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-500" />
        <div className="absolute -left-[5px] top-0 h-2 w-2 rounded-full bg-[#1a1a1a] group-hover:bg-black transition-colors" />
        <span className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">{time}</span>
        <h3 className="font-['Oswald'] font-bold text-lg mt-1 uppercase text-[#1a1a1a]">
            {title} <span className="text-gray-400 font-['Oswald'] normal-case font-medium ml-1">— {subtitle}</span>
        </h3>
        <p className="text-gray-500 mt-2 text-[13px] font-sans leading-relaxed max-w-sm">{description}</p>
    </div>
);

const About = () => {
    return (
        <section className="bg-[#E3E3E1] w-[98.7vw] text-[#1a1a1a] py-20 font-['Oswald'] selection:bg-black selection:text-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="absolute top-20 text-center w-full overflow-hidden pointer-events-none opacity-[0.04]">
                    <h1 className="text-[15rem] font-bold uppercase whitespace-nowrap leading-none">
                        RESUME
                    </h1>
                </div>
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center border w-fit px-4 py-2 text-white rounded-full bg-black gap-3">
                            <div className="relative flex h-2 w-2">
                                <span className="animate-ping absolute h-full w-full rounded-full bg-[#e3e3e1]"></span>
                                <div className="rounded-full h-2 w-2 bg-[#e3e3e1]"></div>
                            </div>
                            <span className="text-[10px] font-bold tracking-widest uppercase"> A Bit About Me</span>
                        </div>
                        <h2 className="font-bold text-5xl lg:text-8xl uppercase leading-[0.85]">
                            PERSONAL <br /> <span className="text-gray-400">HISTORY</span>
                        </h2>
                    </div>
                    <button className="group relative bg-[#1a1a1a] text-white px-10 py-5 rounded-full overflow-hidden transition-all hover:shadow-2xl h-16 min-w-[220px]">
                        <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 transform -translate-y-[150%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                            <Download size={28} />
                        </div>
                        <span className="font-bold tracking-widest uppercase text-sm transition-all duration-300 group-hover:translate-y-[150%] group-hover:opacity-0">
                            Download CV
                        </span>
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                    {/* Column 1: Bio & Stats */}
                    <div className="lg:col-span-4 space-y-12">
                        <div className="space-y-6">
                            <h4 className="font-bold text-xs uppercase tracking-[0.3em] text-gray-400">Biography</h4>
                            <div className="space-y-3 font-sans">
                                {personalInfo.map((item, index) => (
                                    <div key={index} className="flex justify-between border-b border-gray-400/20 pb-2 text-sm">
                                        <span className="text-gray-500">{item.label}</span>
                                        <span className={`font-bold uppercase ${item.isGreen ? 'text-green-600' : ''}`}>{item.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-px bg-gray-400/30 rounded-3xl overflow-hidden border border-gray-400/20 shadow-sm">
                            {stats.map((stat, index) => (
                                <div key={index} className="bg-[#E3E3E1] p-8 flex flex-col items-center text-center group hover:bg-white transition-colors duration-500">
                                    <h5 className="font-bold text-4xl">{stat.number}<span className="text-green-500 text-xl">{stat.suffix}</span></h5>
                                    <p className="text-[9px] leading-tight text-gray-500 uppercase mt-2 tracking-widest">{stat.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Skills & Experience */}
                    <div className="lg:col-span-8 space-y-20">
                        {/* Circle Skills Grid */}
                        <div className="space-y-12">
                            <h4 className="font-bold text-xs uppercase tracking-[0.3em] text-gray-400 flex items-center gap-4">
                                Tech Stack <div className="h-[1px] flex-grow bg-gray-400/20"></div>
                            </h4>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                                {skills.map((skill, index) => (
                                    <CircularSkill key={index} {...skill} />
                                ))}
                            </div>
                        </div>

                        {/* Experience & Education Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="space-y-8">
                                <h4 className="font-bold text-xs uppercase tracking-[0.3em] text-gray-400">Experience</h4>
                                <div>
                                    {experience.map((item, index) => (
                                        <ResumeItem key={index} {...item} />
                                    ))}
                                </div>
                            </div>

                            <div className="bg-[#1a1a1a] text-white rounded-t-[100px] rounded-b-3xl p-10 flex flex-col justify-end min-h-[400px] group relative overflow-hidden">
                                <div className="absolute top-10 left-1/2 -translate-x-1/2 opacity-[0.03] transition-transform duration-700 group-hover:scale-110">
                                    <GraduationCap size={180} />
                                </div>
                                <div className="relative z-10">
                                    <span className="text-green-500 text-[10px] font-bold tracking-widest uppercase">Academic Background</span>
                                    {education.map((item, index) => (
                                        <div key={index} className="mt-4">
                                            <h3 className="font-bold text-2xl uppercase leading-none tracking-tight">{item.title}</h3>
                                            <p className="font-sans text-gray-400 text-xs mt-4 font-light leading-relaxed">{item.description}</p>
                                            <div className="mt-6 flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-green-500">
                                                {item.time} <ArrowUpRight size={14} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;