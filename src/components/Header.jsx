import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Instagram, Menu, X, Scissors, MapPin } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Serviços', href: '#servicos' },
    { name: 'Experiência', href: '#experiencia' },
    { name: 'Barbeiros', href: '#barbeiros' },
    { name: 'Galeria', href: '#galeria' },
    { name: 'Avaliações', href: '#avaliacoes' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Localização', href: '#localizacao' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-ink/90 backdrop-blur-md border-b border-line py-3 shadow-lg'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Brand */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus:ring-1 focus:ring-amber"
            aria-label="Gaucho's Hair - Início"
          >
            <div className="relative w-10 h-10 rounded-sm overflow-hidden border border-amber/40 bg-graphite flex items-center justify-center p-0.5 group-hover:border-amber transition-colors shadow-sm">
              <img
                src={siteData.logo}
                alt="Logo Gaucho's Hair Barbearia Itu"
                className="w-full h-full object-cover filter contrast-125"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-2xl sm:text-3xl tracking-wider text-bone group-hover:text-amber transition-colors leading-none">
                GAUCHO'S HAIR
              </span>
              <span className="font-label text-[10px] tracking-widest text-ash uppercase leading-tight flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber inline-block" />
                Barbearia Itu Novo Centro · Est. 2013
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-label text-xs uppercase tracking-widest text-ash hover:text-amber transition-colors relative py-1 focus:outline-none focus:text-amber"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Instagram Link */}
            <a
              href={siteData.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 border border-line rounded-sm flex items-center justify-center text-ash hover:text-bone hover:border-amber transition-colors focus:outline-none focus:ring-1 focus:ring-amber"
              aria-label="Instagram da Gaucho's Hair"
            >
              <Instagram className="w-4 h-4" />
            </a>

            {/* WhatsApp CTA Button */}
            <a
              href={siteData.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="shine-sweep relative inline-flex items-center gap-2 bg-amber hover:bg-amber-light text-ink font-label text-xs uppercase tracking-widest font-bold px-4 py-2.5 rounded-sm shadow-amber-glow transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Agendar</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={siteData.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber text-ink p-2 rounded-sm text-xs font-bold"
              aria-label="Agendar no WhatsApp"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 border border-line rounded-sm text-bone hover:border-amber focus:outline-none"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[60px] z-40 bg-ink/95 backdrop-blur-xl border-b border-line px-6 py-6 lg:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-label text-sm uppercase tracking-widest text-bone hover:text-amber py-2 border-b border-line/40 flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <Scissors className="w-3.5 h-3.5 text-amber/60" />
                </a>
              ))}

              <div className="pt-2 flex flex-col gap-3">
                <a
                  href={siteData.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 bg-amber text-ink font-label text-xs uppercase tracking-widest font-bold py-3 rounded-sm shadow-amber-glow"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Agendar Horário no WhatsApp</span>
                </a>

                <div className="flex items-center justify-between pt-2 text-xs text-ash">
                  <a
                    href={siteData.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 hover:text-amber"
                  >
                    <Instagram className="w-4 h-4 text-amber" />
                    <span>{siteData.instagramHandle}</span>
                  </a>
                  <a
                    href={siteData.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 hover:text-amber"
                  >
                    <MapPin className="w-4 h-4 text-amber" />
                    <span>Novo Centro, Itu</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
