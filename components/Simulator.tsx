import React, { useState } from 'react';
import { COLORS, GRADIENTS, BRAND } from '../constants';

const Simulator: React.FC = () => {
  const [bill, setBill] = useState<string>('');
  const [kwhPrice, setKwhPrice] = useState<string>('0.95');
  const [result, setResult] = useState<{
    yearlySaving: number;
    yearlyKwh: number;
    monthlyKwhGenerated: number;
    systemSize: number;
  } | null>(null);

  const calculate = () => {
    const billVal = parseFloat(bill);
    const priceVal = parseFloat(kwhPrice);

    if (billVal > 0 && priceVal > 0) {
      // Cálculo melhorado
      const monthlyKwhConsumption = billVal / priceVal;
      const monthlyKwhGenerated = monthlyKwhConsumption * 0.95; // 95% de offset
      const minimumBill = 60; // Taxa mínima
      const monthlySaving = billVal - minimumBill;
      const yearlySaving = monthlySaving * 12;
      const yearlyKwh = Math.round(monthlyKwhGenerated * 12);
      const systemSize = (monthlyKwhGenerated * 12) / 1200; // kWp aproximado

      setResult({
        yearlySaving: yearlySaving > 0 ? yearlySaving : 0,
        yearlyKwh,
        monthlyKwhGenerated: Math.round(monthlyKwhGenerated),
        systemSize: parseFloat(systemSize.toFixed(2))
      });
    }
  };

  return (
    <section 
      id="simulador" 
      className="py-32 px-6 relative overflow-hidden"
      style={{ background: `linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)` }}
    >
      <div className="max-w-6xl mx-auto">
        
        {/* HEADER */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-3">
            <div 
              className="w-14 h-14 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: COLORS.secondary }}
            >
              <span className="text-3xl">🧮</span>
            </div>
            <span 
              className="text-xs font-black uppercase tracking-widest"
              style={{ color: COLORS.primary }}
            >
              Simulador de Economia
            </span>
          </div>
          
          <h2 
            className="text-5xl md:text-6xl font-black tracking-tight leading-tight"
            style={{ color: COLORS.primary }}
          >
            Quanto você pode{' '}
            <span 
              className="inline-block px-4 py-1 rounded-xl text-white"
              style={{ backgroundColor: COLORS.primary }}
            >
              economizar?
            </span>
          </h2>
          
          <p className="text-gray-600 text-xl font-medium max-w-2xl mx-auto">
            Descubra em segundos o potencial de economia anual com energia solar.
          </p>
        </div>
        
        {/* CARD SIMULADOR */}
        <div 
          className="rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row border-4"
          style={{ borderColor: COLORS.primary }}
        >
          
          {/* LADO ESQUERDO - INPUTS */}
          <div className="lg:w-1/2 p-12 lg:p-16 bg-white">
            <div className="space-y-8">
              
              <div className="space-y-4">
                <label className="text-sm font-black uppercase tracking-widest text-gray-600">
                  💡 Valor da sua conta mensal (R$)
                </label>
                <input 
                  type="number" 
                  value={bill}
                  onChange={(e) => setBill(e.target.value)}
                  placeholder="0,00" 
                  className="w-full p-6 bg-gray-50 border-2 border-gray-200 rounded-2xl outline-none focus:border-blue-500 transition-all font-black text-3xl text-gray-900"
                  style={{ 
                    borderColor: bill ? COLORS.primary : undefined 
                  }}
                />
              </div>
              
              <div className="space-y-4">
                <label className="text-sm font-black uppercase tracking-widest text-gray-600">
                  ⚡ Tarifa local (R$ por kWh)
                </label>
                <input 
                  type="number" 
                  step="0.01"
                  value={kwhPrice}
                  onChange={(e) => setKwhPrice(e.target.value)}
                  placeholder="0,95" 
                  className="w-full p-6 bg-gray-50 border-2 border-gray-200 rounded-2xl outline-none focus:border-blue-500 transition-all font-bold text-2xl text-gray-900"
                />
              </div>
              
              <button 
                onClick={calculate}
                disabled={!bill || parseFloat(bill) <= 0}
                className="w-full py-6 rounded-2xl font-black text-xl uppercase tracking-wide transition-all shadow-xl active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ 
                  background: GRADIENTS.primary, 
                  color: COLORS.white 
                }}
              >
                Calcular Economia →
              </button>
              
            </div>
          </div>
          
          {/* LADO DIREITO - RESULTADO */}
          <div 
            className="lg:w-1/2 p-12 lg:p-16 flex flex-col justify-center items-center text-center relative overflow-hidden"
            style={{ 
              background: GRADIENTS.primary 
            }}
          >
            <div className="absolute inset-0 solar-grid opacity-5"></div>
            
            {!result ? (
              <div className="relative z-10 space-y-6">
                <div 
                  className="w-24 h-24 rounded-full border-4 border-dashed border-white/20 animate-spin mx-auto flex items-center justify-center"
                >
                  <div className="w-12 h-12 rounded-full bg-white/10"></div>
                </div>
                <p className="text-white/40 text-sm font-black uppercase tracking-widest">
                  Aguardando dados de consumo
                </p>
              </div>
            ) : (
              <div className="relative z-10 space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-500 w-full">
                
                {/* ECONOMIA ANUAL (destaque) */}
                <div className="space-y-4">
                  <p className="text-white/60 font-black uppercase text-sm tracking-widest">
                    💰 Economia Potencial por Ano
                  </p>
                  <h3 
                    className="text-6xl md:text-7xl font-black tracking-tighter"
                    style={{ color: COLORS.secondary }}
                  >
                    R$ {result.yearlySaving.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </h3>
                </div>
                
                {/* MÉTRICAS ADICIONAIS */}
                <div className="grid grid-cols-2 gap-4">
                  <div 
                    className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border-2 border-white/20"
                  >
                    <p className="text-white font-black text-2xl tracking-tight">
                      {result.yearlyKwh.toLocaleString('pt-BR')} kWh
                    </p>
                    <p className="text-white/50 text-xs font-black uppercase tracking-widest mt-2">
                      Geração Anual
                    </p>
                  </div>
                  
                  <div 
                    className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border-2 border-white/20"
                  >
                    <p 
                      className="font-black text-2xl tracking-tight"
                      style={{ color: COLORS.secondary }}
                    >
                      {result.systemSize} kWp
                    </p>
                    <p className="text-white/50 text-xs font-black uppercase tracking-widest mt-2">
                      Tamanho Sistema
                    </p>
                  </div>
                </div>
                
                {/* CTA */}
                <a 
                  href={BRAND.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-black text-xl uppercase tracking-wide transition-all hover:scale-105 active:scale-95 shadow-2xl"
                  style={{ 
                    backgroundColor: COLORS.secondary, 
                    color: COLORS.primary 
                  }}
                >
                  <span>Confirmar valores</span>
                  <span className="text-2xl">→</span>
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
