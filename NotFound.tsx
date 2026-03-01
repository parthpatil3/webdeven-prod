import React from 'react';
import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { MagneticButton } from './InteractiveComponents';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
            <Helmet>
                <title>404 - Page Not Found | Webdeven</title>
                <meta name="robots" content="noindex" />
            </Helmet>

            {/* --- Background Elements --- */}
            <div className="absolute inset-0 bg-background z-0 pointer-events-none overflow-hidden">
                {/* Grid */}
                <div
                    className="absolute inset-0 opacity-[0.08]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.3) 1px, transparent 1px)`,
                        backgroundSize: '80px 80px',
                        maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)'
                    }}
                ></div>

                {/* Ambient Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/8 blur-[120px] rounded-full"></div>

                {/* Data Tokens */}
                <div className="absolute top-[20%] left-[12%] text-sm font-mono text-primary/20 font-bold blur-[0.5px] hidden md:block">
                    ERR::404
                </div>
                <div className="absolute bottom-[25%] right-[12%] text-sm font-mono text-primary/20 font-bold blur-[0.5px] hidden md:block text-right">
                    ROUTE_NOT_FOUND
                </div>
            </div>

            {/* --- Content --- */}
            <div className="relative z-10 flex flex-col items-center text-center max-w-2xl">

                {/* Glitch-style 404 Number */}
                <m.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="relative mb-8"
                >
                    <h1 className="text-[120px] md:text-[180px] font-outfit font-extrabold leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-white/5 select-none">
                        404
                    </h1>

                    {/* Glowing overlay text */}
                    <m.h1
                        animate={{ opacity: [0.6, 1, 0.6] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 text-[120px] md:text-[180px] font-outfit font-extrabold leading-none tracking-tighter text-primary drop-shadow-[0_0_30px_rgba(180,254,48,0.3)]"
                        style={{ WebkitTextStroke: '1px rgba(180, 254, 48, 0.4)', WebkitTextFillColor: 'transparent' }}
                    >
                        404
                    </m.h1>
                </m.div>

                {/* Status Badge */}
                <m.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 mb-8 backdrop-blur-sm"
                >
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-primary">PAGE NOT FOUND</span>
                </m.div>

                {/* Heading */}
                <m.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-2xl md:text-4xl font-outfit font-bold text-foreground mb-4 leading-tight"
                >
                    This page doesn't exist.
                </m.h2>

                {/* Description */}
                <m.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="text-muted-foreground text-base md:text-lg leading-relaxed mb-12 max-w-md"
                >
                    The route you're looking for may have been moved or no longer exists. Let's get you back on track.
                </m.p>

                {/* CTA Buttons */}
                <m.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="flex flex-col sm:flex-row items-center gap-4"
                >
                    <MagneticButton
                        className="flex items-center gap-2 bg-primary text-black px-8 py-3.5 rounded-full text-base font-bold shadow-[0_0_12px_rgba(180,254,48,0.3)] hover:shadow-[0_0_24px_rgba(180,254,48,0.45)] transition-shadow"
                        onClick={() => navigate('/')}
                    >
                        <Home size={18} />
                        Back to Home
                    </MagneticButton>

                    <MagneticButton
                        className="flex items-center gap-2 px-8 py-3.5 rounded-full text-base font-medium border border-primary/20 text-primary backdrop-blur-sm transition-colors"
                        onClick={() => navigate(-1 as any)}
                    >
                        <ArrowLeft size={18} />
                        Go Back
                    </MagneticButton>
                </m.div>
            </div>
        </section>
    );
};

export default NotFound;
