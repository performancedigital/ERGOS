
import React from 'react';
import { COLORS, IMAGES, BRAND } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-44 pb-36 px-6 section-curve overflow-hidden" style={{ backgroundColor: COLORS.primary }}>
      <div className="absolute inset-0 solar-grid opacity-10"></div>
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20 relative z-10">
        <div className="lg:w-3/5 space-y-12">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS.secondary }}></span>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/60">Tecnologia Fotovoltaica de Elite</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-white heading-tight tracking-tight">
              A inteligência que <br/>
              <span style={{ color: COLORS.secondary }}>valoriza seu capital.</span>
            </h1>
            
            <p className="text-xl text-slate-400 max-w-xl font-medium leading-relaxed">
              Não aceite pagar por ineficiência. Nossa engenharia transforma telhados em ativos financeiros de <span className="text-white font-bold">alta rentabilidade.</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6">
            <a 
              href={BRAND.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-6 rounded-2xl font-bold text-center transition-all hover:scale-105 active:scale-95 text-xl shadow-2xl shadow-yellow-500/10"
              style={{ backgroundColor: COLORS.secondary, color: COLORS.primary }}
            >
              Faça sua simulação agora
            </a>
            
            <div className="flex items-center gap-4 px-6 py-4 glass-dark rounded-2xl border border-white/5">
              <div className="flex -space-x-2">
                {[IMAGES.client1, IMAGES.client2, IMAGES.client3].map((src, i) => (
                  <img key={i} className="w-10 h-10 rounded-full border-2 border-[#0F2027] object-cover" src={src} alt="Cliente" />
                ))}
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-sm tracking-tight">Expertise Comprovada</span>
                <span className="text-white/40 text-[10px] uppercase font-bold tracking-widest">+50 Usinas Instaladas</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-2/5 relative">
          <div className="absolute -inset-10 bg-blue-500/10 rounded-full blur-[120px]"></div>
          <div className="relative">
            <div className="absolute inset-0 border border-white/10 rounded-[2.5rem] transform translate-x-4 translate-y-4 -z-10 opacity-30"></div>
            <img 
              src={IMAGES.hero} 
              alt="Engenharia Solar Ergos" 
              className="relative rounded-[2.5rem] shadow-2xl border border-white/10 object-cover aspect-[4/5] w-full transform hover:scale-[1.01] transition-transform duration-500" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
