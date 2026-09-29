import React from 'react';
import { Target, Sparkles, ShieldCheck } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 space-y-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-burgundy">ABOUT OUR AGENCY</p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-charcoal leading-tight">
            Guiding Your Narrative With Professional Style.
          </h2>
          <p className="text-charcoal/70 leading-relaxed">
            Brilliance Konnect is a boutique digital agency dedicated to elevating brands. We blend artistic storytelling with analytical insights to build campaigns that convert audience attention into lasting brand loyalty.
          </p>
          <div className="p-6 bg-cream-card rounded-2xl border border-charcoal/5">
            <p className="text-sm italic text-charcoal/80">
              "Our mission is to make every brand voice resonant, distinct, and impossible to ignore in today’s crowded digital ecosystem."
            </p>
            <span className="block mt-3 text-xs font-bold text-burgundy uppercase">— Creative Director</span>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-charcoal/50 mb-2">THE CORE PILLARS OF OUR SUCCESS</p>
          
          <div className="p-6 bg-cream-card rounded-2xl border border-charcoal/5 flex gap-4 items-start">
            <div className="p-3 bg-burgundy/10 text-burgundy rounded-xl">
              <Target size={24} />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-charcoal mb-1">Strategic Alignment & Depth</h3>
              <p className="text-sm text-charcoal/70 leading-relaxed">
                We craft tailor-made strategies that directly align with your business goals, ensuring every asset generated delivers real impact.
              </p>
            </div>
          </div>

          <div className="p-6 bg-cream-card rounded-2xl border border-charcoal/5 flex gap-4 items-start">
            <div className="p-3 bg-burgundy/10 text-burgundy rounded-xl">
              <Sparkles size={24} />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-charcoal mb-1">Empathetic Storytelling</h3>
              <p className="text-sm text-charcoal/70 leading-relaxed">
                Connecting deeply with your audience by understanding their needs, aspirations, and communication preferences.
              </p>
            </div>
          </div>

          <div className="p-6 bg-cream-card rounded-2xl border border-charcoal/5 flex gap-4 items-start">
            <div className="p-3 bg-burgundy/10 text-burgundy rounded-xl">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-charcoal mb-1">High Quality Execution</h3>
              <p className="text-sm text-charcoal/70 leading-relaxed">
                From high-end imagery to high-converting ad copy, every output undergoes rigorous quality standard controls.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;