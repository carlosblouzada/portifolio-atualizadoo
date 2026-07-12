import type { Locale } from './i18n';
import { site } from './site';

const contactHref = `mailto:${site.email}`;

export const pageContent = {
  pt: {
    home: {
      title: 'Portfólio',
      tagline: 'Construo produtos digitais com clareza, propósito e atenção ao detalhe.',
      workCta: 'Ver produtos',
      workHref: '/projects',
      contactCta: 'Fale comigo',
      contactHref,
      profileAlt: 'Foto de perfil de',
    },
    about: {
      title: 'Portfólio | Sobre',
      description: 'Conheça Carlos Bergson — como trabalho, o que me move e como podemos construir algo juntos.',
      profileAlt: 'Foto de perfil de',
    },
    experience: {
      title: 'Portfólio | Experiências',
      description: 'Experiência profissional de Carlos Bergson — trajetória em tecnologia, produto e liderança.',
      heading: 'Experiências',
      subtitle: 'Cada experiência mostra as tecnologias e ferramentas que utilizei na prática.',
    },
    education: {
      title: 'Portfólio | Formação',
      description:
        'Formação acadêmica de Carlos Bergson — tecnólogo em ADS, bacharelado em Engenharia de Software e bootcamp Full Stack.',
      heading: 'Formação',
      subtitle: 'Tecnólogo, bacharelado e bootcamp — formação superior e complementar em tecnologia.',
      certificatesLink: 'Ver certificados →',
    },
    certificates: {
      title: 'Portfólio | Licenças e certificados',
      description: 'Certificados e licenças de Carlos Bergson em desenvolvimento web, Git e programação.',
      heading: 'Licenças e certificados',
      subtitle: 'Certificações em desenvolvimento web, lógica de programação e ferramentas.',
    },
    projects: {
      title: 'Portfólio | Produtos & empresas',
      description:
        'Produtos e empresas construídos por Carlos Bergson — InRumo, Louzada Tech e parcerias em produção.',
      heading: 'Produtos & empresas',
      subtitle: 'Empresas e produtos que fundei e lidero — da ideação ao deploy.',
    },
    resume: {
      title: 'Portfólio | Currículo',
      description: 'Currículo de Carlos Bergson — Software Engineer, CEO & Founder. Disponível para download em PDF.',
    },
  },
  en: {
    home: {
      title: 'Portfolio',
      tagline: 'I build digital products with clarity, purpose, and attention to detail.',
      workCta: 'View products',
      workHref: '/projects',
      contactCta: 'Contact me',
      contactHref,
      profileAlt: 'Profile photo of',
    },
    about: {
      title: 'Portfolio | About',
      description: 'Meet Carlos Bergson — how I work, what drives me, and how we can build something together.',
      profileAlt: 'Profile photo of',
    },
    experience: {
      title: 'Portfolio | Experience',
      description: 'Carlos Bergson professional experience — technology, product, and leadership journey.',
      heading: 'Experience',
      subtitle: 'Each experience shows the technologies and tools I have used in practice.',
    },
    education: {
      title: 'Portfolio | Education',
      description:
        'Carlos Bergson education — Systems Analysis and Development, Software Engineering, and Full Stack bootcamp.',
      heading: 'Education',
      subtitle: 'Technologist degree, bachelor program, and bootcamp — higher education and complementary training in technology.',
      certificatesLink: 'View certificates →',
    },
    certificates: {
      title: 'Portfolio | Licenses and certificates',
      description: 'Carlos Bergson certificates and licenses in web development, Git, and programming.',
      heading: 'Licenses and certificates',
      subtitle: 'Certifications in web development, programming logic, and tools.',
    },
    projects: {
      title: 'Portfolio | Products & companies',
      description:
        'Products and companies built by Carlos Bergson — InRumo, Louzada Tech, and active partnerships in production.',
      heading: 'Products & companies',
      subtitle: 'Companies and products I founded and lead — from ideation to deployment.',
    },
    resume: {
      title: 'Portfolio | Resume',
      description: 'Resume of Carlos Bergson — Software Engineer, CEO & Founder. Available for download in PDF.',
    },
  },
} as const satisfies Record<Locale, unknown>;
