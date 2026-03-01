import React from 'react';
import { Instagram } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ScrambleText } from './InteractiveComponents';


const Footer = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavigation = (path: string, hash?: string) => {
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

    const footerLinks = [
        { name: 'About', path: '/', hash: '#about' },
        { name: 'Services', path: '/', hash: '#services' },
        { name: 'Work', path: '/', hash: '#projects' },
        { name: 'FAQs', path: '/', hash: '#faqs' }
    ];

    return (
        <footer className="relative bg-background border-t border-border overflow-hidden font-outfit">
            {/* Grid Background - Hero Match (Subtle, Calmed) */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.05]"
                style={{
                    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.3) 1px, transparent 1px)`,
                    backgroundSize: '80px 80px',
                    maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 100%)'
                }}
            ></div>

            <div className="container mx-auto px-6 pt-8 pb-12 relative z-10">
                {/* Row 1: Top Row */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-20 mb-10 md:mb-16">
                    {/* Left: Brand */}
                    <div className="flex flex-col gap-4 max-w-sm text-center items-center">
                        <a href="/" className="flex items-center justify-center cursor-pointer group" onClick={(e) => { e.preventDefault(); navigate('/'); }}>
                            <img src="/logo.webp" alt="Webdeven" className="h-[34px] w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
                        </a>
                        <p className="text-muted-foreground text-sm tracking-wide leading-relaxed">
                            High-performance websites engineered for growth.
                        </p>
                    </div>

                    {/* Right: Nav + Socials */}
                    <div className="flex flex-col items-center gap-8 md:flex-row md:gap-10">
                        {/* Navigation - Horizontal on Mobile */}
                        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 text-base font-medium text-muted-foreground">
                            {footerLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={`${link.path}${link.hash || ''}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavigation(link.path, link.hash);
                                    }}
                                    className="relative group cursor-pointer hover:text-primary transition-colors duration-300"
                                >
                                    <ScrambleText>{link.name}</ScrambleText>
                                    <span className="absolute -bottom-1 left-0 h-[2px] bg-primary w-0 group-hover:w-full transition-all duration-300 shadow-[0_0_4px_rgba(180,254,48,0.4)]"></span>
                                </a>
                            ))}
                        </div>

                        {/* Social Icons - Unified */}
                        <div className="flex items-center gap-5 md:border-l md:border-border md:pl-10">
                            <a href="https://www.instagram.com/thewebdeven" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram" className="text-muted-foreground hover:text-[#E1306C] transition-all duration-300 hover:scale-110">
                                <Instagram size={20} strokeWidth={1.5} />
                            </a>
                            <a href="https://x.com/WebDeven" target="_blank" rel="noopener noreferrer" aria-label="Follow us on X" className="text-muted-foreground hover:text-white transition-all duration-300 hover:scale-110">
                                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Divider Line */}
                <div className="w-full h-[1px] bg-white/5 mb-8"></div>

                {/* Row 2: Bottom Row */}
                <div className="flex flex-col md:flex-row items-center justify-between text-[11px] font-bold text-gray-600 uppercase tracking-widest gap-4 text-center md:text-left">
                    <p>Copyright &copy; 2026 <span className="text-primary/80">Webdeven</span>. All rights reserved.</p>
                    <p className="flex items-center gap-2">
                        <span className="text-primary">•</span>
                        BUILT FOR SPEED. OPTIMIZED FOR GROWTH.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
