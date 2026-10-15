import React from 'react';
import { Star, Scissors, Coffee, MapPin, Sparkles, Award } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function MarqueeStrip() {
  const marqueeItems = [
    { text: `★ ${siteData.nota} NO GOOGLE`, icon: Star, color: "text-amber" },
    { text: `${siteData.totalAvaliacoes} AVALIAÇÕES REAIS`, icon: Award, color: "text-bone" },
    { text: "CORTE DE CABELO", icon: Scissors, color: "text-amber" },
    { text: "BARBOTERAPIA NA NAVALHA", icon: Scissors, color: "text-bone" },
    { text: "DESCOLORAÇÃO & PLATINADO", icon: Sparkles, color: "text-amber" },
    { text: "CAFEZINHO POR CONTA DA CASA", icon: Coffee, color: "text-amber" },
    { text: "NOVO CENTRO · ITU/SP", icon: MapPin, color: "text-bone" },
    { text: "TRADIÇÃO DESDE 2013", icon: Award, color: "text-amber" },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-graphite border-y border-line py-3.5 select-none">
      {/* Top micro barber strip */}
      <div className="absolute top-0 inset-x-0 h-[2px] animate-barber-pole opacity-70" />

      {/* Marquee ticker container */}
      <div className="flex w-full overflow-hidden">
        <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
          {marqueeItems.concat(marqueeItems).map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center gap-3">
                <span className={`font-display text-lg sm:text-xl tracking-wider ${item.color}`}>
                  {item.text}
                </span>
                <Icon className="w-3.5 h-3.5 text-amber/70" />
                <span className="w-1.5 h-1.5 rounded-full bg-line" />
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom micro barber strip */}
      <div className="absolute bottom-0 inset-x-0 h-[2px] animate-barber-pole opacity-70" />
    </div>
  );
}
