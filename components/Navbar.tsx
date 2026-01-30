
import React from 'react';
import { COLORS, BRAND } from '../constants';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-xl z-50 border-b border-slate-200/50 py-3 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div 
            className="w-12 h-12 rounded-xl flex items-center justify-center font-black shadow-lg transform group-hover:rotate-12 transition-transform"
            style={{ backgroundColor: COLORS.primary, color: COLORS.secondary }}
          >
            E
          </div>
          <div className="flex flex-col -space-y-1">
            <span className="font-black text-2xl tracking-tighter text-slate-900 leading-none">ERGOS</span>
            <span className="font-bold text-[10px] tracking-[0.3em] uppercase opacity-60" style={{ color: COLORS.blueSolid }}>Engenharia</span>
          </div>
        </div>
        
        <div className="hidden lg:flex gap-10 font-bold text-slate-500 items-center">
          <a href="#home" className="hover:text-blue-600 transition-colors uppercase text-xs tracking-widest">Início</a>
          <a href="#historia" className="hover:text-blue-600 transition-colors uppercase text-xs tracking-widest">A Marca</a>
          <a href="#simulador" className="hover:text-blue-600 transition-colors uppercase text-xs tracking-widest">Simulador</a>
          <a 
            href={BRAND.instagramLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-50 hover:bg-slate-100 transition-all text-xs uppercase tracking-widest"
          >
            <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse"></span>
            Instagram
          </a>
        </div>
        
        <a 
          href={BRAND.whatsappLink}
          target="_blank"
          rel="noopener noreferrer" 
          className="px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest transition-all hover:shadow-[0_0_30px_rgba(255,242,0,0.4)] hover:-translate-y-1 active:scale-95 flex items-center gap-2"
          style={{ backgroundColor: COLORS.secondary, color: COLORS.primary }}
        >
          Faça sua simulação agora
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
