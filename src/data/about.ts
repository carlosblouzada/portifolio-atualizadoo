import type { Locale } from './i18n';
import { site } from './site';

const contactHref = `mailto:${site.email}`;

export const aboutPages = {
  pt: {
    title: 'Sobre mim',
    intro: 'Construo produtos digitais com clareza, propósito e atenção ao detalhe.',
    narrative: [
      'Acredito que boa tecnologia começa entendendo o problema antes de escrever código. Meu trabalho é transformar ideias em soluções que funcionam no mundo real — para startups, negócios locais ou clientes internacionais.',
      'Venho de uma trajetória que mistura operação, disciplina e aprendizado contínuo. Essa combinação me ajuda a enxergar o todo: produto, engenharia, prazo e impacto para quem usa no dia a dia.',
      'Gosto de trabalhar com comunicação direta, entregas frequentes e parceria de longo prazo. Se você busca alguém que assume responsabilidade do início ao fim, vamos conversar.',
    ],
    valuesTitle: 'Como eu trabalho',
    values: [
      {
        title: 'Clareza',
        description: 'Requisitos e expectativas alinhados desde o primeiro contato.',
      },
      {
        title: 'Entrega',
        description: 'Do conceito ao deploy, com responsabilidade em cada etapa.',
      },
      {
        title: 'Evolução',
        description: 'Melhoria contínua, aprendizado e adaptação ao que o projeto precisa.',
      },
    ],
    actions: {
      projectsLabel: 'Ver produtos',
      projectsHref: '/projects',
      contactLabel: 'Fale comigo',
      contactHref,
      resumeLabel: 'Baixar currículo',
      resumePtHref: '/resume',
      resumeEnHref: '/resume/en',
    },
  },
  en: {
    title: 'About me',
    intro: 'I build digital products with clarity, purpose, and attention to detail.',
    narrative: [
      'I believe good technology starts by understanding the problem before writing code. My work is to turn ideas into solutions that work in the real world — for startups, local businesses, and international clients.',
      'My background combines operations, discipline, and continuous learning. That mix helps me see the full picture: product, engineering, deadlines, and day-to-day impact for users.',
      'I like working with direct communication, frequent delivery, and long-term partnerships. If you are looking for someone who takes ownership from start to finish, let us talk.',
    ],
    valuesTitle: 'How I work',
    values: [
      {
        title: 'Clarity',
        description: 'Requirements and expectations aligned from the first conversation.',
      },
      {
        title: 'Delivery',
        description: 'From concept to deployment, with ownership at every step.',
      },
      {
        title: 'Evolution',
        description: 'Continuous improvement, learning, and adaptation to what each project needs.',
      },
    ],
    actions: {
      projectsLabel: 'View products',
      projectsHref: '/projects',
      contactLabel: 'Contact me',
      contactHref,
      resumeLabel: 'Download resume',
      resumePtHref: '/resume',
      resumeEnHref: '/resume/en',
    },
  },
} as const satisfies Record<Locale, unknown>;

export const aboutPage = aboutPages.pt;
