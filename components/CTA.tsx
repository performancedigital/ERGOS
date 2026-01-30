
import React from 'react';
import { COLORS, BRAND } from '../constants';

const CTA: React.FC = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto rounded-[3rem] p-16 md:p-24 text-center text-white relative overflow-hidden bg-gradient-to-br from-[#0F2027] to-[#1e3a44] shadow-2xl">
         <div className="absolute inset-0 solar-grid opacity-10"></div>
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-400/5 blur-[120px] rounded-full -mr-32 -mt-32"></div>
         
         <div className="relative z-10 space-y-12">
           <div className="space-y-6">
             <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-none uppercase">
               Energia limpa. <br/>
               <span style={{ color: COLORS.secondary }}>Resultado real.</span>
             </h2>
             <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
               Não permita que os aumentos tarifários corroam seu capital. Escolha a engenharia de precisão para sua casa ou empresa.
             </p>
           </div>

           <div className="pt-4">
             <a 
                href={BRAND.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 px-14 py-7 rounded-2xl font-bold text-2xl transition-all hover:-translate-y-2 active:scale-95 shadow-2xl shadow-yellow-400/10 uppercase tracking-tighter"
                style={{ backgroundColor: COLORS.secondary, color: COLORS.primary }}
             >
               Solicitar Orçamento
               <span className="text-3xl">→</span>
             </a>
           </div>
           
           <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 pt-8 opacity-30 text-[9px] font-bold uppercase tracking-[0.4em]">
              <span className="flex items-center gap-2">Monitoramento 24h</span>
              <span className="flex items-center gap-2">Painéis Tier 1</span>
              <span className="flex items-center gap-2">Suporte Engenharia</span>
           </div>
         </div>
      </div>
    </section>
  );
};

export default CTA;
