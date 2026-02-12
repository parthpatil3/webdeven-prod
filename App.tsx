
import React, { useState } from 'react';
import { 
  ArrowRight, 
  ChevronDown, 
  ChevronUp,
  Globe,
  Instagram,
  Linkedin,
  Star,
  Plus,
  Minus
} from 'lucide-react';
import { SERVICES, PROJECTS, FAQS } from './constants';
import { Project, FAQItem } from './types';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Star className="text-primary w-6 h-6" fill="currentColor" />
          <span className="text-2xl font-outfit font-black tracking-tighter uppercase">PIXEL</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <a href="#" className="hover:text-white transition-colors">Home</a>
          <a href="#" className="hover:text-white transition-colors">About</a>
          <a href="#" className="hover:text-white transition-colors">Service</a>
          <a href="#" className="hover:text-white transition-colors">Work</a>
          <a href="#" className="hover:text-white transition-colors">FAQs</a>
        </div>

        <button className="bg-primary text-dark px-6 py-2.5 rounded-pill font-bold text-sm hover:brightness-110 transition-all">
          Contact Us
        </button>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-40 pb-20 overflow-hidden">
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full h-[600px] hero-glow pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-8">
          <Star className="text-primary w-3 h-3" fill="currentColor" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-300">Pixel</span>
          <div className="ml-2 w-6 h-6 bg-white/5 rounded-full flex items-center justify-center">
             <ArrowRight size={12} className="text-primary" />
          </div>
        </div>

        <h1 className="text-5xl md:text-[5.5rem] font-outfit font-black mb-8 leading-[1] tracking-tight text-white max-w-5xl mx-auto">
          Turning Visions into <br /> Iconic Brands
        </h1>
        
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-medium">
          Helping businesses stand out through bold designs and strategic branding.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <button className="bg-primary text-dark px-10 py-3.5 rounded-full font-bold text-base hover:scale-105 transition-transform">
            Get Start
          </button>
          <button className="px-10 py-3.5 rounded-full font-bold text-base border border-white/20 hover:bg-white/5 transition-all">
            See Our Work
          </button>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto border-t border-white/5 pt-16">
          <div>
            <div className="text-4xl font-outfit font-bold text-white mb-2">500+</div>
            <div className="text-gray-500 text-xs font-bold uppercase tracking-widest">Projects Completed</div>
          </div>
          <div>
            <div className="text-4xl font-outfit font-bold text-white mb-2">600+</div>
            <div className="text-gray-500 text-xs font-bold uppercase tracking-widest">Happy Clients</div>
          </div>
          <div>
            <div className="text-4xl font-outfit font-bold text-white mb-2">7+</div>
            <div className="text-gray-500 text-xs font-bold uppercase tracking-widest">Industry Awards</div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceCard: React.FC<{ service: any }> = ({ service }) => {
  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-primary/20 blur-2xl opacity-0 group-hover:opacity-40 transition-opacity"></div>
      <div className="relative bg-[#0c0c0c] border border-white/5 p-8 rounded-custom h-full overflow-hidden transition-standard group-hover:border-primary/30">
        <div className="absolute -right-4 -bottom-4 w-24 h-24 geometric-pattern opacity-10"></div>
        <div className="mb-6 flex justify-between items-start">
          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20">
            {service.icon}
          </div>
        </div>
        <h3 className="text-xl font-outfit font-bold mb-4 text-white">{service.title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-10">
          {service.description}
        </p>
        <div className="absolute top-2 right-2 w-16 h-16 border-t border-r border-primary/20 rounded-tr-custom opacity-20"></div>
      </div>
    </div>
  );
};

const ProjectItem: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-[#0c0c0c] border border-white/5 rounded-custom p-8 group transition-standard hover:border-primary/20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col">
          <div className="mb-4">
            <span className="bg-primary/10 text-primary text-[10px] font-bold px-4 py-1.5 rounded-full border border-primary/20 uppercase tracking-widest">
              {project.category}
            </span>
          </div>
          <h3 className="text-3xl md:text-4xl font-outfit font-bold mb-6 text-white leading-tight">
            {project.title}
          </h3>
          <p className="text-gray-500 text-base mb-8 leading-relaxed max-w-md">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-10">
            {project.tags.map(tag => (
              <span key={tag} className="text-[10px] font-bold text-gray-400 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
                {tag}
              </span>
            ))}
          </div>
          <button className="flex items-center gap-2 text-primary text-sm font-bold uppercase tracking-widest group/link">
            View {project.category} <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
          </button>
        </div>
        <div className="rounded-xl overflow-hidden aspect-video relative">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-dark/40 to-transparent opacity-60"></div>
        </div>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const [openId, setOpenId] = useState<string | null>('q1');

  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-6">
            <Star className="text-primary w-3 h-3" fill="currentColor" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-300">FAQ</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-outfit font-bold text-white mb-12">Frequently Asked Questions</h2>
        </div>

        <div className="flex flex-col gap-4">
          {FAQS.map(faq => (
            <div 
              key={faq.id} 
              className={`bg-[#0c0c0c] border border-white/5 rounded-2xl overflow-hidden transition-standard ${openId === faq.id ? 'border-primary/20 shadow-lg shadow-primary/5' : ''}`}
            >
              <button 
                className="w-full p-6 text-left flex items-center justify-between"
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
              >
                <span className={`text-lg font-bold transition-colors ${openId === faq.id ? 'text-white' : 'text-gray-400'}`}>
                  {faq.question}
                </span>
                <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-standard ${openId === faq.id ? 'bg-primary border-primary text-dark' : 'text-gray-500'}`}>
                  {openId === faq.id ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>
              {openId === faq.id && (
                <div className="px-6 pb-6 text-gray-500 text-sm leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 bg-[#050505] border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-16">
          <div className="flex items-center gap-2">
            <Star className="text-primary w-8 h-8" fill="currentColor" />
            <span className="text-3xl font-outfit font-black tracking-tighter uppercase">PIXEL</span>
          </div>

          <div className="flex items-center gap-10 text-sm font-medium text-gray-500">
            <a href="#" className="hover:text-white">Home</a>
            <a href="#" className="hover:text-white">About</a>
            <a href="#" className="hover:text-white">Service</a>
            <a href="#" className="hover:text-white">Work</a>
            <a href="#" className="hover:text-white">FAQs</a>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-500 hover:text-primary transition-colors"><Globe size={20} /></a>
            <a href="#" className="text-gray-500 hover:text-primary transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-gray-500 hover:text-primary transition-colors"><Linkedin size={20} /></a>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-[11px] font-bold text-gray-600 uppercase tracking-widest gap-4">
          <p>© 2025 PIXEL PLUS. ALL RIGHTS RESERVED.</p>
          <p>SERVING CLIENTS WORLDWIDE</p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-grid">
      <Navbar />
      
      <main>
        <Hero />

        {/* Services Section */}
        <section id="services" className="py-32">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-outfit font-bold text-white mb-6">Services we provide</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {SERVICES.map(service => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </section>

        {/* Work Section */}
        <section id="projects" className="py-32 bg-[#050505]">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center mb-24">
              <h2 className="text-3xl md:text-5xl font-outfit font-bold text-white mb-6">Featured Projects</h2>
            </div>
            <div className="flex flex-col gap-8">
              {PROJECTS.map(project => (
                <ProjectItem key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        <FAQSection />

        {/* Final CTA */}
        <section className="py-32 container mx-auto px-6">
          <div className="relative bg-[#0c0c0c] border border-white/10 rounded-[40px] p-16 md:p-32 text-center overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 geometric-pattern opacity-10"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 geometric-pattern opacity-10"></div>
            
            <h2 className="text-4xl md:text-7xl font-outfit font-bold text-white mb-8 leading-tight max-w-4xl mx-auto">
              Curious how branding can <br /> elevate your business?
            </h2>
            <p className="text-gray-500 text-lg mb-12 max-w-xl mx-auto">
              Let's talk! Book a free consultation and discover how Pixel+ can grow your brand.
            </p>
            <button className="bg-primary text-dark px-12 py-4 rounded-full font-bold text-lg hover:brightness-110 transition-all shadow-[0_0_30px_rgba(180,254,48,0.2)]">
              Book A call
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
