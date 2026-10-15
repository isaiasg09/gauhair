import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, MessageCircle, HelpCircle, MapPin } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative py-28 bg-ink border-t border-line overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-amber" />
            <span className="font-label text-xs uppercase tracking-widest text-amber font-semibold">
              Tire Suas Dúvidas
            </span>
            <span className="w-6 h-[2px] bg-amber" />
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-bone tracking-wide uppercase leading-tight">
            PERGUNTAS <span className="font-editorial italic font-normal text-amber lowercase">frequentes.</span>
          </h2>

          <p className="text-ash text-sm sm:text-base mt-4 font-sans">
            Tudo o que você precisa saber antes da sua primeira visita à Barbearia Gaucho's Hair.
          </p>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-4">
          {siteData.faq.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-line rounded-sm bg-steel/70 overflow-hidden transition-colors hover:border-amber/50"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-xl sm:text-2xl text-bone uppercase tracking-wide flex items-center gap-3">
                    <span className="font-label text-xs text-amber font-bold">
                      0{idx + 1}.
                    </span>
                    {item.pergunta}
                  </span>

                  <div className="w-8 h-8 rounded-sm bg-graphite border border-line flex items-center justify-center text-amber shrink-0 transition-transform">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-ash text-sm leading-relaxed border-t border-line/40 font-sans">
                        <p>{item.resposta}</p>

                        {/* Special Map Button for Question 3 */}
                        {idx === 2 && (
                          <div className="mt-4">
                            <a
                              href={siteData.maps}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-4 py-2 bg-ink border border-line hover:border-amber text-bone hover:text-amber text-xs font-label uppercase tracking-wider rounded-sm transition-colors"
                            >
                              <MapPin className="w-3.5 h-3.5 text-amber" />
                              <span>Abrir Rota no Google Maps</span>
                            </a>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* WhatsApp Help Box */}
        <div className="mt-12 p-6 bg-graphite/60 border border-line rounded-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-sm bg-amber/10 border border-amber/30 flex items-center justify-center text-amber shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-label text-xs uppercase tracking-widest text-bone font-bold">
                Ainda tem alguma dúvida específica?
              </h4>
              <p className="text-ash text-xs">
                Nossa equipe está pronta para te atender de forma direta e atenciosa.
              </p>
            </div>
          </div>

          <a
            href={siteData.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="shine-sweep inline-flex items-center gap-2 px-5 py-2.5 bg-amber hover:bg-amber-light text-ink font-label text-xs uppercase tracking-widest font-bold rounded-sm shadow-amber-glow shrink-0 transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Chamar no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
