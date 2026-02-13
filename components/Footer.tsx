import React from 'react';
import { BRAND, COLORS, GRADIENTS, IMAGES } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer
      className="text-white pt-32 pb-16 px-6 relative overflow-hidden"
      style={{
        background: GRADIENTS.soft
      }}
    >
      {/* GRID PATTERN */}
      <div className="absolute inset-0 solar-grid opacity-5"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-16 relative z-10">

        {/* COLUNA 1 - LOGO + DESCRIÇÃO */}
        <div className="lg:col-span-2 space-y-8">
          <div className="flex items-center gap-4">
            {/* Logo */}
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center shadow-2xl overflow-hidden border-2 border-white/10"
            >
              <img
                src={IMAGES.logo}
                alt="Logo Ergos"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col -space-y-1">
              <span className="font-black text-4xl tracking-tighter uppercase text-white">
                ERGOS
              </span>
              <span
                className="font-bold text-xs tracking-[0.2em] uppercase"
                style={{ color: COLORS.secondary }}
              >
                Energia Solar
              </span>
            </div>
          </div>

          <p className="text-white/80 text-lg max-w-md leading-relaxed font-medium">
            {BRAND.tagline} Engenharia de alta precisão para quem não aceita menos que o máximo desempenho solar.
          </p>

          {/* REDES SOCIAIS */}
          <div className="flex gap-4">
            <a
              href={BRAND.instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-2xl flex items-center justify-center hover:scale-110 transition-all font-black text-sm uppercase bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:bg-yellow-400 hover:text-blue-900"
            >
              IG
            </a>
            <a
              href="#"
              className="w-14 h-14 rounded-2xl flex items-center justify-center hover:scale-110 transition-all font-black text-sm uppercase bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:bg-yellow-400 hover:text-blue-900"
            >
              FB
            </a>
            <a
              href="#"
              className="w-14 h-14 rounded-2xl flex items-center justify-center hover:scale-110 transition-all font-black text-sm uppercase bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:bg-yellow-400 hover:text-blue-900"
            >
              IN
            </a>
          </div>
        </div>

        {/* COLUNA 2 - CONTATO */}
        <div className="space-y-8">
          <h4
            className="font-black text-sm uppercase tracking-widest pb-2 border-b-2 w-fit"
            style={{
              color: COLORS.secondary,
              borderColor: `${COLORS.secondary}40`
            }}
          >
            📍 Onde Estamos
          </h4>
          <ul className="space-y-6 text-white/90 font-bold text-base">
            <li className="flex flex-col gap-1">
              <span className="text-xs uppercase tracking-widest opacity-50">Localização</span>
              {BRAND.location}
            </li>
            <li className="flex flex-col gap-1">
              <span className="text-xs uppercase tracking-widest opacity-50">WhatsApp</span>
              <a
                href={BRAND.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-300 transition-colors"
              >
                {BRAND.phone}
              </a>
            </li>
            <li className="flex flex-col gap-1">
              <span className="text-xs uppercase tracking-widest opacity-50">Email</span>
              <a
                href={`mailto:${BRAND.email}`}
                className="text-sm break-all hover:text-yellow-300 transition-colors"
              >
                {BRAND.email}
              </a>
            </li>
          </ul>
        </div>

        {/* COLUNA 3 - MENU */}
        <div className="space-y-8">
          <h4
            className="font-black text-sm uppercase tracking-widest pb-2 border-b-2 w-fit"
            style={{
              color: COLORS.secondary,
              borderColor: `${COLORS.secondary}40`
            }}
          >
            🔗 Menu Rápido
          </h4>
          <ul className="space-y-6 text-white/90 font-bold text-base">
            <li>
              <a href="#home" className="hover:text-yellow-300 transition-all block">
                Início
              </a>
            </li>
            <li>
              <a href="#sobre" className="hover:text-yellow-300 transition-all block">
                Sobre Nós
              </a>
            </li>
            <li>
              <a href="#simulador" className="hover:text-yellow-300 transition-all block">
                Simulador
              </a>
            </li>
            <li>
              <a
                href={BRAND.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-300 transition-all block"
              >
                Orçamento WhatsApp
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* RODAPÉ INFERIOR */}
      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-white/50 text-xs font-black uppercase tracking-widest">
        <p>© {BRAND.year} {BRAND.name}</p>
        <p>CNPJ: {BRAND.cnpj}</p>
        <p className="flex items-center gap-2">
          <span
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ backgroundColor: COLORS.secondary }}
          />
          {BRAND.location}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
