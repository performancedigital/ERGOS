
import React from 'react';
import { COLORS, IMAGES, BRAND } from '../constants';

const About: React.FC = () => {
  return (
    <section id="historia" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-20">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/2 relative">
           <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full -z-10 animate-pulse" style={{ backgroundColor: `${COLORS.blueLight}20` }}></div>
           <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-full -z-10" style={{ backgroundColor: `${COLORS.primary}10` }}></div>
           <img 
              src={IMAGES.team} 
              className="relative rounded-[2rem] shadow-2xl z-10 w-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
              alt="Nossa Equipe Ergos" 
           />
        </div>
        <div className="lg:w-1/2 space-y-6">
          <div className="w-20 h-2 rounded-full" style={{ backgroundColor: COLORS.secondary }}></div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight uppercase tracking-tighter">
            Precisão tecnológica <br/>em cada projeto
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed italic border-l-4 border-slate-200 pl-4">
            "Na Ergos, não vendemos apenas painéis. Entregamos a força do sol convertida em liberdade e precisão absoluta."
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            A <strong>Ergos Engenharia Solar</strong> é sinônimo de uma nova era. Nossa engenharia foca na otimização máxima de cada raio solar, garantindo que seu investimento tenha o retorno mais rápido do mercado.
          </p>
          <div className="grid grid-cols-2 gap-8 pt-8">
             <div className="space-y-1">
               <p className="text-4xl font-black" style={{ color: COLORS.blueSolid }}>{BRAND.stats.years}</p>
               <p className="text-slate-500 font-bold uppercase text-xs tracking-widest">Anos de Mercado</p>
             </div>
             <div className="space-y-1">
               <p className="text-4xl font-black" style={{ color: COLORS.blueSolid }}>{BRAND.stats.clients}</p>
               <p className="text-slate-500 font-bold uppercase text-xs tracking-widest">Clientes Satisfeitos</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
