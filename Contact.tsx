import React, { useState, useRef } from 'react';
import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Mail, MapPin, Phone, ArrowUpRight, CheckCircle2, Instagram } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { MagneticButton } from './InteractiveComponents';

const Contact = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        mobile: '',
        services: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const form = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Replace these with your actual EmailJS Header
        // Service ID, Template ID, and Public Key
        const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
        const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;



        if (form.current) {
            emailjs.sendForm(serviceID, templateID, form.current, publicKey)
                .then(() => {
                    setIsSubmitted(true);
                    setIsSubmitting(false);
                }, () => {
                    alert("Failed to send message, please try again.");
                    setIsSubmitting(false);
                });
        }
    };

    const handleServiceToggle = (service: string) => {
        setFormState(prev => {
            const currentServices = prev.services.split(',').map(s => s.trim()).filter(Boolean);
            if (currentServices.includes(service)) {
                return { ...prev, services: currentServices.filter(s => s !== service).join(', ') };
            } else {
                return { ...prev, services: [...currentServices, service].join(', ') };
            }
        });
    };

    const services = ["Branding", "Web Design", "Development", "Marketing"];

    return (
        <div className="min-h-screen bg-background text-foreground pt-32 pb-20 relative overflow-hidden">
            <Helmet>
                <title>Contact Webdeven | Get a Quote for Your Project</title>
                <meta name="description" content="Ready to build or upgrade your website? Contact Webdeven today to discuss your next high-performance web project." />
                <link rel="canonical" href="https://webdeven.com/contact" />
            </Helmet>
            {/* Grid Background */}
            <div className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px'
                }}
            ></div>

            {/* Ambient Glows */}
            <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-20 left-0 w-[500px] h-[500px] bg-primary/[0.02] blur-[150px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="mb-12">

                    <m.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-outfit font-bold text-foreground mb-6 leading-tight"
                    >
                        Contact Webdeven <br />
                        <span className="text-primary">Start Your Project</span>
                    </m.h1>
                    <m.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <p className="text-muted-foreground text-lg max-w-xl mb-10">
                            Ready to build or upgrade your website? Whether you need website development, social media management, or hosting support — we’re ready to help. Fill out the form and let’s discuss your goals.
                        </p>
                        <div className="w-full h-px bg-primary/20"></div>
                    </m.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    {/* Form Section */}
                    <m.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        {!isSubmitted ? (
                            <form ref={form} onSubmit={handleSubmit} className="space-y-12">

                                {/* Name & Email */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                    <div className="relative group">
                                        <input
                                            type="text"
                                            required
                                            name="from_name"
                                            className="w-full bg-transparent border-b border-border py-4 text-xl outline-none focus:border-primary transition-colors placeholder-transparent peer"
                                            placeholder="Name"
                                            id="name"
                                            value={formState.name}
                                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                        />
                                        <label
                                            htmlFor="name"
                                            className="absolute left-0 top-4 text-muted-foreground text-lg transition-all peer-focus:-top-6 peer-focus:text-primary peer-focus:text-xs peer-placeholder-shown:top-4 peer-placeholder-shown:text-lg peer-valid:-top-6 peer-valid:text-xs peer-valid:text-muted-foreground pointer-events-none"
                                        >
                                            Your Name <span className="text-red-500">*</span>
                                        </label>
                                    </div>
                                    <div className="relative group">
                                        <input
                                            type="email"
                                            required
                                            name="from_email"
                                            className="w-full bg-transparent border-b border-border py-4 text-xl outline-none focus:border-primary transition-colors placeholder-transparent peer"
                                            placeholder="Email"
                                            id="email"
                                            value={formState.email}
                                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                        />
                                        <label
                                            htmlFor="email"
                                            className="absolute left-0 top-4 text-muted-foreground text-lg transition-all peer-focus:-top-6 peer-focus:text-primary peer-focus:text-xs peer-placeholder-shown:top-4 peer-placeholder-shown:text-lg peer-valid:-top-6 peer-valid:text-xs peer-valid:text-muted-foreground pointer-events-none"
                                        >
                                            Email Address
                                        </label>
                                    </div>
                                </div>

                                {/* Mobile Number */}
                                <div className="relative group">
                                    <input
                                        type="tel"
                                        required
                                        name="mobile"
                                        className="w-full bg-transparent border-b border-border py-4 text-xl outline-none focus:border-primary transition-colors placeholder-transparent peer"
                                        placeholder="Mobile"
                                        id="mobile"
                                        value={formState.mobile}
                                        onChange={(e) => setFormState({ ...formState, mobile: e.target.value })}
                                    />
                                    <label
                                        htmlFor="mobile"
                                        className="absolute left-0 top-4 text-muted-foreground text-lg transition-all peer-focus:-top-6 peer-focus:text-primary peer-focus:text-xs peer-placeholder-shown:top-4 peer-placeholder-shown:text-lg peer-valid:-top-6 peer-valid:text-xs peer-valid:text-muted-foreground pointer-events-none"
                                    >
                                        Mobile Number <span className="text-red-500">*</span>
                                    </label>
                                </div>

                                {/* Services Selection */}
                                <div className="space-y-6">
                                    <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
                                        I'm interested in <span className="text-red-500">*</span>
                                    </label>

                                    {/* Selected Services Display */}
                                    <div className="relative group mt-6">
                                        <input
                                            type="text"
                                            name="services"
                                            className="w-full bg-transparent border-b border-border py-4 text-xl outline-none focus:border-primary transition-colors text-primary placeholder-transparent peer cursor-default"
                                            value={formState.services}
                                            readOnly
                                            placeholder="Services"
                                            id="services-input"
                                            required
                                        />
                                        <label
                                            htmlFor="services-input"
                                            className={`absolute left-0 transition-all pointer-events-none
                                                ${formState.services
                                                    ? '-top-6 text-xs text-muted-foreground'
                                                    : 'top-4 text-lg text-muted-foreground peer-focus:-top-6 peer-focus:text-primary peer-focus:text-xs'
                                                }`}
                                        >
                                            Select services below...
                                        </label>
                                    </div>

                                    <div className="flex flex-wrap gap-4 pt-2">
                                        {services.map((service) => (
                                            <button
                                                key={service}
                                                type="button"
                                                onClick={() => handleServiceToggle(service)}
                                                className={`px-6 py-3 rounded-full border transition-all duration-300 text-base font-bold
                                                  ${formState.services.includes(service)
                                                        ? 'bg-primary text-black border-primary'
                                                        : 'bg-transparent border-border text-muted-foreground hover:border-white/30 hover:text-foreground'
                                                    }`}
                                            >
                                                {service}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Message */}
                                <div className="relative group">
                                    <textarea
                                        required
                                        rows={1}
                                        name="message"
                                        className="w-full bg-transparent border-b border-border py-4 text-xl outline-none focus:border-primary transition-colors text-muted-foreground placeholder-gray-500 resize-none"
                                        placeholder="Tell us about your project"
                                        id="message"
                                        value={formState.message}
                                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <MagneticButton className="bg-primary hover:bg-[#a6e62d] text-black px-16 py-5 rounded-full text-lg font-bold shadow-[0_0_20px_rgba(180,254,48,0.2)] hover:shadow-[0_0_40px_rgba(180,254,48,0.4)] transition-all flex items-center gap-3"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? 'Sending...' : 'Start Project'} <ArrowUpRight size={20} />
                                    </MagneticButton>
                                    <p className="mt-4 text-sm text-muted-foreground font-medium">No spam. Clear proposal within 24 hours.</p>
                                </div>

                            </form>
                        ) : (
                            <m.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-white/5 border border-border rounded-3xl p-12 text-center"
                            >
                                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                                    <CheckCircle2 size={40} />
                                </div>
                                <h3 className="text-3xl font-bold text-foreground mb-4">Message Sent!</h3>
                                <p className="text-muted-foreground">Thanks for reaching out {formState.name.split(' ')[0]}. We'll get back to you within 24 hours.</p>
                            </m.div>
                        )}
                    </m.div>

                    {/* Contact Info Sidebar - Reinforced Identity */}
                    <m.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-card border border-border rounded-3xl p-10 h-fit sticky top-32 flex flex-col gap-10"
                    >
                        {/* Status Badge */}
                        <div className="flex items-center justify-between border-b border-border pb-8">
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="relative flex h-3 w-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                                    </span>
                                    <span className="text-primary text-sm font-bold uppercase tracking-widest">Available Now</span>
                                </div>
                                <p className="text-muted-foreground text-xs font-medium">Accepting new projects</p>
                            </div>
                            <div className="text-right">
                                <p className="text-muted-foreground text-xs font-bold uppercase tracking-widest mb-1">Response Time</p>
                                <p className="text-foreground text-sm font-bold">&lt; 24 Hours</p>
                            </div>
                        </div>

                        {/* Contact Details */}
                        <div className="space-y-8">
                            <div className="flex items-start gap-5 group cursor-default">
                                <div className="w-12 h-12 rounded-full bg-white/5 border border-border flex items-center justify-center text-muted-foreground group-hover:bg-primary group-hover:text-black group-hover:border-primary transition-all duration-300">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Email Us</p>
                                    <a href="mailto:hello@webdeven.com" className="text-xl font-medium text-foreground hover:text-primary transition-colors">hello@webdeven.com</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-5 group cursor-default">
                                <div className="w-12 h-12 rounded-full bg-white/5 border border-border flex items-center justify-center text-muted-foreground group-hover:bg-primary group-hover:text-black group-hover:border-primary transition-all duration-300">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Call Us</p>
                                    <a href="tel:+917798851576" className="text-xl font-medium text-foreground hover:text-primary transition-colors">+91 7798851576</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-5 group cursor-default">
                                <div className="w-12 h-12 rounded-full bg-white/5 border border-border flex items-center justify-center text-muted-foreground group-hover:bg-primary group-hover:text-black group-hover:border-primary transition-all duration-300">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Visit Us</p>
                                    <p className="text-xl font-medium text-foreground">Baner, Pune</p>
                                </div>
                            </div>
                        </div>

                        {/* Trust Stats - Mini Grid */}
                        <div className="grid grid-cols-3 gap-2 border-t border-border pt-12 mt-4">
                            <div>
                                <p className="text-3xl font-bold text-primary mb-2">30+</p>
                                <p className="text-[11px] uppercase tracking-widest text-muted-foreground font-bold leading-tight">Successful Launches</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-primary mb-2">35%</p>
                                <p className="text-[11px] uppercase tracking-widest text-muted-foreground font-bold leading-tight">Avg Traffic Lift</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-primary mb-2">15+</p>
                                <p className="text-[11px] uppercase tracking-widest text-muted-foreground font-bold leading-tight">Successful Clients</p>
                            </div>
                        </div>

                        {/* Socials */}
                        <div className="mt-2 pt-2">
                            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-6">Follow Us</p>
                            <div className="flex gap-5">
                                <a href="https://www.instagram.com/thewebdeven" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram" className="text-muted-foreground hover:text-[#E1306C] transition-all duration-300 hover:scale-110">
                                    <Instagram size={24} strokeWidth={1.5} />
                                </a>
                                <a href="https://x.com/WebDeven" target="_blank" rel="noopener noreferrer" aria-label="Follow us on X" className="text-muted-foreground hover:text-white transition-all duration-300 hover:scale-110">
                                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </m.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
