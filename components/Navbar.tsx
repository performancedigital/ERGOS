
import React from 'react';
import { COLORS, BRAND } from '../constants';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-40 border-b border-slate-100 py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div 
            className="w-10 h-10 rounded-lg flex items-center justify-center font-black shadow-sm"
            style={{ backgroundColor: COLORS.secondary, color: COLORS.primary }}
          >
            E
          </div>
          <span className="font-extrabold text-xl tracking-tight text-slate-900">
            ERGOS <span style={{ color: COLORS.blueSolid }}>SOLAR</span>
          </span>
        </div>
        
        <div className="hidden md:flex gap-8 font-semibold text-slate-600 items-center">
          <a href="#home" className="hover:text-blue-900 transition-colors">Início</a>
          <a href="#historia" className="hover:text-blue-900 transition-colors">Sobre</a>
          <a href="#simulador" className="hover:text-blue-900 transition-colors">Simulador</a>
          <a 
            href={BRAND.instagramLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-pink-600 transition-colors"
          >
            <span>Instagram</span>
          </a>
        </div>
        
        <a 
          href={BRAND.whatsappLink}
          target="_blank"
          rel="noopener noreferrer" 
          className="px-6 py-2 rounded-full font-bold text-sm transition-all hover:scale-105 active:scale-95 shadow-md flex items-center gap-2"
          style={{ backgroundColor: COLORS.secondary, color: COLORS.primary }}
        >
          Faça sua simulação agora
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
