import React from 'react';
import { COLORS, GRADIENTS, IMAGES, BRAND } from '../constants';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative pt-32 md:pt-44 pb-32 md:pb-40 px-6 overflow-hidden"
      style={{ 
        background: GRADIENTS.primary 
      }}
    >
      {/* GRID PATTERN (sutil) */}
      <div className="absolute inset-0 solar-grid opacity-5"></div>
      
      {/* FORMA ORGÂNICA AMARELA (do Instagram) */}
      <div 
        className="absolute -right-40 -top-40 w-[800px] h-[800px] rounded-full organic-shape"
        style={{ backgroundColor: COLORS.secondary }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* COLUNA ESQUERDA - TEXTO */}
          <div className="lg:w-3/5 space-y-10">
            
            {/* BADGE "Energia positiva, resultados positivos" */}
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border-2 border-yellow-400/30 bg-white/10 backdrop-blur-sm">
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: COLORS.secondary }}
              >
                <span className="text-2xl">👍</span>
              </div>
              <span className="text-white font-black text-sm uppercase tracking-wider">
                {BRAND.tagline}
              </span>
            </div>
            
            {/* HEADLINE PRINCIPAL */}
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tight">
              Reduza sua conta de luz em até{' '}
              <span 
                className="inline-block px-4 py-1 rounded-xl"
                style={{ backgroundColor: COLORS.secondary, color: COLORS.primary }}
              >
                95%
              </span>
            </h1>
            
            {/* SUBHEADLINE */}
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl font-medium leading-relaxed">
              Instalação em até 30 dias. Financiamento em até 115x. 
              <span className="font-black"> 25 anos de garantia.</span>
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* CTA PRIMÁRIO */}
              <a 
                href={BRAND.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl font-black text-xl uppercase tracking-wide transition-all hover:scale-105 active:scale-95 shadow-2xl"
                style={{ 
                  backgroundColor: COLORS.secondary, 
                  color: COLORS.primary 
                }}
              >
                <span>Solicitar orçamento gratuito</span>
                <span className="text-2xl">→</span>
              </a>
              
              {/* CTA SECUNDÁRIO */}
              <a 
                href="#simulador"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl font-black text-xl uppercase tracking-wide transition-all hover:scale-105 active:scale-95 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white"
              >
                <span>Simular economia</span>
              </a>
            </div>
            
            {/* SOCIAL PROOF */}
            <div className="flex items-center gap-6 pt-6">
              <div className="flex -space-x-3">
                {[IMAGES.client1, IMAGES.client2, IMAGES.client3].map((src, i) => (
                  <img 
                    key={i} 
                    className="w-12 h-12 rounded-full border-3 border-white object-cover shadow-lg" 
                    src={src} 
                    alt={`Cliente ${i + 1}`} 
                  />
                ))}
              </div>
              <div className="flex flex-col">
                <span className="text-white font-black text-base">+50 Clientes Satisfeitos</span>
                <div className="flex gap-0.5 text-yellow-400 text-lg">
                  {'★★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}
                </div>
              </div>
            </div>
            
          </div>
          
          {/* COLUNA DIREITA - IMAGEM */}
          <div className="lg:w-2/5 relative">
            {/* Glow effect */}
            <div 
              className="absolute -inset-10 rounded-full blur-3xl opacity-30"
              style={{ backgroundColor: COLORS.secondary }}
            />
            
            {/* Imagem */}
            <div className="relative">
              <img 
                src={IMAGES.hero} 
                alt="Painéis solares Ergos" 
                className="relative rounded-3xl shadow-2xl object-cover aspect-[4/5] w-full transform hover:scale-[1.02] transition-transform duration-500 border-4 border-white/20" 
              />
              
              {/* BADGE FLUTUANTE */}
              <div 
                className="absolute -bottom-6 -left-6 px-8 py-6 rounded-2xl shadow-2xl backdrop-blur-sm"
                style={{ 
                  background: `linear-gradient(135deg, ${COLORS.secondary} 0%, ${COLORS.secondaryDark} 100%)` 
                }}
              >
                <div className="flex flex-col">
                  <span 
                    className="text-sm font-bold uppercase tracking-widest"
                    style={{ color: COLORS.primary }}
                  >
                    Economia Real
                  </span>
                  <span 
                    className="text-4xl font-black"
                    style={{ color: COLORS.primary }}
                  >
                    Até R$ 50k/ano
                  </span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
