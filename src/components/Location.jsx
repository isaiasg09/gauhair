import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Phone, MessageCircle, Instagram, Clock, ExternalLink } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function Location() {
  return (
    <section id="localizacao" className="relative py-28 bg-graphite border-t border-line overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-line pb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[2px] bg-amber" />
              <span className="font-label text-xs uppercase tracking-widest text-amber font-semibold">
                Venha nos Visitar
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-bone tracking-wide uppercase leading-tight">
              LOCALIZAÇÃO & <span className="font-editorial italic font-normal text-amber lowercase">contato.</span>
            </h2>
          </div>

          <p className="text-ash text-sm sm:text-base max-w-md mt-4 md:mt-0 font-sans">
            Fácil acesso, estacionamento tranquilo e localização nobre no Novo Centro de Itu.
          </p>
        </div>

        {/* 2-Column Industrial Card: Info & Map / Facade */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Direct Contact Details & Facade Preview */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            {/* Contact Cards */}
            <div className="bg-steel/80 border border-line rounded-sm p-7 flex flex-col gap-6">
              
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-ink border border-line flex items-center justify-center text-amber shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-label text-[10px] uppercase tracking-widest text-ash block mb-1">
                    Endereço
                  </span>
                  <div className="font-display text-xl text-bone uppercase">
                    R. Márcia Pierroni, 68
                  </div>
                  <div className="text-ash text-xs sm:text-sm mt-0.5">
                    Novo Centro, Itu — SP, 13303-525
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4 pt-4 border-t border-line/60">
                <div className="w-10 h-10 rounded-sm bg-ink border border-line flex items-center justify-center text-amber shrink-0 mt-0.5">
                  <MessageCircle className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <span className="font-label text-[10px] uppercase tracking-widest text-ash block mb-1">
                    WhatsApp & Agendamento
                  </span>
                  <a
                    href={siteData.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display text-xl text-amber hover:text-amber-light transition-colors uppercase"
                  >
                    {siteData.telefone}
                  </a>
                  <div className="text-ash text-xs mt-0.5">
                    Atendimento ágil para reservas e dúvidas
                  </div>
                </div>
              </div>

              {/* Telefone Fixo / Ligação */}
              <div className="flex items-start gap-4 pt-4 border-t border-line/60">
                <div className="w-10 h-10 rounded-sm bg-ink border border-line flex items-center justify-center text-amber shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-label text-[10px] uppercase tracking-widest text-ash block mb-1">
                    Ligação Direta
                  </span>
                  <a
                    href={`tel:${siteData.telefoneRaw}`}
                    className="font-display text-xl text-bone hover:text-amber transition-colors uppercase"
                  >
                    {siteData.telefone}
                  </a>
                  <div className="text-ash text-xs mt-0.5">
                    Ligue direto pelo seu telefone
                  </div>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-start gap-4 pt-4 border-t border-line/60">
                <div className="w-10 h-10 rounded-sm bg-ink border border-line flex items-center justify-center text-amber shrink-0 mt-0.5">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-label text-[10px] uppercase tracking-widest text-ash block mb-1">
                    Instagram Oficial
                  </span>
                  <a
                    href={siteData.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display text-xl text-bone hover:text-amber transition-colors uppercase flex items-center gap-1.5"
                  >
                    <span>{siteData.instagramHandle}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-ash" />
                  </a>
                  <div className="text-ash text-xs mt-0.5">
                    Acompanhe nosso feed com cortes diários
                  </div>
                </div>
              </div>

              {/* Como Chegar CTA Button */}
              <div className="pt-2">
                <a
                  href={siteData.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shine-sweep w-full py-3.5 bg-amber hover:bg-amber-light text-ink font-label text-xs uppercase tracking-widest font-bold rounded-sm shadow-amber-glow flex items-center justify-center gap-2 transition-all"
                >
                  <Navigation className="w-4 h-4 fill-current" />
                  <span>Traçar Rota no Google Maps</span>
                </a>
              </div>

            </div>

            {/* Facade Picture with Badge */}
            <div className="relative rounded-sm overflow-hidden border border-line bg-steel h-52 group">
              <img
                src="/fotos/web_01.jpg"
                alt="Fachada e recepção da Barbearia Gaucho's Hair Itu"
                loading="lazy"
                className="w-full h-full object-cover filter grayscale-[15%] contrast-110 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent flex items-end p-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber animate-pulse" />
                  <span className="font-label text-xs uppercase tracking-wider text-bone font-semibold">
                    Fachada no Novo Centro de Itu
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Embedded Map & Directions Card */}
          <div className="lg:col-span-7 flex flex-col h-full min-h-[460px] bg-steel/80 border border-line rounded-sm overflow-hidden shadow-card-elevated">
            
            {/* Top Bar of the Map */}
            <div className="p-4 bg-ink border-b border-line flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-label uppercase tracking-widest text-ash">
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                <span>Gaucho's Hair · Novo Centro Itu</span>
              </div>

              <a
                href={siteData.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-label text-amber hover:underline"
              >
                <span>Ver Mapa Ampliado</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Google Maps Iframe Embed with Dark Overlay Filter */}
            <div className="relative flex-1 w-full min-h-[380px] bg-ink">
              <iframe
                title="Localização Gaucho's Hair Barbearia Itu"
                src="https://maps.google.com/maps?q=Rua%20M%C3%A1rcia%20Pierroni,%2068,%20Novo%20Centro,%20Itu%20-%20SP&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 filter contrast-125 invert-[90%] hue-rotate-180"
                loading="lazy"
                allowFullScreen
              />
              
              {/* Overlay card for quick directions */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-ink/90 backdrop-blur-md border border-line p-4 rounded-sm shadow-xl">
                <div className="font-display text-lg text-bone uppercase mb-1">
                  Ponto de Referência
                </div>
                <p className="text-ash text-xs leading-relaxed mb-3">
                  Localizada no bairro Novo Centro, com ruas amplas e facilidade para estacionar seu carro ou moto com segurança.
                </p>
                <a
                  href={siteData.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-amber text-xs font-label font-bold uppercase tracking-wider hover:underline"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Abrir Navegador GPS</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
