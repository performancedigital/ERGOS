
import React from 'react';
import { COLORS } from '../constants';

const FEATURES_DATA = [
  { title: 'Monitoramento App', desc: 'Produção e economia auditada em tempo real diretamente no seu smartphone.', icon: '📱' },
  { title: 'Painéis Tier 1', desc: 'Utilizamos apenas tecnologia de ponta das fabricantes líderes mundiais.', icon: '🛡️' },
  { title: 'Instalação Ágil', desc: 'Protocolos de segurança e agilidade para sua usina entrar em operação rápido.', icon: '⚡' },
  { title: 'Suporte Vitalício', desc: 'Acompanhamento técnico para garantir a perenidade do seu investimento.', icon: '🤝' },
  { title: 'Estética Premium', desc: 'Integração arquitetônica que valoriza o design do seu imóvel.', icon: '💎' },
  { title: 'Engenharia Própria', desc: 'Cada projeto é único, otimizado para o maior retorno financeiro possível.', icon: '📐' }
];

const Features: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="space-y-4">
             <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-blue-600">Qualidade Superior</span>
             <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">O Diferencial <span className="text-slate-400">Ergos.</span></h2>
          </div>
          <p className="text-slate-500 max-w-sm font-medium text-sm leading-relaxed">
            Unimos tecnologia de ponta a um atendimento próximo e focado na sua rentabilidade imediata.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES_DATA.map((feat, idx) => (
            <div key={idx} className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1 group">
              <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform">
                {feat.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 tracking-tight">{feat.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
