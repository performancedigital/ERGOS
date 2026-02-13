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
