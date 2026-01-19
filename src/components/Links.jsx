import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Battery, Wifi, Bluetooth, ArrowUpRight } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaFacebook, FaYoutube } from "react-icons/fa";

import { SOCIAL_LINKS } from '../constants/socials';

const socialLinks = [
    { name: 'GitHub', icon: FaGithub, url: SOCIAL_LINKS.GITHUB, label: 'Codebase', color: 'hover:text-gray-400' },
    { name: 'LinkedIn', icon: FaLinkedin, url: SOCIAL_LINKS.LINKEDIN, label: 'Professional', color: 'hover:text-blue-500' },
    { name: 'Instagram', icon: FaInstagram, url: SOCIAL_LINKS.INSTAGRAM, label: 'Stories', color: 'hover:text-pink-500' },
    { name: 'WhatsApp', icon: FaWhatsapp, url: SOCIAL_LINKS.WHATSAPP, label: 'Quick Chat', color: 'hover:text-green-500' },
    { name: 'Facebook', icon: FaFacebook, url: SOCIAL_LINKS.FACEBOOK, label: 'Community', color: 'hover:text-blue-600' },
    { name: 'Youtube', icon: FaYoutube, url: SOCIAL_LINKS.YOUTUBE, label: 'Videos', color: 'hover:text-red-600' },
];

const Links = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="bg-[#E3E3E1] text-[#1a1a1a] w-[98.5vw] py-24 min-h-screen relative overflow-hidden font-['Oswald']">

            {/* Sync: Faded Background Decorative Text */}
            <div className="absolute top-20 left-0 w-full overflow-hidden pointer-events-none opacity-[0.03] select-none">
                <h1 className="text-[15rem] font-bold uppercase whitespace-nowrap leading-none">
                    SOCIAL NETWORK CONNECT
                </h1>
            </div>

            <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">

                {/* Sync: Header Section with Pill */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center border w-fit px-4 py-2 text-white rounded-full bg-black gap-3">
                            <div className="relative flex h-2 w-2">
                                <span className="animate-ping absolute h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <div className="rounded-full h-2 w-2 bg-green-500"></div>
                            </div>
                            <span className="text-[10px] font-bold tracking-widest uppercase">Live Status: Online</span>
                        </div>
                        <h2 className="font-bold text-5xl lg:text-8xl uppercase leading-[0.85]">
                            STAY <br /> <span className="text-gray-400">CONNECTED</span>
                        </h2>
                    </div>

                    {/* Desktop "System Info" Sync */}
                    <div className="hidden md:flex items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                        <div className="flex items-center gap-2"><Wifi size={14} /> 100% Signal</div>
                        <div className="flex items-center gap-2"><Battery size={14} /> Charged</div>
                        <div className="bg-white px-4 py-2 rounded-full text-black shadow-sm">
                            {currentTime.toLocaleTimeString('en-US', { hour12: false })}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Center Profile Image - Large and Impactful */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="lg:col-span-5 relative order-2 lg:order-1 flex justify-center"
                    >
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full aspect-square bg-white/40 rounded-full blur-3xl -z-10"></div>
                        <img
                            src="/1.png"
                            alt="Zeeshan"
                            className="w-full max-w-md  rounded-full hover:grayscale-0 transition-all duration-700 pointer-events-none"
                        />
                    </motion.div>

                    {/* Social Grid - Minimalist Cards */}
                    <div className="lg:col-span-7 order-1 lg:order-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                        {socialLinks.map((link, i) => (
                            <motion.a
                                key={i}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="group bg-white/50 backdrop-blur-sm border border-white p-6 rounded-3xl flex items-center justify-between hover:bg-black transition-all duration-500"
                            >
                                <div className="flex items-center gap-5">
                                    <div className={`p-4 rounded-2xl bg-white shadow-sm group-hover:scale-110 transition-transform duration-500 ${link.color}`}>
                                        <link.icon size={24} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] group-hover:text-green-500">{link.label}</p>
                                        <h3 className="text-xl font-bold uppercase group-hover:text-white transition-colors">{link.name}</h3>
                                    </div>
                                </div>
                                <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-green-500 group-hover:rotate-45 transition-all duration-500">
                                    <ArrowUpRight size={18} className="group-hover:text-green-500" />
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>

                {/* Footer Quote Sync */}
                <div className="mt-20 pt-10 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400">
                    <p className="text-xs font-bold uppercase tracking-widest">© 2026 Zeeshan Siddique. All Rights Reserved.</p>
                    <div className="flex gap-8 text-[10px] font-bold uppercase tracking-tighter">
                        <span className="cursor-help hover:text-black">Availability: 24/7</span>
                        <span className="cursor-help hover:text-black">Based: Sargodha, PK</span>
                        <span className="cursor-help hover:text-black">Status: Open for work</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Links;