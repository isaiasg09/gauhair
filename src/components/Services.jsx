import React from 'react';
import { motion } from 'framer-motion';
import { Clock, MessageCircle, ArrowUpRight, Scissors, Sparkles, CheckCircle2 } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function Services() {
  return (
    <section id="servicos" className="relative py-28 bg-ink overflow-hidden">
      {/* Background radial studio illumination */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-radial-amber blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-line pb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[2px] bg-amber" />
              <span className="font-label text-xs uppercase tracking-widest text-amber font-semibold">
                O Ritual Masculino
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-bone tracking-wide uppercase leading-tight">
              SERVIÇOS FEITOS COM <span className="font-editorial italic font-normal text-amber lowercase">maestria.</span>
            </h2>
          </div>

          <p className="text-ash text-sm sm:text-base max-w-md mt-4 md:mt-0 font-sans">
            Cada serviço é executado com respeito ao seu tempo, produtos de alta qualidade e técnicas consagradas de barbearia tradicional e moderna.
          </p>
        </div>

        {/* 6-Card Industrial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteData.servicos.map((servico, idx) => (
            <motion.div
              key={servico.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -6, scale: 1.015 }}
              whileTap={{ scale: 0.98 }}
              className="group relative bg-steel/80 border border-line rounded-sm p-7 flex flex-col justify-between transition-all duration-300 hover:border-amber/80 hover:shadow-card-elevated hover:bg-graphite"
            >
              {/* Corner accent glow indicator */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-amber/10 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Header row: Number and Tag */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-display text-3xl sm:text-4xl text-line group-hover:text-amber transition-colors duration-300">
                    {servico.id}
                  </span>

                  <span className="font-label text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-sm bg-ink/70 border border-line text-ash group-hover:border-amber/40 group-hover:text-bone transition-colors">
                    {servico.tag}
                  </span>
                </div>

                {/* Service Name & Subtitle */}
                <h3 className="font-display text-2xl sm:text-3xl text-bone group-hover:text-amber transition-colors tracking-wide uppercase mb-1">
                  {servico.nome}
                </h3>
                <div className="font-editorial italic text-ash text-sm mb-4">
                  {servico.subtitulo}
                </div>

                {/* Description */}
                <p className="text-ash text-xs sm:text-sm leading-relaxed mb-6">
                  {servico.descricao}
                </p>
              </div>

              {/* Bottom metadata and Contextual CTA */}
              <div className="pt-5 border-t border-line/60 flex items-center justify-between mt-auto">
                <div className="flex items-center gap-1.5 text-xs text-ash font-label">
                  <Clock className="w-3.5 h-3.5 text-amber" />
                  <span>{servico.duracao}</span>
                </div>

                <a
                  href={`${siteData.whatsappBase}?text=${servico.whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shine-sweep inline-flex items-center gap-1.5 px-3.5 py-2 bg-graphite hover:bg-amber text-bone hover:text-ink border border-line hover:border-amber rounded-sm font-label text-xs uppercase tracking-widest font-semibold transition-all duration-200"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Agendar</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner Note */}
        <div className="mt-12 p-6 bg-graphite/60 border border-line rounded-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-sm bg-amber/10 border border-amber/30 flex items-center justify-center text-amber shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-label text-xs uppercase tracking-widest text-bone font-bold">
                Dúvidas sobre o melhor corte ou procedimento?
              </h4>
              <p className="text-ash text-xs">
                Chame no WhatsApp e tire suas dúvidas direto com a nossa equipe antes de agendar.
              </p>
            </div>
          </div>

          <a
            href={siteData.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto text-center px-6 py-2.5 bg-amber text-ink hover:bg-amber-light font-label text-xs uppercase tracking-widest font-bold rounded-sm shadow-sm transition-all"
          >
            Falar com a Barbearia
          </a>
        </div>

      </div>
    </section>
  );
}
