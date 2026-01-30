
import React from 'react';
import { COLORS, BRAND } from '../constants';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100 py-4 px-6 transition-all">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div 
            className="w-10 h-10 rounded-lg flex items-center justify-center font-bold shadow-md transition-transform group-hover:scale-105"
            style={{ backgroundColor: COLORS.primary, color: COLORS.secondary }}
          >
            E
          </div>
          <div className="flex flex-col -space-y-1">
            <span className="font-extrabold text-xl tracking-tight text-slate-900">ERGOS</span>
            <span className="font-medium text-[9px] tracking-[0.2em] uppercase opacity-50" style={{ color: COLORS.blueSolid }}>Engenharia Solar</span>
          </div>
        </div>
        
        <div className="hidden lg:flex gap-8 font-semibold text-slate-500 items-center">
          <a href="#home" className="hover:text-blue-600 transition-colors text-xs uppercase tracking-widest">Início</a>
          <a href="#historia" className="hover:text-blue-600 transition-colors text-xs uppercase tracking-widest">A Empresa</a>
          <a href="#simulador" className="hover:text-blue-600 transition-colors text-xs uppercase tracking-widest">Simulador</a>
          <a 
            href={BRAND.instagramLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-widest hover:text-pink-600 transition-colors"
          >
            Instagram
          </a>
        </div>
        
        <a 
          href={BRAND.whatsappLink}
          target="_blank"
          rel="noopener noreferrer" 
          className="px-6 py-3 rounded-full font-bold text-xs uppercase tracking-widest transition-all hover:brightness-110 active:scale-95 shadow-lg shadow-yellow-400/20"
          style={{ backgroundColor: COLORS.secondary, color: COLORS.primary }}
        >
          Solicitar Orçamento
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
