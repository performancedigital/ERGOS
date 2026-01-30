
import React from 'react';
import { COLORS, BRAND } from '../constants';

const CTA: React.FC = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto rounded-[3.5rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl" style={{ backgroundColor: COLORS.primary }}>
         <div className="absolute top-0 right-0 w-96 h-96 opacity-10 rounded-full -mr-20 -mt-20 blur-3xl" style={{ backgroundColor: COLORS.blueLight }}></div>
         <div className="absolute bottom-0 left-0 w-96 h-96 opacity-10 rounded-full -ml-20 -mb-20 blur-3xl" style={{ backgroundColor: COLORS.blueLight }}></div>
         
         <div className="relative z-10 space-y-8">
           <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic">
             O Sol trabalha para você. <br/>A Ergos garante a precisão.
           </h2>
           <p className="text-xl md:text-2xl opacity-80 max-w-2xl mx-auto font-medium leading-relaxed">
             Não espere o próximo aumento. Assuma o controle da sua conta de luz agora mesmo.
           </p>
           <div className="pt-4 flex justify-center">
             <a 
                href={BRAND.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-12 py-6 rounded-2xl font-black text-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 uppercase tracking-tighter"
                style={{ backgroundColor: COLORS.secondary, color: COLORS.primary }}
             >
               Faça sua simulação agora
               <span>⚡</span>
             </a>
           </div>
           <p className="text-sm opacity-50 font-bold uppercase tracking-widest pt-4">Sua independência começa com um clique</p>
         </div>
      </div>
    </section>
  );
};

export default CTA;
