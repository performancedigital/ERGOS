
import React from 'react';
import { BRAND, COLORS, IMAGES } from '../constants';

const Footer: React.FC = () => {
  const logoUrl = IMAGES.logo.startsWith('http') ? IMAGES.logo : `./${IMAGES.logo}?v=${new Date().getTime()}`;

  return (
    <footer className="bg-slate-950 text-white pt-32 pb-16 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-20 relative z-10">
        <div className="lg:col-span-2 space-y-10">
          <div className="flex items-center gap-4">
            <div 
              className="w-16 h-16 rounded-2xl flex items-center justify-center font-black shadow-2xl text-3xl overflow-hidden bg-white/5"
              style={{ backgroundColor: COLORS.secondary }}
            >
              <img 
                src={logoUrl} 
                alt="Logo Ergos" 
                className="w-full h-full object-contain p-2"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  if (target.parentElement) {
                    target.parentElement.innerHTML = `<span style="color: ${COLORS.primary}">E</span>`;
                  }
                }} 
              />
            </div>
            <div className="flex flex-col -space-y-1">
              <span className="font-black text-4xl tracking-tighter uppercase italic">ERGOS</span>
              <span className="font-bold text-xs tracking-[0.4em] uppercase opacity-60" style={{ color: COLORS.blueLight }}>Engenharia Solar</span>
            </div>
          </div>
          <p className="text-slate-400 text-xl max-w-md leading-relaxed font-medium">
            Engenharia de alta precisão para quem não aceita menos que o máximo desempenho solar. Elevando o padrão de economia em {BRAND.location}.
          </p>
          <div className="flex gap-4">
             <a href={BRAND.instagramLink} target="_blank" rel="noopener noreferrer" className="w-14 h-14 glass rounded-2xl flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all font-black text-sm uppercase italic">IG</a>
             <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all font-black text-sm uppercase italic">FB</div>
             <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all font-black text-sm uppercase italic">IN</div>
          </div>
        </div>
        
        <div className="space-y-8">
          <h4 className="font-black text-xs uppercase tracking-[0.4em] pb-2 border-b-2 w-fit" style={{ color: COLORS.secondary, borderColor: `${COLORS.secondary}30` }}>Onde Estamos</h4>
          <ul className="space-y-6 text-slate-300 font-bold text-lg">
            <li className="flex flex-col gap-1">
               <span className="text-[10px] uppercase tracking-widest opacity-40">Localização</span>
               {BRAND.location}
            </li>
            <li className="flex flex-col gap-1">
               <span className="text-[10px] uppercase tracking-widest opacity-40">Atendimento</span>
               {BRAND.phone}
            </li>
            <li className="flex flex-col gap-1">
               <span className="text-[10px] uppercase tracking-widest opacity-40">Email Oficial</span>
               <span className="text-xs break-all">{BRAND.email}</span>
            </li>
          </ul>
        </div>
        
        <div className="space-y-8">
          <h4 className="font-black text-xs uppercase tracking-[0.4em] pb-2 border-b-2 w-fit" style={{ color: COLORS.secondary, borderColor: `${COLORS.secondary}30` }}>Menu Rápido</h4>
          <ul className="space-y-6 text-slate-300 font-bold text-lg">
            <li><a href="#home" className="hover:text-yellow-400 transition-all block">Início</a></li>
            <li><a href="#historia" className="hover:text-yellow-400 transition-all block">A Marca</a></li>
            <li><a href="#simulador" className="hover:text-yellow-400 transition-all block">Simulador</a></li>
            <li><a href={BRAND.whatsappLink} className="hover:text-yellow-400 transition-all block">Orçamento WhatsApp</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-slate-600 text-[10px] font-black uppercase tracking-[0.3em]">
        <p>© {BRAND.year} {BRAND.name}. Todos os direitos reservados.</p>
        <p>CNPJ: {BRAND.cnpj}</p>
        <p className="flex items-center gap-2">
           Engenharia de Precisão <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> Fabriciano-MG
        </p>
      </div>
    </footer>
  );
};

export default Footer;
