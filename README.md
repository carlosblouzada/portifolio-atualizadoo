# Portfólio de Carlos Bergson

Portfólio pessoal desenvolvido com [Astro](https://astro.build), com layout responsivo, dark mode e conteúdo separado em arquivos de dados editáveis.

**Site:** [portifolio-carlos-louzada.netlify.app](https://portifolio-carlos-louzada.netlify.app)

## Funcionalidades

- Página inicial com apresentação e foto de perfil
- Competências com ícones contextualizadas em experiências, formação, certificados e projetos
- Portfólio de projetos com cards
- Sobre, experiências, formação e certificados em timeline
- Formulário de contato via FormSubmit.co
- Dark mode completo (persistido no navegador)
- Layout responsivo (mobile, tablet e desktop)
- SEO com meta tags e Open Graph

## Estrutura do projeto

```
src/
├── components/     # Header, Footer, ProjectCard, etc.
├── data/           # Conteúdo editável (projetos, skills, experiências)
├── layouts/        # BaseLayout com SEO
├── pages/          # Rotas do site
├── scripts/        # Dark mode e menu mobile
└── styles/         # CSS com variáveis e dark mode
public/
├── icons/          # Ícones e imagens de projetos
└── images/profile/ # Foto de perfil
```

## Como rodar localmente

```bash
npm install
npm run dev
```

Acesse [http://localhost:4321/](http://localhost:4321/) — **não** abra `index.html` direto no navegador.

> Se aparecer `Cannot GET /index.html`, você está usando um servidor estático na raiz do projeto. Use `npm run dev` ou, após o build, `npm run preview`.

## Build e deploy

```bash
npm run build
npm run preview
```

O deploy no Netlify usa `npm run build` e publica a pasta `dist/` (configurado em `netlify.toml`).

## Atualizar conteúdo

Edite os arquivos em `src/data/`:

| Arquivo | Conteúdo |
|---------|----------|
| `site.ts` | Nome, bio, redes sociais, e-mail |
| `skills.ts` | Registro de tecnologias e ícones |
| `projects.ts` | Lista de projetos |
| `experience.ts` | Experiências profissionais e formação |
| `certificates.ts` | Certificados e licenças |

## Licença

MIT
