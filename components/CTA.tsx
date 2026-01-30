
import React from 'react';
import { COLORS, BRAND } from '../constants';

const CTA: React.FC = () => {
  return (
    <section className="py-32 px-6 slanted-top" style={{ backgroundColor: COLORS.primary }}>
      <div className="max-w-6xl mx-auto rounded-[4rem] p-16 md:p-24 text-center text-white relative overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.5)] bg-gradient-to-br from-[#0F2027] to-[#1a3a45]">
         <div className="absolute top-0 right-0 w-[40rem] h-[40rem] opacity-5 rounded-full -mr-40 -mt-40 blur-[100px]" style={{ backgroundColor: COLORS.secondary }}></div>
         <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] opacity-5 rounded-full -ml-40 -mb-40 blur-[100px]" style={{ backgroundColor: COLORS.blueLight }}></div>
         
         <div className="relative z-10 space-y-10">
           <div className="space-y-4">
             <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic leading-[0.85]">
               O SOL <span style={{ color: COLORS.secondary }}>TRABALHA</span> PARA VOCÊ. <br/>
               NÓS GARANTIMOS A <span style={{ color: COLORS.blueLight }}>PRECISÃO.</span>
             </h2>
             <p className="text-2xl md:text-3xl text-slate-300 max-w-3xl mx-auto font-medium leading-relaxed italic">
               Não espere o próximo aumento abusivo. Assuma o controle total da sua independência financeira agora.
             </p>
           </div>

           <div className="pt-8 flex justify-center">
             <a 
                href={BRAND.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-16 py-8 rounded-[2rem] font-black text-3xl shadow-[0_30px_60px_rgba(255,242,0,0.3)] hover:scale-110 active:scale-95 transition-all flex items-center justify-center gap-4 uppercase tracking-tighter"
                style={{ backgroundColor: COLORS.secondary, color: COLORS.primary }}
             >
               Começar minha economia
               <span className="text-4xl">⚡</span>
             </a>
           </div>
           
           <div className="flex flex-col md:flex-row justify-center items-center gap-8 pt-10 opacity-40 text-xs font-black uppercase tracking-[0.5em]">
              <span>Investimento Inteligente</span>
              <span className="hidden md:block w-2 h-2 rounded-full bg-white"></span>
              <span>Engenharia de Performance</span>
              <span className="hidden md:block w-2 h-2 rounded-full bg-white"></span>
              <span>Liberdade Energética</span>
           </div>
         </div>
      </div>
    </section>
  );
};

export default CTA;
