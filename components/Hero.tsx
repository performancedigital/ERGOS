
import React from 'react';
import { COLORS, IMAGES, BRAND } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 px-6 overflow-hidden text-white" style={{ backgroundColor: COLORS.primary }}>
      {/* Background Solar Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <img src={IMAGES.hero} className="w-full h-full object-cover" alt="" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F2027] via-[#0F2027]/90 to-transparent"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10">
        <div className="lg:w-1/2 space-y-8 animate-in fade-in slide-in-from-left-8 duration-700">
          <div 
            className="inline-block px-4 py-1 rounded-full font-bold text-sm uppercase tracking-widest"
            style={{ backgroundColor: `${COLORS.secondary}20`, color: COLORS.secondary }}
          >
            Uma nova era. Uma nova ERGOS.
          </div>
          <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tighter uppercase">
            PARE DE <span style={{ color: COLORS.blueLight }}>RASGAR DINHEIRO</span> COM AUMENTOS <span style={{ color: COLORS.secondary }}>ABUSIVOS.</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-xl leading-relaxed">
            Assuma o controle da sua energia agora. Proteja seu patrimônio contra a inflação energética com a engenharia de precisão que transforma sol em lucro imediato.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a 
              href={BRAND.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-6 rounded-2xl font-black text-center transition-all shadow-xl hover:-translate-y-1 active:scale-95 text-2xl uppercase tracking-tighter"
              style={{ backgroundColor: COLORS.secondary, color: COLORS.primary }}
            >
              Faça sua simulação agora
            </a>
          </div>
          <div className="flex items-center gap-4 text-sm font-medium text-slate-400">
            <div className="flex -space-x-2">
              {[IMAGES.client1, IMAGES.client2, IMAGES.client3].map((src, i) => (
                <img key={i} className="w-8 h-8 rounded-full border-2 border-[#0F2027] shadow-sm" src={src} alt="Cliente" />
              ))}
            </div>
            <span>Junte-se a dezenas de famílias que já alcançaram a liberdade</span>
          </div>
        </div>
        <div className="lg:w-1/2 relative animate-in fade-in slide-in-from-right-8 duration-1000">
          <div className="absolute -inset-4 opacity-30 rounded-full blur-3xl" style={{ backgroundColor: COLORS.blueLight }}></div>
          <img 
            src={IMAGES.hero} 
            alt="Instalação Solar Ergos" 
            className="relative rounded-[2.5rem] shadow-2xl border-4 border-white/20 transform lg:rotate-2 hover:rotate-0 transition-transform duration-700 object-cover aspect-[4/3] w-full" 
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
