import React from 'react';
import { COLORS, GRADIENTS } from '../constants';

const FEATURES_DATA = [
  {
    title: 'Instalação em até 30 dias',
    desc: 'Processo ágil com protocolos de segurança certificados.',
    emoji: '⚡',
    color: COLORS.secondary
  },
  {
    title: 'Financiamento em até 60x',
    desc: 'Parcelas que cabem no seu bolso. Economia imediata.',
    emoji: '💰',
    color: COLORS.secondary
  },
  {
    title: '15 anos de garantia do inversor',
    desc: 'Equipamentos Tier 1 com certificação internacional.',
    emoji: '🛡️',
    color: COLORS.secondary
  },
  {
    title: '15 anos de garantia das placas',
    desc: 'Tranquilidade e retorno garantido por décadas.',
    emoji: '📊',
    color: COLORS.secondary
  },
  {
    title: 'Monitoramento 24h',
    desc: 'App com dados em tempo real da sua geração de energia.',
    emoji: '📱',
    color: COLORS.secondary
  },
  {
    title: 'Suporte técnico vitalício',
    desc: 'Acompanhamento contínuo para máxima performance.',
    emoji: '🤝',
    color: COLORS.secondary
  }
];

const Features: React.FC = () => {
  return (
    <section
      className="py-32 px-6 relative overflow-hidden"
      style={{ background: `linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)` }}
    >
      {/* PATTERN DE FUNDO */}
      <div className="absolute inset-0 solar-grid opacity-[0.02]"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-3">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: COLORS.secondary }}
              >
                <span className="text-2xl">✨</span>
              </div>
              <span
                className="text-xs font-black uppercase tracking-widest"
                style={{ color: COLORS.primary }}
              >
                Diferenciais
              </span>
            </div>

            {/* Headline */}
            <h2
              className="text-5xl md:text-6xl font-black tracking-tight leading-tight"
              style={{ color: COLORS.primary }}
            >
              Por que escolher{' '}
              <span
                className="inline-block px-4 py-1 rounded-xl text-white"
                style={{ backgroundColor: COLORS.primary }}
              >
                a Ergos?
              </span>
            </h2>
          </div>

          <p className="text-gray-600 max-w-md font-medium text-base leading-relaxed">
            Tecnologia de ponta, atendimento humanizado e foco total na sua rentabilidade.
          </p>
        </div>

        {/* GRID DE FEATURES */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES_DATA.map((feat, idx) => (
            <div
              key={idx}
              className="group bg-white p-10 rounded-3xl shadow-sm border-2 border-gray-100 hover:shadow-2xl hover:border-blue-100 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Glow effect no hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                style={{ background: GRADIENTS.primary }}
              />

              {/* Badge amarela com emoji */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-4xl mb-8 group-hover:scale-110 transition-transform shadow-lg"
                style={{ backgroundColor: feat.color }}
              >
                {feat.emoji}
              </div>

              {/* Conteúdo */}
              <h3
                className="text-xl font-black mb-4 tracking-tight leading-tight"
                style={{ color: COLORS.primary }}
              >
                {feat.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed font-medium">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;
