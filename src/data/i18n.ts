export type Locale = 'pt' | 'en';

export const defaultLocale: Locale = 'pt';

export const locales: Record<
  Locale,
  {
    code: string;
    label: string;
    shortLabel: string;
    ogLocale: string;
  }
> = {
  pt: {
    code: 'pt-BR',
    label: 'Português',
    shortLabel: 'PT',
    ogLocale: 'pt_BR',
  },
  en: {
    code: 'en',
    label: 'English',
    shortLabel: 'EN',
    ogLocale: 'en_US',
  },
};

export const navByLocale: Record<Locale, { label: string; href: string }[]> = {
  pt: [
    { label: 'Início', href: '/' },
    { label: 'Sobre', href: '/about' },
    { label: 'Experiência', href: '/experience' },
    { label: 'Formação', href: '/education' },
    { label: 'Produtos', href: '/projects' },
  ],
  en: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Experience', href: '/experience' },
    { label: 'Education', href: '/education' },
    { label: 'Products', href: '/projects' },
  ],
};

const supportedBasePaths = new Set([
  '/',
  '/about',
  '/experience',
  '/education',
  '/certificates',
  '/projects',
  '/resume',
]);

export function normalizePath(pathname: string): string {
  const path = pathname.split('?')[0].replace(/\/$/, '') || '/';
  if (path === '/resume/en') return '/resume';
  if (path === '/en') return '/';
  if (path.startsWith('/en/')) return path.replace('/en', '') || '/';
  return path;
}

export function localizePath(path: string, locale: Locale): string {
  const normalized = normalizePath(path);
  if (!supportedBasePaths.has(normalized)) return locale === defaultLocale ? normalized : `/en${normalized}`;
  if (locale === defaultLocale) return normalized;
  if (normalized === '/') return '/en';
  if (normalized === '/resume') return '/resume/en';
  return `/en${normalized}`;
}

export function getLanguageLinks(pathname: string) {
  const basePath = normalizePath(pathname);

  return (Object.keys(locales) as Locale[]).map((locale) => ({
    locale,
    ...locales[locale],
    href: localizePath(basePath, locale),
  }));
}

export function getLocaleFromPath(pathname: string): Locale {
  return pathname === '/resume/en' || pathname === '/en' || pathname.startsWith('/en/') ? 'en' : defaultLocale;
}

export const uiByLocale: Record<
  Locale,
  {
    homeAriaLabel: string;
    openNavigation: string;
    closeNavigation: string;
    mainNavigation: string;
    activateLightMode: string;
    activateDarkMode: string;
    languageSwitcher: string;
    footerCredit: string;
    footerContactNav: string;
    footerWhatsApp: string;
    footerSocialNav: string;
    technologies: string;
    viewProject: string;
    viewCode: string;
    projectScreenshotAlt: string;
    issuedIn: string;
    expiresIn: string;
    authenticityCode: string;
    showCredential: string;
    viewCertificate: string;
  }
> = {
  pt: {
    homeAriaLabel: 'Início',
    openNavigation: 'Abrir menu de navegação',
    closeNavigation: 'Fechar menu de navegação',
    mainNavigation: 'Navegação principal',
    activateLightMode: 'Ativar modo claro',
    activateDarkMode: 'Ativar modo escuro',
    languageSwitcher: 'Selecionar idioma',
    footerCredit: 'Desenvolvido por',
    footerContactNav: 'Contato',
    footerWhatsApp: 'WhatsApp',
    footerSocialNav: 'Redes e links',
    technologies: 'Tecnologias:',
    viewProject: 'Ver produto',
    viewCode: 'Ver código',
    projectScreenshotAlt: 'Captura de tela do projeto',
    issuedIn: 'Emitido em',
    expiresIn: 'Expira em',
    authenticityCode: 'Código de autenticidade',
    showCredential: 'Exibir credencial',
    viewCertificate: 'Ver certificado',
  },
  en: {
    homeAriaLabel: 'Home',
    openNavigation: 'Open navigation menu',
    closeNavigation: 'Close navigation menu',
    mainNavigation: 'Main navigation',
    activateLightMode: 'Enable light mode',
    activateDarkMode: 'Enable dark mode',
    languageSwitcher: 'Select language',
    footerCredit: 'Developed by',
    footerContactNav: 'Contact',
    footerWhatsApp: 'WhatsApp',
    footerSocialNav: 'Social and links',
    technologies: 'Technologies:',
    viewProject: 'View product',
    viewCode: 'View code',
    projectScreenshotAlt: 'Project screenshot',
    issuedIn: 'Issued',
    expiresIn: 'Expires',
    authenticityCode: 'Credential code',
    showCredential: 'Show credential',
    viewCertificate: 'View certificate',
  },
};
