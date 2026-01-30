
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
      const monthlyKwh = billVal / priceVal;
      const yearlyKwh = monthlyKwh * 12;
      const yearlySaving = (billVal - 60) * 12 * 0.95;

      setResult({
        yearlySaving: yearlySaving > 0 ? yearlySaving : 0,
        yearlyKwh: Math.round(yearlyKwh)
      });
    }
  };

  const whatsappMessage = result 
    ? `Oi! Usei o simulador no site da Ergos. Minha conta é R$ ${bill}. Minha economia estimada é de R$ ${result.yearlySaving.toLocaleString('pt-BR', { minimumFractionDigits: 2 })} ao ano. Quero um orçamento personalizado!`
    : `Oi! Quero fazer uma simulação personalizada com a Ergos Engenharia Solar.`;

  return (
    <section id="simulador" className="bg-slate-50 py-24 px-6 scroll-mt-20">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-slate-100">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black mb-4 text-slate-900 tracking-tight uppercase">Simulador de Economia</h2>
          <p className="text-slate-500 text-lg">Descubra o potencial do sol para o seu bolso</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <label className="font-bold text-slate-700 uppercase text-sm tracking-widest">Valor da conta de luz (R$)</label>
            <input 
              type="number" 
              value={bill}
              onChange={(e) => setBill(e.target.value)}
              placeholder="Ex: 600" 
              className="w-full p-5 bg-slate-50 border-2 border-slate-100 rounded-2xl outline-none focus:border-blue-400 transition-all font-bold text-xl"
            />
          </div>
          <div className="space-y-3">
            <label className="font-bold text-slate-700 uppercase text-sm tracking-widest">Preço do kWh (R$)</label>
            <input 
              type="number" 
              step="0.01"
              value={kwhPrice}
              onChange={(e) => setKwhPrice(e.target.value)}
              placeholder="Ex: 0.95" 
              className="w-full p-5 bg-slate-50 border-2 border-slate-100 rounded-2xl outline-none focus:border-blue-400 transition-all font-bold text-xl"
            />
          </div>
        </div>

        <button 
          onClick={calculate}
          className="w-full mt-10 text-white py-6 rounded-2xl font-black text-2xl hover:brightness-110 transition-all shadow-xl active:scale-95 uppercase tracking-tighter"
          style={{ backgroundColor: COLORS.blueSolid }}
        >
          Calcular Agora
        </button>

        {result && (
          <div className="mt-12 p-10 rounded-[2rem] text-center animate-in fade-in zoom-in duration-500 shadow-2xl" style={{ backgroundColor: COLORS.primary }}>
            <p className="text-slate-400 font-bold uppercase tracking-widest mb-2">Sua economia anual estimada:</p>
            <h3 className="text-5xl md:text-6xl font-black my-6" style={{ color: COLORS.secondary }}>
              R$ {result.yearlySaving.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </h3>
            <p className="text-slate-300 mb-10 text-lg font-medium">
              Você deixará de pagar <span className="text-white font-bold">{result.yearlyKwh} kWh</span> por ano para a concessionária.
            </p>
            <a 
              href={`${BRAND.whatsappLink}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-12 py-5 rounded-full font-black text-xl shadow-xl hover:scale-105 transition-transform"
              style={{ backgroundColor: COLORS.secondary, color: COLORS.primary }}
            >
              Faça sua simulação agora
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default Simulator;
