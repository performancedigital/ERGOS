
import React from 'react';
import { COLORS, IMAGES } from '../constants';

const About: React.FC = () => {
  return (
    <section id="historia" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-20">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/2 relative">
           <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-100 rounded-full -z-10 animate-pulse"></div>
           <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-yellow-100 rounded-full -z-10"></div>
           <img 
              src={IMAGES.team} 
              className="relative rounded-[2rem] shadow-2xl z-10 w-full object-cover" 
              alt="Nossa Equipe" 
           />
        </div>
        <div className="lg:w-1/2 space-y-6">
          <div className="w-20 h-1.5 rounded-full" style={{ backgroundColor: COLORS.secondary }}></div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Engenharia de ponta <br/>e compromisso sustentável
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed italic border-l-4 border-slate-200 pl-4">
            "Transformamos a incidência solar em liberdade financeira para nossos clientes desde o primeiro dia."
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            A <strong>Ergos Energia Solar</strong> nasceu em Minas Gerais com a missão de oferecer projetos personalizados. Não apenas instalamos painéis; criamos usinas de alta performance com monitoramento 24h.
          </p>
          <div className="grid grid-cols-2 gap-8 pt-8">
             <div className="space-y-1">
               <p className="text-4xl font-black text-blue-700">10+</p>
               <p className="text-slate-500 font-bold uppercase text-xs tracking-widest">Anos de Mercado</p>
             </div>
             <div className="space-y-1">
               <p className="text-4xl font-black text-blue-700">25</p>
               <p className="text-slate-500 font-bold uppercase text-xs tracking-widest">Anos de Garantia</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
