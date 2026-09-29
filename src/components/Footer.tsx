import React from 'react';
import Logo from './Logo';

const SocialIcon: React.FC<{ label: string }> = ({ label }) => (
  <span aria-hidden="true" className="text-[10px] font-bold leading-none">
    {label.slice(0, 2).toUpperCase()}
  </span>
);

export const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal text-cream pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-cream/10">
        <div className="md:col-span-5 space-y-4">
          <Logo variant="light" />
          <p className="text-cream/60 text-xs max-w-sm leading-relaxed">
            Elevating brand narratives through tailored strategic positioning, high-impact content, and innovative digital marketing.
          </p>
        </div>

        <div className="md:col-span-3 space-y-3">
          <p className="text-xs font-bold uppercase tracking-widest text-cream/40">QUICK LINKS</p>
          <ul className="space-y-2 text-xs text-cream/70">
            <li><a href="#hero" className="hover:text-cream">Home</a></li>
            <li><a href="#about" className="hover:text-cream">About Us</a></li>
            <li><a href="#services" className="hover:text-cream">Services</a></li>
            <li><a href="#portfolio" className="hover:text-cream">Portfolio Work</a></li>
            <li><a href="#contact" className="hover:text-cream">Contact Us</a></li>
          </ul>
        </div>

        <div className="md:col-span-4 space-y-3">
          <p className="text-xs font-bold uppercase tracking-widest text-cream/40">CONNECT WITH US</p>
          <div className="flex gap-3">
            <a href="#" aria-label="Instagram" className="p-2 bg-cream/5 rounded-full hover:bg-burgundy transition-colors"><SocialIcon label="Instagram" /></a>
            <a href="#" aria-label="LinkedIn" className="p-2 bg-cream/5 rounded-full hover:bg-burgundy transition-colors"><SocialIcon label="LinkedIn" /></a>
            <a href="#" aria-label="Twitter" className="p-2 bg-cream/5 rounded-full hover:bg-burgundy transition-colors"><SocialIcon label="Twitter" /></a>
            <a href="#" aria-label="Facebook" className="p-2 bg-cream/5 rounded-full hover:bg-burgundy transition-colors"><SocialIcon label="Facebook" /></a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-6 flex flex-col sm:flex-row justify-between items-center text-[11px] text-cream/40 gap-2">
        <p>© {new Date().getFullYear()} Brilliance Konnect. All Rights Reserved.</p>
        <p>Built with React & Tailwind CSS</p>
      </div>
    </footer>
  );
};
export default Footer;