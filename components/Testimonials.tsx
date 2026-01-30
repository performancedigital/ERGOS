
import React from 'react';
import { IMAGES } from '../constants';

const DEPOIMENTOS = [
  { name: 'Ricardo Mendes', city: 'Belo Horizonte', text: 'A Ergos superou minhas expectativas. A economia foi imediata e o processo técnico foi muito transparente.', img: IMAGES.client1 },
  { name: 'Ana Paula Rocha', city: 'Coronel Fabriciano', text: 'Excelente atendimento pós-venda. O monitoramento pelo aplicativo me dá total segurança.', img: IMAGES.client2 },
  { name: 'Marcos Oliveira', city: 'Ipatinga', text: 'Equipe altamente técnica. Resolveram toda a burocracia com a distribuidora em tempo recorde.', img: IMAGES.client3 }
];

const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-blue-600">Depoimentos</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">Quem confia na <span className="text-slate-400">Ergos.</span></h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10">
          {DEPOIMENTOS.map((dep, idx) => (
            <div key={idx} className="bg-slate-50 p-12 rounded-[2rem] border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500">
              <div className="text-yellow-400 text-xl mb-8 flex gap-1">
                {'★★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}
              </div>
              <p className="mb-10 text-slate-600 leading-relaxed font-medium italic">"{dep.text}"</p>
              <div className="flex items-center gap-4 pt-8 border-t border-slate-200/60">
                <img src={dep.img} className="w-14 h-14 rounded-full shadow-md object-cover grayscale hover:grayscale-0 transition-all" alt={dep.name} />
                <div>
                  <p className="font-bold text-slate-900 text-base leading-tight">{dep.name}</p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">{dep.city}</p>
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
