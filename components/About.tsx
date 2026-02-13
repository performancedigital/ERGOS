import React from 'react';
import { COLORS, GRADIENTS, IMAGES, BRAND } from '../constants';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-32 px-6 bg-white relative overflow-hidden">
      
      {/* FORMA ORGÂNICA (background) */}
      <div 
        className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl opacity-5"
        style={{ backgroundColor: COLORS.primary }}
      />
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          
          {/* COLUNA ESQUERDA - IMAGEM */}
          <div className="lg:w-1/2 relative">
            <div className="relative group">
              {/* Border animado */}
              <div 
                className="absolute -inset-4 rounded-[3rem] -z-10 group-hover:scale-105 transition-transform duration-700 opacity-30"
                style={{ background: GRADIENTS.primary }}
              />
              
              <img 
                src={IMAGES.team} 
                className="relative rounded-[2.5rem] shadow-2xl w-full aspect-square object-cover" 
                alt="Equipe Ergos Engenharia Solar" 
              />
              
              {/* CARD FLUTUANTE COM BADGE AMARELO */}
              <div 
                className="absolute -bottom-8 -right-8 p-8 rounded-3xl shadow-2xl backdrop-blur-md"
                style={{ 
                  background: `linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.primaryDark} 100%)` 
                }}
              >
                <div className="space-y-3">
                  {/* Badge amarelo */}
                  <div 
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl"
                    style={{ backgroundColor: COLORS.secondary }}
                  >
                    <span className="text-2xl">⚡</span>
                    <span 
                      className="text-xs font-black uppercase tracking-widest"
                      style={{ color: COLORS.primary }}
                    >
                      Experiência
                    </span>
                  </div>
                  
                  <p className="text-3xl font-black text-white tracking-tight leading-tight">
                    Referência em <br/>Minas Gerais
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* COLUNA DIREITA - TEXTO */}
          <div className="lg:w-1/2 space-y-10">
            
            {/* TAG "Energia positiva, resultados positivos" */}
            <div className="inline-flex items-center gap-3">
              <div 
                className="w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: COLORS.secondary }}
              >
                <span className="text-3xl">👍</span>
              </div>
              <span 
                className="text-sm font-black uppercase tracking-widest"
                style={{ color: COLORS.primary }}
              >
                Nossa Identidade
              </span>
            </div>
            
            {/* HEADLINE */}
            <h2 
              className="text-5xl md:text-6xl font-black tracking-tight leading-[1.1]"
              style={{ color: COLORS.primary }}
            >
              Onde a engenharia{' '}
              <span 
                className="inline-block px-4 py-1 rounded-xl text-white"
                style={{ backgroundColor: COLORS.primary }}
              >
                encontra o sol.
              </span>
            </h2>
            
            {/* TEXTO */}
            <p className="text-xl text-gray-700 leading-relaxed font-medium">
              Na <strong style={{ color: COLORS.primary }}>Ergos</strong>, cada projeto é tratado como investimento estratégico. 
              Utilizamos simulações termográficas e análises de sombreamento 3D para garantir que sua usina produza{' '}
              <strong 
                className="underline decoration-4"
                style={{ 
                  color: COLORS.primary,
                  textDecorationColor: COLORS.secondary 
                }}
              >
                o máximo por m²
              </strong>.
            </p>
            
            {/* STATS COM BADGES AMARELAS */}
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div className="space-y-4">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: COLORS.secondary }}
                >
                  <span className="text-3xl">📅</span>
                </div>
                <div>
                  <p 
                    className="text-5xl font-black tracking-tighter"
                    style={{ color: COLORS.primary }}
                  >
                    {BRAND.stats.years}
                  </p>
                  <p className="text-gray-500 font-bold uppercase text-xs tracking-widest">
                    Anos de Mercado
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: COLORS.secondary }}
                >
                  <span className="text-3xl">⭐</span>
                </div>
                <div>
                  <p 
                    className="text-5xl font-black tracking-tighter"
                    style={{ color: COLORS.primary }}
                  >
                    {BRAND.stats.clients}
                  </p>
                  <p className="text-gray-500 font-bold uppercase text-xs tracking-widest">
                    Clientes Satisfeitos
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
