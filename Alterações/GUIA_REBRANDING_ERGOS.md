# 🎨 GUIA COMPLETO DE REBRANDING - ERGOS ENGENHARIA SOLAR

**Documento:** Alterações Completas de Layout e Identidade Visual  
**Base:** Instagram @ergos.engenharia (análise real)  
**Data:** 13/02/2026  
**Status:** Pronto para implementação

---

## 🔴 PROBLEMA CRÍTICO IDENTIFICADO

### O site atual NÃO reflete a identidade visual do Instagram!

**Site Atual:**
```
❌ Background: #0F2027 (azul escuro quase PRETO)
✅ Amarelo: #FFF200 (correto)
⚠️  Azul claro/royal: SUBUTILIZADOS
```

**Instagram Real (Identidade Oficial):**
```
✅ Background: #0c4acd / #298bde (AZUL ROYAL VIBRANTE)
✅ Amarelo: #FFF200 (destaque forte)
✅ Branco: Textos principais
✅ Formas orgânicas: Curvas amarelas
```

---

## 📊 NOVA PALETA DE CORES (OFICIAL)

```css
/* ============================================
   PALETA CORRIGIDA - BASEADA NO INSTAGRAM
   ============================================ */

export const COLORS = {
  // CORES PRINCIPAIS (do Instagram)
  primary: '#0c4acd',      // Azul Royal VIBRANTE (era #0F2027)
  primaryLight: '#298bde',  // Azul Claro (gradientes)
  primaryDark: '#0a3ba8',   // Azul Escuro (hovers)
  
  // DESTAQUES
  secondary: '#FFF200',     // Amarelo (mantém)
  secondaryDark: '#E6DA00', // Amarelo escuro (hovers)
  
  // NEUTROS
  white: '#FFFFFF',
  black: '#0F2027',         // Usar APENAS em textos pequenos
  gray: {
    50: '#F8FAFC',
    100: '#F1F5F9',
    200: '#E2E8F0',
    300: '#CBD5E1',
    400: '#94A3B8',
    500: '#64748B',
    600: '#475569',
    700: '#334155',
    800: '#1E293B',
    900: '#0F172A'
  },
  
  // FUNCIONAIS
  whatsapp: '#25D366',
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
  info: '#3B82F6'
};

/* ============================================
   GRADIENTES OFICIAIS (do Instagram)
   ============================================ */

export const GRADIENTS = {
  // Gradiente principal (fundo Hero, CTA)
  primary: 'linear-gradient(135deg, #0c4acd 0%, #298bde 100%)',
  
  // Gradiente com amarelo (seções destacadas)
  energetic: 'linear-gradient(135deg, #0c4acd 0%, #FFF200 100%)',
  
  // Gradiente sutil (cards, backgrounds)
  soft: 'linear-gradient(180deg, #0c4acd 0%, #0a3ba8 100%)',
  
  // Overlay escuro (sobre imagens)
  overlay: 'linear-gradient(180deg, rgba(12, 74, 205, 0.9) 0%, rgba(12, 74, 205, 0.7) 100%)'
};
```

---

## 🎯 ELEMENTOS DE DESIGN DO INSTAGRAM

### 1. **Formas Geométricas Orgânicas**
O Instagram usa **formas curvas amarelas** como elemento de destaque:

```tsx
// Componente: OrganicShape.tsx
const OrganicShape: React.FC = () => {
  return (
    <div className="absolute -right-20 top-0 w-[600px] h-[600px] pointer-events-none">
      <svg viewBox="0 0 600 600" fill="none">
        <path 
          d="M400,50 Q500,150 450,300 T300,550 Q100,500 50,300 T400,50 Z" 
          fill="#FFF200" 
          opacity="0.15"
        />
      </svg>
    </div>
  );
};
```

### 2. **Texto em Blocos Amarelos** (destaque)
Posts usam texto azul em **fundo amarelo**:

```tsx
// Exemplo de uso
<div className="inline-block bg-[#FFF200] px-6 py-3 text-[#0c4acd] font-black text-3xl">
  É possível usar energia solar em apartamento?
</div>
```

### 3. **Ícones em Badges Amarelas**
Ícones em fundos amarelos arredondados:

```tsx
<div className="w-16 h-16 bg-[#FFF200] rounded-2xl flex items-center justify-center">
  <Icon className="w-8 h-8 text-[#0c4acd]" />
</div>
```

### 4. **Logo Pattern** (grade geométrica amarela)
O logo é um padrão entrelaçado - usar como watermark/background:

```css
.logo-pattern {
  background-image: url('/logo-pattern.svg');
  background-size: 200px 200px;
  opacity: 0.03;
}
```

---

## 📝 ALTERAÇÕES ARQUIVO POR ARQUIVO

### 1️⃣ **constants.tsx** (ATUALIZAÇÃO CRÍTICA)

```typescript
// ========================================
// ARQUIVO: constants.tsx
// AÇÃO: SUBSTITUIR COMPLETAMENTE
// ========================================

export const COLORS = {
  // CORES PRINCIPAIS (CORRIGIDAS!)
  primary: '#0c4acd',        // ← ERA #0F2027 (PRETO)
  primaryLight: '#298bde',
  primaryDark: '#0a3ba8',
  
  // DESTAQUES
  secondary: '#FFF200',
  secondaryDark: '#E6DA00',
  
  // NEUTROS
  white: '#FFFFFF',
  black: '#0F2027',
  
  // FUNCIONAIS
  whatsapp: '#25D366',
  success: '#10B981',
};

export const GRADIENTS = {
  primary: 'linear-gradient(135deg, #0c4acd 0%, #298bde 100%)',
  energetic: 'linear-gradient(135deg, #0c4acd 0%, #FFF200 100%)',
  soft: 'linear-gradient(180deg, #0c4acd 0%, #0a3ba8 100%)',
  overlay: 'linear-gradient(180deg, rgba(12, 74, 205, 0.9) 0%, rgba(12, 74, 205, 0.7) 100%)',
};

export const BRAND = {
  name: 'Ergos Engenharia Solar',
  tagline: 'Energia positiva, resultados positivos.', // ← NOVA (do Instagram)
  phone: '31 99688-3604',
  whatsappLink: 'https://wa.me/5531996883604',
  instagram: 'ergos.engenharia',
  instagramLink: 'https://www.instagram.com/ergos.engenharia',
  email: 'contato@ergosengenhariasolar.com',
  website: 'ergosengenhariasolar.com.br',
  location: 'Coronel Fabriciano - MG',
  cnpj: '48.586.268/0001-83',
  year: new Date().getFullYear().toString(), // ← DINÂMICO
  stats: {
    years: '5+',
    clients: '50+',
    installations: '50+',
    satisfaction: '95%'
  }
};

export const IMAGES = {
  logo: '/logo.png',                      // Logo circular azul
  logoPattern: '/logo-pattern.svg',       // Pattern geométrico amarelo
  hero: '/images/hero-solar-panels.jpg',  // Trocar Unsplash por foto real
  team: '/images/team-ergos.jpg',
  client1: '/images/client-1.jpg',
  client2: '/images/client-2.jpg',
  client3: '/images/client-3.jpg',
  // Adicionar imagens do Instagram
  post1: '/images/instagram-post-1.jpg',
  post2: '/images/instagram-post-2.jpg',
  post3: '/images/instagram-post-3.jpg',
};
```

---

### 2️⃣ **index.html** (Atualizar Cores Globais)

```html
<!-- ========================================
     ARQUIVO: index.html
     AÇÃO: TROCAR STYLE SECTION (linha 9-45)
     ======================================== -->

<style>
    :root {
        /* CORES ATUALIZADAS */
        --primary: #0c4acd;        /* ← ERA #0F2027 */
        --primary-light: #298bde;
        --primary-dark: #0a3ba8;
        --secondary: #FFF200;
        --secondary-dark: #E6DA00;
        --white: #FFFFFF;
        --black: #0F2027;
    }
    
    html { 
        scroll-behavior: smooth; 
    }
    
    body { 
        font-family: 'Inter', sans-serif; 
        margin: 0;
        padding: 0;
        color: #1e293b;
        line-height: 1.6;
        -webkit-font-smoothing: antialiased;
        overflow-x: hidden;
        background: white;
    }
    
    /* GRID SOLAR (background pattern) */
    .solar-grid {
        background-image: 
            linear-gradient(rgba(255,242,0,0.03) 1px, transparent 1px), 
            linear-gradient(90deg, rgba(255,242,0,0.03) 1px, transparent 1px);
        background-size: 50px 50px;
    }
    
    /* FORMAS ORGÂNICAS (do Instagram) */
    .organic-shape {
        position: absolute;
        border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
        filter: blur(80px);
        opacity: 0.15;
    }
    
    /* GLASS EFFECT (atualizado com azul) */
    .glass-blue {
        background: rgba(12, 74, 205, 0.1);
        backdrop-filter: blur(12px);
        border: 1px solid rgba(12, 74, 205, 0.2);
    }
    
    /* SECTION CURVE */
    .section-curve {
        clip-path: ellipse(150% 100% at 50% 100%);
    }
    
    /* SCROLLBAR */
    ::-webkit-scrollbar {
        width: 8px;
    }
    ::-webkit-scrollbar-track {
        background: #f1f5f9;
    }
    ::-webkit-scrollbar-thumb {
        background: var(--primary);
        border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: var(--primary-dark);
    }
    
    /* SELECTION */
    ::selection {
        background-color: var(--secondary);
        color: var(--primary);
    }
    
    /* ANIMAÇÕES */
    @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
    }
    
    .animate-float {
        animation: float 6s ease-in-out infinite;
    }
</style>
```

---

### 3️⃣ **Navbar.tsx** (Azul Vibrante)

```tsx
// ========================================
// ARQUIVO: components/Navbar.tsx
// AÇÃO: TROCAR CORES E LAYOUT
// ========================================

import React, { useState, useEffect } from 'react';
import { COLORS, BRAND, IMAGES } from '../constants';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
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
                src={IMAGES.logoPattern} 
                alt="Logo Ergos" 
                className="w-10 h-10 object-contain"
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
            <a 
              href={BRAND.whatsappLink}
              target="_blank"
              rel="noopener noreferrer" 
              className="hidden md:flex items-center gap-2 px-6 py-3 rounded-full font-black text-sm uppercase tracking-wider transition-all hover:scale-105 active:scale-95 shadow-lg"
              style={{ 
                backgroundColor: COLORS.secondary, 
                color: COLORS.primary 
              }}
            >
              <span>Solicitar Orçamento</span>
              <span className="text-lg">→</span>
            </a>
            
            {/* MENU MOBILE HAMBURGER */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5"
              aria-label="Menu"
            >
              <span 
                className={`w-6 h-0.5 transition-all ${
                  mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
                style={{ backgroundColor: scrolled ? COLORS.primary : COLORS.white }}
              />
              <span 
                className={`w-6 h-0.5 transition-all ${
                  mobileMenuOpen ? 'opacity-0' : ''
                }`}
                style={{ backgroundColor: scrolled ? COLORS.primary : COLORS.white }}
              />
              <span 
                className={`w-6 h-0.5 transition-all ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
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
            <a 
              href={BRAND.whatsappLink}
              target="_blank"
              rel="noopener noreferrer" 
              className="mt-8 px-10 py-4 rounded-full font-black text-xl uppercase tracking-wider transition-all hover:scale-105 active:scale-95 shadow-2xl"
              style={{ 
                backgroundColor: COLORS.secondary, 
                color: COLORS.primary 
              }}
            >
              Solicitar Orçamento →
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
```

---

### 4️⃣ **Hero.tsx** (Azul Vibrante + Formas Orgânicas)

```tsx
// ========================================
// ARQUIVO: components/Hero.tsx
// AÇÃO: TROCAR BACKGROUND E ADICIONAR ELEMENTOS
// ========================================

import React from 'react';
import { COLORS, GRADIENTS, IMAGES, BRAND } from '../constants';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative pt-32 md:pt-44 pb-32 md:pb-40 px-6 overflow-hidden"
      style={{ 
        background: GRADIENTS.primary 
      }}
    >
      {/* GRID PATTERN (sutil) */}
      <div className="absolute inset-0 solar-grid opacity-5"></div>
      
      {/* FORMA ORGÂNICA AMARELA (do Instagram) */}
      <div 
        className="absolute -right-40 -top-40 w-[800px] h-[800px] rounded-full organic-shape"
        style={{ backgroundColor: COLORS.secondary }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* COLUNA ESQUERDA - TEXTO */}
          <div className="lg:w-3/5 space-y-10">
            
            {/* BADGE "Energia positiva, resultados positivos" */}
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border-2 border-yellow-400/30 bg-white/10 backdrop-blur-sm">
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: COLORS.secondary }}
              >
                <span className="text-2xl">👍</span>
              </div>
              <span className="text-white font-black text-sm uppercase tracking-wider">
                {BRAND.tagline}
              </span>
            </div>
            
            {/* HEADLINE PRINCIPAL */}
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tight">
              Reduza sua conta de luz em até{' '}
              <span 
                className="inline-block px-4 py-1 rounded-xl"
                style={{ backgroundColor: COLORS.secondary, color: COLORS.primary }}
              >
                95%
              </span>
            </h1>
            
            {/* SUBHEADLINE */}
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl font-medium leading-relaxed">
              Instalação em até 30 dias. Financiamento em até 115x. 
              <span className="font-black"> 25 anos de garantia.</span>
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* CTA PRIMÁRIO */}
              <a 
                href={BRAND.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl font-black text-xl uppercase tracking-wide transition-all hover:scale-105 active:scale-95 shadow-2xl"
                style={{ 
                  backgroundColor: COLORS.secondary, 
                  color: COLORS.primary 
                }}
              >
                <span>Solicitar orçamento gratuito</span>
                <span className="text-2xl">→</span>
              </a>
              
              {/* CTA SECUNDÁRIO */}
              <a 
                href="#simulador"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl font-black text-xl uppercase tracking-wide transition-all hover:scale-105 active:scale-95 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white"
              >
                <span>Simular economia</span>
              </a>
            </div>
            
            {/* SOCIAL PROOF */}
            <div className="flex items-center gap-6 pt-6">
              <div className="flex -space-x-3">
                {[IMAGES.client1, IMAGES.client2, IMAGES.client3].map((src, i) => (
                  <img 
                    key={i} 
                    className="w-12 h-12 rounded-full border-3 border-white object-cover shadow-lg" 
                    src={src} 
                    alt={`Cliente ${i + 1}`} 
                  />
                ))}
              </div>
              <div className="flex flex-col">
                <span className="text-white font-black text-base">+50 Clientes Satisfeitos</span>
                <div className="flex gap-0.5 text-yellow-400 text-lg">
                  {'★★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}
                </div>
              </div>
            </div>
            
          </div>
          
          {/* COLUNA DIREITA - IMAGEM */}
          <div className="lg:w-2/5 relative">
            {/* Glow effect */}
            <div 
              className="absolute -inset-10 rounded-full blur-3xl opacity-30"
              style={{ backgroundColor: COLORS.secondary }}
            />
            
            {/* Imagem */}
            <div className="relative">
              <img 
                src={IMAGES.hero} 
                alt="Painéis solares Ergos" 
                className="relative rounded-3xl shadow-2xl object-cover aspect-[4/5] w-full transform hover:scale-[1.02] transition-transform duration-500 border-4 border-white/20" 
              />
              
              {/* BADGE FLUTUANTE */}
              <div 
                className="absolute -bottom-6 -left-6 px-8 py-6 rounded-2xl shadow-2xl backdrop-blur-sm"
                style={{ 
                  background: `linear-gradient(135deg, ${COLORS.secondary} 0%, ${COLORS.secondaryDark} 100%)` 
                }}
              >
                <div className="flex flex-col">
                  <span 
                    className="text-sm font-bold uppercase tracking-widest"
                    style={{ color: COLORS.primary }}
                  >
                    Economia Real
                  </span>
                  <span 
                    className="text-4xl font-black"
                    style={{ color: COLORS.primary }}
                  >
                    Até R$ 50k/ano
                  </span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
```

---

### 5️⃣ **About.tsx** (Layout Instagram)

```tsx
// ========================================
// ARQUIVO: components/About.tsx
// AÇÃO: TROCAR CORES E ADICIONAR ELEMENTOS VISUAIS
// ========================================

import React from 'react';
import { COLORS, GRADIENTS, IMAGES, BRAND } from '../constants';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-32 px-6 bg-white relative overflow-hidden">
      
      {/* FORMA ORGÂNICA (background) */}
      <div 
        className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl opacity-5"
        style={{ backgroundColor: COLORS.primary }}
      />
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          
          {/* COLUNA ESQUERDA - IMAGEM */}
          <div className="lg:w-1/2 relative">
            <div className="relative group">
              {/* Border animado */}
              <div 
                className="absolute -inset-4 rounded-[3rem] -z-10 group-hover:scale-105 transition-transform duration-700 opacity-30"
                style={{ background: GRADIENTS.primary }}
              />
              
              <img 
                src={IMAGES.team} 
                className="relative rounded-[2.5rem] shadow-2xl w-full aspect-square object-cover" 
                alt="Equipe Ergos Engenharia Solar" 
              />
              
              {/* CARD FLUTUANTE COM BADGE AMARELO */}
              <div 
                className="absolute -bottom-8 -right-8 p-8 rounded-3xl shadow-2xl backdrop-blur-md"
                style={{ 
                  background: `linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.primaryDark} 100%)` 
                }}
              >
                <div className="space-y-3">
                  {/* Badge amarelo */}
                  <div 
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl"
                    style={{ backgroundColor: COLORS.secondary }}
                  >
                    <span className="text-2xl">⚡</span>
                    <span 
                      className="text-xs font-black uppercase tracking-widest"
                      style={{ color: COLORS.primary }}
                    >
                      Experiência
                    </span>
                  </div>
                  
                  <p className="text-3xl font-black text-white tracking-tight leading-tight">
                    Referência em <br/>Minas Gerais
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* COLUNA DIREITA - TEXTO */}
          <div className="lg:w-1/2 space-y-10">
            
            {/* TAG "Energia positiva, resultados positivos" */}
            <div className="inline-flex items-center gap-3">
              <div 
                className="w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: COLORS.secondary }}
              >
                <span className="text-3xl">👍</span>
              </div>
              <span 
                className="text-sm font-black uppercase tracking-widest"
                style={{ color: COLORS.primary }}
              >
                Nossa Identidade
              </span>
            </div>
            
            {/* HEADLINE */}
            <h2 
              className="text-5xl md:text-6xl font-black tracking-tight leading-[1.1]"
              style={{ color: COLORS.primary }}
            >
              Onde a engenharia{' '}
              <span 
                className="inline-block px-4 py-1 rounded-xl text-white"
                style={{ backgroundColor: COLORS.primary }}
              >
                encontra o sol.
              </span>
            </h2>
            
            {/* TEXTO */}
            <p className="text-xl text-gray-700 leading-relaxed font-medium">
              Na <strong style={{ color: COLORS.primary }}>Ergos</strong>, cada projeto é tratado como investimento estratégico. 
              Utilizamos simulações termográficas e análises de sombreamento 3D para garantir que sua usina produza{' '}
              <strong 
                className="underline decoration-4"
                style={{ 
                  color: COLORS.primary,
                  textDecorationColor: COLORS.secondary 
                }}
              >
                o máximo por m²
              </strong>.
            </p>
            
            {/* STATS COM BADGES AMARELAS */}
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div className="space-y-4">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: COLORS.secondary }}
                >
                  <span className="text-3xl">📅</span>
                </div>
                <div>
                  <p 
                    className="text-5xl font-black tracking-tighter"
                    style={{ color: COLORS.primary }}
                  >
                    {BRAND.stats.years}
                  </p>
                  <p className="text-gray-500 font-bold uppercase text-xs tracking-widest">
                    Anos de Mercado
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: COLORS.secondary }}
                >
                  <span className="text-3xl">⭐</span>
                </div>
                <div>
                  <p 
                    className="text-5xl font-black tracking-tighter"
                    style={{ color: COLORS.primary }}
                  >
                    {BRAND.stats.clients}
                  </p>
                  <p className="text-gray-500 font-bold uppercase text-xs tracking-widest">
                    Clientes Satisfeitos
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
```

---

### 6️⃣ **Features.tsx** (Cards com Badges Amarelas)

```tsx
// ========================================
// ARQUIVO: components/Features.tsx
// AÇÃO: REDESIGN COM BADGES AMARELAS (estilo Instagram)
// ========================================

import React from 'react';
import { COLORS } from '../constants';

const FEATURES_DATA = [
  { 
    title: 'Instalação em até 30 dias', 
    desc: 'Processo ágil com protocolos de segurança certificados.', 
    emoji: '⚡',
    color: COLORS.secondary 
  },
  { 
    title: 'Financiamento em até 115x', 
    desc: 'Parcelas que cabem no seu bolso. Economia imediata.', 
    emoji: '💰',
    color: COLORS.secondary 
  },
  { 
    title: '15 anos de garantia do inversor', 
    desc: 'Equipamentos Tier 1 com certificação internacional.', 
    emoji: '🛡️',
    color: COLORS.secondary 
  },
  { 
    title: '25 anos de garantia das placas', 
    desc: 'Tranquilidade e retorno garantido por décadas.', 
    emoji: '📊',
    color: COLORS.secondary 
  },
  { 
    title: 'Monitoramento 24h', 
    desc: 'App com dados em tempo real da sua geração de energia.', 
    emoji: '📱',
    color: COLORS.secondary 
  },
  { 
    title: 'Suporte técnico vitalício', 
    desc: 'Acompanhamento contínuo para máxima performance.', 
    emoji: '🤝',
    color: COLORS.secondary 
  }
];

const Features: React.FC = () => {
  return (
    <section 
      className="py-32 px-6 relative overflow-hidden"
      style={{ background: `linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)` }}
    >
      {/* PATTERN DE FUNDO */}
      <div className="absolute inset-0 solar-grid opacity-[0.02]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-3">
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: COLORS.secondary }}
              >
                <span className="text-2xl">✨</span>
              </div>
              <span 
                className="text-xs font-black uppercase tracking-widest"
                style={{ color: COLORS.primary }}
              >
                Diferenciais
              </span>
            </div>
            
            {/* Headline */}
            <h2 
              className="text-5xl md:text-6xl font-black tracking-tight leading-tight"
              style={{ color: COLORS.primary }}
            >
              Por que escolher{' '}
              <span 
                className="inline-block px-4 py-1 rounded-xl text-white"
                style={{ backgroundColor: COLORS.primary }}
              >
                a Ergos?
              </span>
            </h2>
          </div>
          
          <p className="text-gray-600 max-w-md font-medium text-base leading-relaxed">
            Tecnologia de ponta, atendimento humanizado e foco total na sua rentabilidade.
          </p>
        </div>
        
        {/* GRID DE FEATURES */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES_DATA.map((feat, idx) => (
            <div 
              key={idx} 
              className="group bg-white p-10 rounded-3xl shadow-sm border-2 border-gray-100 hover:shadow-2xl hover:border-blue-100 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Glow effect no hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                style={{ background: GRADIENTS.primary }}
              />
              
              {/* Badge amarela com emoji */}
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-4xl mb-8 group-hover:scale-110 transition-transform shadow-lg"
                style={{ backgroundColor: feat.color }}
              >
                {feat.emoji}
              </div>
              
              {/* Conteúdo */}
              <h3 
                className="text-xl font-black mb-4 tracking-tight leading-tight"
                style={{ color: COLORS.primary }}
              >
                {feat.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed font-medium">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Features;
```

---

### 7️⃣ **Simulator.tsx** (Azul Vibrante)

```tsx
// ========================================
// ARQUIVO: components/Simulator.tsx
// AÇÃO: TROCAR CORES E MELHORAR CÁLCULO
// ========================================

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
```

---

### 8️⃣ **CTA.tsx** (Final com Azul Vibrante)

```tsx
// ========================================
// ARQUIVO: components/CTA.tsx
// AÇÃO: REDESIGN COM GRADIENTE AZUL
// ========================================

import React from 'react';
import { COLORS, GRADIENTS, BRAND } from '../constants';

const CTA: React.FC = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div 
          className="rounded-[3rem] p-16 md:p-24 text-center text-white relative overflow-hidden shadow-2xl"
          style={{ 
            background: GRADIENTS.primary 
          }}
        >
          {/* GRID PATTERN */}
          <div className="absolute inset-0 solar-grid opacity-5"></div>
          
          {/* FORMA ORGÂNICA AMARELA */}
          <div 
            className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-10"
            style={{ backgroundColor: COLORS.secondary }}
          />
          
          <div className="relative z-10 space-y-12">
            
            {/* TAGLINE */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/20">
              <div 
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: COLORS.secondary }}
              >
                <span className="text-2xl">⚡</span>
              </div>
              <span className="font-black uppercase tracking-widest text-sm">
                {BRAND.tagline}
              </span>
            </div>
            
            {/* HEADLINE */}
            <div className="space-y-6">
              <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-none uppercase">
                Energia limpa.{' '}
                <span 
                  className="inline-block px-6 py-2 rounded-2xl"
                  style={{ backgroundColor: COLORS.secondary, color: COLORS.primary }}
                >
                  Resultado real.
                </span>
              </h2>
              
              <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto font-medium leading-relaxed">
                Não permita que os aumentos tarifários corroam seu patrimônio. 
                Escolha a <strong>engenharia de precisão</strong> para sua casa ou empresa.
              </p>
            </div>
            
            {/* CTA */}
            <div className="pt-6">
              <a 
                href={BRAND.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 px-14 py-7 rounded-2xl font-black text-2xl uppercase tracking-tighter transition-all hover:scale-110 active:scale-95 shadow-2xl"
                style={{ 
                  backgroundColor: COLORS.secondary, 
                  color: COLORS.primary 
                }}
              >
                <span>Solicitar Orçamento Gratuito</span>
                <span className="text-3xl">→</span>
              </a>
            </div>
            
            {/* BADGES DE REFORÇO */}
            <div className="flex flex-wrap justify-center items-center gap-8 pt-12 opacity-60">
              <div className="flex items-center gap-2">
                <span className="text-2xl">⚡</span>
                <span className="text-xs font-black uppercase tracking-widest">
                  Instalação 30 dias
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🛡️</span>
                <span className="text-xs font-black uppercase tracking-widest">
                  25 anos garantia
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">📱</span>
                <span className="text-xs font-black uppercase tracking-widest">
                  Monitoramento 24h
                </span>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
```

---

### 9️⃣ **Footer.tsx** (Azul Vibrante)

```tsx
// ========================================
// ARQUIVO: components/Footer.tsx
// AÇÃO: TROCAR CORES (azul vibrante no lugar do preto)
// ========================================

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
              className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-2xl"
              style={{ backgroundColor: COLORS.secondary }}
            >
              <img 
                src={IMAGES.logoPattern} 
                alt="Logo Ergos" 
                className="w-14 h-14 object-contain"
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
```

---

## 🎬 RESUMO DAS ALTERAÇÕES

### ✅ CORES ATUALIZADAS
```
ANTES:  #0F2027 (azul escuro/preto) 
DEPOIS: #0c4acd (azul royal vibrante) ← PRINCIPAL MUDANÇA
```

### ✅ ELEMENTOS ADICIONADOS
1. **Formas orgânicas amarelas** (como no Instagram)
2. **Badges amarelas** com ícones em todos os cards
3. **Gradientes azul → azul claro** (dinâmico)
4. **Menu mobile** hamburger (funcional)
5. **Tagline oficial**: "Energia positiva, resultados positivos."

### ✅ COMPONENTES REDESENHADOS
- ✅ Navbar (azul + menu mobile)
- ✅ Hero (azul vibrante + formas orgânicas)
- ✅ About (badges amarelas + stats)
- ✅ Features (cards com badges)
- ✅ Simulator (azul + cálculo melhorado)
- ✅ CTA (azul vibrante)
- ✅ Footer (azul + não mais preto)

---

## 📦 ARQUIVOS PARA SUBSTITUIR

1. `constants.tsx` - SUBSTITUIR COMPLETAMENTE
2. `index.html` - TROCAR `<style>` section
3. `components/Navbar.tsx` - SUBSTITUIR COMPLETAMENTE
4. `components/Hero.tsx` - SUBSTITUIR COMPLETAMENTE
5. `components/About.tsx` - SUBSTITUIR COMPLETAMENTE
6. `components/Features.tsx` - SUBSTITUIR COMPLETAMENTE
7. `components/Simulator.tsx` - SUBSTITUIR COMPLETAMENTE
8. `components/CTA.tsx` - SUBSTITUIR COMPLETAMENTE
9. `components/Footer.tsx` - SUBSTITUIR COMPLETAMENTE

---

## 🚀 PRÓXIMOS PASSOS

1. **Substituir todos os arquivos** listados acima
2. **Adicionar imagens faltantes** (logo pattern, fotos de clientes)
3. **Testar em mobile** (menu hamburger funcional)
4. **Verificar cores** (deve ficar igual ao Instagram)
5. **Deploy e teste final**

---

**FIM DO DOCUMENTO**
**Todas as alterações necessárias estão documentadas acima.**
**Pronto para implementação imediata!** 🚀

