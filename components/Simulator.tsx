
import React, { useState } from 'react';
import { COLORS, BRAND } from '../constants';

const Simulator: React.FC = () => {
  const [bill, setBill] = useState<string>('');
  const [kwhPrice, setKwhPrice] = useState<string>('0.95');
  const [result, setResult] = useState<{
    yearlySaving: number;
    yearlyKwh: number;
  } | null>(null);

  const calculate = () => {
    const billVal = parseFloat(bill);
    const priceVal = parseFloat(kwhPrice);

    if (billVal > 0 && priceVal > 0) {
      const yearlySaving = (billVal - 60) * 12 * 0.95;
      setResult({
        yearlySaving: yearlySaving > 0 ? yearlySaving : 0,
        yearlyKwh: Math.round((billVal / priceVal) * 12)
      });
    }
  };

  return (
    <section id="simulador" className="py-32 px-6">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-px bg-slate-900 rounded-[3.5rem] overflow-hidden shadow-2xl border border-slate-800">
        
        <div className="lg:w-1/2 p-12 md:p-16 bg-white space-y-10">
          <div className="space-y-4">
            <h2 className="text-4xl font-black text-slate-900 tracking-tighter uppercase italic">CALCULE O <br/><span style={{ color: COLORS.blueSolid }}>SEU LUCRO.</span></h2>
            <p className="text-slate-500 font-bold text-sm uppercase tracking-widest">Baseado no custo da sua energia hoje</p>
          </div>

          <div className="space-y-8">
            <div className="space-y-3">
              <label className="font-black text-slate-400 uppercase text-[10px] tracking-[0.2em]">Custo Mensal Atual (R$)</label>
              <div className="relative">
                 <span className="absolute left-5 top-1/2 -translate-y-1/2 font-black text-slate-300 text-2xl">R$</span>
                 <input 
                  type="number" 
                  value={bill}
                  onChange={(e) => setBill(e.target.value)}
                  placeholder="Ex: 600" 
                  className="w-full p-6 pl-16 bg-slate-50 border-2 border-slate-100 rounded-3xl outline-none focus:border-yellow-400 transition-all font-black text-3xl tracking-tighter"
                />
              </div>
            </div>
            
            <div className="space-y-3">
              <label className="font-black text-slate-400 uppercase text-[10px] tracking-[0.2em]">Tarifa kWh Concessionária</label>
              <input 
                type="number" 
                step="0.01"
                value={kwhPrice}
                onChange={(e) => setKwhPrice(e.target.value)}
                placeholder="Ex: 0.95" 
                className="w-full p-6 bg-slate-50 border-2 border-slate-100 rounded-3xl outline-none focus:border-blue-400 transition-all font-black text-xl"
              />
            </div>
          </div>

          <button 
            onClick={calculate}
            className="w-full py-7 rounded-3xl font-black text-2xl hover:scale-[1.02] transition-all shadow-xl active:scale-95 uppercase tracking-tighter"
            style={{ backgroundColor: COLORS.primary, color: COLORS.secondary }}
          >
            Ver Minha Economia
          </button>
        </div>

        <div className="lg:w-1/2 p-12 md:p-16 flex flex-col justify-center items-center text-center space-y-8 bg-[#0F2027] relative overflow-hidden">
           <div className="absolute inset-0 solar-grid opacity-10"></div>
           {!result ? (
             <div className="relative z-10 animate-pulse text-slate-500 font-black text-xl uppercase tracking-[0.2em]">
                Aguardando dados...
             </div>
           ) : (
             <div className="relative z-10 space-y-10 animate-in fade-in zoom-in duration-500">
                <div className="space-y-2">
                   <p className="text-slate-400 font-black uppercase text-[10px] tracking-[0.3em]">Economia Anual Estimada</p>
                   <h3 className="text-6xl md:text-7xl font-black italic tracking-tighter text-glow" style={{ color: COLORS.secondary }}>
                     R$ {result.yearlySaving.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                   </h3>
                </div>

                <div className="p-6 glass rounded-3xl border border-white/10 space-y-1">
                   <p className="text-white font-black text-2xl tracking-tighter uppercase">{result.yearlyKwh} kWh</p>
                   <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Energia produzida/ano</p>
                </div>

                <a 
                  href={BRAND.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 px-12 py-6 rounded-full font-black text-xl shadow-[0_0_40px_rgba(255,242,0,0.3)] hover:scale-105 transition-all uppercase tracking-tighter"
                  style={{ backgroundColor: COLORS.secondary, color: COLORS.primary }}
                >
                  Solicitar estudo agora
                </a>
             </div>
           )}
        </div>
      </div>
    </section>
  );
};

export default Simulator;
