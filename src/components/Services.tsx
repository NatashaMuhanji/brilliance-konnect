import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const services = [
  {
    tag: 'BRAND STRATEGY',
    title: 'Brand Identity & Strategy',
    description: 'Build an authentic identity with cohesive visual guidelines, voice direction, and strategic positioning.',
    image: 'https://images.unsplash.com/photo-1542744094-3a3172720177?auto=format&fit=crop&q=80&w=600'
  },
  {
    tag: 'SOCIAL MEDIA',
    title: 'Social Media Management',
    description: 'Grow your digital footprint with curated content feeds, audience engagement strategies, and community management.',
    image: null
  },
  {
    tag: 'CONTENT PRODUCTION',
    title: 'Media & Asset Production',
    description: 'High-definition photography, video production, and commercial graphic assets built for maximum engagement.',
    image: null
  },
  {
    tag: 'DIGITAL CAMPAIGNS',
    title: 'Performance Paid Ads',
    description: 'Targeted pay-per-click and social media advertising campaigns optimized continuously for measurable ROI.',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=600'
  },
  {
    tag: 'PUBLIC RELATIONS',
    title: 'Press & Media Relations',
    description: 'Positioning your brand front-and-center across authoritative press outlets and digital media hubs.',
    image: null
  },
  {
    tag: 'WEB & DIGITAL',
    title: 'Web Experience & Design',
    description: 'Designing intuitive, fast-loading, mobile-first websites engineered to turn visitors into paying customers.',
    image: null
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-burgundy">OUR CORE SERVICES</p>
        <h2 className="font-serif text-4xl sm:text-5xl font-bold text-charcoal">
          Elevating Brands, Igniting Connections.
        </h2>
        <p className="text-charcoal/70 text-sm">
          Tailored solutions designed to help ambitious companies dominate their respective market segments.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="p-6 bg-cream-card rounded-2xl border border-charcoal/5 flex flex-col justify-between hover:shadow-lg transition-all group"
          >
            <div>
              {service.image && (
                <div className="aspect-[16/9] rounded-xl overflow-hidden mb-6 bg-charcoal">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <span className="text-[10px] font-bold uppercase tracking-widest text-burgundy bg-burgundy/10 px-2.5 py-1 rounded-md inline-block mb-4">
                {service.tag}
              </span>
              <h3 className="font-serif text-2xl font-bold text-charcoal mb-3">{service.title}</h3>
              <p className="text-sm text-charcoal/70 leading-relaxed mb-6">{service.description}</p>
            </div>

            <a 
              href="#contact" 
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-burgundy hover:text-burgundy-hover pt-2"
            >
              LEARN MORE <ArrowUpRight size={14} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Services;