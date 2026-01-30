
import React from 'react';
import { IMAGES } from '../constants';

const DEPOIMENTOS = [
  { name: 'João Silva', city: 'Belo Horizonte', text: '"Minha conta caiu de R$ 900 para R$ 75 no primeiro mês. O atendimento foi excepcional."', img: IMAGES.client1 },
  { name: 'Maria Souza', city: 'Contagem', text: '"Investimento seguro. A equipe da Ergos resolveu toda a burocracia com a Cemig."', img: IMAGES.client2 },
  { name: 'Pedro Lima', city: 'Nova Lima', text: '"Instalação limpa e rápida. O app de monitoramento é viciante de tão bom."', img: IMAGES.client3 }
];

const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-24 px-6 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">Vozes da Satisfação</h2>
          <p className="text-slate-500 text-lg">Histórias reais de quem já transformou sua relação com a energia.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {DEPOIMENTOS.map((dep, idx) => (
            <div key={idx} className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 relative group hover:shadow-2xl transition-all hover:bg-white">
              <div className="text-yellow-400 text-3xl mb-6 flex gap-1">
                {'★★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}
              </div>
              <p className="italic mb-8 text-slate-600 text-lg leading-relaxed">"{dep.text}"</p>
              <div className="flex items-center gap-4 pt-6 border-t border-slate-200">
                <img src={dep.img} className="w-16 h-16 rounded-full border-4 border-white shadow-lg object-cover" alt={dep.name} />
                <div>
                  <p className="font-black text-slate-900 text-lg">{dep.name}</p>
                  <p className="text-sm text-slate-500 font-medium">{dep.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
