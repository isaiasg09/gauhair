import React from 'react';
import { Instagram, MessageCircle, MapPin, Phone, Scissors, ArrowUp } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-ink border-t border-line text-ash text-xs select-none">
      {/* Barber pole top accent line */}
      <div className="h-[3px] w-full animate-barber-pole opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-sm overflow-hidden border border-amber/40 bg-graphite flex items-center justify-center p-0.5 shadow-sm">
                <img
                  src={siteData.logo}
                  alt="Logo Gaucho's Hair Itu"
                  className="w-full h-full object-cover filter contrast-125"
                />
              </div>
              <div>
                <span className="font-display text-2xl text-bone tracking-wider uppercase block">
                  GAUCHO'S HAIR
                </span>
                <span className="font-label text-[10px] tracking-widest text-amber uppercase">
                  Barbearia Itu Novo Centro · Desde 2013
                </span>
              </div>
            </div>

            <p className="text-ash text-xs leading-relaxed max-w-sm font-sans mt-2">
              A união entre a tradição da navalha clássica, a técnica apurada dos cortes modernos e o aconchego de uma barbearia que te recebe como amigo.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteData.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-sm border border-line bg-steel hover:border-amber hover:text-amber flex items-center justify-center transition-colors"
                aria-label="Instagram da Gaucho's Hair"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={siteData.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-sm border border-line bg-steel hover:border-amber hover:text-amber flex items-center justify-center transition-colors"
                aria-label="WhatsApp da Gaucho's Hair"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
              </a>

              <a
                href={`tel:${siteData.telefoneRaw}`}
                className="w-9 h-9 rounded-sm border border-line bg-steel hover:border-amber hover:text-amber flex items-center justify-center transition-colors"
                aria-label="Telefone da Gaucho's Hair"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <span className="font-label text-xs uppercase tracking-widest text-bone font-bold block mb-2">
              Navegação
            </span>
            <ul className="flex flex-col gap-2.5 font-label text-xs uppercase tracking-wider">
              <li>
                <a href="#servicos" className="hover:text-amber transition-colors">
                  Serviços & Preços
                </a>
              </li>
              <li>
                <a href="#experiencia" className="hover:text-amber transition-colors">
                  A Experiência Gaucho's
                </a>
              </li>
              <li>
                <a href="#barbeiros" className="hover:text-amber transition-colors">
                  Nossos Barbeiros
                </a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-amber transition-colors">
                  Galeria de Trabalhos
                </a>
              </li>
              <li>
                <a href="#avaliacoes" className="hover:text-amber transition-colors">
                  Avaliações Google (4.9★)
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber transition-colors">
                  Dúvidas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Info */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <span className="font-label text-xs uppercase tracking-widest text-bone font-bold block mb-2">
              Onde Estamos
            </span>
            <p className="text-xs text-ash font-sans flex items-start gap-2">
              <MapPin className="w-4 h-4 text-amber shrink-0 mt-0.5" />
              <span>{siteData.endereco}</span>
            </p>
            <p className="text-xs text-ash font-sans flex items-center gap-2 mt-1">
              <Phone className="w-4 h-4 text-amber shrink-0" />
              <span>{siteData.telefone}</span>
            </p>

            <div className="mt-4 pt-4 border-t border-line/60">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 font-label text-xs uppercase tracking-widest text-ash hover:text-amber transition-colors"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Voltar ao topo</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 border-t border-line/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-label uppercase tracking-wider text-ash/80">
          <div>
            © {currentYear} {siteData.nomeCurto}. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-2">
            <span>Desenvolvido com excelência técnica & cinematográfica</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
