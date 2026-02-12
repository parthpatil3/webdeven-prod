
import React from 'react';
import { 
  Palette, 
  Monitor, 
  Play,
  ArrowRight
} from 'lucide-react';
import { Service, Project, Testimonial, FAQItem } from './types';

export const SERVICES: Service[] = [
  {
    id: 'identity',
    title: 'Brand Identity & Logo Design',
    description: 'Create cohesive, memorable brand identities that make you stand out.',
    icon: <Palette className="w-6 h-6 text-primary" />,
    tags: []
  },
  {
    id: 'web-ui',
    title: 'Web UI/UX Design',
    description: 'Design intuitive, conversion-driven websites your customers will love.',
    icon: <Monitor className="w-6 h-6 text-primary" />,
    tags: []
  },
  {
    id: 'video',
    title: 'Video Editing & Logo Animation',
    description: 'Bring your brand to life with engaging visuals and animations.',
    icon: <Play className="w-6 h-6 text-primary" />,
    tags: []
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'NovaTech - Brand Identify',
    category: 'Identity',
    description: 'Created a bold, innovative brand identity, improving recognition by 45%.',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800',
    tags: ['Identity', 'Branding', 'Portfolio', 'Design', 'And more...']
  },
  {
    id: '2',
    title: 'LuxeHome - UI/UX for E-commerce',
    category: 'Design',
    description: 'Created a bold, innovative brand identity, improving recognition by 45%.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    tags: ['UI/UX', 'Design', 'E-commerce', 'Landing page', 'And more...']
  },
  {
    id: '3',
    title: 'ZenoFit - Logo Animation',
    category: 'Animation',
    description: 'Created a bold, innovative brand identity, improving recognition by 45%.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    tags: ['Animation', 'Motion Graphics', 'Branding', 'Visual Identify', 'And more...']
  },
  {
    id: '4',
    title: 'EcoBloom - For Rebranding',
    category: 'Rebrand',
    description: 'Created a bold, innovative brand identity, improving recognition by 45%.',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800',
    tags: ['Rebrand', 'Branding', 'Marketing', 'Visual Identify', 'And more...']
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'q1',
    question: 'How long does a project take?',
    answer: 'Project timelines vary based on complexity and scope. Simple designs take a few days, while full websites or branding projects may take weeks or months for research, design, revisions, and development.'
  },
  {
    id: 'q2',
    question: 'What is your pricing?',
    answer: 'We offer competitive pricing based on the specific needs of your project. Contact us for a custom quote.'
  },
  {
    id: 'q3',
    question: 'Can I request revisions?',
    answer: 'Yes, we include a set number of revision rounds in every project to ensure you are 100% satisfied.'
  },
  {
    id: 'q4',
    question: 'How do I start a project with you?',
    answer: 'Simply click "Book a Call" or "Get Started" and fill out our inquiry form.'
  },
  {
    id: 'q5',
    question: 'Do you offer ongoing support?',
    answer: 'Absolutely. We offer maintenance and ongoing design support packages for all our clients.'
  }
];
