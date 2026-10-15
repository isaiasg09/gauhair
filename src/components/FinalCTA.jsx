import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone, Star, Coffee, Sparkles, ArrowRight } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function FinalCTA() {
  return (
    <section className="relative py-28 bg-graphite border-t border-line overflow-hidden">
      {/* Background with real salon ambiance and lighting */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <img
          src="/fotos/foto_01.jpg"
          alt="Barbearia Gaucho's Hair Itu"
          className="w-full h-full object-cover filter grayscale-[40%] contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-graphite via-graphite/90 to-graphite" />
      </div>

      {/* Dramatic Amber Backlight Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-amber/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Floating Social Proof Chip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 bg-ink/90 border border-amber/40 rounded-sm shadow-md mb-8 backdrop-blur-md"
        >
          <div className="flex items-center text-amber">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-current" />
            ))}
          </div>
          <span className="font-label text-xs uppercase tracking-widest text-bone font-semibold">
            Nota 4.9 no Google · 291 Clientes Satisfeitos
          </span>
        </motion.div>

        {/* Impactful Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-bone tracking-normal uppercase leading-[1.08] sm:leading-[1.04] mb-6"
        >
          SEU NOVO VISUAL COMEÇA COM UMA <span className="font-editorial italic font-normal text-amber lowercase">conversa.</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-ash text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10 font-sans"
        >
          Não deixe para a última hora. Garanta seu horário com o Johne, Gabriel ou Veiga pelo WhatsApp e venha tomar aquele cafezinho de respeito conosco.
        </motion.p>

        {/* Big Amber Primary CTA + Direct Call Secondary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a
            href={siteData.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="shine-sweep glow-pulse group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-amber hover:bg-amber-light text-ink font-label text-sm uppercase tracking-widest font-bold px-10 py-5 rounded-sm shadow-amber-glow transition-all duration-300 transform hover:-translate-y-1"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Agendar Meu Horário no WhatsApp</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href={`tel:${siteData.telefoneRaw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-line hover:border-amber bg-ink/70 hover:bg-steel text-bone hover:text-amber font-label text-sm uppercase tracking-widest px-8 py-5 rounded-sm transition-all duration-300"
          >
            <Phone className="w-4 h-4" />
            <span>Ligar Agora: {siteData.telefone}</span>
          </a>
        </motion.div>

        {/* Micro guarantees */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-label uppercase tracking-widest text-ash border-t border-line/60 pt-8">
          <div className="flex items-center gap-2">
            <Coffee className="w-4 h-4 text-amber" />
            <span>Cafezinho por Conta da Casa</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber" />
            <span>Lâminas Descartáveis & Esterilizadas</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-amber" />
            <span>Novo Centro · Itu/SP</span>
          </div>
        </div>

      </div>
    </section>
  );
}
