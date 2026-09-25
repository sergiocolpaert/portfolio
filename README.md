# Portfolio — Sergio Colpaert

Site pessoal de apresentação de cases (UI/UX & Product Design), multilíngue (PT/ES/EN).

Stack: Next.js (App Router) + TypeScript + Tailwind CSS + `next-intl` + MDX.
Arquitetura completa em `arquitetura-portfolio.md` (referência original do projeto).

## Rodando localmente

```bash
npm install
npm run dev
```

Abre em `http://localhost:3000` e redireciona para `/pt`, `/es` ou `/en` conforme o idioma do navegador (fallback: `en`).

## Adicionando um novo case

Cada case é montado em seções tipadas (ver `lib/case-doc.ts`), não em MDX. Use `content/cases/ceffy/` como modelo.

1. Crie `content/cases/[slug]/meta.json` (dados não-textuais: ano, categoria, tags, ferramentas, imagem de capa, link do Behance; `featuredOrder` define a posição na listagem e no destaque da home).
2. Crie `content/cases/[slug]/build.ts` (esqueleto compartilhado: números das seções, imagens, dimensões) e `texts.ts` (textos em PT/EN/ES), mais `pt.ts`, `en.ts` e `es.ts` que exportam `meta` (`title`, `client`, `role`, `tagline`) e `sections`.
3. Coloque as imagens em `public/images/cases/[slug]/` (WebP, 2800px de largura no máximo). Mantenha como imagem só o que for visual (mockups, wireframes, style guide); textos, listas e tabelas viram blocos HTML (`stats`, `steps`, `sitemap`, `persona`, `mapping`, `speclist`, `scores`, `palette`...).

## Currículo

Coloque os PDFs em `public/cv/cv-pt.pdf`, `cv-es.pdf`, `cv-en.pdf`. O botão de download troca o arquivo conforme o idioma ativo.

## Pendências antes do launch

- [ ] Popular os 3–5 cases prioritários (hoje existem `semiglobe` e `fac-infoserver`, com as telas do projeto nativas + link "Ver no Behance")
- [ ] Atualizar links de LinkedIn/Behance em `components/Footer.tsx` e `app/[locale]/contato/page.tsx`
- [ ] Configurar analytics (Plausible ou GA4)
- [ ] Deploy na Vercel
