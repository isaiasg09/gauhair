import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, Sparkles, MessageCircle, Star, Award, Check } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function Team() {
  const barbersData = [
    {
      nome: "Johne",
      titulo: "Mestre Colorista & Químico Capilar",
      especialidade: "Descoloração, Nevou & Platinados",
      citacaoReview: "O Johne fez no meu cabelo a descoloração... O 'MELHOR' resultado, qualidade de serviço e orientação de manutenção é o da Gaucho's Hair. Parabéns pelo profissionalismo do Johne!",
      clienteCitacao: "Gonzalo Antezana",
      tags: ["Descoloração Segura", "Platinado Sem Danos", "Pós-Química"],
      msgWa: "Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20um%20hor%C3%A1rio%20com%20o%20barbeiro%20Johne."
    },
    {
      nome: "Gabriel",
      titulo: "Barbeiro Sênior Visagista",
      especialidade: "Degradê / Fade & Cortes Modernos",
      citacaoReview: "Costumo cortar com o Gabriel porém todos os barbeiros são muito educados e amigáveis! Atendimento ótimo com valor justo! Recomendo muito!",
      clienteCitacao: "Felipe Santana",
      tags: ["Degradê Limpo", "Barba Alinhada", "Atendimento Amigável"],
      msgWa: "Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20um%20hor%C3%A1rio%20com%20o%20barbeiro%20Gabriel."
    },
    {
      nome: "Veiga",
      titulo: "Barbeiro Tradicional & Precisão Cirúrgica",
      especialidade: "Corte na Tesoura & Barboterapia",
      citacaoReview: "Fui atendido pelo Barbeiro Veiga, que me atendeu super bem desde o momento que cheguei na calçada... executou um corte profissional se importando com os mínimos detalhes.",
      clienteCitacao: "Victor Gabriel",
      tags: ["Mínimos Detalhes", "Toalha Quente", "Corte Clássico"],
      msgWa: "Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20um%20hor%C3%A1rio%20com%20o%20barbeiro%20Veiga."
    }
  ];

  return (
    <section id="barbeiros" className="relative py-28 bg-ink border-t border-line overflow-hidden">
      {/* Subtle background radial light */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-amber/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-amber" />
            <span className="font-label text-xs uppercase tracking-widest text-amber font-semibold">
              Mestres da Tesoura e da Navalha
            </span>
            <span className="w-6 h-[2px] bg-amber" />
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-bone tracking-wide uppercase leading-tight">
            BARBEIROS RECONHECIDOS POR <span className="font-editorial italic font-normal text-amber lowercase">quem senta</span> NA CADEIRA.
          </h2>

          <p className="text-ash text-sm sm:text-base mt-4 font-sans leading-relaxed">
            Profissionais com assinatura própria, técnica apurada e nomes celebrados espontaneamente nas avaliações reais do Google.
          </p>
        </div>

        {/* 3 Barbers Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {barbersData.map((barber, index) => (
            <motion.div
              key={barber.nome}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-steel/70 border border-line rounded-sm p-7 flex flex-col justify-between hover:border-amber/80 hover:bg-graphite transition-all duration-300 relative group shadow-card-elevated"
            >
              {/* Header Badge */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-sm bg-ink border border-amber/30 flex items-center justify-center text-amber font-display text-2xl group-hover:border-amber transition-colors">
                  {barber.nome.charAt(0)}
                </div>

                <div className="flex items-center gap-1 text-amber text-xs font-label">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span>5.0 nas Reviews</span>
                </div>
              </div>

              {/* Name & Titles */}
              <div className="mb-6">
                <h3 className="font-display text-3xl text-bone group-hover:text-amber transition-colors uppercase tracking-wide">
                  {barber.nome}
                </h3>
                <div className="font-label text-xs uppercase tracking-widest text-amber font-medium mt-0.5">
                  {barber.titulo}
                </div>
                <div className="font-editorial italic text-ash text-sm mt-1">
                  {barber.especialidade}
                </div>
              </div>

              {/* Real Customer Testimony Box */}
              <div className="bg-ink/80 border border-line/70 p-4 rounded-sm mb-6 relative">
                <div className="font-editorial italic text-bone/90 text-xs sm:text-sm leading-relaxed mb-3">
                  "{barber.citacaoReview}"
                </div>
                <div className="font-label text-[10px] uppercase tracking-wider text-ash flex items-center justify-between border-t border-line/40 pt-2">
                  <span>Avaliação Google</span>
                  <span className="text-amber">{barber.clienteCitacao}</span>
                </div>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {barber.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="font-label text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-sm bg-steel border border-line text-ash"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* WhatsApp Contextual Button */}
              <a
                href={`${siteData.whatsappBase}?text=${barber.msgWa}`}
                target="_blank"
                rel="noopener noreferrer"
                className="shine-sweep w-full py-3 bg-graphite hover:bg-amber text-bone hover:text-ink border border-line hover:border-amber rounded-sm font-label text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 transition-all duration-200 mt-auto"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Agendar com {barber.nome}</span>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bottom Assurance */}
        <div className="mt-14 text-center">
          <p className="font-label text-xs uppercase tracking-widest text-ash">
            Todos os barbeiros seguem o mesmo protocolo de higiene, pontualidade e cafezinho cortesia.
          </p>
        </div>

      </div>
    </section>
  );
}
