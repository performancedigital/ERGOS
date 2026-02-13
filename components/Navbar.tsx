import React, { useState, useEffect } from 'react';
import { COLORS, BRAND, IMAGES } from '../constants';
import { useLeadModal } from '../contexts/LeadContext';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openModal } = useLeadModal();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
        ? 'bg-white/95 backdrop-blur-md shadow-lg'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">

          {/* LOGO + NOME */}
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            {/* Logo circular azul (como no Instagram) */}
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-105 overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.primaryLight} 100%)`
              }}
            >
              <img
                src={IMAGES.logo}
                alt="Logo Ergos"
                className="w-14 h-14 rounded-full object-cover"
              />
            </div>

            <div className="flex flex-col -space-y-1">
              <span
                className="font-black text-2xl tracking-tight uppercase"
                style={{ color: scrolled ? COLORS.primary : COLORS.white }}
              >
                ERGOS
              </span>
              <span
                className="font-bold text-[10px] tracking-[0.15em] uppercase"
                style={{
                  color: scrolled ? COLORS.primaryLight : 'rgba(255,255,255,0.8)'
                }}
              >
                Energia Solar
              </span>
            </div>
          </div>

          {/* MENU DESKTOP */}
          <div className="hidden lg:flex items-center gap-8">
            <a
              href="#home"
              className="font-bold text-sm uppercase tracking-widest transition-colors hover:opacity-80"
              style={{ color: scrolled ? COLORS.primary : COLORS.white }}
            >
              Início
            </a>
            <a
              href="#sobre"
              className="font-bold text-sm uppercase tracking-widest transition-colors hover:opacity-80"
              style={{ color: scrolled ? COLORS.primary : COLORS.white }}
            >
              Sobre
            </a>
            <a
              href="#simulador"
              className="font-bold text-sm uppercase tracking-widest transition-colors hover:opacity-80"
              style={{ color: scrolled ? COLORS.primary : COLORS.white }}
            >
              Simulador
            </a>
            <a
              href={BRAND.instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-sm uppercase tracking-widest transition-colors hover:opacity-80"
              style={{ color: scrolled ? COLORS.primary : COLORS.white }}
            >
              Instagram
            </a>
          </div>

          {/* CTA BUTTON */}
          <div className="flex items-center gap-4">
            <button
              onClick={openModal}
              className="hidden md:flex items-center gap-2 px-6 py-3 rounded-full font-black text-sm uppercase tracking-wider transition-all hover:scale-105 active:scale-95 shadow-lg cursor-pointer"
              style={{
                backgroundColor: COLORS.secondary,
                color: COLORS.primary
              }}
            >
              <span>Solicitar Orçamento</span>
              <span className="text-lg">→</span>
            </button>

            {/* MENU MOBILE HAMBURGER */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5"
              aria-label="Menu"
            >
              <span
                className={`w-6 h-0.5 transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                style={{ backgroundColor: scrolled ? COLORS.primary : COLORS.white }}
              />
              <span
                className={`w-6 h-0.5 transition-all ${mobileMenuOpen ? 'opacity-0' : ''
                  }`}
                style={{ backgroundColor: scrolled ? COLORS.primary : COLORS.white }}
              />
              <span
                className={`w-6 h-0.5 transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                style={{ backgroundColor: scrolled ? COLORS.primary : COLORS.white }}
              />
            </button>
          </div>
        </div>
      </div>

      {/* MENU MOBILE (overlay) */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 top-[72px] z-40"
          style={{ background: `linear-gradient(180deg, ${COLORS.primary} 0%, ${COLORS.primaryDark} 100%)` }}
        >
          <div className="flex flex-col items-center justify-center h-full gap-8 text-white">
            <a
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="font-black text-2xl uppercase tracking-widest hover:text-yellow-300 transition-colors"
            >
              Início
            </a>
            <a
              href="#sobre"
              onClick={() => setMobileMenuOpen(false)}
              className="font-black text-2xl uppercase tracking-widest hover:text-yellow-300 transition-colors"
            >
              Sobre
            </a>
            <a
              href="#simulador"
              onClick={() => setMobileMenuOpen(false)}
              className="font-black text-2xl uppercase tracking-widest hover:text-yellow-300 transition-colors"
            >
              Simulador
            </a>
            <a
              href={BRAND.instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="font-black text-2xl uppercase tracking-widest hover:text-yellow-300 transition-colors"
            >
              Instagram
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openModal();
              }}
              className="mt-8 px-10 py-4 rounded-full font-black text-xl uppercase tracking-wider transition-all hover:scale-105 active:scale-95 shadow-2xl cursor-pointer"
              style={{
                backgroundColor: COLORS.secondary,
                color: COLORS.primary
              }}
            >
              Solicitar Orçamento →
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
