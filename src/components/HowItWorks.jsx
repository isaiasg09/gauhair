import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, CalendarCheck, Coffee, ArrowRight } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      icon: MessageCircle,
      title: "Chame no WhatsApp",
      desc: "Clique no botão e envie uma mensagem rápida. Conte qual serviço deseja (corte, barba, combo ou descoloração) e o dia de sua preferência."
    },
    {
      step: "02",
      icon: CalendarCheck,
      title: "Confirme seu Horário",
      desc: "Nossa equipe responde prontamente apresentando os melhores horários do dia e o barbeiro de sua escolha (Johne, Gabriel ou Veiga)."
    },
    {
      step: "03",
      icon: Coffee,
      title: "Chegue, Deguste o Café & Saia Renovado",
      desc: "Estacione com facilidade na R. Márcia Pierroni no Novo Centro, seja acolhido com um espresso quente e viva o ritual de cuidado."
    }
  ];

  return (
    <section className="relative py-28 bg-graphite border-t border-line overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-amber" />
            <span className="font-label text-xs uppercase tracking-widest text-amber font-semibold">
              Simplicidade & Respeito ao seu Tempo
            </span>
            <span className="w-6 h-[2px] bg-amber" />
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-bone tracking-wide uppercase leading-tight">
            COMO FUNCIONA EM <span className="font-editorial italic font-normal text-amber lowercase">3 passos.</span>
          </h2>

          <p className="text-ash text-sm sm:text-base mt-4 font-sans">
            Sem burocracia, sem filas demoradas. Você agenda pelo WhatsApp e é atendido com pontualidade.
          </p>
        </div>

        {/* 3 Steps Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-steel/80 border border-line rounded-sm p-8 flex flex-col justify-between relative hover:border-amber/80 transition-colors shadow-card-elevated group"
              >
                {/* Step Number Backdrop */}
                <div className="absolute top-4 right-6 font-display text-6xl text-line/50 group-hover:text-amber/20 transition-colors pointer-events-none select-none">
                  {item.step}
                </div>

                <div>
                  <div className="w-12 h-12 rounded-sm bg-ink border border-line group-hover:border-amber flex items-center justify-center text-amber mb-6 transition-colors shadow-inner">
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="font-label text-xs uppercase tracking-widest text-amber font-semibold block mb-1">
                    Passo {item.step}
                  </span>

                  <h3 className="font-display text-2xl sm:text-3xl text-bone group-hover:text-amber transition-colors tracking-wide uppercase mb-3">
                    {item.title}
                  </h3>

                  <p className="text-ash text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-line/50 flex items-center gap-2 text-xs font-label text-ash group-hover:text-amber transition-colors">
                  <span>Pronto para começar?</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="mt-14 text-center">
          <a
            href={siteData.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="shine-sweep inline-flex items-center gap-3 px-8 py-4 bg-amber hover:bg-amber-light text-ink font-label text-xs uppercase tracking-widest font-bold rounded-sm shadow-amber-glow transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Iniciar Agendamento no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
