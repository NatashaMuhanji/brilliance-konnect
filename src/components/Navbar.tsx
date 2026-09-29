import { useState } from "react";
import Logo from "./Logo";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-charcoal/5 bg-cream/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Logo variant="dark" />

        <nav className="hidden items-center gap-8 text-sm font-medium text-charcoal/80 md:flex">
          <a href="#hero" className="transition-colors hover:text-burgundy">
            HOME
          </a>
          <a href="#about" className="transition-colors hover:text-burgundy">
            ABOUT
          </a>
          <a href="#services" className="transition-colors hover:text-burgundy">
            SERVICES
          </a>
          <a href="#portfolio" className="transition-colors hover:text-burgundy">
            PORTFOLIO
          </a>
          <a href="#contact" className="transition-colors hover:text-burgundy">
            CONTACT
          </a>
        </nav>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="rounded-full bg-burgundy px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-cream shadow-sm transition-all hover:bg-burgundy-hover hover:shadow"
          >
            WORK WITH US
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="p-1 text-charcoal md:hidden"
          aria-label="Toggle Navigation Menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="flex flex-col gap-4 border-b border-charcoal/10 bg-cream px-6 py-6 md:hidden">
          <a
            href="#hero"
            onClick={() => setIsOpen(false)}
            className="text-sm font-medium text-charcoal"
          >
            HOME
          </a>

          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="text-sm font-medium text-charcoal"
          >
            ABOUT
          </a>

          <a
            href="#services"
            onClick={() => setIsOpen(false)}
            className="text-sm font-medium text-charcoal"
          >
            SERVICES
          </a>

          <a
            href="#portfolio"
            onClick={() => setIsOpen(false)}
            className="text-sm font-medium text-charcoal"
          >
            PORTFOLIO
          </a>

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="text-sm font-medium text-charcoal"
          >
            CONTACT
          </a>

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-2 inline-block rounded-full bg-burgundy px-5 py-3 text-center text-xs font-semibold uppercase tracking-wider text-cream"
          >
            WORK WITH US
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;