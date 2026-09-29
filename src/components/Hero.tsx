import React from 'react';
import { ArrowUpRight, Play } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="pt-12 pb-20 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-burgundy">
            #1 BRANDING & DIGITAL MARKETING AGENCY
          </p>

          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-charcoal leading-[1.1]">
            Connecting <span className="text-burgundy italic">Brands</span> With Their Audience.
          </h1>

          <p className="text-charcoal/70 text-base sm:text-lg max-w-xl leading-relaxed">
            At Brilliance Konnect, we bring brand stories to life through strategic branding, compelling content creation, dynamic social media management, and data-driven marketing campaigns.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-burgundy hover:bg-burgundy-hover text-cream px-6 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all shadow-md"
            >
              BOOK YOUR DISCOVERY CALL
              <ArrowUpRight size={16} />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 border border-charcoal/20 hover:border-burgundy text-charcoal px-6 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all"
            >
              SEE OUR WORK
            </a>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-charcoal/10 max-w-lg">
            <div>
              <div className="font-serif text-3xl font-bold text-charcoal">200+</div>
              <p className="text-xs text-charcoal/60 mt-1">Campaigns Executed</p>
            </div>
            <div>
              <div className="font-serif text-3xl font-bold text-charcoal">98%</div>
              <p className="text-xs text-charcoal/60 mt-1">Client Retention Rate</p>
            </div>
            <div>
              <div className="font-serif text-3xl font-bold text-charcoal">4.9/5</div>
              <p className="text-xs text-charcoal/60 mt-1">Average Satisfaction Score</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-charcoal shadow-2xl group cursor-pointer border-4 border-cream">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
              alt="Creative Team Working"
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-cream/90 text-burgundy flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Play size={24} className="ml-1 fill-burgundy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;