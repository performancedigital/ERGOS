
import React from 'react';
import { COLORS } from '../constants';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-40 border-b border-slate-100 py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center font-black text-blue-900 shadow-sm">E</div>
          <span className="font-extrabold text-xl tracking-tight text-slate-900">ERGOS <span className="text-blue-700">SOLAR</span></span>
        </div>
        
        <div className="hidden md:flex gap-8 font-semibold text-slate-600">
          <a href="#home" className="hover:text-blue-700 transition-colors">Início</a>
          <a href="#historia" className="hover:text-blue-700 transition-colors">Sobre</a>
          <a href="#simulador" className="hover:text-blue-700 transition-colors">Simulador</a>
          <a href="#depoimentos" className="hover:text-blue-700 transition-colors">Clientes</a>
        </div>
        
        <a 
          href="#simulador" 
          className="hidden sm:block px-6 py-2 rounded-full font-bold text-sm transition-all hover:scale-105 active:scale-95 shadow-md"
          style={{ backgroundColor: '#FFD700', color: '#004AAD' }}
        >
          Fazer Simulação
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
