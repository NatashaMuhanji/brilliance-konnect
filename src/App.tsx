import { motion, useScroll, useSpring } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import InteractiveContact from './components/InteractiveContact';
import Footer from './components/Footer';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen bg-cream text-charcoal selection:bg-burgundy selection:text-cream flex flex-col justify-between" id="app-root-container">
      {/* Top Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-burgundy z-50 origin-left"
        style={{ scaleX }}
        id="scroll-progress-indicator"
      />

      {/* Floating Header Navbar */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <InteractiveContact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}