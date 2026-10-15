import React from 'react';
import SchemaMarkup from './components/SchemaMarkup';
import Header from './components/Header';
import Hero from './components/Hero';
import MarqueeStrip from './components/MarqueeStrip';
import Services from './components/Services';
import Experience from './components/Experience';
import Team from './components/Team';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import HowItWorks from './components/HowItWorks';
import FAQ from './components/FAQ';
import Location from './components/Location';
import InstagramBlock from './components/InstagramBlock';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="relative min-h-screen bg-ink text-bone font-sans overflow-x-hidden selection:bg-amber selection:text-ink">
      {/* Local SEO Schema Structured Data */}
      <SchemaMarkup />

      {/* Global Grain/Noise Film Texture Overlay */}
      <div className="fixed inset-0 bg-noise pointer-events-none z-20 opacity-40 mix-blend-screen" />

      {/* Fixed Navigation Header */}
      <Header />
      
      {/* Main Page Flow */}
      <main className="relative z-10">
        <Hero />
        <MarqueeStrip />
        <Services />
        <Experience />
        <Team />
        <Gallery />
        <Reviews />
        <HowItWorks />
        <FAQ />
        <Location />
        <InstagramBlock />
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action */}
      <FloatingWhatsApp />
    </div>
  );
}
