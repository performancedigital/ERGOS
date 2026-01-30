
import React from 'react';
import { BRAND, COLORS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-16">
        <div className="lg:col-span-2 space-y-8">
          <div className="flex items-center gap-3">
            <div 
              className="w-12 h-12 rounded-xl flex items-center justify-center font-black shadow-lg text-2xl"
              style={{ backgroundColor: COLORS.secondary, color: COLORS.primary }}
            >
              E
            </div>
            <span className="font-black text-3xl tracking-tighter uppercase italic">ERGOS <span style={{ color: COLORS.blueLight }}>SOLAR</span></span>
          </div>
          <p className="text-slate-400 text-lg max-w-sm leading-relaxed font-medium">
            Líderes em soluções fotovoltaicas de alta performance. Reduzindo custos e gerando independência energética com precisão absoluta.
          </p>
          <div className="flex gap-4">
             <a href={BRAND.instagramLink} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 cursor-pointer transition-colors font-bold text-sm">IG</a>
             <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 cursor-pointer transition-colors font-bold text-sm">FB</div>
             <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 cursor-pointer transition-colors font-bold text-sm">IN</div>
          </div>
        </div>
        
        <div className="space-y-6">
          <h4 className="font-black text-xl uppercase tracking-widest border-b-2 pb-2 inline-block" style={{ color: COLORS.secondary, borderColor: `${COLORS.secondary}30` }}>Contato</h4>
          <ul className="space-y-4 text-slate-300 font-medium">
            <li className="flex items-center gap-2">📞 {BRAND.phone}</li>
            <li className="flex items-center gap-2">📸 @{BRAND.instagram}</li>
            <li className="flex items-center gap-2">📍 {BRAND.location}</li>
            <li className="flex items-center gap-2 text-xs truncate">📧 {BRAND.email}</li>
          </ul>
        </div>
        
        <div className="space-y-6">
          <h4 className="font-black text-xl uppercase tracking-widest border-b-2 pb-2 inline-block" style={{ color: COLORS.secondary, borderColor: `${COLORS.secondary}30` }}>Navegação</h4>
          <ul className="space-y-4 text-slate-300 font-medium">
            <li><a href="#home" className="hover:text-yellow-400 transition-colors">Voltar ao Topo</a></li>
            <li><a href={BRAND.whatsappLink} className="hover:text-yellow-400 transition-colors">Faça sua simulação</a></li>
            <li><a href="#historia" className="hover:text-yellow-400 transition-colors">Nossa História</a></li>
            <li><a href="#depoimentos" className="hover:text-yellow-400 transition-colors">O que dizem</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm font-bold">
        <p>© {BRAND.year} {BRAND.name} - Todos os direitos reservados.</p>
        <p>CNPJ: {BRAND.cnpj}</p>
      </div>
    </footer>
  );
};

export default Footer;
