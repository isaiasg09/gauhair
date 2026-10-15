import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Star, MapPin, Coffee, MessageCircle, ArrowRight, ShieldCheck, ChevronDown, Scissors, Sparkles } from 'lucide-react';
import { siteData } from '../data/siteData';

// Animated Count Up Component
function CountUp({ target, decimal = false, suffix = '' }) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1800;
    const frameRate = 1000 / 60;
    const totalFrames = Math.round(duration / frameRate);
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const current = target * (1 - Math.pow(2, -10 * progress));

      if (frame >= totalFrames) {
        setVal(target);
        clearInterval(timer);
      } else {
        setVal(current);
      }
    }, frameRate);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <span>
      {decimal ? val.toFixed(1) : Math.floor(val)}
      {suffix}
    </span>
  );
}

// Interactive 3D Holographic Showcase Card (Strictly Contained in Hero)
function HeroShowcaseCard() {
  const cardRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for 3D tilt
  const springConfig = { damping: 25, stiffness: 180 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), springConfig);
  const glareX = useSpring(useTransform(mouseX, [-0.5, 0.5], [0, 100]), springConfig);
  const glareY = useSpring(useTransform(mouseY, [-0.5, 0.5], [0, 100]), springConfig);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-lg mx-auto lg:max-w-none [perspective:1200px]"
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative rounded-sm overflow-hidden border border-line/80 bg-gradient-to-b from-graphite via-steel to-ink shadow-2xl p-6 sm:p-8"
      >
        {/* Dynamic Studio Amber Light Glare */}
        <motion.div
          style={{
            background: useTransform(
              [glareX, glareY],
              ([gx, gy]) =>
                `radial-gradient(circle at ${gx}% ${gy}%, rgba(212, 162, 76, 0.22) 0%, transparent 65%)`
            ),
          }}
          className="absolute inset-0 pointer-events-none z-20"
        />

        {/* Vintage Barber Pole Ribbon on Left Edge */}
        <div className="absolute top-0 bottom-0 left-0 w-1.5 animate-barber-pole opacity-90 z-20" />

        {/* Top Header of Card */}
        <div className="flex items-center justify-between border-b border-line/60 pb-4 mb-6 relative z-10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-label text-xs uppercase tracking-widest text-ash">
              Barbearia em Itu · Est. 2013
            </span>
          </div>
          <div className="flex items-center gap-1 text-amber text-xs font-label">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span className="font-bold text-bone">4.9</span>
            <span className="text-ash">(291 reviews)</span>
          </div>
        </div>

        {/* Centerpiece: Real Barbearia Craftsmanship */}
        <div className="relative rounded-sm overflow-hidden border border-line bg-ink mb-6 h-64 sm:h-72 group">
          {/* Real Workstation Photo with Cabro Products and Clippers */}
          <img
            src="/fotos/header_barbearia.png"
            alt="Bancada profissional da Barbearia Gaucho's Hair em Itu"
            className="w-full h-full object-cover filter contrast-110 brightness-95 group-hover:scale-105 transition-transform duration-700"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />

          {/* Official Emblem Badge Floating with 3D Depth */}
          <div
            style={{ transform: "translateZ(35px)" }}
            className="absolute top-4 right-4 w-16 h-16 rounded-sm overflow-hidden border-2 border-amber/70 bg-ink/90 shadow-amber-glow p-1 flex items-center justify-center backdrop-blur-md"
          >
            <img
              src="/fotos/logo.png"
              alt="Brasão Gaucho's Hair"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating Pill on Picture */}
          <div
            style={{ transform: "translateZ(25px)" }}
            className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-ink/90 backdrop-blur-md border border-line px-3.5 py-2 rounded-sm"
          >
            <div className="flex items-center gap-2 text-xs font-label uppercase tracking-wider text-bone font-semibold">
              <Scissors className="w-3.5 h-3.5 text-amber" />
              <span>Ferramentas Esterilizadas</span>
            </div>
            <span className="font-editorial italic text-amber text-xs">
              Toalha Quente
            </span>
          </div>
        </div>

        {/* Bottom Feature Badges */}
        <div className="grid grid-cols-2 gap-3 relative z-10">
          <div className="p-3 bg-ink/60 border border-line rounded-sm flex items-center gap-3">
            <div className="w-8 h-8 rounded-sm bg-amber/10 border border-amber/30 flex items-center justify-center text-amber shrink-0">
              <Coffee className="w-4 h-4" />
            </div>
            <div>
              <span className="font-label text-[10px] uppercase tracking-wider text-ash block">Cortesia</span>
              <span className="font-display text-sm text-bone uppercase">Cafezinho Passado</span>
            </div>
          </div>

          <div className="p-3 bg-ink/60 border border-line rounded-sm flex items-center gap-3">
            <div className="w-8 h-8 rounded-sm bg-amber/10 border border-amber/30 flex items-center justify-center text-amber shrink-0">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <span className="font-label text-[10px] uppercase tracking-wider text-ash block">Localização</span>
              <span className="font-display text-sm text-bone uppercase">Novo Centro, Itu</span>
            </div>
          </div>
        </div>

        {/* Micro Interaction Hint */}
        <div className="mt-4 pt-3 border-t border-line/40 flex items-center justify-between text-[10px] font-label uppercase tracking-widest text-ash/70">
          <span>Ritual de Verdade</span>
          <span>Interativo · Mova o Cursor</span>
        </div>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center pt-28 pb-16 overflow-hidden bg-ink">
      {/* Background Salon Environment Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/fotos/foto_01.jpg"
          alt="Barbearia Gaucho's Hair Itu"
          className="w-full h-full object-cover object-center filter grayscale-[35%] contrast-110 opacity-20 transform scale-105"
        />
        {/* Cinematic Vignette & Studio Lighting Glows */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 to-ink/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-transparent" />
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-amber/8 blur-[140px]" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-amber/5 blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Masked Typography, Badges & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Staggered Badges */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6"
            >
              {/* Google Rating Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-steel/90 border border-amber/40 rounded-sm shadow-sm backdrop-blur-sm">
                <div className="flex items-center text-amber">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current" />
                  ))}
                </div>
                <span className="font-label text-xs font-semibold text-bone">
                  {siteData.nota} · {siteData.totalAvaliacoes} avaliações no Google
                </span>
              </div>

              {/* Location Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-steel/60 border border-line rounded-sm backdrop-blur-sm text-ash text-xs font-label uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5 text-amber" />
                <span>Novo Centro · Itu/SP</span>
              </div>

              {/* Coffee Courtesy Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-steel/60 border border-line rounded-sm backdrop-blur-sm text-ash text-xs font-label uppercase tracking-wider">
                <Coffee className="w-3.5 h-3.5 text-amber" />
                <span>Cafezinho Cortesia</span>
              </div>
            </motion.div>

            {/* H1 Headline with Pristine Typography & Generous Diacritic Clearance */}
            <h1 className="font-display tracking-normal uppercase text-bone leading-[1.08] sm:leading-[1.05] text-4xl sm:text-5xl md:text-6xl xl:text-7xl mb-6">
              <div className="overflow-hidden py-1">
                <motion.span
                  initial={{ y: "115%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                  className="inline-block mr-3"
                >
                  O CORTE QUE VOCÊ
                </motion.span>
                <motion.span
                  initial={{ y: "115%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
                  className="font-editorial italic font-normal text-amber lowercase tracking-normal text-4xl sm:text-5xl md:text-6xl xl:text-7xl inline-block"
                >
                  merece.
                </motion.span>
              </div>

              <div className="overflow-hidden mt-2 sm:mt-3 py-1">
                <motion.span
                  initial={{ y: "115%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                  className="inline-block"
                >
                  A CONFIANÇA QUE VOCÊ LEVA.
                </motion.span>
              </div>
            </h1>

            {/* Magnetic Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="text-ash text-base sm:text-lg md:text-xl font-sans leading-relaxed max-w-2xl mb-8"
            >
              Barbearia em Itu com <strong className="text-bone font-semibold">4.9★ no Google</strong> e mais de uma década de tradição. Atendimento atencioso, técnica cirúrgica na navalha e um espresso passado na hora para você desacelerar.
            </motion.p>

            {/* Dual Conversion CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10"
            >
              {/* Primary Amber CTA */}
              <a
                href={siteData.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="shine-sweep glow-pulse group inline-flex items-center justify-center gap-3 bg-amber hover:bg-amber-light text-ink font-label text-sm uppercase tracking-widest font-bold px-8 py-4 rounded-sm shadow-amber-glow transition-all duration-300 transform hover:-translate-y-1"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Agendar no WhatsApp</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Secondary Outline CTA */}
              <a
                href="#galeria"
                className="inline-flex items-center justify-center gap-2 border border-line hover:border-amber bg-graphite/40 hover:bg-steel/50 text-bone hover:text-amber font-label text-sm uppercase tracking-widest px-6 py-4 rounded-sm transition-all duration-300 backdrop-blur-sm"
              >
                <span>Ver Nossos Trabalhos</span>
              </a>
            </motion.div>

            {/* Live Count-up Metrics Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.85 }}
              className="grid grid-cols-3 gap-4 pt-6 border-t border-line/60 max-w-lg"
            >
              <div>
                <div className="font-display text-3xl sm:text-4xl text-amber leading-none flex items-baseline gap-1">
                  <CountUp target={4.9} decimal={true} />
                  <span className="text-xl">★</span>
                </div>
                <div className="font-label text-[11px] uppercase tracking-wider text-ash mt-1">
                  Nota no Google
                </div>
              </div>

              <div>
                <div className="font-display text-3xl sm:text-4xl text-bone leading-none">
                  <CountUp target={291} suffix="+" />
                </div>
                <div className="font-label text-[11px] uppercase tracking-wider text-ash mt-1">
                  Avaliações Reais
                </div>
              </div>

              <div>
                <div className="font-display text-3xl sm:text-4xl text-bone leading-none">
                  <CountUp target={100} suffix="%" />
                </div>
                <div className="font-label text-[11px] uppercase tracking-wider text-ash mt-1">
                  Acolhimento & Respeito
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Contained Interactive 3D Showcase Card */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <HeroShowcaseCard />
          </div>

        </div>
      </div>

      {/* Down Scroll Indicator */}
      <a
        href="#servicos"
        aria-label="Rolar para os serviços"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-ash/60 hover:text-amber transition-colors"
      >
        <span className="font-label text-[10px] uppercase tracking-widest">Rolar</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
}
