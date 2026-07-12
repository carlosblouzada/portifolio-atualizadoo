import type { Locale } from './i18n';

export interface Project {
  title: string;
  subtitle?: string;
  role?: string;
  description: string;
  skills: string[];
  poster: {
    initials: string;
    hue: number;
  };
  logo?: string;
  logoBackground?: string;
  liveUrl?: string;
  repoUrl?: string;
  storeUrl?: string;
  liveLabel?: string;
  repoLabel?: string;
  storeLabel?: string;
  inProgress?: boolean;
  year?: string;
}

export const projects: Project[] = [
  {
    title: 'InRumo',
    subtitle: 'Inteligência para motoristas de aplicativo',
    role: 'Founder',
    description:
      'Plataforma SaaS que transforma a gestão financeira de motoristas de aplicativo — análise de corridas, cálculo de lucro real e inteligência operacional em tempo real.',
    skills: ['typescript', 'nodejs', 'react'],
    poster: { initials: 'IN', hue: 35 },
    logo: '/images/products/inrumo.png',
    logoBackground: '#2c343f',
    liveUrl: 'https://inrumo.io',
    liveLabel: 'Ver site',
    storeUrl: 'https://play.google.com/store/apps/details?id=com.vemos.inrumo',
    storeLabel: 'Google Play',
    year: '2026',
  },
  {
    title: 'Louzada Tech',
    subtitle: 'Desenvolvimento de software',
    role: 'CEO',
    description:
      'Empresa de tecnologia que desenvolve produtos digitais sob demanda e soluções sob medida — da ideação ao deploy, com foco em entregas consistentes e parceria de longo prazo.',
    skills: ['react', 'typescript', 'tailwind', 'nodejs'],
    poster: { initials: 'LT', hue: 210 },
    logo: '/images/products/louzada-tech.png',
    logoBackground: '#0a0a0a',
    liveUrl: 'https://louzadatech.com',
    liveLabel: 'Ver empresa',
    year: '2025',
  },
  {
    title: 'Gambatto Mídias',
    subtitle: 'Assessoria de marketing digital',
    role: 'Parceiro de negócios',
    description:
      'Parceria estratégica em que lidero a Gambatto Mídias no marketing e a Louzada Tech na tecnologia — captando clientes e entregando soluções integradas de mídia e software.',
    skills: ['product'],
    poster: { initials: 'GM', hue: 320 },
    logo: '/images/products/gambatto-midias.png',
    logoBackground: '#000000',
    liveUrl: 'https://gambattomidias.com',
    liveLabel: 'Ver parceiro',
    year: '2025',
  },
  {
    title: 'Despedida dos Cabos',
    subtitle: 'Louzada Tech · Sistema de presenças',
    role: 'CEO',
    description:
      'Plataforma de confirmação de presença e gestão de evento para a despedida dos cabos e soldados da Força Aérea Brasileira — turmas Bandeirantes, Harpia e Jaguar.',
    skills: ['react', 'typescript', 'tailwind'],
    poster: { initials: 'CB', hue: 200 },
    logo: '/images/products/despedida-cabos.png',
    logoBackground: '#000000',
    liveUrl: 'https://caboecabo.louzadatech.com',
    liveLabel: 'Ver sistema',
    year: '2026',
  },
];

export const projectsEn: Project[] = [
  {
    title: 'InRumo',
    subtitle: 'Intelligence for app-based drivers',
    role: 'Founder',
    description:
      'SaaS platform that transforms financial management for app-based drivers — ride analysis, real profit calculation, and real-time operational intelligence.',
    skills: ['typescript', 'nodejs', 'react'],
    poster: { initials: 'IN', hue: 35 },
    logo: '/images/products/inrumo.png',
    logoBackground: '#2c343f',
    liveUrl: 'https://inrumo.io',
    liveLabel: 'View website',
    storeUrl: 'https://play.google.com/store/apps/details?id=com.vemos.inrumo',
    storeLabel: 'Google Play',
    year: '2026',
  },
  {
    title: 'Louzada Tech',
    subtitle: 'Software development',
    role: 'CEO',
    description:
      'Technology company building custom digital products and tailored software solutions — from ideation to deployment, with a focus on consistent delivery and long-term partnerships.',
    skills: ['react', 'typescript', 'tailwind', 'nodejs'],
    poster: { initials: 'LT', hue: 210 },
    logo: '/images/products/louzada-tech.png',
    logoBackground: '#0a0a0a',
    liveUrl: 'https://louzadatech.com',
    liveLabel: 'View company',
    year: '2025',
  },
  {
    title: 'Gambatto Mídias',
    subtitle: 'Digital marketing consultancy',
    role: 'Business partner',
    description:
      'Strategic partnership where I lead Gambatto Mídias in marketing and Louzada Tech in technology — acquiring clients and delivering integrated media and software solutions.',
    skills: ['product'],
    poster: { initials: 'GM', hue: 320 },
    logo: '/images/products/gambatto-midias.png',
    logoBackground: '#000000',
    liveUrl: 'https://gambattomidias.com',
    liveLabel: 'View partner',
    year: '2025',
  },
  {
    title: 'Despedida dos Cabos',
    subtitle: 'Louzada Tech · Attendance system',
    role: 'CEO',
    description:
      'Attendance confirmation and event management platform for the farewell of corporals and airmen from the Brazilian Air Force — Bandeirantes, Harpia, and Jaguar classes.',
    skills: ['react', 'typescript', 'tailwind'],
    poster: { initials: 'CB', hue: 200 },
    logo: '/images/products/despedida-cabos.png',
    logoBackground: '#000000',
    liveUrl: 'https://caboecabo.louzadatech.com',
    liveLabel: 'View system',
    year: '2026',
  },
];

export const projectsByLocale: Record<Locale, Project[]> = {
  pt: projects,
  en: projectsEn,
};
