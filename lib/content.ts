export const home = {
  label: "PM · Product Builder",
  name: "Prénom Nom",           // ⚠️ À personnaliser
  tagline: "Je build des apps IA.",
  linkedinUrl: "https://www.linkedin.com/in/TON-PROFIL/",
  linkedinLabel: "LinkedIn",
}

export const projects = [
  {
    slug: "coaching",
    title: "App de coaching IA",
    description: "Un coach personnel propulsé par Claude, avec mémoire persistante.",
    tags: ["IA", "Vibe-coded", "Personal"],
    thumbnailSrc: "/screens/hero.png",
    href: "/coaching",
  },
]

export const coaching = {
  hero: {
    label: "PM · Product Builder",
    title: "Je build des apps",
    titleGradient: "avec de l'IA",
    subtitle: "PM le jour, vibe-coder la nuit.",
    cta: "Voir le projet ↓",
    heroImage: "/screens/hero.png",
  },

  product: {
    title: "L'app de coaching IA",
    description:
      "Une app de coaching personnel propulsée par Claude. Elle apprend à me connaître au fil des sessions, mémorise mes objectifs et adapte mon programme sans que je me répète.",
    features: [
      { emoji: "🧠", label: "Mémoire entre les sessions" },
      { emoji: "💬", label: "Conversation naturelle avec l'IA" },
      { emoji: "🎯", label: "Coaching adapté à mes objectifs" },
    ],
  },

  features: [
    {
      label: "Onboarding",
      description: "L'app apprend qui tu es dès la première session.",
      imageSrc: "/screens/onboarding.png",
      videoSrc: undefined,
    },
    {
      label: "Session de coaching",
      description: "Une conversation naturelle qui va droit au but.",
      imageSrc: undefined,
      videoSrc: "/videos/coaching.mp4",
    },
    {
      label: "Mémoire persistante",
      description: "Le coach se souvient de tout entre les sessions.",
      imageSrc: "/screens/memory.png",
      videoSrc: undefined,
    },
  ],

  aiArchitecture: {
    title: "La logique IA derrière l'app",
    description:
      "Deux fonctions distinctes selon le contexte : une conversation libre déclenchée par l'utilisateur, et une analyse automatique après chaque séance. L'IA ne se contente pas de répondre, elle gère un plan, une mémoire, et décide elle-même quoi retenir.",
    blocks: [
      {
        title: "Deux modes d'interaction",
        detail: "Chat multi-turn (user-triggered) + analyse post-séance asynchrone (fire-and-forget)",
        colorClass: "border-indigo-500/30 bg-indigo-500/10 text-indigo-300",
      },
      {
        title: "4 outils Anthropic",
        detail: "propose_plan_batch · apply_plan_batch · update_memory · fetch_previous_conversations",
        colorClass: "border-violet-500/30 bg-violet-500/10 text-violet-300",
      },
      {
        title: "Mémoire persistante",
        detail: "L'IA décide quoi mémoriser (blessures, charges, objectifs). Format compact injecté dans chaque prompt.",
        colorClass: "border-purple-500/30 bg-purple-500/10 text-purple-300",
      },
      {
        title: "Confiance calibrée",
        detail: "Les suggestions du coach attendent ta validation. L'analyse post-séance s'applique directement. Deux niveaux de confiance selon le contexte.",
        colorClass: "border-indigo-400/30 bg-indigo-400/10 text-indigo-200",
      },
    ],
  },

  vibeCoding: {
    title: "Construit sans écrire une ligne de code",
    story:
      "Je suis PM. Cette app a été conçue, développée et mise en production uniquement avec Claude Code : en décrivant ce que je voulais construire, en prenant les décisions produit, et en laissant l'IA s'occuper du reste.",
    stack: ["Next.js", "Supabase", "Claude API", "Vercel", "Claude Code"],
  },

  about: {
    bio: "PM avec plusieurs années d'expérience. Je construis des apps IA pour explorer ce que la technologie peut faire pour les gens.",
    linkedinUrl: "https://www.linkedin.com/in/TON-PROFIL/",
    linkedinLabel: "Me retrouver sur LinkedIn →",
  },
}
