
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
    <section id="simulador" className="py-32 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-[3rem] overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.05)] flex flex-col lg:flex-row border border-slate-100">
          
          <div className="lg:w-1/2 p-12 lg:p-20 bg-white">
            <div className="space-y-10">
              <div className="space-y-4">
                <span className="text-[11px] font-bold text-blue-600 uppercase tracking-[0.3em]">Gestão Energética</span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">Projete sua <br/><span className="text-slate-400">independência.</span></h2>
              </div>

              <div className="space-y-8">
                <div className="space-y-3">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Seu gasto mensal médio (R$)</label>
                  <input 
                    type="number" 
                    value={bill}
                    onChange={(e) => setBill(e.target.value)}
                    placeholder="0,00" 
                    className="w-full p-6 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:border-yellow-400 transition-all font-bold text-2xl text-slate-900"
                  />
                </div>
                
                <div className="space-y-3">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Tarifa Local (R$ por kWh)</label>
                  <input 
                    type="number" 
                    step="0.01"
                    value={kwhPrice}
                    onChange={(e) => setKwhPrice(e.target.value)}
                    placeholder="0,95" 
                    className="w-full p-6 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:border-blue-400 transition-all font-bold text-xl text-slate-900"
                  />
                </div>
              </div>

              <button 
                onClick={calculate}
                className="w-full py-6 rounded-2xl font-bold text-xl hover:brightness-110 transition-all shadow-xl active:scale-95 tracking-wide"
                style={{ backgroundColor: COLORS.primary, color: COLORS.secondary }}
              >
                Simular Resultado
              </button>
            </div>
          </div>

          <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center items-center text-center relative overflow-hidden" style={{ backgroundColor: COLORS.primary }}>
            <div className="absolute inset-0 solar-grid opacity-5"></div>
            
            {!result ? (
              <div className="relative z-10 space-y-6">
                <div className="w-20 h-20 rounded-full border-4 border-dashed border-white/10 animate-spin mx-auto flex items-center justify-center">
                   <div className="w-10 h-10 rounded-full bg-white/5"></div>
                </div>
                <p className="text-white/20 text-xs font-bold uppercase tracking-[0.3em]">Aguardando dados de consumo</p>
              </div>
            ) : (
              <div className="relative z-10 space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-500">
                <div className="space-y-4">
                   <p className="text-white/40 font-bold uppercase text-xs tracking-widest">Potencial de Economia Anual</p>
                   <h3 className="text-6xl md:text-7xl font-extrabold tracking-tighter" style={{ color: COLORS.secondary }}>
                     R$ {result.yearlySaving.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                   </h3>
                </div>

                <div className="grid grid-cols-2 gap-px bg-white/10 rounded-3xl overflow-hidden border border-white/10">
                   <div className="p-8 bg-slate-900/40">
                      <p className="text-white font-bold text-2xl tracking-tight">{result.yearlyKwh} kWh</p>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-white/30">Geração Esperada</p>
                   </div>
                   <div className="p-8 bg-slate-900/40">
                      <p className="text-emerald-400 font-bold text-2xl tracking-tight">Até 95%</p>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-white/30">Redução de Custos</p>
                   </div>
                </div>

                <a 
                  href={BRAND.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 px-12 py-6 rounded-full font-bold text-xl shadow-2xl transition-all hover:scale-105 active:scale-95 tracking-tight"
                  style={{ backgroundColor: COLORS.secondary, color: COLORS.primary }}
                >
                  Confirmar estes valores
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Simulator;
