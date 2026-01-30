
import React from 'react';
import { COLORS, IMAGES, BRAND } from '../constants';

const About: React.FC = () => {
  return (
    <section id="historia" className="py-40 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-28 items-center">
        <div className="lg:w-1/2">
          <div className="relative group">
            <div className="absolute -inset-4 border border-slate-100 rounded-[2.5rem] -z-10 group-hover:scale-105 transition-transform duration-700"></div>
            <img 
                src={IMAGES.team} 
                className="relative rounded-[2rem] shadow-2xl w-full aspect-square object-cover" 
                alt="Equipe Técnica Ergos" 
            />
            <div className="absolute -bottom-10 -right-10 bg-white p-10 rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.08)] border border-slate-50">
              <div className="space-y-2">
                <span className="text-[11px] font-bold text-blue-600 uppercase tracking-widest">Experiência</span>
                <p className="text-3xl font-extrabold text-slate-900 tracking-tight">Referência em <br/>Minas Gerais</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 space-y-10">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="w-12 h-0.5 bg-yellow-400"></span>
              <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-slate-400">Nossa Identidade</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Onde a engenharia <br/>
              <span className="text-slate-300">encontra o sol.</span>
            </h2>
          </div>
          
          <p className="text-xl text-slate-500 leading-relaxed font-medium">
            Na <strong>Ergos</strong>, o projeto é tratado como investimento financeiro. Utilizamos simulações termográficas e análises de sombreamento 3D para garantir que sua usina produza <span className="text-slate-900 font-bold underline decoration-yellow-400 decoration-4">o máximo por m².</span>
          </p>

          <div className="grid grid-cols-2 gap-16 pt-12 border-t border-slate-100">
             <div className="space-y-2">
               <p className="text-6xl font-extrabold text-slate-900 tracking-tighter">{BRAND.stats.years}</p>
               <p className="text-slate-400 font-bold uppercase text-[10px] tracking-[0.2em]">Anos de Mercado</p>
             </div>
             <div className="space-y-2">
               <p className="text-6xl font-extrabold text-slate-900 tracking-tighter">{BRAND.stats.clients}</p>
               <p className="text-slate-400 font-bold uppercase text-[10px] tracking-[0.2em]">Clientes Satisfeitos</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
