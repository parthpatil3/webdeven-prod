import React, { useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { MagneticButton, ScrambleText } from './InteractiveComponents';

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleNavigation = (path: string, hash?: string) => {
        setMobileMenuOpen(false); // Close mobile menu on click
        if (location.pathname !== path) {
            navigate(path);
            if (hash) {
                setTimeout(() => {
                    const element = document.querySelector(hash);
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        } else {
            if (hash) {
                const element = document.querySelector(hash);
                if (element) element.scrollIntoView({ behavior: 'smooth' });
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
    };

    const navItems = [
        { name: 'About', path: '/', hash: '#about' },
        { name: 'Services', path: '/', hash: '#services' },
        { name: 'Work', path: '/', hash: '#projects' }
    ];

    return (
        <m.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
        >
            <nav className="bg-[#050505]/90 backdrop-blur-xl border border-primary/20 rounded-3xl px-6 py-3 flex items-center justify-between w-full max-w-5xl shadow-[0_4px_30px_rgba(0,0,0,0.5)] pointer-events-auto relative">

                {/* Logo */}
                <a href="/" className="flex items-center gap-2 cursor-pointer z-50 pl-2" onClick={(e) => { e.preventDefault(); handleNavigation('/'); }}>
                    <img src="/logo.webp" alt="Webdeven" className="h-[28px] w-auto object-contain" />
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-10 text-sm font-medium text-gray-300">
                    {navItems.map((item) => {
                        const isActive = location.pathname === item.path && (item.hash ? location.hash === item.hash : true);
                        return (
                            <a
                                key={item.name}
                                href={`${item.path}${item.hash || ''}`}
                                onClick={(e) => { e.preventDefault(); handleNavigation(item.path, item.hash); }}
                                className={`transition-all duration-300 relative group cursor-pointer px-2 py-1 ${isActive
                                    ? 'text-primary'
                                    : 'hover:text-primary bg-transparent border-none'}`}
                            >
                                <ScrambleText>{item.name}</ScrambleText>
                                <span className={`absolute -bottom-1 left-0 h-[2px] bg-primary transition-all duration-300 shadow-[0_0_4px_rgba(180,254,48,0.4)] ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                            </a>
                        );
                    })}
                </div>

                {/* Desktop CTA */}
                <div className="hidden md:block">
                    <MagneticButton
                        className="bg-primary text-black px-6 py-2.5 rounded-3xl font-bold text-sm hover:opacity-90 transition-opacity"
                        onClick={() => navigate('/contact')}
                    >
                        <a href="/contact" onClick={(e) => e.preventDefault()} className="text-black no-underline">Contact Us</a>
                    </MagneticButton>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white z-50 p-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-expanded={mobileMenuOpen}
                    aria-controls="mobile-menu"
                    aria-label="Toggle navigation menu"
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <m.div
                            initial={{ opacity: 0, scale: 0.95, y: -20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -20 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 right-0 mt-4 bg-[#0c0c0c] border border-white/10 rounded-2xl p-6 flex flex-col gap-4 shadow-2xl md:hidden overflow-hidden"
                        >
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={`${item.path}${item.hash || ''}`}
                                    onClick={(e) => { e.preventDefault(); handleNavigation(item.path, item.hash); }}
                                    className="text-left text-lg font-medium text-gray-300 hover:text-primary py-2 border-b border-white/5 last:border-none block"
                                >
                                    {item.name}
                                </a>
                            ))}
                            <a
                                href="/contact"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setMobileMenuOpen(false);
                                    navigate('/contact');
                                }}
                                className="mt-2 bg-primary text-black px-6 py-3 rounded-xl font-bold text-center hover:opacity-90 transition-opacity block"
                            >
                                Contact Us
                            </a>
                        </m.div>
                    )}
                </AnimatePresence>
            </nav>
        </m.div>
    );
};

export default Navbar;
