
import React from 'react';

const FEATURES_DATA = [
  { title: 'Monitoramento App', desc: 'Acompanhe a produção de energia e economia em tempo real na palma da sua mão.', icon: '📱' },
  { title: 'Painéis Tier 1', desc: 'Utilizamos apenas as marcas líderes mundiais com máxima eficiência energética.', icon: '🛡️' },
  { title: 'Instalação Ágil', desc: 'Equipe técnica própria e treinada para entregar sua usina pronta em tempo recorde.', icon: '⚡' },
  { title: 'Suporte Vitalício', desc: 'Consultoria constante e manutenção preventiva para sua tranquilidade total.', icon: '🤝' },
  { title: 'Estética Premium', desc: 'Acabamento refinado que valoriza a arquitetura e o design do seu imóvel.', icon: '💎' },
  { title: 'Engenharia Própria', desc: 'Projetos otimizados por engenheiros experientes para o melhor ROI possível.', icon: '📐' }
];

const Features: React.FC = () => {
  return (
    <section className="bg-slate-900 text-white py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-3xl md:text-5xl font-extrabold">Por que escolher a Ergos?</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Combinamos tecnologia de última geração com um atendimento consultivo focado em resultados reais.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES_DATA.map((feat, idx) => (
            <div key={idx} className="bg-slate-800/40 p-10 rounded-[2.5rem] border border-slate-700/50 hover:border-yellow-400/50 transition-all group hover:-translate-y-2">
              <div className="text-5xl mb-6 bg-slate-700/50 w-20 h-20 flex items-center justify-center rounded-2xl group-hover:scale-110 transition-transform">
                {feat.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-yellow-400 transition-colors">{feat.title}</h3>
              <p className="text-slate-400 leading-relaxed text-lg">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
