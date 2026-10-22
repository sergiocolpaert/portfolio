import type { CaseFrontmatter } from "@/lib/cases";
import type { OrganicamenteTexts } from "./build";

export const texts: { meta: CaseFrontmatter; sections: OrganicamenteTexts } = {
  meta: {
    title: "Uma inscrição guiada em cinco passos e um painel para operar a comunidade",
    client: "Organicamente",
    role: "Product Designer",
    tagline:
      "Redesenho da porta de entrada e dos bastidores de uma CSA no Rio. O formulário de três páginas virou um fluxo que valida a região logo no início, e as planilhas viraram um painel para a equipe.",
  },
  sections: {
    about: { title: "Sobre", lead: "A Organicamente é uma CSA (Comunidade que Sustenta a Agricultura) no Rio de Janeiro. Os assinantes financiam o plantio de agricultores familiares agroecológicos e recebem cestas fixas toda semana ou a cada quinze dias.\n\nAtuo no projeto como parceiro de crescimento e produto, e este case conta como redesenhei a porta de entrada e os bastidores da operação.", tags: ["Product Design", "UI/UX Design"], alt: "Organicamente: telas do fluxo de inscrição em três celulares" },
    summary: { title: "Resumo do projeto", alt: "Resumo: problema, meu papel, restrição, resultado e stack. Leads atendidos não chegavam a assinar e a equipe operava tudo em planilhas. Product Designer, da descoberta ao código, trabalhando sozinho. Sistema e painel no ar desde 01/10/2026, com 6 novos assinantes no primeiro mês." },
    context: { title: "Contexto", lead: "Quem assina uma CSA não compra um produto avulso. Entra em um pacto mensal recorrente, ligado a um agricultor específico e a uma rota de entrega por região. A inscrição é um momento delicado, porque a pessoa precisa entender o modelo, escolher plano e região e confiar antes de pagar.", alt: "Três coisas que a inscrição precisa resolver: entender o modelo, escolher plano e região, confiar antes de pagar" },
    problem: {
      title: "O problema",
      altSides: "Dois lados do problema: quem queria assinar enfrentava um Google Forms de dez anos, e quem operava conferia tudo à mão",
      altNumbers: "Números do formulário antigo: 3 páginas, 16 campos, 8 regras em bloco de texto e 2 tabelas de preço",
      altForms: "Prints do Google Forms antigo, com regras e condições financeiras em bloco de texto",
    },
    users: { title: "Usuários", lead: "Eram dois públicos com necessidades diferentes.", alt: "Quem quer assinar precisa entender, simplicidade e confiança. A equipe precisa saber quem entrou, quanto cobrar, para onde entregar e quem está inadimplente" },
    discovery: {
      title: "Como percebi o problema",
      lead: "Os leads chegavam, o atendimento respondia, e mesmo assim poucos fechavam. Nos dois meses de referência que tenho, foram 5 assinaturas para 108 leads, cerca de 4,6%. A amostra é pequena, mas serve como linha de base.\n\nEm maio apresentei à equipe uma página de cadastro interativa, pensada para filtrar bairros fora de rota logo no primeiro clique e capturar o contato antes de o lead desistir. Ao ver o novo fluxo, a equipe apontou também as dores da gestão. Entendi como organizavam os clientes em planilhas e decidi criar o painel.",
      hypothesis: "Hipótese: o formulário era um bloqueio forte na decisão.",
      hypothesisNote: "Não era a única causa possível, já que preço, expectativa sobre alimentos sem agrotóxico e leads fora da rota também pesavam. Mas era a causa que eu podia testar e redesenhar.",
      alt: "Linha de base: cerca de 4,6% de conversão de lead para assinante, com 108 leads e 5 assinaturas em dois meses",
    },
    decisions: { title: "Decisões de design", lead: "Segui a lógica “o usuário precisa de X, então fiz Y”.", alt: "Seis decisões de design, cada uma ligando uma necessidade do assinante ou da equipe a uma solução" },
    discarded: { title: "O que descartei", alt: "Descartei manter o Forms com ajustes e usar ferramentas prontas. Optei por projetar no Figma e construir com Claude Code, Supabase e Vercel" },
    solution: { title: "A solução", lead: "Inscrição em cinco passos: região e agricultor, assinatura e opcionais, dados de contato, endereço e contingência de ausência, e por fim o pacto com o resumo financeiro. Ao final, a cobrança sai automaticamente pelo Asaas, por PIX ou boleto.", alt: "Fluxo de inscrição da Organicamente em cinco telas mobile" },
    admin: {
      title: "Painel administrativo",
      lead: "Feito para a equipe saber quem entrou, quanto cobrar, para onde entregar e quem está inadimplente, sem remontar isso a cada semana.",
      altFeatures: "Funções do painel: visão geral, entregas, ficha do assinante e relatórios",
      altOverview: "Painel da Organicamente em laptop, com a tela de login e os relatórios",
      altScreens: "Telas de Entregas e Cestas e de Visão Geral do painel",
    },
    system: {
      title: "Design system do painel",
      lead: "O painel cresceu por fases e acumulou estilos visuais paralelos e 161 estilos escritos direto no HTML. Para seguir evoluindo sozinho, sem retrabalho, criei uma base única de tokens e componentes, que hoje vive no código e no Figma com os mesmos nomes.",
      altNumbers: "Números do design system: 68 variáveis, 20 estilos, 23 componentes e 21 ícones",
      altShowcase: "Fundamentos e componentes do painel: cores, tipografia, botões, tags e alertas",
      altDecisions: "Decisões do sistema: contraste dentro do AA, pensado para o celular, Figma e código com os mesmos nomes",
      note: "O fluxo de inscrição ainda usa os estilos da página pública, com tokens próprios. Unificar os dois sistemas é um dos próximos passos.",
    },
    results: {
      title: "Resultados",
      lead: "O projeto é recente e a coleta de dados ainda está em andamento, mas alguns resultados já aparecem.",
      altHighlights: "+140% de novos assinantes por mês (6 no primeiro mês, contra média de 2,5) e −70% no tempo para fechar uma assinatura (de 2 a 3 dias úteis para 12h a 24h)",
      altTable: "Tabela de medição: conversão, conclusão por etapa, dúvidas no atendimento, tempo de fechamento e trabalho do financeiro, antes e agora",
      note: "A equipe validou o painel e está em transição do modelo antigo para o novo, com treinamento oficial previsto. Com mais meses de dados, a conversão por etapa vai mostrar onde o fluxo ainda perde pessoas e orientar a segunda iteração.",
    },
    learnings: { title: "Aprendizados", lead: "Não pude entrevistar assinantes nem leads que desistiram, então não sei com certeza se o formulário era o gargalo principal, e a validação do fluxo foi feita apenas com a equipe interna. Se fosse começar de novo, faria cinco conversas curtas antes de desenhar e testaria o fluxo com pessoas de fora.\n\nPor isso, os próximos passos são entrevistar assinantes recentes e leads que não fecharam, medir o funil por etapa e usar esses dados na segunda iteração. Ela já prevê remover a taxa de adesão e incluir produtos parceiros como ovos, mel e laticínios no passo dois." },
  },
};
