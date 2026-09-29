import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const portfolioItems = [
  {
    id: 1,
    category: 'Branding',
    title: 'Aesthetic Fashion Campaign',
    description: 'Complete brand repositioning, visual identity guidelines, and launch commercial photography.',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    category: 'Digital Ads',
    title: 'Luxury Real Estate Ad Suite',
    description: 'High-performing social ad creative suite driving record-high direct consultation requests.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    category: 'Social Media',
    title: 'Artisanal Coffee Growth',
    description: 'Curated lifestyle feed strategy yielding a 310% increase in organic Instagram interactions.',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 4,
    category: 'Web Design',
    title: 'Fintech Service Platform',
    description: 'Responsive web platform interface engineered for maximum customer sign-up conversion.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
  }
];

const categories = ['ALL CATEGORIES', 'Branding', 'Digital Ads', 'Social Media', 'Web Design'];

export const Portfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ALL CATEGORIES');

  const filteredItems = activeTab === 'ALL CATEGORIES'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeTab);

  return (
    <section id="portfolio" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-widest text-burgundy">FEATURED PORTFOLIO</p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-charcoal">
            Showcasing Our Curated Campaign Work.
          </h2>
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`text-xs font-semibold uppercase px-4 py-2 rounded-full transition-all ${
                activeTab === category
                  ? 'bg-burgundy text-cream'
                  : 'bg-cream-card text-charcoal/70 hover:bg-charcoal/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredItems.map((item) => (
          <div key={item.id} className="bg-cream-card rounded-2xl overflow-hidden border border-charcoal/5 group">
            <div className="aspect-[16/10] bg-charcoal overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 flex items-start justify-between gap-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-burgundy">{item.category}</span>
                <h3 className="font-serif text-2xl font-bold text-charcoal mt-1 mb-2">{item.title}</h3>
                <p className="text-sm text-charcoal/70">{item.description}</p>
              </div>
              <a 
                href="#contact" 
                className="p-3 bg-burgundy/10 text-burgundy rounded-full group-hover:bg-burgundy group-hover:text-cream transition-colors flex-shrink-0"
              >
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Portfolio;