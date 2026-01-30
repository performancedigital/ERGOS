
import React from 'react';
import { COLORS, IMAGES, BRAND } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-44 pb-32 px-6 slanted-bottom" style={{ backgroundColor: COLORS.primary }}>
      <div className="absolute inset-0 solar-grid opacity-20"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-[#0F2027] via-[#0F2027]/80 to-transparent"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
        <div className="lg:w-3/5 space-y-10 animate-in fade-in slide-in-from-left-12 duration-1000">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full glass">
               <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: COLORS.secondary }}></span>
                <span className="relative inline-flex rounded-full h-3 w-3" style={{ backgroundColor: COLORS.secondary }}></span>
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Uma nova era energética</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter uppercase italic">
              PARE DE <span style={{ color: COLORS.blueLight }}>RASGAR DINHEIRO</span> COM AUMENTOS <span className="text-glow" style={{ color: COLORS.secondary }}>ABUSIVOS.</span>
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-slate-300 max-w-2xl font-medium leading-relaxed">
            Proteja seu patrimônio contra a inflação energética. Nossa engenharia de precisão transforma sol em <span className="text-white font-bold">lucro real e imediato</span> no seu bolso.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <a 
              href={BRAND.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-14 py-7 rounded-2xl font-black text-center transition-all shadow-[0_20px_50px_rgba(255,242,0,0.2)] hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(255,242,0,0.4)] active:scale-95 text-2xl uppercase tracking-tighter"
              style={{ backgroundColor: COLORS.secondary, color: COLORS.primary }}
            >
              Faça sua simulação agora
            </a>
          </div>

          <div className="flex items-center gap-6 p-6 glass rounded-[2rem] w-fit">
            <div className="flex -space-x-3">
              {[IMAGES.client1, IMAGES.client2, IMAGES.client3].map((src, i) => (
                <img key={i} className="w-12 h-12 rounded-full border-4 border-[#0F2027] shadow-xl object-cover" src={src} alt="Cliente" />
              ))}
            </div>
            <div className="flex flex-col">
              <span className="text-white font-black text-lg tracking-tight">Liberdade Energética</span>
              <span className="text-slate-400 text-sm font-bold uppercase tracking-widest">Dezenas de famílias impactadas</span>
            </div>
          </div>
        </div>

        <div className="lg:w-2/5 relative animate-in fade-in zoom-in duration-1000 delay-300">
          <div className="absolute -inset-10 opacity-30 rounded-full blur-3xl animate-pulse" style={{ backgroundColor: COLORS.blueLight }}></div>
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-8 border-l-8 rounded-tl-3xl z-20" style={{ borderColor: COLORS.secondary }}></div>
            <img 
              src={IMAGES.hero} 
              alt="Placa Solar Ergos" 
              className="relative rounded-[3rem] shadow-2xl border-8 border-white/5 object-cover aspect-[4/5] w-full hover:scale-[1.02] transition-transform duration-700" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
