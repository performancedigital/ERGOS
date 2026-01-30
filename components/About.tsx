
import React from 'react';
import { COLORS, IMAGES, BRAND } from '../constants';

const About: React.FC = () => {
  return (
    <section id="historia" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-20 items-center">
        <div className="lg:w-1/2 order-2 lg:order-1">
          <div className="relative group">
            <div className="absolute -top-10 -left-10 w-full h-full bg-slate-100 rounded-[3rem] -z-10 group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-500"></div>
            <img 
                src={IMAGES.team} 
                className="relative rounded-[3rem] shadow-2xl z-10 w-full aspect-video object-cover grayscale hover:grayscale-0 transition-all duration-1000" 
                alt="Nossa Equipe Ergos" 
            />
            <div className="absolute -bottom-8 -right-8 glass p-8 rounded-3xl z-20 shadow-xl border-l-4" style={{ borderLeftColor: COLORS.secondary }}>
              <p className="text-4xl font-black italic tracking-tighter" style={{ color: COLORS.primary }}>
                "SOL É LUCRO"
              </p>
              <p className="text-[10px] uppercase tracking-widest font-black opacity-50">Assinatura Ergos</p>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 space-y-8 order-1 lg:order-2">
          <div className="flex items-center gap-4">
            <div className="w-16 h-1 rounded-full" style={{ backgroundColor: COLORS.secondary }}></div>
            <span className="font-black text-xs uppercase tracking-[0.3em]" style={{ color: COLORS.blueSolid }}>Precisão Absoluta</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-[0.9] uppercase tracking-tighter">
            ENGENHARIA QUE <br/><span style={{ color: COLORS.blueLight }}>DOMINA O SOL.</span>
          </h2>
          
          <p className="text-xl text-slate-600 leading-relaxed font-medium">
            Na <strong>Ergos</strong>, não apenas instalamos placas. Nós projetamos usinas de alta performance com a precisão de quem entende que cada centímetro de sombra custa dinheiro. 
          </p>

          <div className="grid grid-cols-2 gap-10 pt-10 border-t border-slate-100">
             <div className="space-y-2">
               <p className="text-6xl font-black tracking-tighter leading-none" style={{ color: COLORS.primary }}>{BRAND.stats.years}</p>
               <div className="flex flex-col">
                  <p className="text-slate-900 font-black uppercase text-xs tracking-widest">Anos de Mercado</p>
                  <p className="text-slate-400 text-[10px] font-bold">Experiência comprovada</p>
               </div>
             </div>
             <div className="space-y-2">
               <p className="text-6xl font-black tracking-tighter leading-none" style={{ color: COLORS.primary }}>{BRAND.stats.clients}</p>
               <div className="flex flex-col">
                  <p className="text-slate-900 font-black uppercase text-xs tracking-widest">Clientes Satisfeitos</p>
                  <p className="text-slate-400 text-[10px] font-bold">Independência gerada</p>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
