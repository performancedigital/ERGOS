
import React from 'react';
import { COLORS, IMAGES } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 px-6 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10">
        <div className="lg:w-1/2 space-y-8 animate-in fade-in slide-in-from-left-8 duration-700">
          <div className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 font-bold text-sm uppercase tracking-wider">
            ☀️ Energia Inteligente
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-slate-900 tracking-tight">
            Economize até <span className="text-blue-700">95%</span> na sua conta de luz
          </h1>
          <p className="text-xl text-slate-600 max-w-xl leading-relaxed">
            Abandone os aumentos abusivos. Produza sua própria energia limpa com tecnologia de ponta e monitoramento pelo celular.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a 
              href="#simulador" 
              className="px-10 py-5 rounded-2xl font-extrabold text-center transition-all shadow-xl hover:-translate-y-1 hover:brightness-110 active:scale-95"
              style={{ backgroundColor: COLORS.primary, color: 'white' }}
            >
              Simular Minha Economia
            </a>
            <a 
              href="#historia" 
              className="px-10 py-5 rounded-2xl font-extrabold text-center bg-white border-2 border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all"
            >
              Conheça a Ergos
            </a>
          </div>
          <div className="flex items-center gap-4 text-sm font-medium text-slate-500">
            <div className="flex -space-x-2">
              {[IMAGES.client1, IMAGES.client2, IMAGES.client3].map((src, i) => (
                <img key={i} className="w-8 h-8 rounded-full border-2 border-white shadow-sm" src={src} alt="Cliente" />
              ))}
            </div>
            <span>+500 usinas instaladas com sucesso</span>
          </div>
        </div>
        <div className="lg:w-1/2 relative animate-in fade-in slide-in-from-right-8 duration-1000">
          <div className="absolute -inset-4 bg-blue-400/10 rounded-full blur-3xl"></div>
          <img 
            src={IMAGES.hero} 
            alt="Instalação Solar" 
            className="relative rounded-[2.5rem] shadow-2xl border-8 border-white transform lg:rotate-2 hover:rotate-0 transition-transform duration-700 object-cover aspect-[4/3] w-full" 
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
