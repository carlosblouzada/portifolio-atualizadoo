import type { Locale } from './i18n';

export interface ExperienceItem {
  role: string;
  company: string;
  type: string;
  description: string;
  highlights?: string[];
  skills?: string[];
  location?: string;
  period: string;
}

export const experiences: ExperienceItem[] = [
  {
    role: 'CEO & Founder',
    company: 'InRumo',
    type: 'Tempo integral · No local',
    description:
      'Fundei a InRumo com a convicção de que motorista de aplicativo é empresário e merece dados para tomar decisões inteligentes.',
    highlights: [
      'Liderança de produto, estratégia e crescimento da plataforma',
      'Análise de corridas, cálculo de lucro real e inteligência operacional em tempo real',
      'Transformação da gestão financeira de motoristas de aplicativo',
    ],
    skills: ['product', 'typescript', 'nodejs'],
    location: 'Florianópolis, SC',
    period: 'jan 2026 - o momento',
  },
  {
    role: 'CEO / Desenvolvedor de Software',
    company: 'Louzada Tech',
    type: 'Autônomo · Remoto',
    description:
      'Liderança do ciclo completo de desenvolvimento — da ideação ao deploy — com React.js, TypeScript, Node.js, PostgreSQL e Supabase.',
    highlights: [
      'Estratégia de produto, requisitos e priorização de features para clientes',
      'Sistemas web modernos com REST APIs e fluxos assistidos por IA',
      'Gestão ágil (Scrum/Kanban) com foco em entregas consistentes',
    ],
    skills: ['typescript', 'react', 'nodejs', 'git'],
    location: 'São José, SC',
    period: 'jul 2025 - o momento',
  },
  {
    role: 'Product Owner',
    company: 'Impulse RH Consultoria',
    type: 'Terceirizado · Remoto',
    description:
      'Gestão de backlog, priorização e alinhamento entre clientes, stakeholders e times de desenvolvimento.',
    highlights: [
      'Definição de prioridades com metodologias ágeis',
      'Entregas contínuas com foco em valor para o negócio',
      'Melhoria constante dos processos de produto',
    ],
    skills: ['product', 'agile'],
    location: 'Pará, Brasil',
    period: 'mar 2025 - o momento',
  },
  {
    role: 'CTO',
    company: 'MagiWorks',
    type: 'Tempo integral · Remoto',
    description:
      'Liderança técnica responsável por arquitetura, infraestrutura e coordenação de times multidisciplinares.',
    highlights: [
      'Definição de arquitetura e infraestrutura para escalabilidade e segurança',
      'Coordenação de times de desenvolvimento, design e infraestrutura',
      'Implementação de processos ágeis e avaliação de novas tecnologias',
    ],
    skills: ['typescript', 'react', 'nodejs', 'git', 'linux'],
    location: 'Florianópolis, SC',
    period: 'jan 2025 - o momento',
  },
  {
    role: 'CABO - Operador de Empilhadeira',
    company: 'Força Aérea Brasileira - FAB',
    type: 'Tempo integral · No local',
    description:
      'Atuação no setor operacional da Base Aérea de Florianópolis, com apoio às operações aeronáuticas e logísticas.',
    highlights: [
      'Recepção de aeronaves e operação de empilhadeiras (2 e 7 toneladas)',
      'Manuseio de equipamentos aviônicos, Load PFA e chines',
      'Manutenção operacional e apoio técnico especializado',
    ],
    location: 'Florianópolis, SC',
    period: 'jul 2024 - o momento',
  },
  {
    role: 'Analista de Suporte Técnico',
    company: 'FazendaCheia',
    type: 'Temporário · Híbrido',
    description:
      'Suporte técnico e atendimento aos clientes nas ferramentas da empresa.',
    highlights: [
      'Manutenção das ferramentas Movidesk, Pipedrive e SIME',
      'Atendimento e solução de dúvidas e problemas dos clientes',
      'Garantia de eficiência e satisfação no uso dos sistemas',
    ],
    skills: ['movidesk', 'pipedrive', 'helpdesk'],
    location: 'Florianópolis, SC',
    period: 'mai 2024 - jul 2024',
  },
  {
    role: 'Product Owner',
    company: 'Clube Delivery',
    type: 'Temporário · Remoto',
    description:
      'Definição de visão do produto, gestão de backlog e alinhamento com objetivos do negócio.',
    highlights: [
      'Criação e priorização do Product Backlog',
      'Escrita de histórias de usuário e critérios de aceitação',
      'Participação em planejamento e refinamento de sprint',
    ],
    skills: ['product', 'agile'],
    location: 'Chapecó, SC',
    period: 'mai 2024 - jun 2024',
  },
  {
    role: 'Gerente Regional',
    company: 'Clube Delivery',
    type: 'Tempo integral · Remoto',
    description:
      'Expansão regional e desenvolvimento de negócios, com gestão de rede e equipe dedicada.',
    highlights: [
      'Registro e suporte de estabelecimentos na rede regional',
      'Gestão de equipe e processos de registro de usuários',
      'Desenvolvimento de parceiros DIPS e expansão regional',
    ],
    location: 'Chapecó, SC',
    period: 'fev 2024 - mai 2024',
  },
  {
    role: 'Desenvolvedor Web Front-End & Mobile',
    company: 'Digital Influencer Networking',
    type: 'Tempo integral · Remoto',
    description:
      'Desenvolvimento e manutenção de páginas de destino com foco em interfaces impactantes e funcionais.',
    highlights: [
      'Criação e manutenção de landing pages com React.js e TypeScript',
      'Uso de Material UI e Tailwind CSS para interfaces sofisticadas',
      'Gestão de projetos ágeis com GitHub e Jira Software',
    ],
    skills: ['javascript', 'react', 'typescript', 'nodejs', 'figma', 'git', 'tailwind', 'jira'],
    location: 'São Paulo, Brasil',
    period: 'out 2023 - mai 2024',
  },
  {
    role: 'Analista de Suporte Técnico Jr',
    company: 'HSystem',
    type: 'Tempo integral · No local',
    description:
      'Suporte hoteleiro como intermediário entre operadoras e propriedades, com atendimento via MoviDesk.',
    highlights: [
      'Suporte técnico e atendimento a propriedades e operadores',
      'Conhecimento das regras de negócio do setor hoteleiro',
      'Comunicação eficaz para resolução rápida de problemas',
    ],
    skills: ['movidesk', 'helpdesk', 'excel'],
    location: 'Florianópolis, SC',
    period: 'jun 2023 - set 2023',
  },
  {
    role: 'Representante de Desenvolvimento de Vendas',
    company: 'GrupoRV',
    type: 'Tempo integral · Híbrido',
    description:
      'Assistente de pré-vendas no setor imobiliário, com prospecção e qualificação de leads.',
    highlights: [
      'Primeiro contato com leads e qualificação inbound/outbound',
      'Uso de CRM, Spotter e Pipedrive para gestão de funil',
      'Técnicas de vendas como rapport e spin selling',
    ],
    skills: ['saas', 'crm', 'pipedrive'],
    location: 'Florianópolis, SC',
    period: 'abr 2023 - jun 2023',
  },
  {
    role: 'Transição de carreira',
    company: 'Labenu',
    type: 'Pausa na carreira · EAD',
    description:
      'Pausa dedicada integralmente aos estudos de desenvolvimento web Full Stack na Labenu.',
    highlights: [
      'Bootcamp intensivo com projetos práticos e trabalho em equipe',
      'Foco em JavaScript, React.js e Node.js',
      'Experiência fundamental para a transição de carreira em tecnologia',
    ],
    skills: ['javascript', 'react', 'nodejs'],
    location: 'Florianópolis, SC',
    period: 'jul 2022 - mar 2023',
  },
  {
    role: 'Agente de Viagens',
    company: 'New Trip Floripa',
    type: 'Tempo integral · Híbrido',
    description:
      'Atendimento ao cliente com cotações, emissão de bilhetes e gestão de pagamentos.',
    highlights: [
      'Cotações em plataformas da empresa e companhias aéreas',
      'Emissão de bilhetes e gerenciamento de pagamentos',
      'Atendimento de qualidade em todas as etapas do processo',
    ],
    location: 'Florianópolis, SC',
    period: 'dez 2021 - mai 2022',
  },
  {
    role: 'Auxiliar de Padeiro',
    company: 'Hiperbom Supermercados',
    type: 'Tempo integral · No local',
    description:
      'Auxílio na produção de pães em ambiente de padaria, com foco em qualidade e trabalho em equipe.',
    highlights: [
      'Preparação de ingredientes e moldagem de massa',
      'Operação de equipamentos de padaria',
      'Garantia de padrões de qualidade consistentes',
    ],
    location: 'Florianópolis, SC',
    period: 'ago 2019 - out 2020',
  },
  {
    role: 'Soldado de Segunda Classe',
    company: 'Força Aérea Brasileira - FAB',
    type: 'Tempo integral · No local',
    description:
      'Serviço militar com atuação em guarda, segurança, funções administrativas e atendimento.',
    highlights: [
      'Serviço de guarda, segurança e patrulhas',
      'Suporte administrativo e atendimento como recepcionista',
      'Atuação como motorista com foco em segurança rodoviária',
    ],
    location: 'Manaus, AM',
    period: 'mar 2015 - fev 2019',
  },
];

export const education: ExperienceItem[] = [
  {
    role: 'Análise e Desenvolvimento de Sistemas',
    company: 'UniBF',
    type: 'Tecnólogo · EAD',
    description:
      'Curso superior de tecnólogo em Análise e Desenvolvimento de Sistemas (ADS), com formação prática para projetar, implementar, testar e manter sistemas computacionais.',
    period: 'mai 2025 - out 2026',
  },
  {
    role: 'Engenharia de Software',
    company: 'UniCesumar',
    type: 'Bacharelado · EAD',
    description:
      'Bacharelado em Engenharia de Software, com foco em ciclo de vida de software, arquitetura de sistemas, qualidade e engenharia de requisitos.',
    highlights: [
      'Fundamentos e Arquitetura de Computadores',
      'Estudo contemporâneo e transversal',
      'Desenvolvimento, otimização e avaliação de software',
    ],
    skills: ['softwareEngineering', 'logicProgramming'],
    period: 'set 2023 - out 2027',
  },
  {
    role: 'Desenvolvimento Web Full Stack',
    company: 'Labenu',
    type: 'Bootcamp · EAD',
    description:
      'Bootcamp intensivo de desenvolvimento web Full Stack, com projetos práticos individuais e em equipe — do front-end ao back-end.',
    skills: ['html', 'css', 'javascript', 'react', 'nodejs'],
    period: 'ago 2022 - mar 2023',
  },
];

export const experiencesEn: ExperienceItem[] = [
  {
    role: 'CEO & Founder',
    company: 'InRumo',
    type: 'Full-time · On-site',
    description:
      'Founded InRumo with the belief that app-based drivers are business owners and deserve data to make smarter decisions.',
    highlights: [
      'Product leadership, strategy, and platform growth',
      'Ride analysis, real profit calculation, and real-time operational intelligence',
      'Digital transformation of financial management for app-based drivers',
    ],
    skills: ['product', 'typescript', 'nodejs'],
    location: 'Florianópolis, SC',
    period: 'Jan 2026 - Present',
  },
  {
    role: 'CEO / Software Developer',
    company: 'Louzada Tech',
    type: 'Self-employed · Remote',
    description:
      'Lead the full development lifecycle — from ideation to deployment — with React.js, TypeScript, Node.js, PostgreSQL, and Supabase.',
    highlights: [
      'Product strategy, requirements, and feature prioritization for clients',
      'Modern web systems with REST APIs and AI-assisted workflows',
      'Agile management (Scrum/Kanban) focused on consistent delivery',
    ],
    skills: ['typescript', 'react', 'nodejs', 'git'],
    location: 'São José, SC',
    period: 'Jul 2025 - Present',
  },
  {
    role: 'Product Owner',
    company: 'Impulse RH Consultoria',
    type: 'Contract · Remote',
    description:
      'Backlog management, prioritization, and alignment between clients, stakeholders, and development teams.',
    highlights: [
      'Priority definition using agile methodologies',
      'Continuous delivery focused on business value',
      'Ongoing improvement of product processes',
    ],
    skills: ['product', 'agile'],
    location: 'Pará, Brazil',
    period: 'Mar 2025 - Present',
  },
  {
    role: 'CTO',
    company: 'MagiWorks',
    type: 'Full-time · Remote',
    description:
      'Technical leadership responsible for architecture, infrastructure, and coordination of multidisciplinary teams.',
    highlights: [
      'Architecture and infrastructure definition for scalability and security',
      'Coordination of development, design, and infrastructure teams',
      'Implementation of agile processes and evaluation of new technologies',
    ],
    skills: ['typescript', 'react', 'nodejs', 'git', 'linux'],
    location: 'Florianópolis, SC',
    period: 'Jan 2025 - Present',
  },
  {
    role: 'Corporal - Forklift Operator',
    company: 'Brazilian Air Force - FAB',
    type: 'Full-time · On-site',
    description:
      'Worked in the operations sector at Florianópolis Air Base, supporting aeronautical and logistics operations.',
    highlights: [
      'Aircraft reception and operation of 2- and 7-ton forklifts',
      'Handling of avionics equipment, Load PFA, and chains',
      'Operational maintenance and specialized technical support',
    ],
    location: 'Florianópolis, SC',
    period: 'Jul 2024 - Present',
  },
  {
    role: 'Technical Support Analyst',
    company: 'FazendaCheia',
    type: 'Temporary · Hybrid',
    description: 'Technical support and customer service for the company tools.',
    highlights: [
      'Maintenance of Movidesk, Pipedrive, and SIME tools',
      'Customer service and resolution of questions and issues',
      'Ensured efficiency and satisfaction in the use of internal systems',
    ],
    skills: ['movidesk', 'pipedrive', 'helpdesk'],
    location: 'Florianópolis, SC',
    period: 'May 2024 - Jul 2024',
  },
  {
    role: 'Product Owner',
    company: 'Clube Delivery',
    type: 'Temporary · Remote',
    description:
      'Defined product vision, managed the backlog, and aligned execution with business objectives.',
    highlights: [
      'Creation and prioritization of the Product Backlog',
      'Writing user stories and acceptance criteria',
      'Participation in sprint planning and refinement',
    ],
    skills: ['product', 'agile'],
    location: 'Chapecó, SC',
    period: 'May 2024 - Jun 2024',
  },
  {
    role: 'Regional Manager',
    company: 'Clube Delivery',
    type: 'Full-time · Remote',
    description: 'Regional expansion and business development, with network and team management.',
    highlights: [
      'Registration and support of establishments in the regional network',
      'Team management and user registration processes',
      'Development of DIPS partners and regional expansion',
    ],
    location: 'Chapecó, SC',
    period: 'Feb 2024 - May 2024',
  },
  {
    role: 'Front-End & Mobile Web Developer',
    company: 'Digital Influencer Networking',
    type: 'Full-time · Remote',
    description:
      'Development and maintenance of landing pages focused on impactful and functional interfaces.',
    highlights: [
      'Creation and maintenance of landing pages with React.js and TypeScript',
      'Use of Material UI and Tailwind CSS for polished interfaces',
      'Agile project management with GitHub and Jira Software',
    ],
    skills: ['javascript', 'react', 'typescript', 'nodejs', 'figma', 'git', 'tailwind', 'jira'],
    location: 'São Paulo, Brazil',
    period: 'Oct 2023 - May 2024',
  },
  {
    role: 'Junior Technical Support Analyst',
    company: 'HSystem',
    type: 'Full-time · On-site',
    description:
      'Hotel support acting as a bridge between operators and properties, with service through MoviDesk.',
    highlights: [
      'Technical support for properties and operators',
      'Understanding of hotel industry business rules',
      'Effective communication for fast problem resolution',
    ],
    skills: ['movidesk', 'helpdesk', 'excel'],
    location: 'Florianópolis, SC',
    period: 'Jun 2023 - Sep 2023',
  },
  {
    role: 'Sales Development Representative',
    company: 'GrupoRV',
    type: 'Full-time · Hybrid',
    description: 'Pre-sales assistant in the real estate sector, focused on prospecting and lead qualification.',
    highlights: [
      'First contact with inbound and outbound leads',
      'Use of CRM, Spotter, and Pipedrive to manage the sales funnel',
      'Sales techniques including rapport and SPIN selling',
    ],
    skills: ['saas', 'crm', 'pipedrive'],
    location: 'Florianópolis, SC',
    period: 'Apr 2023 - Jun 2023',
  },
  {
    role: 'Career transition',
    company: 'Labenu',
    type: 'Career break · Remote learning',
    description: 'Full-time study period dedicated to Full Stack web development at Labenu.',
    highlights: [
      'Intensive bootcamp with practical projects and teamwork',
      'Focus on JavaScript, React.js, and Node.js',
      'Key experience for transitioning into a technology career',
    ],
    skills: ['javascript', 'react', 'nodejs'],
    location: 'Florianópolis, SC',
    period: 'Jul 2022 - Mar 2023',
  },
  {
    role: 'Travel Agent',
    company: 'New Trip Floripa',
    type: 'Full-time · Hybrid',
    description: 'Customer service with quotes, ticket issuance, and payment management.',
    highlights: [
      'Quotes using company platforms and airline systems',
      'Ticket issuance and payment management',
      'Quality customer service throughout every step of the process',
    ],
    location: 'Florianópolis, SC',
    period: 'Dec 2021 - May 2022',
  },
  {
    role: 'Assistant Baker',
    company: 'Hiperbom Supermercados',
    type: 'Full-time · On-site',
    description: 'Assisted bread production in a bakery environment, focused on quality and teamwork.',
    highlights: [
      'Ingredient preparation and dough shaping',
      'Operation of bakery equipment',
      'Ensured consistent quality standards',
    ],
    location: 'Florianópolis, SC',
    period: 'Aug 2019 - Oct 2020',
  },
  {
    role: 'Second-Class Airman',
    company: 'Brazilian Air Force - FAB',
    type: 'Full-time · On-site',
    description:
      'Military service with responsibilities in guard duty, security, administrative functions, and public service.',
    highlights: [
      'Guard duty, security, and patrol service',
      'Administrative support and front-desk service',
      'Driver duties with a focus on road safety',
    ],
    location: 'Manaus, AM',
    period: 'Mar 2015 - Feb 2019',
  },
];

export const educationEn: ExperienceItem[] = [
  {
    role: 'Systems Analysis and Development',
    company: 'UniBF',
    type: 'Technologist Degree · Remote learning',
    description:
      'Higher education program in Systems Analysis and Development, with practical training to design, implement, test, and maintain computer systems.',
    period: 'May 2025 - Oct 2026',
  },
  {
    role: 'Software Engineering',
    company: 'UniCesumar',
    type: "Bachelor's Degree · Remote learning",
    description:
      'Bachelor program in Software Engineering, focused on the software lifecycle, systems architecture, quality, and requirements engineering.',
    highlights: [
      'Computer fundamentals and architecture',
      'Contemporary and cross-disciplinary studies',
      'Software development, optimization, and evaluation',
    ],
    skills: ['softwareEngineering', 'logicProgramming'],
    period: 'Sep 2023 - Oct 2027',
  },
  {
    role: 'Full Stack Web Development',
    company: 'Labenu',
    type: 'Bootcamp · Remote learning',
    description:
      'Intensive Full Stack web development bootcamp with practical individual and team projects — from front end to back end.',
    skills: ['html', 'css', 'javascript', 'react', 'nodejs'],
    period: 'Aug 2022 - Mar 2023',
  },
];

export const experiencesByLocale: Record<Locale, ExperienceItem[]> = {
  pt: experiences,
  en: experiencesEn,
};

export const educationByLocale: Record<Locale, ExperienceItem[]> = {
  pt: education,
  en: educationEn,
};
