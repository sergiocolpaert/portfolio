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
    "about": {
      "title": "Sobre",
      "lead": "A Organicamente é uma CSA (Comunidade que Sustenta a Agricultura) no Rio de Janeiro. Os assinantes financiam o plantio de agricultores familiares agroecológicos e recebem cestas fixas toda semana ou a cada quinze dias.\n\nAtuo no projeto como parceiro de crescimento e produto, e este case conta como redesenhei a porta de entrada e os bastidores da operação.",
      "tags": [
        "Product Design",
        "UI/UX Design"
      ],
      "alt": "Organicamente: telas do fluxo de inscrição em três celulares"
    },
    "summary": {
      "title": "Resumo do projeto",
      "rows": [
        {
          "label": "Problema",
          "text": "Leads atendidos não chegavam a assinar e a equipe operava tudo em planilhas"
        },
        {
          "label": "Meu papel",
          "text": "Product Designer, da descoberta ao código, trabalhando sozinho"
        },
        {
          "label": "Restrição",
          "text": "Equipe pequena e não técnica, orçamento enxuto, cobrança integrada ao Asaas e quase dez anos de base para migrar"
        },
        {
          "label": "Resultado",
          "text": "Sistema e painel no ar desde 01/10/2026. No primeiro mês, 6 novos assinantes e fechamento em 12h a 24h. Coleta de dados em andamento"
        },
        {
          "label": "Stack",
          "text": "Figma, Claude Code, Supabase, Vercel e Google Apps Script"
        }
      ]
    },
    "context": {
      "title": "Contexto",
      "lead": "Quem assina uma CSA não compra um produto avulso. Entra em um pacto mensal recorrente, ligado a um agricultor específico e a uma rota de entrega por região. A inscrição é um momento delicado, porque a pessoa precisa entender o modelo, escolher plano e região e confiar antes de pagar.",
      "stepLabel": "Passo",
      "steps": [
        "Entender o modelo",
        "Escolher plano e região",
        "Confiar antes de pagar"
      ]
    },
    "problem": {
      "title": "O problema",
      "sides": [
        {
          "label": "Para quem queria assinar",
          "text": "O caminho começava em um Google Forms com cerca de dez anos. Antes de qualquer escolha, a pessoa enfrentava oito regras em bloco de texto, duas tabelas de preço com dezenas de valores e só então escolhia a região. No total eram três páginas e 16 campos, com o e-mail pedido duas vezes. Muita gente ignorava o texto e chamava o atendimento no WhatsApp para perguntar o que já estava escrito."
        },
        {
          "label": "Para quem operava",
          "text": "Cada inscrição era conferida à mão. O financeiro calculava o valor de cada assinante manualmente, e os dados viviam em planilhas difíceis de cruzar, sem nenhuma automação."
        }
      ],
      "kpis": [
        {
          "label": "Páginas",
          "value": "3",
          "caption": "até concluir a inscrição"
        },
        {
          "label": "Campos",
          "value": "16",
          "caption": "com o e-mail pedido duas vezes"
        },
        {
          "label": "Regras",
          "value": "8",
          "caption": "em bloco de texto, antes de tudo"
        },
        {
          "label": "Tabelas de preço",
          "value": "2",
          "caption": "com dezenas de valores"
        }
      ],
      "altRules": "Print do Google Forms antigo: regras em bloco de texto",
      "altFields": "Print do Google Forms antigo: campos e condições financeiras"
    },
    "users": {
      "title": "Usuários",
      "lead": "Eram dois públicos com necessidades diferentes.",
      "cards": [
        {
          "label": "Quem quer assinar",
          "text": "Precisa entender o que está assinando, sentir que o pedido é simples e confiar em quem vai cultivar seus alimentos.",
          "tags": [
            "Entender",
            "Simplicidade",
            "Confiança"
          ]
        },
        {
          "label": "A equipe",
          "text": "Com uma pessoa na gestão, uma no atendimento e duas no financeiro, precisa saber quem entrou, quanto cobrar, para onde entregar e quem está inadimplente, sem remontar isso a cada semana.",
          "tags": [
            "Quem entrou",
            "Quanto cobrar",
            "Para onde entregar",
            "Quem está inadimplente"
          ]
        }
      ]
    },
    "discovery": {
      "title": "Como percebi o problema",
      "lead": "Os leads chegavam, o atendimento respondia, e mesmo assim poucos fechavam. Nos dois meses de referência que tenho, foram 5 assinaturas para 108 leads, cerca de 4,6%. A amostra é pequena, mas serve como linha de base.\n\nEm maio apresentei à equipe uma página de cadastro interativa, pensada para filtrar bairros fora de rota logo no primeiro clique e capturar o contato antes de o lead desistir. Ao ver o novo fluxo, a equipe apontou também as dores da gestão. Entendi como organizavam os clientes em planilhas e decidi criar o painel.",
      "metric": {
        "label": "Linha de base",
        "value": "≈ 4,6%",
        "caption": "de conversão de lead para assinante",
        "rows": [
          {
            "label": "Leads",
            "value": "108"
          },
          {
            "label": "Assinaturas",
            "value": "5"
          },
          {
            "label": "Mês de referência 1",
            "value": "46 leads · 2 assinaturas"
          },
          {
            "label": "Mês de referência 2",
            "value": "62 leads · 3 assinaturas"
          }
        ],
        "note": "Amostra pequena, usada como referência para medir o novo fluxo."
      },
      "hypothesis": "Hipótese: o formulário era um bloqueio forte na decisão.",
      "hypothesisNote": "Não era a única causa possível, já que preço, expectativa sobre alimentos sem agrotóxico e leads fora da rota também pesavam. Mas era a causa que eu podia testar e redesenhar."
    },
    "decisions": {
      "title": "Decisões de design",
      "lead": "Segui a lógica “o usuário precisa de X, então fiz Y”.",
      "decisionLabel": "Então",
      "rows": [
        {
          "label": "01 · Assinante",
          "text": "Quem chega precisa se sentir em casa antes de se comprometer.",
          "decision": "Inverti o funil. A primeira tela pede a região e já mostra a foto, a história e o dia de entrega do agricultor responsável. As regras ficam para o último passo, em cards visuais."
        },
        {
          "label": "02 · Equipe",
          "text": "A equipe precisa saber cedo se consegue atender a pessoa.",
          "decision": "O bairro é validado no primeiro passo. Quem mora fora da rota escolhe “Meu bairro não está na lista”, o botão de avançar é travado e a pessoa é levada ao WhatsApp para entrar em uma lista de espera. Ninguém gasta tempo preenchendo um cadastro que não poderia ser atendido."
        },
        {
          "label": "03 · Equipe",
          "text": "A equipe precisa recuperar quem desiste.",
          "decision": "O contato vem antes do endereço. Quem abandona no meio já deixou nome e WhatsApp, e o atendimento pode retomar a conversa."
        },
        {
          "label": "04 · Assinante",
          "text": "A dúvida mais comum era se o preço era por entrega ou por mês.",
          "decision": "Troquei “cesta” por “assinatura” em todas as telas. Criei também um resumo lateral que soma assinatura, opcionais e taxa de adesão e mostra o total do primeiro mês."
        },
        {
          "label": "05 · Assinante",
          "text": "Quem entra no meio do mês não deveria depender de conta manual.",
          "decision": "O sistema calcula o valor proporcional pelas entregas restantes."
        },
        {
          "label": "06 · Equipe",
          "text": "A logística precisa servir à rota.",
          "decision": "Retirei a escolha de faixas de horário e a opção de ligar na hora. A decisão veio da gestão, a partir das restrições operacionais de entrega."
        }
      ]
    },
    "discarded": {
      "title": "O que descartei",
      "items": [
        {
          "kind": "no",
          "title": "Descartei: manter o Forms com ajustes",
          "text": "O problema estava na estrutura e não na aparência."
        },
        {
          "kind": "no",
          "title": "Descartei: usar ferramentas prontas",
          "text": "Por custo e pelas limitações para modelar a lógica de uma CSA."
        },
        {
          "kind": "yes",
          "title": "Optei por: projetar no Figma e construir com Claude Code, Supabase e Vercel",
          "text": "O que me deixou desenhar, testar e ajustar com a equipe sem depender de outro time."
        }
      ]
    },
    "solution": {
      "title": "A solução",
      "lead": "Inscrição em cinco passos: região e agricultor, assinatura e opcionais, dados de contato, endereço e contingência de ausência, e por fim o pacto com o resumo financeiro.",
      "screens": [
        {
          "title": "Região e agricultor",
          "caption": "A primeira tela pede a região e já mostra o agricultor responsável",
          "alt": "Passo 1: escolha de região e bairro"
        },
        {
          "title": "Assinatura e opcionais",
          "caption": "Assinatura, opcionais e resumo lateral com o total do primeiro mês",
          "alt": "Passo 2: tamanho da assinatura"
        },
        {
          "title": "Dados de contato",
          "caption": "Nome e WhatsApp antes do endereço",
          "alt": "Passo 3: identificação"
        },
        {
          "title": "Endereço e ausência",
          "caption": "Endereço de entrega e o que fazer em caso de ausência",
          "alt": "Passo 4: endereço de entrega"
        },
        {
          "title": "Pacto e resumo",
          "caption": "Regras em cards visuais e resumo financeiro",
          "alt": "Passo 5: pacto de confiança e resumo financeiro"
        }
      ],
      "note": "Cobrança automática: ao final da inscrição, a cobrança sai automaticamente pelo Asaas, por PIX ou boleto."
    },
    "admin": {
      "title": "Painel administrativo",
      "lead": "Feito para a equipe saber quem entrou, quanto cobrar, para onde entregar e quem está inadimplente, sem remontar isso a cada semana.",
      "features": [
        {
          "title": "Visão geral",
          "text": "Faturamento recorrente, clientes ativos, cobranças em aberto, fila de pedidos para aprovar e avisos automáticos, como cobranças atrasadas."
        },
        {
          "title": "Entregas",
          "text": "Organiza as cestas por agricultor e dia da semana e gera o roteiro de entregas."
        },
        {
          "title": "Ficha do assinante",
          "text": "Status de assinatura e financeiro, logística, histórico de pagamentos e linha do tempo, com atalho para o WhatsApp."
        },
        {
          "title": "Relatórios",
          "text": "O financeiro ganha relatórios sem recalcular cada inscrição."
        }
      ],
      "altOverview": "Painel da Organicamente em laptop, com a tela de login e relatórios",
      "altDeliveries": "Tela de Entregas e Cestas do painel",
      "altProfile": "Tela de Visão Geral do painel"
    },
    "system": {
      "title": "Design system do painel",
      "lead": "O painel cresceu por fases e acumulou estilos visuais paralelos e 161 estilos escritos direto no HTML. Para seguir evoluindo sozinho, sem retrabalho, criei uma base única de tokens e componentes, que hoje vive no código e no Figma com os mesmos nomes.",
      "kpis": [
        {
          "label": "Variáveis",
          "value": "68",
          "caption": "39 cores, 11 espaçamentos, 5 raios e 13 de tipografia"
        },
        {
          "label": "Estilos",
          "value": "20",
          "caption": "15 de texto e 5 de sombra e foco"
        },
        {
          "label": "Componentes",
          "value": "23",
          "caption": "com variantes de estado"
        },
        {
          "label": "Ícones",
          "value": "21",
          "caption": "Lucide, como componentes"
        }
      ],
      "fonts": [
        {
          "name": "Outfit",
          "weights": [
            "Títulos"
          ]
        },
        {
          "name": "Inter",
          "weights": [
            "Texto"
          ]
        }
      ],
      "statuses": [
        "Ativa",
        "Pausada",
        "Cancelada",
        "Aguardando",
        "Arquivada"
      ],
      "rules": "Espaçamento em base 4 (4 a 64 px) · raios de 8, 12, 16 e 20 px · sombras esverdeadas suaves.",
      "decisions": [
        {
          "title": "Contraste dentro do AA",
          "text": "O cinza dos textos discretos foi escurecido até 4,8:1 sobre branco, e o verde do item ativo da navegação ganhou um tom próprio para chegar a 5:1."
        },
        {
          "title": "Pensado para o celular",
          "text": "Abaixo de 768 px, as tabelas viram cards. Abaixo de 576 px, os modais abrem como painéis que sobem do rodapé."
        },
        {
          "title": "Figma e código com os mesmos nomes",
          "text": "Cada variável do Figma aponta para o token do CSS, como var(--color-primary), então desenho e código não se desencontram."
        }
      ],
      "note": "O fluxo de inscrição ainda usa os estilos da página pública, com tokens próprios. Unificar os dois sistemas é um dos próximos passos."
    },
    "results": {
      "title": "Resultados",
      "lead": "O projeto é recente e a coleta de dados ainda está em andamento, mas alguns resultados já aparecem.",
      "metrics": [
        {
          "label": "Novos assinantes por mês",
          "value": "+140%",
          "caption": "6 no primeiro mês no ar, contra uma média de 2,5 por mês antes",
          "note": "Antes: 5 assinaturas em dois meses de referência"
        },
        {
          "label": "Tempo de fechamento",
          "value": "−70%",
          "caption": "no tempo para fechar uma assinatura: de 2 a 3 dias úteis para 12h a 24h",
          "note": "Cálculo pelo ponto médio: de 60h para 18h"
        }
      ],
      "columns": [
        "Métrica",
        "Antes (Forms)",
        "Agora",
        "Variação",
        "Status"
      ],
      "rows": [
        {
          "cells": [
            "Conversão de lead para assinante",
            "5 assinaturas em dois meses (108 leads)",
            "6 novos assinantes no primeiro mês (média anterior: 2,5 por mês)",
            "+140%"
          ],
          "status": "Primeiro dado",
          "tone": "good"
        },
        {
          "cells": [
            "Conclusão por etapa do fluxo",
            "Não dava para medir no Forms",
            "Medição implementada",
            "Coletando dados"
          ],
          "status": "Coletando",
          "tone": "info"
        },
        {
          "cells": [
            "Dúvidas repetidas no atendimento",
            "Frequentes, sobre o que já estava escrito",
            "Menos frequentes",
            "A medir"
          ],
          "status": "Melhorou",
          "tone": "good"
        },
        {
          "cells": [
            "Tempo para fechar uma assinatura",
            "De 2 a 3 dias úteis",
            "De 12h a 24h",
            "−70%"
          ],
          "status": "Melhorou",
          "tone": "good"
        },
        {
          "cells": [
            "Trabalho do financeiro por inscrição",
            "Cálculo e conferência manuais",
            "Automatizado e simplificado",
            "A medir"
          ],
          "status": "Automatizado",
          "tone": "good"
        }
      ],
      "note": "A equipe validou o painel e está em transição do modelo antigo para o novo, com treinamento oficial previsto. Com mais meses de dados, a conversão por etapa vai mostrar onde o fluxo ainda perde pessoas e orientar a segunda iteração."
    },
    "learnings": {
      "title": "Aprendizados",
      "lead": "Não pude entrevistar assinantes nem leads que desistiram, então não sei com certeza se o formulário era o gargalo principal, e a validação do fluxo foi feita apenas com a equipe interna. Se fosse começar de novo, faria cinco conversas curtas antes de desenhar e testaria o fluxo com pessoas de fora.\n\nPor isso, os próximos passos são entrevistar assinantes recentes e leads que não fecharam, medir o funil por etapa e usar esses dados na segunda iteração. Ela já prevê remover a taxa de adesão e incluir produtos parceiros como ovos, mel e laticínios no passo dois."
    }
  },
};
