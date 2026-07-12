import type { Locale } from './i18n';

export type SkillCategory = 'frontend' | 'backend' | 'tools' | 'design' | 'soft';

export interface Skill {
  id: string;
  name: string;
  icon?: string;
  category: SkillCategory;
}

export const skillsRegistry: Record<string, Skill> = {
  html: { id: 'html', name: 'HTML5', icon: '/icons/html.svg', category: 'frontend' },
  css: { id: 'css', name: 'CSS3', icon: '/icons/css.svg', category: 'frontend' },
  javascript: { id: 'javascript', name: 'JavaScript', icon: '/icons/javascript.svg', category: 'frontend' },
  typescript: { id: 'typescript', name: 'TypeScript', icon: '/icons/javascript.svg', category: 'frontend' },
  react: { id: 'react', name: 'React', icon: '/icons/react.svg', category: 'frontend' },
  nodejs: { id: 'nodejs', name: 'Node.js', icon: '/icons/nodejs.png', category: 'backend' },
  git: { id: 'git', name: 'Git', icon: '/icons/git.svg', category: 'tools' },
  vscode: { id: 'vscode', name: 'VSCode', icon: '/icons/vscode.svg', category: 'tools' },
  linux: { id: 'linux', name: 'Linux', icon: '/icons/linux-maior.png', category: 'tools' },
  movidesk: { id: 'movidesk', name: 'MoviDesk', icon: '/icons/movidesk-form.png', category: 'tools' },
  anydesk: { id: 'anydesk', name: 'AnyDesk', icon: '/icons/icons8-anydesk-128.png', category: 'tools' },
  figma: { id: 'figma', name: 'Figma', icon: '/icons/icons8-figma-128.png', category: 'design' },
  product: { id: 'product', name: 'Gestão de Produto', category: 'soft' },
  helpdesk: { id: 'helpdesk', name: 'Help Desk', category: 'soft' },
  excel: { id: 'excel', name: 'Microsoft Excel', category: 'tools' },
  crm: { id: 'crm', name: 'CRM', category: 'soft' },
  saas: { id: 'saas', name: 'SaaS', category: 'soft' },
  postman: { id: 'postman', name: 'Postman', category: 'tools' },
  tailwind: { id: 'tailwind', name: 'Tailwind CSS', category: 'frontend' },
  jira: { id: 'jira', name: 'Jira', category: 'tools' },
  pipedrive: { id: 'pipedrive', name: 'Pipedrive', category: 'tools' },
  agile: { id: 'agile', name: 'Metodologias Ágeis', category: 'soft' },
  softwareEngineering: {
    id: 'softwareEngineering',
    name: 'Engenharia de Software',
    category: 'soft',
  },
  logicProgramming: { id: 'logicProgramming', name: 'Programação Lógica', category: 'soft' },
};

const skillNamesByLocale: Partial<Record<Locale, Record<string, string>>> = {
  en: {
    product: 'Product Management',
    agile: 'Agile Methodologies',
    softwareEngineering: 'Software Engineering',
    logicProgramming: 'Programming Logic',
  },
};

function localizeSkill(skill: Skill, locale: Locale): Skill {
  return {
    ...skill,
    name: skillNamesByLocale[locale]?.[skill.id] ?? skill.name,
  };
}

export function resolveSkills(ids: string[], locale: Locale = 'pt'): Skill[] {
  return ids
    .map((id) => skillsRegistry[id])
    .filter((skill): skill is Skill => skill !== undefined)
    .map((skill) => localizeSkill(skill, locale));
}

export function collectSkillsFromItems(items: { skills?: string[] }[], locale: Locale = 'pt'): Skill[] {
  const seen = new Set<string>();

  return items.flatMap((item) => resolveSkills(item.skills ?? [], locale)).filter((skill) => {
    if (seen.has(skill.id)) return false;
    seen.add(skill.id);
    return true;
  });
}
