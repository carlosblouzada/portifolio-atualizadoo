import type { Locale } from './i18n';

export interface CertificateItem {
  title: string;
  issuer: string;
  issuedDate: string;
  expiryDate?: string;
  description?: string;
  highlights?: string[];
  skills?: string[];
  credentialCode?: string;
  credentialUrl?: string;
  certificateFile?: string;
}

export const certificates: CertificateItem[] = [
  {
    title: 'Desenvolva um jogo e Pratique Lógica de Programação: JavaScript e HTML',
    issuer: 'Alura',
    issuedDate: 'abr 2023',
    expiryDate: 'abr 2023',
    skills: ['css', 'html', 'javascript'],
  },
  {
    title: 'Introdução ao Git e ao GitHub',
    issuer: 'DIO',
    issuedDate: 'abr 2023',
    expiryDate: 'abr 2023',
    skills: ['git'],
    credentialCode: '5CC62847',
  },
  {
    title: 'Desenvolvimento Web Full Stack',
    issuer: 'Labenu',
    issuedDate: 'fev 2023',
    description:
      'Currículo atualizado com as tendências e demandas do mercado de trabalho em desenvolvimento web.',
    highlights: [
      'HTML, CSS, JavaScript, React.js e Node.js',
      'Preparação para desafios reais como desenvolvedor Full Stack',
    ],
    skills: ['html', 'css', 'javascript', 'react', 'nodejs'],
    certificateFile: '/certificates/certificado-carlos-bergson-cruz-louzada.pdf',
  },
  {
    title: 'Crie um site simples usando HTML, CSS e JavaScript',
    issuer: 'Fundação Bradesco',
    issuedDate: 'jun 2022',
    expiryDate: 'jun 2022',
    credentialCode: '8CF160FB-D8E5-4CA2-ADF3-9A064D07A821',
    skills: ['html', 'css', 'javascript'],
  },
];

export const certificatesEn: CertificateItem[] = [
  {
    title: 'Develop a Game and Practice Programming Logic: JavaScript and HTML',
    issuer: 'Alura',
    issuedDate: 'Apr 2023',
    expiryDate: 'Apr 2023',
    skills: ['css', 'html', 'javascript'],
  },
  {
    title: 'Introduction to Git and GitHub',
    issuer: 'DIO',
    issuedDate: 'Apr 2023',
    expiryDate: 'Apr 2023',
    skills: ['git'],
    credentialCode: '5CC62847',
  },
  {
    title: 'Full Stack Web Development',
    issuer: 'Labenu',
    issuedDate: 'Feb 2023',
    description: 'Updated curriculum aligned with web development job market trends and demands.',
    highlights: [
      'HTML, CSS, JavaScript, React.js, and Node.js',
      'Preparation for real-world challenges as a Full Stack developer',
    ],
    skills: ['html', 'css', 'javascript', 'react', 'nodejs'],
    certificateFile: '/certificates/certificado-carlos-bergson-cruz-louzada.pdf',
  },
  {
    title: 'Create a Simple Website Using HTML, CSS, and JavaScript',
    issuer: 'Fundação Bradesco',
    issuedDate: 'Jun 2022',
    expiryDate: 'Jun 2022',
    credentialCode: '8CF160FB-D8E5-4CA2-ADF3-9A064D07A821',
    skills: ['html', 'css', 'javascript'],
  },
];

export const certificatesByLocale: Record<Locale, CertificateItem[]> = {
  pt: certificates,
  en: certificatesEn,
};
