
import React from 'react';
import { COLORS } from '../constants';

const FEATURES_DATA = [
  { title: 'Monitoramento App', desc: 'Produção e economia em tempo real na palma da sua mão.', icon: '📱' },
  { title: 'Painéis Tier 1', desc: 'Máxima eficiência com as marcas líderes mundiais.', icon: '🛡️' },
  { title: 'Instalação Ágil', desc: 'Equipe própria entregando sua usina em tempo recorde.', icon: '⚡' },
  { title: 'Suporte Vitalício', desc: 'Manutenção preventiva para sua tranquilidade total.', icon: '🤝' },
  { title: 'Estética Premium', desc: 'Acabamento que valoriza o design do seu imóvel.', icon: '💎' },
  { title: 'Engenharia Própria', desc: 'Projetos otimizados para o melhor ROI possível.', icon: '📐' }
];

const Features: React.FC = () => {
  return (
    <section className="relative py-32 px-6 slanted-top slanted-bottom -mt-20 overflow-hidden" style={{ backgroundColor: COLORS.primary }}>
      <div className="absolute inset-0 solar-grid opacity-10"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl space-y-4">
             <span className="font-black text-xs uppercase tracking-[0.4em]" style={{ color: COLORS.secondary }}>Vantagem Competitiva</span>
             <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter italic">O PADRÃO <span style={{ color: COLORS.blueLight }}>ERGOS.</span></h2>
          </div>
          <p className="text-slate-400 max-w-sm font-bold text-sm uppercase tracking-widest leading-loose">
            Tecnologia de última geração com atendimento focado em resultados imediatos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-[3rem] overflow-hidden shadow-2xl">
          {FEATURES_DATA.map((feat, idx) => (
            <div key={idx} className="bg-[#0F2027] p-12 hover:bg-white/5 transition-all group relative overflow-hidden">
              <div className="absolute -right-4 -bottom-4 text-white/5 text-9xl font-black select-none transition-transform group-hover:scale-110">
                {idx + 1}
              </div>
              <div className="text-5xl mb-8 group-hover:scale-110 transition-transform duration-500 w-20 h-20 flex items-center justify-center glass rounded-2xl">
                {feat.icon}
              </div>
              <h3 className="text-2xl font-black mb-4 text-white uppercase tracking-tighter group-hover:text-yellow-400 transition-colors italic">{feat.title}</h3>
              <p className="text-slate-400 leading-relaxed font-medium">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
