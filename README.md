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

1. Crie `content/cases/[slug]/meta.json` (dados não-textuais: ano, tags, ferramentas, imagem de capa, link do Behance).
2. Crie `content/cases/[slug]/pt.mdx`, `es.mdx`, `en.mdx` com o texto do case em cada idioma (cada arquivo exporta `meta` com `title`, `client`, `role`).
3. Adicione a imagem de capa em `public/images/cases/[slug]/cover.jpg`.
4. Para imagens de conteúdo do case (telas do projeto), use o componente `<CaseImage />` (`components/CaseImage.tsx`) dentro do `.mdx`, importando-o no topo do arquivo — ele usa `next/image` para otimização automática. Exemplo:
   ```mdx
   import CaseImage from "@/components/CaseImage";

   <CaseImage src="/images/cases/[slug]/tela-01.webp" width={2800} height={1600} alt="..." />
   ```

## Currículo

Coloque os PDFs em `public/cv/cv-pt.pdf`, `cv-es.pdf`, `cv-en.pdf`. O botão de download troca o arquivo conforme o idioma ativo.

## Pendências antes do launch

- [ ] Substituir os 3 PDFs de currículo em `public/cv/`
- [ ] Popular os 3–5 cases prioritários (hoje só existe `semiglobe`, com as 8 telas do projeto nativas + link "Ver no Behance")
- [ ] Atualizar links de LinkedIn/Behance em `components/Footer.tsx` e `app/[locale]/contato/page.tsx`
- [ ] Configurar analytics (Plausible ou GA4)
- [ ] Deploy na Vercel
