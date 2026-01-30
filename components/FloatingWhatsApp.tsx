
import React from 'react';
import { COLORS, BRAND } from '../constants';

const FloatingWhatsApp: React.FC = () => {
  return (
    <a 
      href={BRAND.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 p-5 rounded-full shadow-[0_10px_40px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-95 transition-all flex items-center justify-center group"
      style={{ backgroundColor: COLORS.whatsapp }}
      title="Falar com especialista"
    >
      <div className="absolute -top-12 right-0 bg-white text-slate-900 px-4 py-2 rounded-xl text-xs font-black shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Fale Conosco agora! ⚡
      </div>
      <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" className="w-8 h-8 invert brightness-0" alt="WhatsApp" />
    </a>
  );
};

export default FloatingWhatsApp;
