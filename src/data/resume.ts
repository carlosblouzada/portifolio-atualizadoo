export type ResumeLocale = 'pt' | 'en';

export interface ResumeExperience {
  role: string;
  company: string;
  period: string;
  context?: string;
  bullets: string[];
  stack?: string;
}

export interface ResumeProject {
  title: string;
  subtitle?: string;
  period: string;
  url?: string;
  description: string;
  stack: string;
  tools?: string;
}

export interface ResumeEducation {
  degree: string;
  school: string;
  period: string;
  note?: string;
}

export interface ResumeContent {
  locale: ResumeLocale;
  pageTitle: string;
  downloadLabel: string;
  printLabel: string;
  headline: string;
  location: string;
  sections: {
    summary: string;
    skills: string;
    experience: string;
    military: string;
    projects: string;
    education: string;
    additional: string;
  };
  summary: string[];
  skills: { category: string; items: string[] }[];
  experiences: ResumeExperience[];
  military: string;
  projects: ResumeProject[];
  education: ResumeEducation[];
  additionalInfo: string[];
  pdfFile?: string;
}

export const resumeEn: ResumeContent = {
  locale: 'en',
  pageTitle: 'Resume',
  downloadLabel: 'Download resume (EN)',
  printLabel: 'Save as PDF',
  headline: 'Software Developer & CTO',
  location: 'São José, SC, Brazil',
  sections: {
    summary: 'Professional Summary',
    skills: 'Technical Skills',
    experience: 'Professional Experience',
    military: 'Military Service',
    projects: 'Selected Projects',
    education: 'Education & Training',
    additional: 'Additional Information',
  },
  summary: [
    'Full-stack software developer and technology leader with hands-on experience building web applications, automation systems, and digital products from end to end. Proven track record as CTO and Product Owner in early-stage tech companies, leading multidisciplinary teams and delivering scalable solutions with React.js, Node.js, TypeScript, PostgreSQL, and BaaS platforms (Supabase, Firebase).',
    'Experienced in applying AI-assisted development workflows (GitHub Copilot, Claude, ChatGPT) to accelerate delivery and improve code quality. Background in the Brazilian Air Force brings strong discipline, ownership, and reliability to every project.',
  ],
  skills: [
    { category: 'Front-End', items: ['React.js', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS'] },
    { category: 'Back-End / Integration', items: ['Node.js', 'REST APIs', 'Webhooks'] },
    { category: 'Databases', items: ['PostgreSQL', 'Relational & non-relational databases'] },
    { category: 'BaaS Platforms', items: ['Supabase', 'Firebase', 'Appwrite'] },
    {
      category: 'AI & Dev Productivity',
      items: ['GitHub Copilot', 'ChatGPT', 'Claude', 'Cursor', 'Lovable', 'Replit'],
    },
    { category: 'Mobile', items: ['Android Studio (testing & validation)'] },
    { category: 'Version Control', items: ['Git', 'GitHub', 'GitLab'] },
    {
      category: 'Methodologies',
      items: ['Scrum', 'Kanban', 'Backlog management', 'Sprint planning', 'Roadmap definition'],
    },
    {
      category: 'Infrastructure / OS',
      items: ['Linux', 'Vercel', 'Basic server administration'],
    },
  ],
  experiences: [
    {
      role: 'CEO / Software Developer',
      company: 'Louzada Tech',
      period: 'Jul 2025 – Present',
      context: 'Freelance / Self-employed',
      bullets: [
        'Lead the full development lifecycle — from ideation and prototyping to deployment — building web applications and digital products for clients across different industries.',
        'Responsible for product strategy, requirements gathering, feature prioritization, and client relationship management.',
        'Develop modern, responsive web systems using React.js, TypeScript, Node.js, REST APIs, and PostgreSQL/Supabase.',
        'Apply AI-assisted development workflows to accelerate delivery, automate repetitive tasks, and maintain high code quality.',
        'Manage projects using Agile methodologies (Scrum/Kanban), ensuring consistent delivery and alignment with business goals.',
      ],
      stack: 'React.js, TypeScript, Node.js, PostgreSQL, Supabase, Firebase, Git/GitHub',
    },
    {
      role: 'Chief Technology Officer (CTO)',
      company: 'MagiWorks',
      period: 'Jan 2025 – Present',
      context: 'Digital Services Marketplace Platform',
      bullets: [
        "Define the company's technology architecture, infrastructure strategy, and engineering standards across all products.",
        'Lead multidisciplinary teams (engineering, product, design), aligning technical execution with business objectives.',
        'Architect and implement service-oriented systems, API integrations, and scalable database structures.',
        'Drive adoption of AI tools and modern development environments to reduce time-to-market and improve product quality.',
        'Establish Agile processes (Scrum/Kanban), improving sprint predictability and team delivery consistency.',
      ],
      stack: 'JavaScript, TypeScript, Python, React.js, Node.js, PostgreSQL, Supabase, Firebase, Appwrite, Git/GitHub',
    },
    {
      role: 'Product Owner (PO)',
      company: 'Impulse RH Consultoria',
      period: 'Mar 2025 – Present',
      context: 'HR Tech / B2B SaaS',
      bullets: [
        'Own the product backlog: define user stories, functional requirements, and acceptance criteria for the engineering team.',
        'Bridge communication between clients, stakeholders, and the technical team, ensuring priorities are clear and well-reasoned.',
        'Plan and track sprints using Scrum/Kanban, driving continuous process improvement and on-time delivery.',
        'Actively participate in front-end development validation (React.js, Tailwind CSS) and feature quality assurance.',
      ],
      stack: 'Jira, Scrum, Kanban, React.js, Tailwind CSS, Git/GitHub',
    },
    {
      role: 'Front-End & Mobile Developer',
      company: 'Digital Influencer Networking',
      period: 'Oct 2023 – May 2024',
      bullets: [
        'Built and maintained web and mobile interfaces with a strong focus on responsiveness, usability, and cross-device consistency.',
        'Developed and validated Android mobile app features, ensuring stability and compatibility across devices.',
        'Integrated REST APIs and third-party services to create dynamic, data-driven applications.',
        'Collaborated with product and design teams in an Agile environment, using Jira for task tracking and Git for version control.',
      ],
      stack: 'React.js, TypeScript, HTML5, CSS3, Node.js, Android Studio, Git/GitHub, Jira',
    },
    {
      role: 'Junior Technical Support Analyst',
      company: 'HSystem',
      period: 'Jun 2023 – Sep 2023',
      bullets: [
        'Provided technical support to hotel clients via HelpDesk systems, resolving incidents related to PMS software and booking integrations.',
        'Diagnosed technical issues, analyzed database records, and applied solutions to maintain client operations without interruption.',
        'Worked with hotel management systems (PMS), distribution channels, and the Omnibees booking platform.',
        'Used remote access tools for incident resolution; maintained clear client communication throughout the support process.',
      ],
      stack: 'PMS, Omnibees, HelpDesk tools, remote access software, SQL database queries',
    },
  ],
  military:
    'Brazilian Air Force (Força Aérea Brasileira) — Served with the Brazilian Air Force, developing strong competencies in discipline, organization, responsibility, and teamwork — qualities directly applied in technology environments.',
  projects: [
    {
      title: 'Gestor ERP',
      subtitle: 'Business Management System',
      period: '2025',
      url: 'https://gestor.louzadatech.com',
      description:
        'Full-featured web ERP for small and medium businesses. Includes real-time dashboard with daily revenue, average ticket, inventory alerts, and sales tracking. Built end-to-end: architecture, development, testing, and deployment.',
      stack: 'React.js, TypeScript, Tailwind CSS, PostgreSQL, Supabase, Supabase Auth',
      tools: 'Lovable, Cursor, GitHub Copilot, Git/GitHub',
    },
    {
      title: 'MagiWorks',
      subtitle: 'Digital Services Marketplace',
      period: '2024',
      url: 'https://magiworks.com.br',
      description:
        'Web platform connecting clients and service providers. Features user authentication, profile management, service listing, and intermediation system. Built full-stack from ideation to deployment.',
      stack: 'React.js, TypeScript, Node.js, PostgreSQL, Supabase',
      tools: 'Lovable, Cursor, GitHub Copilot, Scrum/Kanban',
    },
    {
      title: 'Tech Jobs Intelligence Platform',
      period: '2024',
      description:
        'Data visualization platform aggregating job market data for the tech industry. Surfaces trends such as most requested technologies, experience levels, and remote/hybrid/on-site distribution.',
      stack: 'React.js, TypeScript, Tailwind CSS, Vercel',
      tools: 'GitHub Copilot, ChatGPT',
    },
    {
      title: 'Smells Clean LLC',
      subtitle: 'Institutional Website',
      period: '2024',
      url: 'https://smellscleanllc.com',
      description:
        'Institutional website for a US-based residential and commercial cleaning company. Focused on conversion, lead capture, and mobile responsiveness.',
      stack: 'React.js, TypeScript, Tailwind CSS, Vercel',
    },
    {
      title: 'Zygoteam',
      subtitle: 'Maxillary Rehabilitation Clinic',
      period: '2025',
      url: 'https://zygoteam.com.br',
      description:
        'Institutional website for a specialty healthcare clinic focused on complex maxillary surgeries and oral rehabilitation. Designed to convey authority, trust, and clear service communication.',
      stack: 'React.js, TypeScript, Tailwind CSS, Vercel',
    },
    {
      title: 'Biomagistral',
      subtitle: 'Compounding Pharmacy Platform',
      period: '2025',
      url: 'https://biomagistralsaojose.com.br',
      description:
        'Digital platform enabling patients to submit prescriptions, request quotes, and contact the pharmacy directly via WhatsApp — digitizing the entire intake workflow.',
      stack: 'Responsive web app, WhatsApp integration',
    },
  ],
  education: [
    {
      degree: 'Technologist Degree in Systems Analysis and Development',
      school: 'UniBF — Brazil',
      period: 'May 2025 – Present',
    },
    {
      degree: "Bachelor's Degree in Software Engineering",
      school: 'UniCesumar — Brazil',
      period: 'Sep 2023 – Oct 2027',
    },
    {
      degree: 'Full-Stack Web Development Bootcamp',
      school: 'Labenu — Brazil',
      period: 'Aug 2022 – Mar 2023',
      note: 'Intensive program covering front-end (React.js, JavaScript) and back-end (Node.js, REST APIs, databases).',
    },
    {
      degree: 'Information & Communication Technology',
      school: 'SENAI — Brazil',
      period: '',
    },
    {
      degree: 'Programming Logic',
      school: 'SENAI — Brazil',
      period: '',
    },
  ],
  additionalInfo: [
    "Driver's License: Category B (Brazil)",
    'Languages: Portuguese (native), English (intermediate — active daily use in professional tools, documentation, and online communication), Spanish (basic)',
    'Passport: GE441527 — available for relocation or international engagements',
  ],
  pdfFile: '/resumes/carlos-louzada-cv-en.pdf',
};

export const resumePt: ResumeContent = {
  locale: 'pt',
  pageTitle: 'Currículo',
  downloadLabel: 'Baixar currículo (PT)',
  printLabel: 'Salvar como PDF',
  headline: 'Desenvolvedor de Software & CTO',
  location: 'São José, SC, Brasil',
  sections: {
    summary: 'Resumo Profissional',
    skills: 'Competências Técnicas',
    experience: 'Experiência Profissional',
    military: 'Serviço Militar',
    projects: 'Projetos Selecionados',
    education: 'Formação & Capacitação',
    additional: 'Informações Adicionais',
  },
  summary: [
    'Desenvolvedor full-stack e líder de tecnologia com experiência prática na construção de aplicações web, sistemas de automação e produtos digitais de ponta a ponta. Histórico comprovado como CTO e Product Owner em startups de tecnologia, liderando times multidisciplinares e entregando soluções escaláveis com React.js, Node.js, TypeScript, PostgreSQL e plataformas BaaS (Supabase, Firebase).',
    'Experiência em fluxos de desenvolvimento assistidos por IA (GitHub Copilot, Claude, ChatGPT) para acelerar entregas e melhorar a qualidade do código. Formação na Força Aérea Brasileira traz disciplina, ownership e confiabilidade para cada projeto.',
  ],
  skills: [
    { category: 'Front-End', items: ['React.js', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS'] },
    { category: 'Back-End / Integração', items: ['Node.js', 'REST APIs', 'Webhooks'] },
    { category: 'Bancos de Dados', items: ['PostgreSQL', 'Bancos relacionais e não relacionais'] },
    { category: 'Plataformas BaaS', items: ['Supabase', 'Firebase', 'Appwrite'] },
    {
      category: 'IA & Produtividade Dev',
      items: ['GitHub Copilot', 'ChatGPT', 'Claude', 'Cursor', 'Lovable', 'Replit'],
    },
    { category: 'Mobile', items: ['Android Studio (testes e validação)'] },
    { category: 'Controle de Versão', items: ['Git', 'GitHub', 'GitLab'] },
    {
      category: 'Metodologias',
      items: ['Scrum', 'Kanban', 'Gestão de backlog', 'Planejamento de sprint', 'Definição de roadmap'],
    },
    {
      category: 'Infraestrutura / SO',
      items: ['Linux', 'Vercel', 'Administração básica de servidores'],
    },
  ],
  experiences: [
    {
      role: 'CEO / Desenvolvedor de Software',
      company: 'Louzada Tech',
      period: 'jul 2025 – o momento',
      context: 'Freelance / Autônomo',
      bullets: [
        'Liderança do ciclo completo de desenvolvimento — da ideação e prototipação ao deploy — construindo aplicações web e produtos digitais para clientes de diferentes setores.',
        'Responsável por estratégia de produto, levantamento de requisitos, priorização de features e gestão de relacionamento com clientes.',
        'Desenvolvimento de sistemas web modernos e responsivos com React.js, TypeScript, Node.js, REST APIs e PostgreSQL/Supabase.',
        'Aplicação de fluxos de desenvolvimento assistidos por IA para acelerar entregas, automatizar tarefas repetitivas e manter alta qualidade de código.',
        'Gestão de projetos com metodologias ágeis (Scrum/Kanban), garantindo entregas consistentes e alinhamento com objetivos de negócio.',
      ],
      stack: 'React.js, TypeScript, Node.js, PostgreSQL, Supabase, Firebase, Git/GitHub',
    },
    {
      role: 'Chief Technology Officer (CTO)',
      company: 'MagiWorks',
      period: 'jan 2025 – o momento',
      context: 'Plataforma marketplace de serviços digitais',
      bullets: [
        'Definição da arquitetura tecnológica, estratégia de infraestrutura e padrões de engenharia em todos os produtos.',
        'Liderança de times multidisciplinares (engenharia, produto, design), alinhando execução técnica aos objetivos de negócio.',
        'Arquitetura e implementação de sistemas orientados a serviços, integrações de API e estruturas de banco escaláveis.',
        'Adoção de ferramentas de IA e ambientes modernos de desenvolvimento para reduzir time-to-market e melhorar qualidade.',
        'Estabelecimento de processos ágeis (Scrum/Kanban), melhorando previsibilidade de sprints e consistência de entregas.',
      ],
      stack: 'JavaScript, TypeScript, Python, React.js, Node.js, PostgreSQL, Supabase, Firebase, Appwrite, Git/GitHub',
    },
    {
      role: 'Product Owner (PO)',
      company: 'Impulse RH Consultoria',
      period: 'mar 2025 – o momento',
      context: 'HR Tech / SaaS B2B',
      bullets: [
        'Gestão do backlog de produto: definição de histórias de usuário, requisitos funcionais e critérios de aceitação.',
        'Ponte entre clientes, stakeholders e time técnico, garantindo prioridades claras e bem fundamentadas.',
        'Planejamento e acompanhamento de sprints com Scrum/Kanban, promovendo melhoria contínua e entregas no prazo.',
        'Participação ativa na validação de desenvolvimento front-end (React.js, Tailwind CSS) e garantia de qualidade.',
      ],
      stack: 'Jira, Scrum, Kanban, React.js, Tailwind CSS, Git/GitHub',
    },
    {
      role: 'Desenvolvedor Front-End & Mobile',
      company: 'Digital Influencer Networking',
      period: 'out 2023 – mai 2024',
      bullets: [
        'Construção e manutenção de interfaces web e mobile com foco em responsividade, usabilidade e consistência entre dispositivos.',
        'Desenvolvimento e validação de features em app Android, garantindo estabilidade e compatibilidade.',
        'Integração de REST APIs e serviços de terceiros para aplicações dinâmicas orientadas a dados.',
        'Colaboração com times de produto e design em ambiente ágil, usando Jira e Git.',
      ],
      stack: 'React.js, TypeScript, HTML5, CSS3, Node.js, Android Studio, Git/GitHub, Jira',
    },
    {
      role: 'Analista de Suporte Técnico Jr',
      company: 'HSystem',
      period: 'jun 2023 – set 2023',
      bullets: [
        'Suporte técnico a clientes hoteleiros via HelpDesk, resolvendo incidentes em PMS e integrações de reservas.',
        'Diagnóstico de problemas técnicos, análise de registros em banco de dados e aplicação de soluções.',
        'Trabalho com sistemas de gestão hoteleira (PMS), canais de distribuição e plataforma Omnibees.',
        'Uso de ferramentas de acesso remoto e comunicação clara com clientes durante todo o processo.',
      ],
      stack: 'PMS, Omnibees, HelpDesk, acesso remoto, consultas SQL',
    },
  ],
  military:
    'Força Aérea Brasileira — Serviço militar que desenvolveu forte competência em disciplina, organização, responsabilidade e trabalho em equipe, qualidades aplicadas diretamente em ambientes de tecnologia.',
  projects: [
    {
      title: 'Gestor ERP',
      subtitle: 'Sistema de gestão empresarial',
      period: '2025',
      url: 'https://gestor.louzadatech.com',
      description:
        'ERP web completo para pequenas e médias empresas. Dashboard em tempo real com faturamento diário, ticket médio, alertas de estoque e acompanhamento de vendas. Desenvolvido end-to-end: arquitetura, desenvolvimento, testes e deploy.',
      stack: 'React.js, TypeScript, Tailwind CSS, PostgreSQL, Supabase, Supabase Auth',
      tools: 'Lovable, Cursor, GitHub Copilot, Git/GitHub',
    },
    {
      title: 'MagiWorks',
      subtitle: 'Marketplace de serviços digitais',
      period: '2024',
      url: 'https://magiworks.com.br',
      description:
        'Plataforma web conectando clientes e prestadores de serviço. Autenticação, perfis, listagem de serviços e sistema de intermediação. Construída full-stack da ideação ao deploy.',
      stack: 'React.js, TypeScript, Node.js, PostgreSQL, Supabase',
      tools: 'Lovable, Cursor, GitHub Copilot, Scrum/Kanban',
    },
    {
      title: 'Tech Jobs Intelligence Platform',
      period: '2024',
      description:
        'Plataforma de visualização de dados do mercado de trabalho em tecnologia. Tendências de tecnologias mais demandadas, níveis de experiência e distribuição remoto/híbrido/presencial.',
      stack: 'React.js, TypeScript, Tailwind CSS, Vercel',
      tools: 'GitHub Copilot, ChatGPT',
    },
    {
      title: 'Smells Clean LLC',
      subtitle: 'Site institucional',
      period: '2024',
      url: 'https://smellscleanllc.com',
      description:
        'Site institucional para empresa americana de limpeza residencial e comercial. Foco em conversão, captura de leads e responsividade mobile.',
      stack: 'React.js, TypeScript, Tailwind CSS, Vercel',
    },
    {
      title: 'Zygoteam',
      subtitle: 'Clínica de reabilitação maxilar',
      period: '2025',
      url: 'https://zygoteam.com.br',
      description:
        'Site institucional para clínica especializada em cirurgias maxilares complexas e reabilitação oral. Design voltado a autoridade, confiança e comunicação clara dos serviços.',
      stack: 'React.js, TypeScript, Tailwind CSS, Vercel',
    },
    {
      title: 'Biomagistral',
      subtitle: 'Plataforma de farmácia de manipulação',
      period: '2025',
      url: 'https://biomagistralsaojose.com.br',
      description:
        'Plataforma digital para envio de receitas, solicitação de orçamentos e contato direto via WhatsApp — digitalizando todo o fluxo de atendimento.',
      stack: 'Web app responsivo, integração WhatsApp',
    },
  ],
  education: [
    {
      degree: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
      school: 'UniBF — Brasil',
      period: 'mai 2025 – o momento',
    },
    {
      degree: 'Bacharelado em Engenharia de Software',
      school: 'UniCesumar — Brasil',
      period: 'set 2023 – out 2027',
    },
    {
      degree: 'Bootcamp Desenvolvimento Web Full Stack',
      school: 'Labenu — Brasil',
      period: 'ago 2022 – mar 2023',
      note: 'Programa intensivo com front-end (React.js, JavaScript) e back-end (Node.js, REST APIs, bancos de dados).',
    },
    {
      degree: 'Tecnologia da Informação e Comunicação',
      school: 'SENAI — Brasil',
      period: '',
    },
    {
      degree: 'Lógica de Programação',
      school: 'SENAI — Brasil',
      period: '',
    },
  ],
  additionalInfo: [
    'CNH: Categoria B (Brasil)',
    'Idiomas: Português (nativo), Inglês (intermediário — uso diário em ferramentas profissionais, documentação e comunicação online), Espanhol (básico)',
    'Passaporte: GE441527 — disponível para realocação ou engajamentos internacionais',
  ],
  pdfFile: '/resumes/carlos-louzada-cv-pt.pdf',
};
