// Page copy (PT-PT). FIRST PASS — needs Joao's review before launch.
// Placeholders in [BRACKETS] stay in English so they are easy to spot.

import type { Dictionary } from "./en";

export const pt: Dictionary = {
  meta: {
    title: "Venley Labs — Estúdio de IA e software",
    description:
      "A Venley Labs ajuda empresas a pôr a IA a trabalhar: formação prática em IA para equipas, integrações de IA e MCP, e o software à volta delas — provado nos nossos próprios produtos, Telltale e Atlas.",
  },
  header: {
    homeLabel: "Venley Labs — início",
    nav: { work: "Trabalho", training: "Formação em IA", capabilities: "Competências", approach: "Abordagem" },
    cta: "Iniciar um projeto",
    navLabel: "Principal",
    switchLabel: "Read in English",
    switchShort: "EN",
  },
  hero: {
    eyebrow: "Estúdio de IA e software · uma empresa Venley Star",
    title: "IA que merece o seu lugar na sua empresa.",
    lead: "Ajudamos empresas a pôr a IA a trabalhar — formamos a sua equipa, ligamos agentes de IA aos seus sistemas e construímos o software à volta deles. E lançamos os nossos próprios produtos preparados para IA, porque a melhor prova é software que as pessoas usam de verdade.",
    ctaPrimary: "Ver o nosso trabalho",
    ctaSecondary: "Fale connosco",
  },
  terminal: {
    label: "Saída de terminal com os produtos lançados pela Venley Labs",
    title: "~/venley-labs — shipped",
    live: "live",
    atlasStatus: "por convite",
    atlasNote: "servidor mcp para agentes de ia · a contabilidade fica local",
  },
  glance: {
    label: "Em resumo",
    items: [
      { title: "Pronto para IA", caption: "Servidores MCP integrados nos nossos produtos" },
      { title: "Prático", caption: "Formação em IA para equipas, dada por quem constrói" },
      { title: "Nativo", caption: "Binários universais para macOS, Apple silicon e Intel" },
      { title: "Zero", caption: "Rastreadores de analytics no Telltale" },
      { title: "De ponta a ponta", caption: "Design, desenvolvimento, pagamentos, distribuição" },
    ],
  },
  work: {
    eyebrow: "01 — Trabalho",
    title: "Produtos que criámos, e usamos todos os dias.",
    telltale: {
      meta: "macOS · barra de menus · v0.2.0",
      tagline: "Uma app para dar superpoderes ao seu Mac.",
      body: "Um monitor de sistema na barra de menus com onze módulos — CPU, GPU, memória, discos, rede, sensores, bateria, meteorologia e mais. Inclui um servidor MCP só de leitura, para que o Claude, o Cursor ou o VS Code possam perguntar ao seu Mac o que se passa.",
      chips: ["Swift · nativo", "Servidor MCP", "Stripe · Pro 4,99 €", "Sem analytics · sem root"],
      download: "Descarregar grátis",
      visit: "Visitar site →",
      mockupLabel: "Telltale na barra de menus do macOS, com o menu de módulos aberto",
      tiles: ["CPU", "GPU", "Memória", "Discos", "Rede", "Bateria"],
      more: "+ sensores · meteorologia · sol e lua · relógio mundial · alertas",
      clock: "Ter 09:41",
    },
    atlas: {
      meta: "App de contabilidade · servidor MCP · por convite",
      tagline: "Pergunte o que quiser aos seus dados contabilísticos.",
      body: "Uma app de contabilidade para as faturas, despesas, movimentos bancários, salários e IVA de uma empresa. Inclui o seu próprio servidor MCP, para que agentes de IA como o Claude possam ler a contabilidade e responder a perguntas em linguagem simples — e a contabilidade nunca sai da máquina.",
      chips: ["Contabilidade", "Local-first", "Servidor MCP", "IVA · fecho do mês · duplicados"],
      cta: "Pedir um convite →",
      mockupLabel: "Uma conversa em que um agente de IA responde a uma pergunta sobre IVA através do servidor MCP do Atlas",
      question: "Quanto IVA devemos este trimestre, e há despesas duplicadas?",
      answer: "Respondido a partir da sua própria contabilidade — lido localmente, nada enviado.",
    },
  },
  trainingTeaser: {
    eyebrow: "02 — Formação em IA",
    title: "Ponha toda a sua equipa a usar IA — como deve ser.",
    body: "Formação prática dada por quem constrói com IA todos os dias. Dos primeiros prompts à ligação de agentes de IA aos seus próprios sistemas, adaptada às suas ferramentas e às suas regras de dados.",
    programmes: [
      { level: "Todos", title: "Fundamentos de IA" },
      { level: "Equipas e gestores", title: "IA nos seus processos" },
      { level: "Equipas técnicas", title: "Ligar a IA aos seus sistemas" },
    ],
    cta: "Conhecer a formação em IA →",
    secondary: "Fale connosco",
  },
  capabilities: {
    eyebrow: "03 — Competências",
    title: "O que podemos fazer por si.",
    provenIn: "Provado em →",
    items: [
      {
        icon: "ai",
        title: "Integrações de IA e MCP",
        body: "Ligue os seus sistemas ao Claude e a outros agentes de IA em segurança — com âmbito definido, só de leitura quando importa, local quando deve ser.",
        proof: "Atlas, Telltale",
      },
      {
        icon: "training",
        title: "Formação em IA para equipas",
        body: "Programas práticos que põem as pessoas a usar bem a IA — prompts, processos, segurança dos dados e, para engenheiros, MCP e agentes.",
        proof: "Os nossos próprios produtos",
        link: "Ver programas →",
      },
      {
        icon: "native",
        title: "Apps nativas para Mac",
        body: "Apps que parecem feitas pela Apple: utilitários de barra de menus, integrações com o sistema, binários universais.",
        proof: "Telltale",
      },
      {
        icon: "web",
        title: "Plataformas web",
        body: "Apps web multi-tenant, marketplaces e sites multilingues — Next.js, Supabase, Payload CMS.",
        proof: "Atlas",
      },
      {
        icon: "payments",
        title: "Pagamentos e contas",
        body: "Licenciamento, pagamentos únicos e subscrições, contas de utilizador — ligados de ponta a ponta.",
        proof: "Telltale Pro",
      },
    ],
  },
  approach: {
    eyebrow: "04 — Abordagem",
    title: "Construímos como se fosse nosso — porque normalmente é.",
    items: [
      {
        title: "Privacidade por defeito",
        body: "Sem analytics de que não precisamos, sem dados que não temos de guardar. Local-first sempre que o problema o permite.",
      },
      {
        title: "Nativo em vez de genérico",
        body: "Seguimos as regras de design da própria plataforma, para que o software se sinta em casa — e não embrulhado.",
      },
      {
        title: "Lançado, não apenas demonstrado",
        body: "Os nossos produtos correm em máquinas reais todos os dias. O trabalho para clientes segue o mesmo padrão.",
      },
    ],
  },
  contact: {
    title: "Tem algo que valha a pena construir?",
    body: "Fale-nos do problema. Vai receber resposta das pessoas que o iriam construir.",
  },
  footer: {
    parent: "A Venley Labs faz parte da Venley Star, Lda · Portugal",
    copyright: "© 2026 Venley Star, Lda",
  },
  trainingPage: {
    meta: {
      title: "Formação em IA para empresas — Venley Labs",
      description:
        "Formação prática em IA para equipas, dada por quem constrói com IA todos os dias: fundamentos de IA, IA nos seus processos e ligação de agentes de IA aos seus sistemas com MCP.",
    },
    hero: {
      eyebrow: "Formação em IA para empresas",
      title: "Ponha a sua equipa a trabalhar com IA — como deve ser.",
      lead: "Formação prática dada por quem constrói com IA todos os dias. Ensinamos à sua equipa aquilo em que a IA é boa, onde se engana e como usá-la em segurança com as suas próprias ferramentas e dados.",
      ctaPrimary: "Planear uma formação",
      ctaSecondary: "Ver programas",
    },
    terminal: {
      label: "Saída de terminal com um programa de formação em IA da Venley Labs",
      title: "~/venley-labs — training",
      command: "labs train --team yours",
      modules: [
        { name: "ai foundations", status: "todos" },
        { name: "your workflows", status: "equipas" },
        { name: "connecting systems", status: "engenheiros" },
      ],
      note: "adaptado às suas ferramentas e dados",
      next: "labs train --start",
    },
    why: {
      label: "Porquê formar-se connosco",
      items: [
        { title: "Construtores", caption: "Lançamos produtos e integrações de IA, não apresentações" },
        { title: "Prático", caption: "A sua equipa pratica em tarefas reais, não em exemplos de brincar" },
        { title: "À medida", caption: "Construído à volta das suas ferramentas, dados e processos" },
        { title: "Seguro", caption: "Privacidade, RGPD e tratamento de dados desde o primeiro dia" },
      ],
    },
    programmes: {
      eyebrow: "01 — Programas",
      title: "Três níveis. Um objetivo: IA que a sua equipa usa mesmo.",
      outcomesLabel: "Sai com",
      items: [
        {
          level: "/01 · Todos",
          title: "Fundamentos de IA",
          body: "O que são os grandes modelos de linguagem, em que são bons e onde se enganam. Prompts que funcionam, uso diário na escrita, pesquisa e análise — e regras claras sobre o que nunca deve ir parar a um chatbot.",
          outcomes: [
            "Uma visão comum e realista do que a IA consegue fazer",
            "Hábitos de prompting que poupam tempo todas as semanas",
            "Regras claras sobre dados, privacidade e verificação de respostas",
          ],
        },
        {
          level: "/02 · Equipas e gestores",
          title: "IA nos seus processos",
          body: "Pegamos nos processos reais da sua equipa — relatórios, emails, documentos, folhas de cálculo — e refazemo-los com a IA na sala. Projetos, instruções reutilizáveis e automatizações simples, configurados durante as sessões.",
          outcomes: [
            "Os seus próprios processos redesenhados com IA",
            "Prompts e assistentes reutilizáveis que ficam com a equipa",
            "Uma lista curta de onde a IA compensa primeiro",
          ],
        },
        {
          level: "/03 · Equipas técnicas",
          title: "Ligar a IA aos seus sistemas",
          body: "Como os agentes de IA usam ferramentas: o Model Context Protocol, construção de servidores MCP, acesso limitado e só de leitura, avaliação e segurança. Ensinado a partir dos servidores MCP que lançamos no Telltale e no Atlas.",
          outcomes: [
            "Um servidor MCP funcional para um dos seus sistemas",
            "Padrões para acesso de IA seguro e limitado",
            "Um plano para testar e monitorizar funcionalidades de IA",
          ],
        },
      ],
    },
    process: {
      eyebrow: "02 — Como funciona",
      title: "Construído à volta da sua empresa, não de uma apresentação.",
      items: [
        {
          title: "Conversa inicial",
          body: "Percebemos como a sua equipa trabalha, que ferramentas usa e em que quer que a IA ajude.",
        },
        {
          title: "Programa à medida",
          body: "Adaptamos o material às suas ferramentas, às suas regras de dados e ao nível da equipa.",
        },
        {
          title: "Sessões práticas",
          body: "Pouca teoria, muita prática — nas suas tarefas reais, connosco na sala.",
        },
        {
          title: "Acompanhamento",
          body: "Materiais, prompts reutilizáveis e um ponto de situação depois de a equipa usar a IA no trabalho real.",
        },
      ],
    },
    topics: {
      eyebrow: "03 — O que abordamos",
      title: "Temas escolhidos para a sua equipa.",
      items: [
        "Prompts que funcionam",
        "Claude e ChatGPT no trabalho",
        "Projetos e instruções personalizadas",
        "Pesquisa e análise",
        "Escrita e revisão",
        "Folhas de cálculo e dados",
        "Automatizar trabalho repetitivo",
        "Agentes de IA e uso de ferramentas",
        "Model Context Protocol (MCP)",
        "Construir servidores MCP",
        "Verificar respostas da IA",
        "Privacidade, RGPD e tratamento de dados",
        "Uma política de IA para a sua empresa",
      ],
      detailsLabel: "Detalhes práticos",
      details: [
        { term: "Idioma", value: "Português ou inglês" },
        { term: "Formato", value: "Presencial ou remoto" },
        { term: "Duração", value: "Meio dia a 2 dias" },
        { term: "Tamanho do grupo", value: "Até 12 pessoas" },
        { term: "Preço", value: "Sob consulta" },
      ],
      aiActTitle: "A literacia em IA passou a ser uma obrigação",
      aiActBody: "Desde fevereiro de 2025, o Regulamento Europeu da IA (artigo 4.º) exige que as empresas que usam IA garantam um nível suficiente de literacia em IA do seu pessoal. Os nossos programas são uma forma prática de lá chegar.",
    },
    contact: {
      title: "Está a planear formação em IA para a sua equipa?",
      body: "Fale-nos da sua equipa e daquilo em que gostaria que a IA ajudasse. Respondemos com uma proposta.",
    },
  },
};
