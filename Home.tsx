import React, { useState } from 'react';
import { m, useScroll, useSpring, AnimatePresence, LayoutGroup } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Star, Plus, Minus, Play, Target, Zap, ArrowUpRight, TrendingUp, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SERVICES, PROJECTS, FAQS } from './constants';
import { Project } from './types';
import { MagneticButton, ParallaxText } from './InteractiveComponents';

// --- Animation Variants ---
const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
};

const textReveal = {
    hidden: { y: "100%", opacity: 0 },
    visible: { y: "0%", opacity: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};



const Hero = () => {
    const navigate = useNavigate();

    // Mouse interaction state
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const sectionRef = React.useRef<HTMLElement>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!sectionRef.current) return;
        const { left, top, width, height } = sectionRef.current.getBoundingClientRect();
        // Calculate normalized position (-1 to 1) for parallax
        const x = (e.clientX - left - width / 2) / (width / 2);
        const y = (e.clientY - top - height / 2) / (height / 2);

        // Raw pixel position for spotlight
        setMousePosition({ x: e.clientX - left, y: e.clientY - top });

        // Update CSS variables for high-performance transforms
        sectionRef.current.style.setProperty('--mouse-x', x.toString());
        sectionRef.current.style.setProperty('--mouse-y', y.toString());
    };

    return (
        <section
            ref={sectionRef}
            onMouseMove={handleMouseMove}
            className="relative pt-32 pb-12 overflow-hidden min-h-screen flex flex-col justify-center items-center perspective-1000"
        >
            {/* --- NEW TECHNICAL GRID BACKGROUND (Faded & Blended) --- */}
            <div className="absolute inset-0 bg-background z-0 pointer-events-none overflow-hidden">
                {/* 1. Base Grid Lines - Subtle & Classy */}
                <div
                    className="absolute inset-0 opacity-[0.12]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.3) 1px, transparent 1px)`,
                        backgroundSize: '80px 80px',
                        maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 100%)'
                    }}
                ></div>

                {/* 2. Structured Data Tokens (Symmetrical Authority) */}

                {/* Top Left Anchor */}
                <div className="absolute top-[15%] left-[10%] text-sm font-mono text-primary/30 font-bold blur-[0.5px] hidden md:block">
                    TTFB &lt; 200ms
                </div>

                {/* Top Right Anchor */}
                <div className="absolute top-[15%] right-[10%] text-sm font-mono text-primary/30 font-bold blur-[0.5px] hidden md:block text-right">
                    SEO: ENABLED
                </div>

                {/* Bottom Left Anchor */}
                <div className="absolute bottom-[20%] left-[10%] text-sm font-mono text-primary/30 font-bold blur-[0.5px] hidden md:block">
                    LCP &lt; 2.5s
                </div>

                {/* Bottom Right Anchor */}
                <div className="absolute bottom-[20%] right-[10%] text-sm font-mono text-primary/30 font-bold blur-[0.5px] hidden md:block text-right">
                    TBT &lt; 30ms
                </div>

                {/* Center Depth Markers (Subtle Axis) */}
                <div className="absolute top-[50%] left-[5%] text-[10px] font-mono text-foreground/5 hidden md:block -rotate-90">
                    System.init()
                </div>
                <div className="absolute top-[50%] right-[5%] text-[10px] font-mono text-foreground/5 hidden md:block rotate-90">
                    System.opt()
                </div>

                {/* 4. Ambient Top Glow */}
                <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[60%] h-[40%] bg-primary/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">

                {/* Main Headline */}
                <div className="relative mb-10 z-20">
                    <m.h1
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                        className="font-outfit font-extrabold leading-[1.1] tracking-tight text-foreground max-w-[90vw] mx-auto drop-shadow-2xl"
                    >
                        {/* Line 1 - Context (Smaller, Lighter) */}
                        <div className="block overflow-visible pb-2">
                            <m.div variants={textReveal} className="inline-block text-xl md:text-5xl font-bold text-foreground/60 pb-1">
                                Conversion-Focused Websites
                            </m.div>
                        </div>

                        {/* Line 2 - Power Punch (Large, White) */}
                        <div className="block overflow-visible">
                            <m.div variants={textReveal} className="flex flex-wrap justify-center items-baseline gap-x-2 md:gap-x-4 text-3xl md:text-[5.5rem]">
                                <span>Built for</span>
                                <span className="relative inline-block text-primary">
                                    <span className="relative z-10">Measurable Growth.</span>

                                    {/* --- Enhanced Natural Glow System --- */}

                                    {/* 1. Atmospheric Aura (Reduced & Tightened) */}
                                    <div
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[200%] -z-20 pointer-events-none opacity-[0.12] blur-[80px]"
                                        style={{ background: 'radial-gradient(circle at center, rgb(180, 254, 48), transparent 70%)' }}
                                    ></div>

                                    {/* 2. Left-Side Balancing Glow (New Counter-Weight) */}
                                    <div
                                        className="absolute top-1/2 right-[120%] -translate-y-1/2 w-[120%] h-[180%] -z-20 pointer-events-none opacity-[0.08] blur-[90px]"
                                        style={{ background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.8), transparent 70%)' }}
                                    ></div>

                                    {/* 3. Core Focus (Tighter & Pulsing) */}
                                    <m.div
                                        animate={{ opacity: [0.2, 0.35, 0.2], scale: [0.95, 1.05, 0.95] }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[140%] -z-10 pointer-events-none blur-[40px]"
                                        style={{ background: 'radial-gradient(closest-side, rgb(180, 254, 48), transparent)' }}
                                    ></m.div>

                                    {/* Engineered Tapered Underline */}
                                    <m.div
                                        initial={{ scaleX: 0, opacity: 0 }}
                                        animate={{ scaleX: 1 }}
                                        transition={{ delay: 0.5, duration: 0.8, ease: "circOut" }}
                                        className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#B4FE30] to-transparent opacity-80 origin-center"
                                    ></m.div>
                                </span>
                            </m.div>
                        </div>
                    </m.h1>
                </div>

                {/* Subheadline - Single Line Power Statement */}
                <div className="flex flex-col items-center justify-center mb-16 w-full max-w-[95vw]">
                    <m.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8, ease: "circOut" }}
                        className="text-muted-foreground text-base md:text-xl lg:text-2xl font-normal tracking-wide leading-relaxed text-center"
                    >
                        Speed-Optimized and Engineered for Core Web Vitals — Turning your Website into a <span className="text-foreground font-medium">Revenue Asset</span>.
                    </m.p>
                </div>

                {/* CTA Buttons - Interactive Magnetic Feel */}
                <m.div
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.8 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20 relative z-10 font-bold w-full sm:w-auto"
                >
                    <MagneticButton
                        className="min-w-[200px] bg-primary text-black px-10 py-4 rounded-full text-lg shadow-[0_0_12px_rgba(180,254,48,0.3)] hover:shadow-[0_0_24px_rgba(180,254,48,0.45)] transition-shadow"
                        onClick={() => window.open('https://calendly.com/thewebdeven/book-free-strategy-call', '_blank')}
                    >
                        Book a Free Strategy Call
                    </MagneticButton>

                    <MagneticButton
                        className="min-w-[200px] px-10 py-4 rounded-full text-lg border border-primary/20 text-primary backdrop-blur-sm transition-colors"
                        onClick={() => {
                            const element = document.getElementById('projects');
                            if (element) element.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        View Our Work
                    </MagneticButton>
                </m.div>

                {/* Unified Stats Bar (Glassmorphic) - Refined Premium */}
                <m.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="relative z-10 max-w-4xl mx-auto w-full"
                >
                    <div className="flex flex-col md:flex-row items-center justify-between bg-white/[0.02] border border-border rounded-3xl p-8 md:px-12 md:py-8 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] gap-8 md:gap-0">
                        {/* Stat 1 */}
                        <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1 group transition-all duration-300 rounded-2xl px-4 py-3 cursor-default">
                            <div className="text-2xl font-outfit font-bold text-foreground mb-1 group-hover:text-primary group-hover:drop-shadow-[0_0_8px_rgba(180,254,48,0.5)] transition-all">Conversion-First</div>
                            <div className="text-muted-foreground text-[10px] uppercase tracking-widest font-bold group-hover:text-muted-foreground group-hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.5)] transition-all">Website Structure</div>
                        </div>

                        {/* Divider */}
                        <div className="hidden md:block w-[1px] h-12 bg-white/5 mx-2"></div>

                        {/* Stat 2 */}
                        <div className="flex flex-col items-center text-center flex-1 group transition-all duration-300 rounded-2xl px-4 py-3 cursor-default">
                            <div className="text-2xl font-outfit font-bold text-foreground mb-1 group-hover:text-primary group-hover:drop-shadow-[0_0_8px_rgba(180,254,48,0.5)] transition-all">1–3 Weeks</div>
                            <div className="text-muted-foreground text-[10px] uppercase tracking-widest font-bold group-hover:text-muted-foreground group-hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.5)] transition-all">Typical Timeline</div>
                        </div>

                        {/* Divider */}
                        <div className="hidden md:block w-[1px] h-12 bg-white/5 mx-2"></div>

                        {/* Stat 3 */}
                        <div className="flex flex-col items-center md:items-end text-center md:text-right flex-1 group transition-all duration-300 rounded-2xl px-4 py-3 cursor-default">
                            <div className="text-2xl font-outfit font-bold text-foreground mb-1 group-hover:text-primary group-hover:drop-shadow-[0_0_8px_rgba(180,254,48,0.5)] transition-all">SEO-Ready</div>
                            <div className="text-muted-foreground text-[10px] uppercase tracking-widest font-bold group-hover:text-muted-foreground group-hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.5)] transition-all">Growth Foundation</div>
                        </div>
                    </div>
                </m.div>
            </div>

            {/* Scroll Indicator */}
            <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 2, duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none opacity-50 mix-blend-screen"
            >
                <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-primary to-transparent"></div>
            </m.div>
        </section>
    );
};

const ServiceCard: React.FC<{ service: any; index: number }> = ({ service, index }) => {
    // Determine specific illustration based on service ID
    const renderIllustration = () => {
        switch (service.id) {
            case 'identity':
                return (
                    <div className="absolute inset-0 pointer-events-none fade-mask-bottom flex items-end justify-center pb-10 overflow-hidden">
                        {/* Ambient Background Glow - Brightened (Reduced to 10%) */}
                        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-40 h-40 bg-primary/10 blur-[80px] rounded-full"></div>

                        {/* Abstract Browser Window - Scale Reduced for Breathing Room */}
                        <div className="relative w-64 h-40 bg-[#0A0F0C] border border-primary/40 rounded-xl shadow-[0_0_30px_rgba(180,254,48,0.15)] animate-float-unified z-10 overflow-hidden group-hover:border-primary group-hover:shadow-[0_0_60px_rgba(180,254,48,0.3)] transition-all duration-500 scale-[0.8] origin-bottom">
                            {/* Inner Subtle Tint for Depth */}
                            <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>

                            {/* Window Header */}
                            <div className="absolute top-0 left-0 w-full h-7 border-b border-primary/50 bg-primary/20 flex items-center px-3 gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-primary/90 shadow-[0_0_8px_rgba(180,254,48,0.8)]"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-primary/50"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-primary/50"></div>
                            </div>

                            {/* Window Content - Wireframe - Brightened Opacity */}
                            <div className="absolute top-7 inset-x-0 bottom-0 p-3 grid grid-cols-3 gap-2">
                                {/* Sidebar */}
                                <div className="col-span-1 h-full rounded bg-primary/25 border border-primary/50 flex flex-col gap-2 p-1.5">
                                    <div className="w-full h-2 bg-primary/50 rounded-full"></div>
                                    <div className="w-2/3 h-2 bg-primary/30 rounded-full"></div>
                                    <div className="w-3/4 h-2 bg-primary/30 rounded-full"></div>
                                </div>
                                {/* Main Content */}
                                <div className="col-span-2 h-full flex flex-col gap-2">
                                    {/* Hero Area - With Glowing CTA Focal Point */}
                                    <div className="w-full h-14 rounded bg-primary/30 border border-primary/50 relative overflow-hidden group-hover:bg-primary/35 transition-colors">
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/30 to-transparent w-full h-full animate-[shimmer_3s_infinite]"></div>
                                        <div className="absolute bottom-3 left-2 w-1/2 h-2 bg-primary/50 rounded-full"></div>
                                        {/* New Glowing CTA Button Focal Point */}
                                        <div className="absolute bottom-3 right-3 w-8 h-2.5 bg-primary rounded-md shadow-[0_0_10px_rgba(180,254,48,0.6)] animate-pulse"></div>
                                    </div>
                                    {/* Grid Items */}
                                    <div className="grid grid-cols-2 gap-2 h-full">
                                        <div className="rounded bg-primary/30 border border-primary/50 group-hover:border-primary/70 transition-colors"></div>
                                        <div className="rounded bg-primary/30 border border-primary/50 group-hover:border-primary/70 transition-colors"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Fragments */}
                        <div className="absolute bottom-40 right-12 py-1 px-2.5 rounded-full text-[10px] font-bold font-mono text-black bg-primary animate-float-unified-reverse shadow-[0_0_20px_rgba(180,254,48,0.4)] z-20">
                            &lt;div&gt;
                        </div>
                        <div className="absolute bottom-16 left-8 py-1 px-2.5 rounded-full text-[10px] font-bold font-mono text-black bg-primary animate-float-delayed shadow-[0_0_20px_rgba(180,254,48,0.4)] z-20">
                            .css
                        </div>
                    </div>
                );
            case 'web-ui':
                return (
                    <div className="absolute bottom-0 inset-x-0 h-[55%] overflow-hidden pointer-events-none text-primary flex items-end justify-center pb-6">
                        {/* Connecting Network Lines */}
                        <svg className="absolute inset-0 w-full h-full opacity-30">
                            <line x1="20%" y1="20%" x2="50%" y2="50%" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                            <line x1="80%" y1="30%" x2="50%" y2="50%" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                            <line x1="50%" y1="50%" x2="50%" y2="90%" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                        </svg>

                        {/* Central Hub - Mobile Feed - Scaled Down */}
                        <div className="relative w-32 h-48 bg-[#0A0F0C] border border-primary/40 rounded-xl shadow-[0_0_30px_rgba(180,254,48,0.15)] animate-float-unified z-10 flex flex-col p-3 gap-3 overflow-hidden group-hover:border-primary group-hover:shadow-[0_-15px_60px_rgba(180,254,48,0.3)] transition-colors scale-[0.8] origin-bottom">
                            {/* Feed Item 1 */}
                            <div className="flex gap-2 items-center opacity-80">
                                <div className="w-6 h-6 rounded-full bg-primary/30 shrink-0"></div>
                                <div className="flex flex-col gap-1 w-full">
                                    <div className="w-16 h-2 bg-primary/30 rounded-full"></div>
                                    <div className="w-10 h-1.5 bg-primary/10 rounded-full"></div>
                                </div>
                            </div>
                            {/* Feed Item 2 (Card) - Active */}
                            <div className="w-full h-16 rounded-md bg-transparent border border-primary/30 relative overflow-hidden group-hover:bg-primary/5 transition-colors">
                                <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(180,254,48,0.8)] animate-pulse"></div>
                                <div className="absolute bottom-2 left-2 w-2/3 h-1.5 bg-primary/20 rounded-full"></div>
                            </div>
                            {/* Feed Item 3 */}
                            <div className="flex gap-2 items-center opacity-80">
                                <div className="w-6 h-6 rounded-full bg-primary/30 shrink-0"></div>
                                <div className="flex flex-col gap-1 w-full">
                                    <div className="w-full h-1.5 bg-primary/10 rounded-full"></div>
                                </div>
                            </div>
                        </div>

                        {/* Floating "Chat/Interaction" Bubbles - Flexible & Natural (No Glow) */}
                        <div className="absolute top-10 left-[15%] z-20 flex items-center justify-center animate-bounce-slow">
                            {/* Icon Container - Clean Glassmorphism (No External Glow) */}
                            <div className="relative w-10 h-10 bg-primary/10 backdrop-blur-md border border-primary/50 text-primary rounded-full flex items-center justify-center">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                            </div>
                        </div>

                        <div className="absolute bottom-[20%] right-[15%] p-3 bg-card border border-primary/50 rounded-tr-xl rounded-tl-xl rounded-bl-xl text-primary text-xs font-bold animate-float-delayed shadow-xl z-20">
                            <div className="flex gap-1">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
                                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse delay-75"></span>
                                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse delay-150"></span>
                            </div>
                        </div>
                    </div>
                );
            case 'video':
                return (
                    <div className="absolute bottom-0 right-0 w-full h-full pointer-events-none flex justify-end items-end p-6 text-primary">
                        {/* Main Video Window - Scaled Compositions */}
                        <div className="relative w-72 h-44 border border-primary/40 bg-[#0A0F0C] rounded-md shadow-[0_0_30px_rgba(180,254,48,0.15)] animate-float-unified group-hover:border-primary/50 group-hover:shadow-[0_0_60px_rgba(180,254,48,0.3)] transition-colors duration-500 scale-[0.8] origin-bottom">
                            {/* Header Dots */}
                            <div className="absolute top-3 left-4 flex gap-1.5">
                                <div className="w-1 h-1 rounded-full bg-primary"></div>
                                <div className="w-1 h-1 rounded-full bg-primary"></div>
                                <div className="w-1 h-1 rounded-full bg-primary"></div>
                            </div>

                            {/* Center Play Graphic */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-12 h-12 border border-primary/50 rounded-full flex items-center justify-center animate-pulse-unified">
                                    <div className="w-16 h-16 border border-primary/20 rounded-full absolute animate-spin-unified"></div>
                                    <Play size={16} className="ml-1 text-primary fill-primary" />
                                    {/* Overlapping Circles Graphic */}
                                    <div className="absolute right-[-40px] opacity-30">
                                        <div className="w-8 h-8 border border-primary rounded-full absolute top-0 left-0"></div>
                                        <div className="w-8 h-8 border border-primary rounded-full absolute top-0 left-4"></div>
                                        <div className="w-8 h-8 border border-primary rounded-full absolute top-4 left-2"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Timeline Bar */}
                            <div className="absolute bottom-4 left-4 right-20 h-[1px] bg-primary/30">
                                <div className="absolute left-0 top-[-2px] h-[5px] w-[5px] rounded-full bg-primary animate-[pan_20s_linear_infinite_alternate]"></div>
                                <div className="h-full bg-primary w-1/3 animate-[width_20s_linear_infinite_alternate]"></div>
                            </div>
                            <div className="absolute bottom-4 right-4 text-[6px] text-primary">02:14</div>

                            {/* Floating Panel Behind */}
                            <div className="absolute -top-4 -right-8 w-20 h-24 bg-primary/10 border border-primary/10 rounded-md -z-10"></div>
                        </div>


                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <m.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
            whileHover={{ y: -3, transition: { duration: 0.25, ease: [0.4, 0, 0.2, 1] } }}
            className="relative group h-[480px] w-full isolate overflow-hidden rounded-2xl border border-primary/10 bg-[#050605] shadow-[0_0_20px_rgba(180,254,48,0.05)] hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(180,254,48,0.15)] group-hover:shadow-primary/20"
        >
            {/* Corner Glow Overlay */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary opacity-[0.03] blur-[80px] pointer-events-none group-hover:opacity-[0.08] transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary opacity-[0.03] blur-[80px] pointer-events-none group-hover:opacity-[0.08] transition-opacity duration-300"></div>

            {/* Texture */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat mix-blend-overlay"></div>

            {/* Main Container */}
            <div className="relative h-full p-6 md:p-10 pt-10 md:pt-14 flex flex-col z-10">

                {/* Content Top */}
                <div className="relative z-20 mb-auto">
                    <h3 className="text-[28px] font-outfit font-bold mb-4 text-foreground tracking-wide leading-tight group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-loose max-w-[90%] font-medium group-hover:text-muted-foreground transition-colors duration-300">
                        {service.description}
                    </p>
                </div>

                {/* Dynamic Illustration Area */}
                {renderIllustration()}
            </div>
        </m.div>
    );
};

const ScrollingImage = ({ src, alt }: { src: string, alt: string }) => {
    return (
        <div className="relative w-full aspect-[4/3] bg-card border border-border rounded-3xl overflow-hidden shadow-2xl group-hover:border-primary/20 transition-colors duration-500">
            <div className="absolute inset-0 overflow-hidden flex items-center justify-center">
                <m.img
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    src={src}
                    alt={alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] to-transparent opacity-50 pointer-events-none group-hover:opacity-0 transition-opacity duration-300"></div>
        </div>
    );
};

const ProjectItem: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
    return (
        <div className="sticky text-foreground" style={{ top: `calc(10vh + ${index * 30}px)` }}>
            <div
                className="relative overflow-hidden rounded-3xl border border-primary/10 hover:border-primary/30 transition-colors duration-500 bg-background p-6 md:p-14 shadow-[0_0_15px_rgba(180,254,48,0.1)] isolate group h-auto md:min-h-[600px] flex flex-col justify-center will-change-transform"
            >
                {/* Micro Cue - Index - Animated */}
                <m.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="absolute top-6 right-6 md:top-10 md:right-10 z-20 flex items-center gap-2 md:gap-4 font-mono text-[10px] md:text-sm font-medium text-foreground/30 tracking-[0.2em] uppercase selection:bg-primary/20"
                >
                    <span className="w-8 md:w-12 h-[1px] bg-white/10"></span>
                    {String(index + 1).padStart(2, '0')} / {String(PROJECTS.length || 4).padStart(2, '0')}
                </m.div>

                {/* --- Final CTA Style Background & Glow --- */}

                {/* 2. Atmospheric Aura */}
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[200%] -z-20 pointer-events-none opacity-[0.05] blur-[40px]"
                    style={{ background: 'radial-gradient(circle at center, rgb(180, 254, 48), transparent 70%)' }}
                ></div>

                {/* 3. Left-Side Balancing Glow */}
                <div
                    className="absolute top-1/2 right-[120%] -translate-y-1/2 w-[120%] h-[180%] -z-20 pointer-events-none opacity-[0.03] blur-[50px]"
                    style={{ background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.8), transparent 70%)' }}
                ></div>

                {/* 4. Core Focus (Pulsing) */}
                <m.div
                    animate={{ opacity: [0.05, 0.1, 0.05], scale: [0.95, 1.05, 0.95] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[140%] -z-10 pointer-events-none blur-[60px]"
                    style={{ background: 'radial-gradient(closest-side, rgb(180, 254, 48), transparent)' }}
                ></m.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10 h-full">

                    {/* Left Content */}
                    <div className="flex flex-col items-start gap-8 justify-center h-full">

                        <div className="pt-8 md:pt-0">
                            <h3 className="text-2xl md:text-5xl font-outfit font-bold leading-tight mb-4 md:mb-8 pr-12 md:pr-0 break-words hyphens-auto">
                                {project.title}
                            </h3>
                            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-[420px] font-medium">
                                {project.description}
                            </p>
                        </div>

                        {/* Tags Grid - Subtle & Tighter */}
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, i) => (
                                <span key={i} className="text-[11px] font-medium tracking-wide text-primary/70 border border-primary/5 bg-primary/5 px-4 py-2 rounded-full hover:bg-primary/10 hover:border-primary/30 transition-colors cursor-default">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* CTA Button - Spaced Out */}
                        <m.a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05, gap: "12px" }}
                            whileTap={{ scale: 0.98 }}
                            className="mt-8 flex items-center gap-4 text-primary text-xl font-medium group-hover:font-semibold transition-all duration-300 group bg-transparent border-none outline-none cursor-pointer inline-flex"
                        >
                            See Results
                            <span className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-black shadow-[0_0_15px_rgba(180,254,48,0.2)] group-hover:shadow-[0_0_25px_rgba(180,254,48,0.4)] transition-shadow">
                                <ArrowRight size={18} className="group-hover:-rotate-45 group-hover:translate-x-0.5 transition-transform duration-300" strokeWidth={3} />
                            </span>
                        </m.a>
                    </div>


                    {/* Right Content */}
                    <ScrollingImage src={project.image} alt={project.title} />

                </div >
            </div>
        </div >
    );
};

const ScrollProgressLine = ({ targetRef }: { targetRef: React.RefObject<HTMLElement> }) => {
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start center", "end center"]
    });
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <m.div style={{ scaleY }} className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary origin-top rounded-full shadow-[0_0_5px_var(--color-primary)]"></m.div>
    );
};

const FAQSection = () => {
    const [openId, setOpenId] = useState<string | null>(null);
    const containerRef = React.useRef(null);

    const toggleFAQ = (id: string) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section className="py-12 bg-background relative overflow-hidden scroll-mt-32" id="faqs">
            {/* Background Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[150px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <div className="text-center mb-16">

                    <m.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-5xl font-outfit font-bold tracking-tight text-foreground mb-6"
                    >
                        Questions, Answered
                    </m.h2>
                </div>

                <div ref={containerRef} className="flex flex-col gap-4 relative pl-10">
                    <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-white/5 rounded-full"></div>
                    <ScrollProgressLine targetRef={containerRef} />
                    <>
                        {FAQS.map((faq, index) => (
                            <m.div
                                key={faq.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`bg-card/80 border rounded-2xl overflow-hidden transition-colors duration-300 ${openId === faq.id ? 'border-primary/20' : 'border-border hover:border-primary/20 hover:shadow-[0_0_20px_rgba(180,254,48,0.05)]'}`}
                            >
                                <m.button
                                    className="w-full p-6 text-left flex items-center justify-between group"
                                    onClick={() => toggleFAQ(faq.id)}
                                >
                                    <span className={`flex-1 pr-4 text-lg font-bold transition-colors duration-300 ${openId === faq.id ? 'text-foreground' : 'text-muted-foreground group-hover:text-foreground'}`}>
                                        {faq.question}
                                    </span>
                                    <m.div
                                        animate={{
                                            rotate: openId === faq.id ? 180 : 0,
                                            backgroundColor: openId === faq.id ? "rgba(180,254,48,0.2)" : "rgba(255,255,255,0.05)",
                                            color: openId === faq.id ? "#b4fe30" : "#9ca3af",
                                            borderColor: openId === faq.id ? "#b4fe30" : "rgba(255,255,255,0.1)"
                                        }}
                                        className={`w-[28px] h-[28px] rounded-full border border-border flex items-center justify-center transition-colors`}
                                    >
                                        {openId === faq.id ? <Minus size={14} strokeWidth={1.5} /> : <Plus size={14} strokeWidth={1.5} />}
                                    </m.div>
                                </m.button>
                                <AnimatePresence>
                                    {openId === faq.id && (
                                        <m.div
                                            key="content"
                                            initial="collapsed"
                                            animate="open"
                                            exit="collapsed"
                                            variants={{
                                                open: { opacity: 1, height: "auto" },
                                                collapsed: { opacity: 0, height: 0 }
                                            }}
                                            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                                            className="overflow-hidden"
                                        >
                                            <m.div
                                                variants={{ collapsed: { opacity: 0, y: 10 }, open: { opacity: 1, y: 0 } }}
                                                transition={{ duration: 0.3, delay: 0.1 }}
                                                className="px-6 pb-6 text-muted-foreground text-sm leading-relaxed border-t border-white/[0.03] pt-4 max-w-[70%]"
                                            >
                                                {faq.answer}
                                            </m.div>
                                        </m.div>
                                    )}
                                </AnimatePresence>
                            </m.div>
                        ))}
                    </>
                </div>
            </div>
        </section>
    );
};

const AboutSection = () => {
    return (
        <section id="about" className="py-20 bg-background relative overflow-hidden scroll-mt-32">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    {/* Left Content */}
                    <div className="flex-1">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 mb-8 backdrop-blur-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(180,254,48,0.5)]"></div>
                            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-primary">ABOUT WEBDEVEN</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-outfit font-bold text-foreground mb-6 leading-tight">
                            Conversion Focused Websites <br />
                            <span className="text-[#a6eb2b]">Built for Growth</span>
                        </h2>
                        <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-[640px] font-light">
                            Webdeven builds high performance websites designed to convert. Every project is structured for clarity, fast load times, and SEO foundation so your website generates qualified inquiries instead of just traffic.
                        </p>

                        <div className="grid grid-cols-3 gap-8 mb-10">
                            <div>
                                <div className="text-2xl font-outfit font-bold text-primary mb-2">30+</div>
                                <div className="text-muted-foreground text-[10px] uppercase tracking-widest font-bold">Successful Launches</div>
                            </div>
                            <div>
                                <div className="text-2xl font-outfit font-bold text-primary mb-2">35%</div>
                                <div className="text-muted-foreground text-[10px] uppercase tracking-widest font-bold">Avg Traffic Lift</div>
                            </div>
                            <div>
                                <div className="text-2xl font-outfit font-bold text-primary mb-2">15+</div>
                                <div className="text-muted-foreground text-[10px] uppercase tracking-widest font-bold">Successful Clients</div>
                            </div>
                        </div>

                        <button onClick={() => {
                            const element = document.getElementById('services');
                            if (element) element.scrollIntoView({ behavior: 'smooth' });
                        }} className="text-primary font-semibold text-lg flex items-center gap-2 group transition-all hover:gap-3 hover:drop-shadow-[0_0_8px_rgba(180,254,48,0.5)]">
                            <span className="group-hover:underline group-hover:decoration-primary group-hover:underline-offset-4">Explore Our Services</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    {/* Right Content - Grid Cards */}
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-8">
                        {[
                            { icon: Zap, title: "Fast Delivery", desc: "Most business sites ship within 7 to 14 days depending on scope." },
                            { icon: Target, title: "Conversion Focused", desc: "Layouts built to guide visitors toward inquiry and action." },
                            { icon: Users, title: "Dedicated Support", desc: "Clear communication, updates, and post launch assistance." },
                            { icon: TrendingUp, title: "Growth Driven", desc: "SEO ready structure with performance and Core Web Vitals in mind." }
                        ].map((item, i) => (
                            <div key={i} className="relative group p-8 rounded-2xl border border-primary/10 bg-[#050605] shadow-[0_0_20px_rgba(180,254,48,0.05)] hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(180,254,48,0.15)] overflow-hidden">
                                {/* Corner Glow Overlay */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary opacity-[0.03] blur-[40px] pointer-events-none group-hover:opacity-[0.08] transition-opacity duration-300"></div>

                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(180,254,48,0.1)] relative z-10">
                                    <item.icon size={24} />
                                </div>
                                <h3 className="text-foreground text-xl font-bold mb-3 group-hover:text-primary transition-colors relative z-10">{item.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed font-medium relative z-10">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const Home = () => {
    const navigate = useNavigate();

    const schemaOrganization = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Webdeven",
        "url": "https://webdeven.com",
        "logo": "https://webdeven.com/logo.webp",
        "image": "https://webdeven.com/logo.webp",
        "description": "High-performance websites engineered for growth. Speed, SEO, and strategic design.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Pune",
            "addressRegion": "MH",
            "addressCountry": "IN"
        },
        "telephone": "+917798851576"
    };

    return (
        <>
            <Helmet>
                <title>Webdeven | Professional Website Design & Development</title>
                <meta name="description" content="Webdeven builds high-performance, conversion-focused websites designed for growth. Specializing in speed, SEO, and strategic design." />
                <link rel="canonical" href="https://webdeven.com/" />
                <script type="application/ld+json">
                    {JSON.stringify(schemaOrganization)}
                </script>
            </Helmet>
            <Hero />

            {/* Services Section */}
            <section id="services" className="py-12 scroll-mt-32">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-outfit font-bold tracking-tight text-foreground mb-6">Our Growth Stack</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {SERVICES.map((service, index) => (
                            <ServiceCard key={service.id} service={service} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            <AboutSection />

            {/* Work Section */}
            <section id="projects" className="py-12 bg-background scroll-mt-32">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-outfit font-bold tracking-tight text-foreground mb-6">Results Delivered</h2>
                    </div>
                    <div className="flex flex-col gap-0 pb-24">
                        {PROJECTS.map((project, index) => (
                            <ProjectItem key={project.id} project={project} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            <FAQSection />

            {/* Final CTA */}
            <section className="py-12 px-4 md:px-8 max-w-[1400px] mx-auto">
                <div className="relative w-full rounded-3xl bg-background overflow-hidden border border-white/15 isolate">

                    {/* Grid Background - Hero Match (Subtle) */}
                    <div className="absolute inset-0 pointer-events-none opacity-[0.07]"
                        style={{
                            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.3) 1px, transparent 1px)`,
                            backgroundSize: '80px 80px',
                            maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 100%)'
                        }}
                    ></div>

                    {/* Technical Data Tokens - Asymmetrical Scatter (Safe & Subtle) */}
                    <div className="absolute top-[12%] left-[15%] text-sm font-mono text-primary/15 font-bold blur-[0.5px] hidden md:block">
                        TTFB &lt; 200ms
                    </div>
                    <div className="absolute top-[18%] right-[8%] text-sm font-mono text-primary/15 font-bold blur-[0.5px] hidden md:block text-right">
                        SEO: ENABLED
                    </div>
                    <div className="absolute bottom-[25%] left-[8%] text-sm font-mono text-primary/15 font-bold blur-[0.5px] hidden md:block">
                        LCP &lt; 2.5s
                    </div>
                    <div className="absolute bottom-[12%] right-[20%] text-sm font-mono text-primary/15 font-bold blur-[0.5px] hidden md:block text-right">
                        TBT &lt; 30ms
                    </div>

                    {/* Ambient Glow System - Hero Mirror (Refined) */}
                    {/* 1. Atmospheric Aura */}
                    <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[200%] -z-20 pointer-events-none opacity-[0.08] blur-[80px]"
                        style={{ background: 'radial-gradient(circle at center, rgb(180, 254, 48), transparent 70%)' }}
                    ></div>

                    {/* 2. Left-Side Balancing Glow */}
                    <div
                        className="absolute top-1/2 right-[120%] -translate-y-1/2 w-[120%] h-[180%] -z-20 pointer-events-none opacity-[0.05] blur-[90px]"
                        style={{ background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.8), transparent 70%)' }}
                    ></div>

                    {/* 3. Core Focus (Pulsing) */}
                    <m.div
                        animate={{ opacity: [0.08, 0.15, 0.08], scale: [0.95, 1.05, 0.95] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[140%] -z-10 pointer-events-none blur-[60px]"
                        style={{ background: 'radial-gradient(closest-side, rgb(180, 254, 48), transparent)' }}
                    ></m.div>

                    {/* Content Container */}
                    <div className="relative z-10 flex flex-col items-center justify-center py-24 px-6 text-center">
                        <h2 className="text-4xl md:text-6xl font-outfit font-medium text-foreground mb-8 leading-[1.3] tracking-tight drop-shadow-2xl">
                            Ready to Turn Your Website Into <br className="hidden md:block" />
                            a Revenue Engine?
                        </h2>

                        <p className="text-muted-foreground text-sm md:text-base mb-10 max-w-lg mx-auto font-light tracking-wide">
                            Designed for speed, clarity, and conversion from day one.
                        </p>

                        <m.button
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-primary hover:bg-primary/90 text-black px-10 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_25px_rgba(180,254,48,0.6)] transition-all duration-300 border border-black/10"
                            onClick={() => window.open('https://calendly.com/thewebdeven/book-free-strategy-call', '_blank')}
                        >
                            Book a Free Strategy Call
                        </m.button>

                        <p className="text-foreground/45 text-sm mt-12 font-light tracking-wide">
                            Strategy call within 24 hours. No obligations.
                        </p>
                    </div>

                    {/* Gradient Overlay for subtle depth */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 pointer-events-none"></div>
                </div>
            </section>
        </>
    );
};

export default Home;
