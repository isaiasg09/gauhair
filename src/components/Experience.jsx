import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Coffee, Scissors, ShieldCheck, BadgePercent, MessageSquare, Award } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function Experience() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax layers at different speeds
  const yPhoto1 = useTransform(scrollYProgress, [0, 1], [40, -60]);
  const yPhoto2 = useTransform(scrollYProgress, [0, 1], [90, -110]);
  const yPhoto3 = useTransform(scrollYProgress, [0, 1], [140, -160]);
  const rotatePhoto1 = useTransform(scrollYProgress, [0, 1], [-2, 3]);
  const rotatePhoto2 = useTransform(scrollYProgress, [0, 1], [3, -2]);

  const iconsMap = {
    Coffee,
    Scissors,
    ShieldCheck,
    BadgePercent,
    MessageCircle: MessageSquare,
    Award
  };

  return (
    <section
      id="experiencia"
      ref={containerRef}
      className="relative py-32 bg-graphite border-t border-line overflow-hidden"
    >
      {/* Background ambient glow */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-amber/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-40 w-96 h-96 bg-gaucho/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Giant watermark typography for depth */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 pointer-events-none select-none opacity-[0.03] whitespace-nowrap">
        <span className="font-display text-[18vw] text-bone tracking-widest uppercase">
          EXPERIÊNCIA
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-amber" />
            <span className="font-label text-xs uppercase tracking-widest text-amber font-semibold">
              O Padrão Gaucho's
            </span>
            <span className="w-6 h-[2px] bg-amber" />
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-bone tracking-wide uppercase leading-tight">
            MUITO ALÉM DO CORTE: O SEU MOMENTO DE <span className="font-editorial italic font-normal text-amber lowercase">desacelerar.</span>
          </h2>

          <p className="text-ash text-sm sm:text-base mt-4 font-sans leading-relaxed">
            Na correria do dia a dia, sua visita à Gaucho's Hair é um refúgio. Cadeira confortável, cafezinho quente na chegada, conversa respeitosa e barbeiros que dominam a arte da tesoura e da navalha.
          </p>
        </div>

        {/* 2.5D Parallax Showcase + Sticky Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          
          {/* Multi-layered 2.5D Parallax Photo Composition */}
          <div className="lg:col-span-7 relative h-[520px] sm:h-[620px] flex items-center justify-center">
            
            {/* Photo 1: Deep layer (Bancada & Ambiente) */}
            <motion.div
              style={{ y: yPhoto1, rotate: rotatePhoto1 }}
              className="absolute left-2 sm:left-6 top-8 w-60 sm:w-80 h-72 sm:h-96 rounded-sm overflow-hidden border border-line bg-steel shadow-industrial z-10"
            >
              <img
                src="/fotos/foto_02.jpg"
                alt="Ambiente da Barbearia Gaucho's Hair Itu"
                loading="lazy"
                className="w-full h-full object-cover filter grayscale-[15%] contrast-110 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent flex items-end p-4">
                <span className="font-label text-[11px] uppercase tracking-wider text-bone font-semibold">
                  Ambiente Acolhedor & Limpo
                </span>
              </div>
            </motion.div>

            {/* Photo 2: Central hero layer (Equipamentos & Detalhes) */}
            <motion.div
              style={{ y: yPhoto2, rotate: rotatePhoto2 }}
              className="absolute right-2 sm:right-6 top-16 w-64 sm:w-84 h-80 sm:h-[420px] rounded-sm overflow-hidden border-2 border-amber/40 bg-steel shadow-amber-glow z-20"
            >
              <img
                src="/fotos/foto_03.jpg"
                alt="Ferramentas cirúrgicas de barbeiro na Gaucho's Hair"
                loading="lazy"
                className="w-full h-full object-cover filter contrast-115 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent flex flex-col justify-end p-5">
                <span className="font-editorial italic text-amber text-lg">
                  Precisão Milimétrica
                </span>
                <span className="font-label text-xs uppercase tracking-widest text-ash">
                  Lâminas esterilizadas & descartáveis
                </span>
              </div>
            </motion.div>

            {/* Photo 3: Foreground floating accent (Toalha Quente & Barba) */}
            <motion.div
              style={{ y: yPhoto3 }}
              className="absolute -bottom-6 left-12 sm:left-24 w-48 sm:w-64 h-48 sm:h-56 rounded-sm overflow-hidden border border-line bg-steel shadow-2xl z-30 hidden sm:block"
            >
              <img
                src="/fotos/foto_04.jpg"
                alt="Barboterapia com toalha quente na Gaucho's Hair"
                loading="lazy"
                className="w-full h-full object-cover filter grayscale-[15%] contrast-110"
              />
              <div className="absolute inset-0 bg-ink/40 p-3 flex items-end">
                <span className="font-label text-[10px] uppercase tracking-widest text-amber font-bold bg-ink/80 px-2 py-0.5 rounded-sm">
                  Toalha Quente
                </span>
              </div>
            </motion.div>

          </div>

          {/* Sticky Narrative: Why Clients Choose Gaucho's */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            
            <div className="p-8 bg-steel/90 border border-line rounded-sm backdrop-blur-md relative">
              <div className="absolute -top-3 left-6 px-3 py-0.5 bg-amber text-ink font-label text-[10px] uppercase tracking-widest font-bold rounded-sm">
                Compromisso Real
              </div>

              {/* Big Editorial Pull Quote from Real Google Review */}
              <blockquote className="mb-6 border-l-2 border-amber pl-4">
                <p className="font-editorial italic text-bone text-lg sm:text-xl leading-snug">
                  "Atendimento ótimo com valor justo! Quando cheguei em Itu passei por diversas barbearias, porém nenhuma tem o atendimento que achei aqui. Sempre me oferecem um cafezinho!"
                </p>
                <footer className="mt-3 font-label text-xs uppercase tracking-wider text-ash flex items-center gap-2">
                  <span className="text-amber">★ 5.0</span>
                  <span>— Felipe Santana, cliente no Google</span>
                </footer>
              </blockquote>

              <p className="text-ash text-sm leading-relaxed mb-6">
                Construímos nossa reputação em Itu no dia a dia: olho no olho, honestidade nos preços e capricho absoluto no acabamento.
              </p>

              <a
                href={siteData.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="shine-sweep inline-flex items-center justify-center gap-2 w-full py-3 bg-amber hover:bg-amber-light text-ink font-label text-xs uppercase tracking-widest font-bold rounded-sm shadow-amber-glow transition-all"
              >
                <span>Garantir Meu Horário</span>
              </a>
            </div>

          </div>

        </div>

        {/* 6 Differentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteData.diferenciais.map((item, index) => {
            const Icon = iconsMap[item.icone] || Scissors;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className="p-6 bg-steel/40 border border-line rounded-sm hover:border-amber/60 hover:bg-steel/80 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-sm bg-ink border border-line group-hover:border-amber flex items-center justify-center text-amber mb-4 transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-xl text-bone group-hover:text-amber transition-colors tracking-wide uppercase mb-2">
                  {item.titulo}
                </h3>
                <p className="text-ash text-xs sm:text-sm leading-relaxed">
                  {item.descricao}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
