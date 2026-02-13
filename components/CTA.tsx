import React from 'react';
import { COLORS, GRADIENTS, BRAND } from '../constants';

const CTA: React.FC = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div 
          className="rounded-[3rem] p-16 md:p-24 text-center text-white relative overflow-hidden shadow-2xl"
          style={{ 
            background: GRADIENTS.primary 
          }}
        >
          {/* GRID PATTERN */}
          <div className="absolute inset-0 solar-grid opacity-5"></div>
          
          {/* FORMA ORGÂNICA AMARELA */}
          <div 
            className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-10"
            style={{ backgroundColor: COLORS.secondary }}
          />
          
          <div className="relative z-10 space-y-12">
            
            {/* TAGLINE */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/20">
              <div 
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: COLORS.secondary }}
              >
                <span className="text-2xl">⚡</span>
              </div>
              <span className="font-black uppercase tracking-widest text-sm">
                {BRAND.tagline}
              </span>
            </div>
            
            {/* HEADLINE */}
            <div className="space-y-6">
              <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-none uppercase">
                Energia limpa.{' '}
                <span 
                  className="inline-block px-6 py-2 rounded-2xl"
                  style={{ backgroundColor: COLORS.secondary, color: COLORS.primary }}
                >
                  Resultado real.
                </span>
              </h2>
              
              <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto font-medium leading-relaxed">
                Não permita que os aumentos tarifários corroam seu patrimônio. 
                Escolha a <strong>engenharia de precisão</strong> para sua casa ou empresa.
              </p>
            </div>
            
            {/* CTA */}
            <div className="pt-6">
              <a 
                href={BRAND.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 px-14 py-7 rounded-2xl font-black text-2xl uppercase tracking-tighter transition-all hover:scale-110 active:scale-95 shadow-2xl"
                style={{ 
                  backgroundColor: COLORS.secondary, 
                  color: COLORS.primary 
                }}
              >
                <span>Solicitar Orçamento Gratuito</span>
                <span className="text-3xl">→</span>
              </a>
            </div>
            
            {/* BADGES DE REFORÇO */}
            <div className="flex flex-wrap justify-center items-center gap-8 pt-12 opacity-60">
              <div className="flex items-center gap-2">
                <span className="text-2xl">⚡</span>
                <span className="text-xs font-black uppercase tracking-widest">
                  Instalação 30 dias
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🛡️</span>
                <span className="text-xs font-black uppercase tracking-widest">
                  25 anos garantia
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">📱</span>
                <span className="text-xs font-black uppercase tracking-widest">
                  Monitoramento 24h
                </span>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
