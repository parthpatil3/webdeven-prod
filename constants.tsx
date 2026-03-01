
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
    title: 'High-Performance Websites',
    description: 'Built for speed, SEO visibility, and conversions — turning traffic into measurable revenue.',
    icon: <Monitor className="w-6 h-6 text-primary" />,
    tags: []
  },
  {
    id: 'web-ui',
    title: 'Brand Authority & Engagement',
    description: 'Strategic social systems built to expand reach, strengthen authority, and convert attention into trust.',
    icon: <Palette className="w-6 h-6 text-primary" />,
    tags: []
  },
  {
    id: 'video',
    title: 'Performance Hosting',
    description: 'Secure, managed hosting with proactive updates and monitoring — ensuring speed, stability, and uptime.',
    icon: <Play className="w-6 h-6 text-primary" />,
    tags: []
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Vivah By Raka',
    category: 'WEBSITE DEVELOPMENT',
    description: 'Premium wedding decor website built for visual storytelling and inquiry generation. The experience is fast, search-optimized, and structured to turn visitors into qualified leads.',
    image: '/vbr.webp',
    tags: ['WordPress', 'SEO Optimization', 'Lead Generation'],
    link: 'https://vivahbyraka.com'
  },
  {
    id: '2',
    title: 'TheDegreeWala.com',
    category: 'WEBSITE DEVELOPMENT',
    description: 'Education-focused website structured to guide visitors clearly from information to inquiry. Built with strong search visibility and conversion-focused page architecture to capture quality leads.',
    image: '/tdw.webp',
    tags: ['WordPress', 'SEO Pages', 'Conversion Funnels'],
    link: 'https://thedegreewala.com'
  },
  {
    id: '3',
    title: 'SocialFabric',
    category: 'WEBSITE DEVELOPMENT',
    description: 'Modern brand website created to showcase work, build trust, and drive inquiries. Designed with performance, clarity, and strategic positioning at its core.',
    image: '/sf.webp',
    tags: ['UI/UX Design', 'Performance Optimization', 'Brand Positioning'],
    link: 'https://socialfabric327.com'
  },
  {
    id: '4',
    title: 'KS Engineering Services',
    category: 'WEBSITE DEVELOPMENT',
    description: 'Professional service website developed to establish credibility and generate consistent inquiries. Structured service pages and clear calls-to-action support both search visibility and lead conversion.',
    image: '/kses.webp',
    tags: ['Service Website', 'SEO Foundation', 'Lead Conversion'],
    link: 'https://ksengineeringservices.in'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'q1',
    question: 'What makes your websites different from others?',
    answer: 'Most websites are built to look good. We build them to perform. Every project is structured around speed, SEO foundation, clarity of messaging, and conversion architecture. From layout hierarchy to call-to-action placement, everything is intentional. The goal is simple: turn visitors into inquiries, not just impressions.'
  },
  {
    id: 'q2',
    question: 'How do you approach conversion and lead generation?',
    answer: 'We design with the end goal in mind. Before building, we define the primary action you want users to take. Then we structure content, page flow, and user journeys to guide visitors naturally toward that action. Clear messaging, strategic CTAs, and optimized forms ensure that traffic translates into measurable business outcomes.'
  },
  {
    id: 'q3',
    question: 'What kind of results can I expect?',
    answer: 'Results depend on your industry, traffic, and positioning — but you can expect a strong foundation built for growth. You receive a fast-loading, SEO-ready website structured for visibility and lead capture. Combined with consistent marketing efforts, this creates a scalable system designed to generate inquiries and build authority over time.'
  },
  {
    id: 'q4',
    question: 'Is SEO included in your website builds?',
    answer: 'Yes. SEO is integrated from the start. We implement technical best practices including clean structure, proper heading hierarchy, metadata setup, speed optimization, and search-friendly architecture. This ensures your website is discoverable and ready for long-term organic growth.'
  },
  {
    id: 'q5',
    question: 'Do you provide hosting and ongoing support?',
    answer: 'Yes. We offer managed hosting and maintenance for clients who prefer a complete solution. This includes performance monitoring, updates, security checks, backups, and technical support. The objective is simple: keep your website secure, stable, and consistently performing.'
  }
];
