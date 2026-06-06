# Portfolio PM — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Construire un portfolio PM avec homepage projet-grid + case study long-scroll pour l'app de coaching IA, en Next.js statique déployé sur Vercel.

**Architecture:** Deux pages — `/` (homepage avec grille de projets) et `/coaching` (case study long-scroll). Tout le contenu éditorial dans `lib/content.ts`. Pas de backend, export statique.

**Tech Stack:** Next.js 14, TypeScript, Tailwind CSS, @vercel/analytics

---

## Structure des fichiers

| Fichier | Responsabilité |
|---------|----------------|
| `app/layout.tsx` | Root layout : metadata SEO + `<Analytics />` |
| `app/page.tsx` | Homepage — HomeHero + grille projets |
| `app/coaching/page.tsx` | Case study — 6 sections |
| `app/globals.css` | Variables CSS + reset + animation `float` |
| `tailwind.config.ts` | Tokens couleur + animation float |
| `lib/content.ts` | Tout le contenu éditorial |
| `components/HomeHero.tsx` | Hero compact homepage (identité PM) |
| `components/ProjectCard.tsx` | Carte projet + variante "more to come" |
| `components/DeviceMockup.tsx` | iPhone frame réutilisable |
| `components/ProjectHero.tsx` | Hero case study (iPhone flottant centré) |
| `components/ProductOverview.tsx` | Section 2 case study |
| `components/FeaturesShowcase.tsx` | Section 3 case study |
| `components/AIArchitecture.tsx` | Section 4 case study |
| `components/VibeCodingStory.tsx` | Section 5 case study |
| `components/About.tsx` | Section 6 case study |
| `next.config.ts` | `output: 'export'` |

---

## Task 1 : Initialiser le projet

- [ ] **Créer le projet**

```bash
npx create-next-app@latest portfolio-pm \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --no-src-dir \
  --import-alias "@/*"
cd portfolio-pm
```

- [ ] **Installer les dépendances**

```bash
npm install @vercel/analytics
```

- [ ] **Créer les dossiers**

```bash
mkdir -p public/screens public/videos components lib app/coaching
```

- [ ] **Vérifier que le projet démarre**

```bash
npm run dev
```

Attendu : page Next.js par défaut sur `http://localhost:3000`

- [ ] **Commit**

```bash
git add -A
git commit -m "Initialisation du projet portfolio-pm"
```

---

## Task 2 : Tokens de design + styles globaux

**Files:** `tailwind.config.ts`, `app/globals.css`

- [ ] **Remplacer `tailwind.config.ts`**

```ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        base: '#0f172a',
        elevated: '#1e1b4b',
        accent: {
          primary: '#6366f1',
          secondary: '#c084fc',
        },
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
```

- [ ] **Remplacer `app/globals.css`**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: #0f172a;
  color: #ffffff;
  font-family: Inter, system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
}

.gradient-text {
  background: linear-gradient(90deg, #818cf8, #c084fc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

- [ ] **Commit**

```bash
git add tailwind.config.ts app/globals.css
git commit -m "Ajout des tokens de design et styles globaux"
```

---

## Task 3 : Contenu éditorial centralisé

**Files:** `lib/content.ts`

- [ ] **Créer `lib/content.ts`**

```ts
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
      "Deux fonctions distinctes selon le contexte : une conversation libre déclenchée par l'utilisateur, et une analyse automatique après chaque séance. L'IA ne se contente pas de répondre — elle gère un plan, une mémoire, et décide elle-même quoi retenir.",
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
      "Je suis PM. Claude Coach a été conçu, développé et mis en production uniquement avec Claude Code — en décrivant ce que je voulais construire, en prenant les décisions produit, et en laissant l'IA s'occuper du reste.",
    stack: ["Next.js", "Supabase", "Claude API", "Vercel", "Claude Code"],
  },

  about: {
    bio: "PM avec plusieurs années d'expérience. Je construis des apps IA pour explorer ce que la technologie peut faire pour les gens.",   // ⚠️ À personnaliser
    linkedinUrl: "https://www.linkedin.com/in/TON-PROFIL/",
    linkedinLabel: "Me retrouver sur LinkedIn →",
  },
}
```

- [ ] **Commit**

```bash
git add lib/content.ts
git commit -m "Ajout du contenu éditorial centralisé"
```

---

## Task 4 : DeviceMockup (composant partagé)

**Files:** `components/DeviceMockup.tsx`

- [ ] **Créer `components/DeviceMockup.tsx`**

```tsx
interface DeviceMockupProps {
  imageSrc?: string
  videoSrc?: string
  label?: string
  className?: string
}

export function DeviceMockup({ imageSrc, videoSrc, label, className = '' }: DeviceMockupProps) {
  return (
    <div className={`flex flex-col items-center gap-4 ${className}`}>
      <div className="relative w-[200px] h-[420px] rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_0_50px_rgba(99,102,241,0.2)] overflow-hidden flex-shrink-0">
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-10" />
        <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden">
          {videoSrc ? (
            <video src={videoSrc} autoPlay muted loop playsInline className="w-full h-full object-cover" />
          ) : imageSrc ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={imageSrc} alt={label ?? ''} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-gradient-to-b from-elevated to-base" />
          )}
        </div>
      </div>
      {label && <p className="text-sm font-medium text-indigo-400 tracking-wide">{label}</p>}
    </div>
  )
}
```

- [ ] **Commit**

```bash
git add components/DeviceMockup.tsx
git commit -m "Ajout du composant DeviceMockup"
```

---

## Task 5 : Homepage — HomeHero + ProjectCard

**Files:** `components/HomeHero.tsx`, `components/ProjectCard.tsx`

- [ ] **Créer `components/HomeHero.tsx`**

```tsx
import Link from 'next/link'
import { home } from '@/lib/content'

export function HomeHero() {
  return (
    <header className="px-6 pt-16 pb-12 max-w-4xl mx-auto">
      <p className="text-xs font-mono text-indigo-400 tracking-[0.2em] uppercase mb-4">
        {home.label}
      </p>
      <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-3">
        {home.name}
      </h1>
      <p className="text-slate-400 text-lg mb-6">{home.tagline}</p>
      <Link
        href={home.linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
        {home.linkedinLabel}
      </Link>
    </header>
  )
}
```

- [ ] **Créer `components/ProjectCard.tsx`**

```tsx
import Link from 'next/link'
import { DeviceMockup } from './DeviceMockup'

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  thumbnailSrc: string
  href: string
}

interface ComingSoonCardProps {
  className?: string
}

export function ProjectCard({ title, description, tags, thumbnailSrc, href }: ProjectCardProps) {
  return (
    <Link href={href} className="group block">
      <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-indigo-500/40 transition-colors duration-200">
        <div className="bg-gradient-to-b from-elevated to-base p-8 flex justify-center">
          <DeviceMockup imageSrc={thumbnailSrc} />
        </div>
        <div className="p-6">
          <div className="flex gap-2 mb-3 flex-wrap">
            {tags.map(tag => (
              <span key={tag} className="text-xs font-mono text-indigo-400 border border-indigo-500/25 bg-indigo-500/10 px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <h2 className="text-lg font-bold text-white mb-1 group-hover:text-indigo-300 transition-colors">
            {title}
          </h2>
          <p className="text-sm text-slate-400 mb-4">{description}</p>
          <span className="text-sm text-indigo-400 font-medium">
            Voir le projet →
          </span>
        </div>
      </div>
    </Link>
  )
}

export function ComingSoonCard({ className = '' }: ComingSoonCardProps) {
  return (
    <div className={`border border-dashed border-white/15 rounded-2xl p-8 flex flex-col items-center justify-center min-h-[400px] ${className}`}>
      <p className="text-slate-600 text-sm font-mono tracking-wider uppercase">More to come</p>
    </div>
  )
}
```

- [ ] **Commit**

```bash
git add components/HomeHero.tsx components/ProjectCard.tsx
git commit -m "Ajout HomeHero et ProjectCard"
```

---

## Task 6 : Homepage page.tsx

**Files:** `app/page.tsx`

- [ ] **Remplacer `app/page.tsx`**

```tsx
import { HomeHero } from '@/components/HomeHero'
import { ProjectCard, ComingSoonCard } from '@/components/ProjectCard'
import { projects } from '@/lib/content'

export default function Home() {
  return (
    <main>
      <HomeHero />
      <section className="px-6 pb-24 max-w-4xl mx-auto">
        <h2 className="text-xs font-mono text-slate-500 tracking-[0.2em] uppercase mb-8">
          Projets
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map(project => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              description={project.description}
              tags={project.tags}
              thumbnailSrc={project.thumbnailSrc}
              href={project.href}
            />
          ))}
          <ComingSoonCard />
        </div>
      </section>
    </main>
  )
}
```

- [ ] **Commit**

```bash
git add app/page.tsx
git commit -m "Ajout de la homepage portfolio"
```

---

## Task 7 : Case study — ProjectHero

**Files:** `components/ProjectHero.tsx`

- [ ] **Créer `components/ProjectHero.tsx`**

```tsx
import Link from 'next/link'
import { DeviceMockup } from './DeviceMockup'
import { coaching } from '@/lib/content'

export function ProjectHero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">
      <Link href="/" className="absolute top-6 left-6 text-sm text-slate-500 hover:text-slate-300 transition-colors">
        ← Portfolio
      </Link>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-3xl pointer-events-none" />

      <span className="relative text-xs font-mono text-indigo-400 tracking-[0.2em] uppercase mb-6">
        {coaching.hero.label}
      </span>

      <h1 className="relative text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-tight mb-4">
        {coaching.hero.title}
        <br />
        <span className="gradient-text">{coaching.hero.titleGradient}</span>
      </h1>

      <p className="relative text-slate-400 text-lg mb-12 max-w-xs">
        {coaching.hero.subtitle}
      </p>

      <div className="relative animate-float">
        <div className="absolute inset-0 scale-150 bg-indigo-600/15 blur-3xl rounded-full pointer-events-none" />
        <DeviceMockup imageSrc={coaching.hero.heroImage} />
      </div>

      <a href="#project" className="relative mt-10 text-sm text-indigo-400 border border-indigo-500/30 px-6 py-2.5 rounded-full hover:border-indigo-400 transition-colors">
        {coaching.hero.cta}
      </a>
    </section>
  )
}
```

- [ ] **Commit**

```bash
git add components/ProjectHero.tsx
git commit -m "Ajout du composant ProjectHero"
```

---

## Task 8 : Case study — sections produit

**Files:** `components/ProductOverview.tsx`, `components/FeaturesShowcase.tsx`

- [ ] **Créer `components/ProductOverview.tsx`**

```tsx
import { coaching } from '@/lib/content'

export function ProductOverview() {
  return (
    <section id="project" className="py-24 px-6 max-w-2xl mx-auto text-center">
      <span className="text-xs font-mono text-indigo-400 tracking-[0.2em] uppercase mb-4 block">Le projet</span>
      <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
        {coaching.product.title}
      </h2>
      <p className="text-slate-400 leading-relaxed mb-12">
        {coaching.product.description}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        {coaching.product.features.map(f => (
          <div key={f.label} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-left">
            <span className="text-xl">{f.emoji}</span>
            <span className="text-sm text-slate-300 font-medium">{f.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
```

- [ ] **Créer `components/FeaturesShowcase.tsx`**

```tsx
import { coaching } from '@/lib/content'
import { DeviceMockup } from './DeviceMockup'

export function FeaturesShowcase() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-indigo-400 tracking-[0.2em] uppercase mb-4 block">Fonctionnalités</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">En action</h2>
        </div>
        <div className="flex gap-8 overflow-x-auto pb-6 md:overflow-visible md:justify-center snap-x snap-mandatory">
          {coaching.features.map(f => (
            <div key={f.label} className="flex flex-col items-center gap-4 snap-center flex-shrink-0">
              <DeviceMockup imageSrc={f.imageSrc} videoSrc={f.videoSrc} label={f.label} />
              <p className="text-sm text-slate-400 max-w-[180px] text-center leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Commit**

```bash
git add components/ProductOverview.tsx components/FeaturesShowcase.tsx
git commit -m "Ajout des sections ProductOverview et FeaturesShowcase"
```

---

## Task 9 : Case study — AIArchitecture

**Files:** `components/AIArchitecture.tsx`

- [ ] **Créer `components/AIArchitecture.tsx`**

```tsx
import { coaching } from '@/lib/content'

export function AIArchitecture() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-mono text-indigo-400 tracking-[0.2em] uppercase mb-4 block">Sous le capot</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
            {coaching.aiArchitecture.title}
          </h2>
          <p className="text-slate-400 leading-relaxed">
            {coaching.aiArchitecture.description}
          </p>
        </div>
        <div className="flex flex-col gap-4">
          {coaching.aiArchitecture.blocks.map(block => (
            <div key={block.title} className={`border rounded-xl px-6 py-4 ${block.colorClass}`}>
              <div className="font-semibold text-sm mb-1">{block.title}</div>
              <div className="text-xs opacity-70 leading-relaxed">{block.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Commit**

```bash
git add components/AIArchitecture.tsx
git commit -m "Ajout de la section AIArchitecture"
```

---

## Task 10 : Case study — VibeCodingStory + About

**Files:** `components/VibeCodingStory.tsx`, `components/About.tsx`

- [ ] **Créer `components/VibeCodingStory.tsx`**

```tsx
import { coaching } from '@/lib/content'

export function VibeCodingStory() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <span className="text-xs font-mono text-indigo-400 tracking-[0.2em] uppercase mb-4 block">Comment c'est construit</span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-6">
          {coaching.vibeCoding.title}
        </h2>
        <p className="text-slate-400 leading-relaxed mb-12 text-lg">
          {coaching.vibeCoding.story}
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {coaching.vibeCoding.stack.map(tech => (
            <span key={tech} className="text-sm text-indigo-300 border border-indigo-500/25 bg-indigo-500/10 px-4 py-2 rounded-full font-mono">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Créer `components/About.tsx`**

```tsx
import Link from 'next/link'
import { coaching } from '@/lib/content'

export function About() {
  return (
    <section className="py-24 px-6 border-t border-white/5">
      <div className="max-w-lg mx-auto text-center">
        <p className="text-slate-300 leading-relaxed text-lg mb-10">
          {coaching.about.bio}
        </p>
        <a
          href={coaching.about.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-7 py-3.5 rounded-full transition-colors duration-200 text-sm"
        >
          {coaching.about.linkedinLabel}
        </a>
        <div className="mt-12">
          <Link href="/" className="text-slate-600 text-sm hover:text-slate-400 transition-colors">
            ← Retour au portfolio
          </Link>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Commit**

```bash
git add components/VibeCodingStory.tsx components/About.tsx
git commit -m "Ajout des sections VibeCodingStory et About"
```

---

## Task 11 : Case study page + Layout + Analytics

**Files:** `app/coaching/page.tsx`, `app/layout.tsx`

- [ ] **Créer `app/coaching/page.tsx`**

```tsx
import { ProjectHero } from '@/components/ProjectHero'
import { ProductOverview } from '@/components/ProductOverview'
import { FeaturesShowcase } from '@/components/FeaturesShowcase'
import { AIArchitecture } from '@/components/AIArchitecture'
import { VibeCodingStory } from '@/components/VibeCodingStory'
import { About } from '@/components/About'

export default function CoachingPage() {
  return (
    <main>
      <ProjectHero />
      <ProductOverview />
      <FeaturesShowcase />
      <AIArchitecture />
      <VibeCodingStory />
      <About />
    </main>
  )
}
```

- [ ] **Remplacer `app/layout.tsx`**

```tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio — PM & Product Builder',
  description: 'PM le jour, vibe-coder la nuit. Projets IA construits sans écrire une ligne de code.',
  openGraph: {
    title: 'Portfolio — PM & Product Builder',
    description: 'Projets IA construits en vibe-coding.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

- [ ] **Vérifier le build**

```bash
npm run build
```

Attendu : `✓ Compiled successfully`, deux routes générées (`/` et `/coaching`)

- [ ] **Vérifier visuellement**

```bash
npm run dev
```

Vérifier homepage sur `http://localhost:3000` et case study sur `http://localhost:3000/coaching`.

- [ ] **Commit**

```bash
git add app/coaching/page.tsx app/layout.tsx
git commit -m "Assemblage des pages homepage et case study"
```

---

## Task 12 : Export statique + déploiement Vercel

**Files:** `next.config.ts`

- [ ] **Modifier `next.config.ts`**

```ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
}

export default nextConfig
```

- [ ] **Vérifier le build statique**

```bash
npm run build
```

Attendu : dossier `out/` avec les fichiers statiques

- [ ] **Pusher et déployer**

```bash
git add next.config.ts
git commit -m "Configuration export statique pour Vercel"
git remote add origin https://github.com/TON_USERNAME/portfolio-pm.git
git push -u origin main
```

Ensuite sur vercel.com : Add New Project, importer le repo, Deploy.

---

## Contenu à fournir avant lancement

| Fichier | Usage |
|---------|-------|
| `public/screens/hero.png` | Screenshot principal (hero + card homepage) |
| `public/screens/onboarding.png` | Écran onboarding |
| `public/screens/memory.png` | Écran mémoire |
| `public/videos/coaching.mp4` | Vidéo session coaching |

Dans `lib/content.ts` :
- `home.name` — ton prénom/nom
- `home.linkedinUrl` — URL LinkedIn réelle
- `coaching.about.bio` — bio courte
- `coaching.about.linkedinUrl` — URL LinkedIn réelle
- `coaching.product.description` — description précise de l'app
