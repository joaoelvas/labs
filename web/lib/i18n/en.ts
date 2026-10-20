// Page copy (EN). Source: design/content.md.
// Anything in [BRACKETS] is an open placeholder for Joao — it renders visibly
// highlighted on the page until it's replaced. Do not fill these in by guessing.

export const en = {
  meta: {
    title: "Venley Labs — AI & software studio",
    description:
      "Venley Labs helps companies put AI to work: hands-on AI training for teams, AI and MCP integrations, and the software around them — proven in our own products, Telltale and Atlas.",
  },
  header: {
    homeLabel: "Venley Labs — home",
    nav: { work: "Work", training: "AI training", capabilities: "Capabilities", approach: "Approach" },
    cta: "Start a project",
    ctaShort: "Start a project", // phones; same as `cta` when it already fits
    navLabel: "Main",
    switchLabel: "Ler em português",
    switchShort: "PT",
  },
  hero: {
    eyebrow: "AI & software studio · a Venley Star company",
    title: "AI that earns its place in your company.",
    lead: "We help companies put AI to work — training your team, connecting AI agents to your systems, and building the software around them. And we ship our own AI-ready products, because the best proof is software people actually run.",
    ctaPrimary: "See our work",
    ctaSecondary: "Talk to us",
  },
  terminal: {
    label: "Terminal output listing Venley Labs' shipped products",
    title: "~/venley-labs — shipped",
    live: "live",
    atlasStatus: "invite only",
    atlasNote: "mcp server for ai agents · books stay local",
  },
  glance: {
    label: "At a glance",
    items: [
      { title: "AI-ready", caption: "MCP servers built into our products" },
      { title: "Hands-on", caption: "AI training for teams, taught by builders" },
      { title: "Native", caption: "Universal macOS binaries, Apple silicon and Intel" },
      { title: "Zero", caption: "Analytics trackers in Telltale" },
      { title: "End-to-end", caption: "Design, build, payments, distribution" },
    ],
  },
  work: {
    eyebrow: "01 — Work",
    title: "Products we built, and use every day.",
    telltale: {
      meta: "macOS · menu bar · v0.2.0",
      tagline: "One app to supercharge your Mac.",
      body: "A menu bar system monitor with eleven modules — CPU, GPU, memory, disks, network, sensors, battery, weather and more. It ships with a read-only MCP server, so Claude, Cursor or VS Code can ask your Mac what's going on.",
      chips: ["Swift · native", "MCP server", "Stripe · Pro €4.99", "No analytics · no root"],
      download: "Download free",
      visit: "Visit site →",
      mockupLabel: "Telltale in the macOS menu bar, with its module dropdown open",
      tiles: ["CPU", "GPU", "Memory", "Disks", "Network", "Battery"],
      more: "+ sensors · weather · sun & moon · world clock · alerts",
      clock: "Tue 09:41",
    },
    atlas: {
      meta: "Bookkeeping app · MCP server · invite only",
      tagline: "Ask your accounting data anything.",
      body: "A bookkeeping app for a company's invoices, expenses, bank movements, payroll and VAT. It comes with its own MCP server, so AI agents like Claude can read the books and answer plain-language questions — and the books never leave the machine.",
      chips: ["Bookkeeping", "Local-first", "MCP server", "VAT · month close · duplicates"],
      cta: "Request an invite →",
      mockupLabel: "A chat where an AI agent answers a VAT question through Atlas's MCP server",
      question: "How much VAT do we owe this quarter, and are there any duplicate expenses?",
      answer: "Answered from your own books — read locally, nothing uploaded.",
    },
  },
  trainingTeaser: {
    eyebrow: "02 — AI training",
    title: "Get your whole team using AI — properly.",
    body: "Hands-on training from people who build with AI every day. From first prompts to connecting AI agents to your own systems, tailored to your tools and your data rules.",
    programmes: [
      { level: "Everyone", title: "AI foundations" },
      { level: "Teams & managers", title: "AI in your workflows" },
      { level: "Technical teams", title: "Connecting AI to your systems" },
    ],
    cta: "Explore AI training →",
    secondary: "Talk to us",
  },
  capabilities: {
    eyebrow: "03 — Capabilities",
    title: "What we can do for you.",
    provenIn: "Proven in →",
    items: [
      {
        icon: "ai" as CapabilityIcon,
        title: "AI & MCP integrations",
        body: "Connect your systems to Claude and other AI agents safely — scoped, read-only where it matters, local when it should be.",
        proof: "Atlas, Telltale",
      },
      {
        icon: "training" as CapabilityIcon,
        title: "AI training for teams",
        body: "Practical programmes that get people using AI well — prompting, workflows, data safety and, for engineers, MCP and agents.",
        proof: "Our own products",
        link: "See programmes →",
      },
      {
        icon: "native" as CapabilityIcon,
        title: "Native Mac apps",
        body: "Apps that feel like Apple made them: menu bar utilities, system integrations, universal binaries.",
        proof: "Telltale",
      },
      {
        icon: "web" as CapabilityIcon,
        title: "Web platforms",
        body: "Multi-tenant web apps, marketplaces and multilingual sites — Next.js, Supabase, Payload CMS.",
        proof: "Atlas",
      },
      {
        icon: "payments" as CapabilityIcon,
        title: "Payments & accounts",
        body: "Licensing, one-time and subscription payments, user accounts — wired end to end.",
        proof: "Telltale Pro",
      },
    ],
  },
  approach: {
    eyebrow: "04 — Approach",
    title: "We build like it's ours — because usually, it is.",
    items: [
      {
        title: "Privacy by default",
        body: "No analytics we don't need, no data we don't have to hold. Local-first wherever the problem allows.",
      },
      {
        title: "Native over generic",
        body: "We follow the platform's own design rules, so software feels at home — not wrapped.",
      },
      {
        title: "Shipped, not demoed",
        body: "Our own products run on real machines every day. Client work gets the same standard.",
      },
    ],
  },
  contact: {
    title: "Have something worth building?",
    body: "Tell us about the problem. You'll hear back from the people who'd build it.",
  },
  footer: {
    parent: "Venley Labs is part of Venley Star, Lda · Portugal",
    copyright: "© 2026 Venley Star, Lda",
  },
  trainingPage: {
    meta: {
      title: "AI training for companies — Venley Labs",
      description:
        "Hands-on AI training for teams, from people who build with AI every day: AI foundations, AI in your workflows, and connecting AI agents to your systems with MCP.",
    },
    hero: {
      eyebrow: "AI training for companies",
      title: "Get your team working with AI — properly.",
      lead: "Hands-on training from people who build with AI every day. We teach your team what AI is good at, where it gets things wrong, and how to use it safely with your own tools and data.",
      ctaPrimary: "Plan a training",
      ctaSecondary: "See programmes",
    },
    terminal: {
      label: "Terminal output outlining a Venley Labs AI training programme",
      title: "~/venley-labs — training",
      command: "labs train --team yours",
      modules: [
        { name: "ai foundations", status: "everyone" },
        { name: "your workflows", status: "teams" },
        { name: "connecting systems", status: "engineers" },
      ],
      note: "tailored to your tools and data",
      next: "labs train --start",
    },
    why: {
      label: "Why train with us",
      items: [
        { title: "Builders", caption: "We ship AI products and integrations, not slide decks" },
        { title: "Hands-on", caption: "Your team practises on real tasks, not toy examples" },
        { title: "Tailored", caption: "Built around your tools, data and workflows" },
        { title: "Safe", caption: "Privacy, GDPR and data handling from day one" },
      ],
    },
    programmes: {
      eyebrow: "01 — Programmes",
      title: "Three levels. One goal: AI your team actually uses.",
      outcomesLabel: "You leave with",
      items: [
        {
          level: "/01 · Everyone",
          title: "AI foundations",
          body: "What large language models are, what they're good at and where they get things wrong. Prompting that works, everyday use in writing, research and analysis — and clear rules for what never goes into a chatbot.",
          outcomes: [
            "A shared, realistic picture of what AI can do",
            "Prompting habits that save time every week",
            "Clear rules on data, privacy and checking answers",
          ],
        },
        {
          level: "/02 · Teams & managers",
          title: "AI in your workflows",
          body: "We take your team's real processes — reports, emails, documents, spreadsheets — and rework them with AI in the room. Projects, reusable instructions and simple automations, set up during the sessions.",
          outcomes: [
            "Your own processes redesigned with AI",
            "Reusable prompts and assistants your team keeps",
            "A shortlist of where AI pays off first",
          ],
        },
        {
          level: "/03 · Technical teams",
          title: "Connecting AI to your systems",
          body: "How AI agents use tools: the Model Context Protocol, building MCP servers, scoped and read-only access, evaluation and security. Taught from the MCP servers we ship in Telltale and Atlas.",
          outcomes: [
            "A working MCP server for one of your systems",
            "Patterns for safe, scoped AI access",
            "A plan for testing and monitoring AI features",
          ],
        },
      ],
    },
    process: {
      eyebrow: "02 — How it works",
      title: "Built around your company, not a slide deck.",
      items: [
        {
          title: "Discovery call",
          body: "We learn how your team works, which tools you use and what you want AI to help with.",
        },
        {
          title: "Tailored programme",
          body: "We adapt the material to your tools, your data rules and your team's level.",
        },
        {
          title: "Hands-on sessions",
          body: "Short theory, lots of practice — on your real tasks, with us in the room.",
        },
        {
          title: "Follow-up",
          body: "Materials, reusable prompts and a check-in once the team has used AI in real work.",
        },
      ],
    },
    topics: {
      eyebrow: "03 — What we cover",
      title: "Topics, picked for your team.",
      items: [
        "Prompting that works",
        "Claude & ChatGPT at work",
        "Projects & custom instructions",
        "Research & analysis",
        "Writing & editing",
        "Spreadsheets & data",
        "Automating repetitive work",
        "AI agents & tool use",
        "Model Context Protocol (MCP)",
        "Building MCP servers",
        "Checking AI output",
        "Privacy, GDPR & data handling",
        "An AI policy for your company",
      ],
      detailsLabel: "Practical details",
      details: [
        { term: "Language", value: "Portuguese or English" },
        { term: "Format", value: "On-site or remote" },
        { term: "Duration", value: "Half-day to 2 days" },
        { term: "Group size", value: "Up to 12 people" },
        { term: "Price", value: "On request" },
      ],
      aiActTitle: "AI literacy is now an obligation",
      aiActBody: "Since February 2025, the EU AI Act (Article 4) asks companies that use AI to make sure their staff have a sufficient level of AI literacy. Our programmes are a practical way to get your team there.",
    },
    contact: {
      title: "Planning AI training for your team?",
      body: "Tell us about your team and what you'd like AI to help with. We'll come back with a proposal.",
    },
  },
};

export type Dictionary = typeof en;
export type CapabilityIcon = "native" | "ai" | "training" | "web" | "payments";
