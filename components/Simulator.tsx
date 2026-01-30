
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
      // Subtracting average minimum tax (~R$ 60) and applying 95% efficiency
      const yearlySaving = (billVal - 60) * 12 * 0.95;

      setResult({
        yearlySaving: yearlySaving > 0 ? yearlySaving : 0,
        yearlyKwh: Math.round(yearlyKwh)
      });
    }
  };

  const whatsappMessage = result 
    ? `Oi! Usei o simulador no site. Minha conta é R$ ${bill}, preço do kWh R$ ${kwhPrice}. Minha economia estimada é de R$ ${result.yearlySaving.toLocaleString('pt-BR', { minimumFractionDigits: 2 })} ao ano. Quero um orçamento personalizado!`
    : `Oi! Quero fazer uma simulação personalizada para energia solar.`;

  return (
    <section id="simulador" className="bg-slate-50 py-20 px-6 scroll-mt-20">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-slate-900">Simulador de Investimento</h2>
          <p className="text-gray-500">Veja quanto você pode economizar instalando painéis solares</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="font-semibold text-slate-700">Valor da conta de luz (R$)</label>
            <input 
              type="number" 
              value={bill}
              onChange={(e) => setBill(e.target.value)}
              placeholder="Ex: 600" 
              className="w-full p-4 bg-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-[#004AAD] transition-all"
            />
          </div>
          <div className="space-y-2">
            <label className="font-semibold text-slate-700">Preço do kWh (R$)</label>
            <input 
              type="number" 
              step="0.01"
              value={kwhPrice}
              onChange={(e) => setKwhPrice(e.target.value)}
              placeholder="Ex: 0.95" 
              className="w-full p-4 bg-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-[#004AAD] transition-all"
            />
          </div>
        </div>

        <button 
          onClick={calculate}
          className="w-full mt-8 text-white py-5 rounded-xl font-bold text-xl hover:opacity-90 transition-all shadow-lg active:scale-95"
          style={{ backgroundColor: COLORS.primary }}
        >
          Calcular Economia Real
        </button>

        {result && (
          <div className="mt-10 p-8 bg-emerald-50 rounded-2xl border border-emerald-100 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
            <p className="text-emerald-800 font-medium text-lg">Sua economia estimada em 1 ano é de:</p>
            <h3 className="text-5xl font-black text-emerald-600 my-4">
              R$ {result.yearlySaving.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </h3>
            <p className="text-emerald-700 mb-8">
              Você deixará de consumir aproximadamente <span className="font-bold">{result.yearlyKwh} kWh</span> por ano da rede elétrica.
            </p>
            <a 
              href={`${BRAND.whatsappLink}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white px-10 py-5 rounded-full font-bold shadow-xl hover:scale-105 transition-transform"
              style={{ backgroundColor: COLORS.whatsapp }}
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.747-2.874-2.512-2.96-2.626-.087-.115-.708-.941-.708-1.793 0-.852.448-1.271.607-1.446.159-.175.347-.22.463-.22.115 0 .231.001.332.005.106.004.25-.039.391.295.144.343.491 1.2.548 1.315.058.115.097.25.021.405-.077.155-.115.251-.231.385-.115.135-.243.301-.347.404-.115.115-.231.24-.097.472.135.231.6.991 1.285 1.604.881.79 1.621 1.035 1.852 1.15.231.115.366.096.501-.058.135-.154.577-.674.731-.905.154-.231.308-.192.519-.115.212.077 1.346.634 1.577.749.231.115.385.173.442.269.058.096.058.558-.086.963z"/></svg>
              Enviar para Especialista
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default Simulator;
