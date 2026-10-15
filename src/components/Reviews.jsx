import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, CheckCircle, ExternalLink, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function Reviews() {
  const [activeTab, setActiveTab] = useState(0);

  const pullQuotes = [
    "Atendimento ótimo com valor justo",
    "Se importando com os mínimos detalhes",
    "O melhor resultado e manutenção",
    "Sempre me oferecem um cafezinho"
  ];

  return (
    <section id="avaliacoes" className="relative py-28 bg-ink border-t border-line overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-amber/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-amber" />
            <span className="font-label text-xs uppercase tracking-widest text-amber font-semibold">
              Reputação Comprovada
            </span>
            <span className="w-6 h-[2px] bg-amber" />
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-bone tracking-wide uppercase leading-tight">
            AVALIAÇÕES REAIS DE QUEM <span className="font-editorial italic font-normal text-amber lowercase">confia</span> NO NOSSO TRABALHO.
          </h2>

          {/* Aggregate Rating Banner */}
          <div className="mt-6 inline-flex items-center gap-3 px-5 py-2.5 bg-steel/90 border border-amber/40 rounded-sm shadow-sm backdrop-blur-md">
            <div className="flex items-center text-amber">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="font-display text-xl text-bone">
              {siteData.nota} de 5.0
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-line" />
            <span className="font-label text-xs uppercase tracking-wider text-ash">
              {siteData.totalAvaliacoes} avaliações verificadas no Google
            </span>
          </div>
        </div>

        {/* Dynamic Rotating Pull-Quotes Marquee or Carousel */}
        <div className="mb-14 p-6 bg-graphite/80 border border-line rounded-sm text-center">
          <span className="font-label text-[10px] uppercase tracking-widest text-ash block mb-2">
            O que nossos clientes mais dizem sobre a Gaucho's Hair:
          </span>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8">
            {pullQuotes.map((quote, idx) => (
              <span
                key={idx}
                className="font-editorial italic text-base sm:text-xl text-amber flex items-center gap-2"
              >
                <span>“{quote}”</span>
                {idx < pullQuotes.length - 1 && (
                  <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-line" />
                )}
              </span>
            ))}
          </div>
        </div>

        {/* 4 Real Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {siteData.avaliacoes.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="bg-steel/70 border border-line rounded-sm p-7 flex flex-col justify-between hover:border-amber/60 hover:bg-graphite transition-all duration-300 relative group"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-line/50 group-hover:text-amber/20 transition-colors pointer-events-none" />

              <div>
                {/* Header: Stars & Google Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber">
                    {[...Array(item.nota)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <div className="flex items-center gap-1.5 font-label text-[10px] uppercase tracking-wider text-ash bg-ink/70 px-2.5 py-1 rounded-sm border border-line">
                    <CheckCircle className="w-3 h-3 text-amber" />
                    <span>Avaliação do Google</span>
                  </div>
                </div>

                {/* Highlight Tag */}
                <div className="font-editorial italic text-amber text-base sm:text-lg mb-3">
                  "{item.destaque}"
                </div>

                {/* Full Review Text */}
                <p className="text-ash text-xs sm:text-sm leading-relaxed mb-6 font-sans">
                  {item.texto}
                </p>
              </div>

              {/* Author footer */}
              <div className="pt-4 border-t border-line/60 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-ink border border-line flex items-center justify-center font-display text-sm text-bone">
                    {item.autor.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h4 className="font-label text-xs uppercase tracking-wider font-bold text-bone">
                      {item.autor}
                    </h4>
                    <span className="text-[10px] text-ash">Cliente verificado</span>
                  </div>
                </div>

                <span className="font-label text-[10px] text-ash/80">
                  {item.data}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* External Google Maps Link & Call to Action */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <a
            href={siteData.maps}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-line hover:border-amber bg-graphite/80 text-bone hover:text-amber font-label text-xs uppercase tracking-widest rounded-sm transition-all"
          >
            <span>Ver todas as 291 avaliações no Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <a
            href={siteData.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="shine-sweep inline-flex items-center gap-2 px-6 py-3 bg-amber hover:bg-amber-light text-ink font-label text-xs uppercase tracking-widest font-bold rounded-sm shadow-amber-glow transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Agendar Meu Horário Agora</span>
          </a>
        </div>

      </div>
    </section>
  );
}
