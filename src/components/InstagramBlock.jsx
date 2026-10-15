import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, ExternalLink, ArrowRight } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function InstagramBlock() {
  // 6 selected local photos for the Instagram grid
  const instaPosts = [
    { src: "/fotos/foto_07.jpg", alt: "Degradê limpo no Instagram Gaucho's Hair" },
    { src: "/fotos/foto_05.jpg", alt: "Platinado e descoloração no feed da barbearia" },
    { src: "/fotos/foto_08.jpg", alt: "Barboterapia e toalha quente em Itu" },
    { src: "/fotos/foto_09.jpg", alt: "Estilo e acabamento de corte masculino" },
    { src: "/fotos/foto_04.jpg", alt: "Detalhe da lâmina e precisão no Instagram" },
    { src: "/fotos/foto_06.jpg", alt: "Poltronas e ambiente acolhedor da barbearia" },
  ];

  return (
    <section className="relative py-24 bg-ink border-t border-line overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Invitation Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-sm bg-gradient-to-tr from-amber via-ember to-pink-600 p-[2px] shrink-0">
              <div className="w-full h-full bg-ink rounded-sm flex items-center justify-center text-bone">
                <Instagram className="w-6 h-6 text-amber" />
              </div>
            </div>
            <div>
              <span className="font-label text-xs uppercase tracking-widest text-amber font-semibold block">
                Siga Nossos Trabalhos
              </span>
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-bone tracking-wide uppercase">
                {siteData.instagramHandle} NO INSTAGRAM
              </h3>
            </div>
          </div>

          <a
            href={siteData.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="shine-sweep inline-flex items-center gap-2 px-6 py-3 border border-line hover:border-amber bg-graphite hover:bg-steel text-bone hover:text-amber font-label text-xs uppercase tracking-widest font-bold rounded-sm transition-all"
          >
            <span>Seguir no Instagram</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 6-Item Thumbnail Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {instaPosts.map((post, idx) => (
            <motion.a
              key={idx}
              href={siteData.instagram}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="group relative aspect-square rounded-sm overflow-hidden border border-line bg-steel block"
            >
              <img
                src={post.src}
                alt={post.alt}
                loading="lazy"
                className="w-full h-full object-cover filter grayscale-[15%] contrast-110 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
              />

              {/* Instagram Hover Icon Overlay */}
              <div className="absolute inset-0 bg-ink/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-amber/20 border border-amber/50 flex items-center justify-center text-amber transform scale-75 group-hover:scale-100 transition-transform">
                  <Instagram className="w-5 h-5" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
