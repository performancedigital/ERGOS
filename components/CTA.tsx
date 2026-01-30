
import React from 'react';
import { COLORS, BRAND } from '../constants';

const CTA: React.FC = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto rounded-[3.5rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl" style={{ backgroundColor: COLORS.primary }}>
         <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 opacity-20 rounded-full -mr-20 -mt-20 blur-3xl"></div>
         <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-400 opacity-10 rounded-full -ml-20 -mb-20 blur-3xl"></div>
         
         <div className="relative z-10 space-y-8">
           <h2 className="text-4xl md:text-6xl font-black tracking-tighter">Sua liberdade energética <br/>começa agora</h2>
           <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto font-medium">
             Pare de pagar por aumentos que você não controla. Solicite um estudo gratuito para sua residência ou empresa.
           </p>
           <div className="pt-4 flex flex-col sm:flex-row justify-center gap-6">
             <a 
                href={BRAND.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-900 px-12 py-6 rounded-2xl font-black text-xl shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3"
             >
               Consultar Especialista
               <span className="text-2xl">⚡</span>
             </a>
             <a 
                href="#simulador"
                className="bg-transparent border-2 border-white/30 hover:bg-white/10 px-12 py-6 rounded-2xl font-black text-xl transition-all flex items-center justify-center"
             >
               Recalcular Economia
             </a>
           </div>
           <p className="text-sm opacity-60 font-bold uppercase tracking-widest pt-4">Atendimento imediato via WhatsApp</p>
         </div>
      </div>
    </section>
  );
};

export default CTA;
