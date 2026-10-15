import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, MessageCircle, ChevronLeft, ChevronRight, Scissors } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function Gallery() {
  const [selectedIdx, setSelectedIdx] = useState(null);

  // Gallery items using local photos
  const galleryItems = [
    { src: "/fotos/foto_05.jpg", alt: "Descoloração e platinado impecável na Gaucho's Hair Itu", title: "Descoloração & Platinado", tag: "Especialidade Johne", span: "md:col-span-2 md:row-span-2 h-[420px]" },
    { src: "/fotos/foto_06.jpg", alt: "Ambiente e poltronas da Gaucho's Hair Barbearia Itu", title: "Ambiente & Ritual", tag: "Estrutura", span: "h-[200px]" },
    { src: "/fotos/foto_07.jpg", alt: "Corte fade masculino e barba alinhada", title: "Degradê de Precisão", tag: "Corte & Estilo", span: "h-[200px]" },
    { src: "/fotos/foto_08.jpg", alt: "Barboterapia e toalha quente na navalha em Itu", title: "Barboterapia Tradicional", tag: "Navalha & Toalha Quente", span: "h-[200px]" },
    { src: "/fotos/foto_09.jpg", alt: "Finalização com pomada e alinhamento milimétrico", title: "Finalização & Textura", tag: "Produtos Premium", span: "h-[200px]" },
    { src: "/fotos/foto_10.jpg", alt: "Atendimento acolhedor e cafezinho na Gaucho's Hair", title: "O Legítimo Cafezinho", tag: "Hospitalidade", span: "md:col-span-2 h-[260px]" },
    { src: "/fotos/foto_02.jpg", alt: "Bancada profissional de barbeiro em Itu", title: "Estação de Trabalho", tag: "Higiene Cirúrgica", span: "h-[260px]" },
    { src: "/fotos/foto_03.jpg", alt: "Tesouras e navalhetes afiados para corte de alta precisão", title: "Ferramental de Ofício", tag: "Arte Manual", span: "h-[260px]" },
    { src: "/fotos/header_barbearia.png", alt: "Bancada e produtos de barbearia Cabro na Gaucho's Hair", title: "Produtos Selecionados", tag: "Cuidado Diário", span: "md:col-span-2 h-[260px]" },
    { src: "/fotos/web_01.jpg", alt: "Fachada da barbearia no Novo Centro de Itu", title: "Novo Centro, Itu/SP", tag: "Localização", span: "md:col-span-2 h-[260px]" }
  ];

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIdx === null) return;
      if (e.key === 'Escape') setSelectedIdx(null);
      if (e.key === 'ArrowRight') setSelectedIdx((prev) => (prev + 1) % galleryItems.length);
      if (e.key === 'ArrowLeft') setSelectedIdx((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIdx, galleryItems.length]);

  return (
    <section id="galeria" className="relative py-28 bg-graphite border-t border-line overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-line pb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[2px] bg-amber" />
              <span className="font-label text-xs uppercase tracking-widest text-amber font-semibold">
                Portfólio & Atmosfera
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-bone tracking-wide uppercase leading-tight">
              A ARTE EM CADA <span className="font-editorial italic font-normal text-amber lowercase">detalhe.</span>
            </h2>
          </div>

          <p className="text-ash text-sm sm:text-base max-w-md mt-4 md:mt-0 font-sans">
            Resultados reais de quem senta na cadeira da Gaucho's Hair em Itu. Clique nas imagens para expandir e conferir de perto.
          </p>
        </div>

        {/* Asymmetrical Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              onClick={() => setSelectedIdx(index)}
              className={`relative rounded-sm overflow-hidden border border-line bg-steel cursor-pointer group shadow-md ${item.span}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover filter grayscale-[15%] contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />

              {/* Gradient Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

              {/* Hover Zoom Icon */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-sm bg-ink/80 border border-line flex items-center justify-center text-bone opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                <ZoomIn className="w-4 h-4 text-amber" />
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-0 inset-x-0 p-4 transform translate-y-1 group-hover:translate-y-0 transition-transform">
                <span className="font-label text-[10px] uppercase tracking-widest text-amber font-semibold block mb-0.5">
                  {item.tag}
                </span>
                <span className="font-display text-lg sm:text-xl text-bone uppercase tracking-wider block">
                  {item.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 text-center">
          <p className="font-label text-xs uppercase tracking-widest text-ash mb-4">
            Gostou de algum estilo ou quer um corte sob medida para o seu rosto?
          </p>
          <a
            href={siteData.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="shine-sweep inline-flex items-center gap-2 px-6 py-3 bg-amber hover:bg-amber-light text-ink font-label text-xs uppercase tracking-widest font-bold rounded-sm shadow-amber-glow transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Agendar Esse Estilo no WhatsApp</span>
          </a>
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-ink/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedIdx(null)}
          >
            {/* Modal Controls Bar */}
            <div className="absolute top-5 right-5 flex items-center gap-3 z-50">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedIdx(null);
                }}
                className="w-10 h-10 rounded-sm bg-steel border border-line text-bone hover:border-amber flex items-center justify-center transition-colors"
                aria-label="Fechar galeria"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Prev / Next Arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIdx((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
              }}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-sm bg-steel/80 border border-line text-bone hover:border-amber hover:text-amber flex items-center justify-center z-50 transition-colors"
              aria-label="Foto anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIdx((prev) => (prev + 1) % galleryItems.length);
              }}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-sm bg-steel/80 border border-line text-bone hover:border-amber hover:text-amber flex items-center justify-center z-50 transition-colors"
              aria-label="Próxima foto"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Modal Image Box */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[85vh] bg-steel border border-line rounded-sm overflow-hidden flex flex-col shadow-2xl"
            >
              <div className="relative overflow-hidden flex-1 bg-ink flex items-center justify-center">
                <img
                  src={galleryItems[selectedIdx].src}
                  alt={galleryItems[selectedIdx].alt}
                  className="max-h-[68vh] w-auto object-contain mx-auto"
                />
              </div>

              {/* Bottom Details Footer */}
              <div className="p-5 bg-graphite border-t border-line flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="font-label text-[10px] uppercase tracking-widest text-amber font-semibold block">
                    {galleryItems[selectedIdx].tag} · Imagem {selectedIdx + 1} de {galleryItems.length}
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl text-bone tracking-wide uppercase">
                    {galleryItems[selectedIdx].title}
                  </h3>
                  <p className="text-ash text-xs mt-0.5">
                    {galleryItems[selectedIdx].alt}
                  </p>
                </div>

                <a
                  href={`${siteData.whatsappBase}?text=Ol%C3%A1!%20Vi%20essa%20foto%20na%20galeria%20(${encodeURIComponent(galleryItems[selectedIdx].title)})%20e%20quero%20agendar%20um%20servi%C3%A7o%20semelhante.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shine-sweep inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-amber hover:bg-amber-light text-ink font-label text-xs uppercase tracking-widest font-bold rounded-sm shadow-amber-glow shrink-0 transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Quero Esse Resultado</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
