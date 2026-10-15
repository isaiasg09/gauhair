import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 pointer-events-auto">
      {/* Discreet Notification Pill */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.9 }}
            transition={{ duration: 0.3, delay: 1.5 }}
            className="hidden sm:flex items-center gap-2 bg-ink/95 border border-amber/40 text-bone px-3.5 py-2 rounded-sm shadow-xl backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="font-label text-xs uppercase tracking-wider font-semibold">
              Agende pelo WhatsApp
            </span>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-ash hover:text-bone p-0.5 ml-1"
              aria-label="Fechar aviso"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Pulsing WhatsApp Button */}
      <motion.a
        href={siteData.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
        className="relative group w-14 h-14 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-2xl focus:outline-none focus:ring-2 focus:ring-amber"
        aria-label="Agendar horário no WhatsApp da Gaucho's Hair"
      >
        {/* Amber Halo Glow Pulse */}
        <span className="absolute -inset-1 rounded-full bg-amber/30 blur-md group-hover:bg-amber/50 transition-all pointer-events-none" />

        <MessageCircle className="w-7 h-7 fill-current relative z-10" />

        {/* Online Dot */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-amber border-2 border-ink z-20" />
      </motion.a>
    </div>
  );
}
