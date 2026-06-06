# Portfolio PM — Design Spec
_Date : 2026-06-03 — Mis à jour : 2026-06-05_

## Objectif

Un portfolio personnel qui met en avant les projets perso vibe-codés. Cible principale : les connexions LinkedIn. Démontre le profil "PM product builder", pas un CV.

---

## Ce que c'est (et ce que ce n'est pas)

**C'est :** un portfolio assumé avec une homepage qui liste les projets, un seul projet pour l'instant (l'app de coaching IA), et un "more to come" honnête. Chaque projet a sa propre page case study.

**Ce n'est pas :** un portfolio professionnel avec expériences Betclic, ni un CV en ligne. Pas de fausse modestie sur le fait qu'il n'y a qu'un projet.

---

## Stack technique

**Next.js (export statique) déployé sur Vercel.**

Justification : zéro backend nécessaire (contenu 100% statique), Vercel déploie en 1 commande, composants React utiles pour les device mockups animés.

Structure de dossiers :
```
portfolio-pm/
├── app/
│   ├── page.tsx              # Homepage — portfolio grid
│   ├── layout.tsx            # Root layout + Analytics + metadata
│   ├── globals.css
│   └── coaching/
│       └── page.tsx          # Case study — app de coaching IA
├── components/
│   ├── HomeHero.tsx          # Hero compact homepage (identité PM)
│   ├── ProjectCard.tsx       # Carte projet (+ variante "more to come")
│   ├── DeviceMockup.tsx      # iPhone frame réutilisable
│   ├── ProjectHero.tsx       # Hero case study (iPhone flottant)
│   ├── ProductOverview.tsx   # Section présentation produit
│   ├── FeaturesShowcase.tsx  # Section features avec devices
│   ├── AIArchitecture.tsx    # Section logique IA
│   ├── VibeCodingStory.tsx   # Section vibe-coding
│   └── About.tsx             # Section à propos + LinkedIn
├── lib/
│   └── content.ts            # Tout le contenu éditorial
├── public/
│   ├── screens/              # Screenshots
│   └── videos/               # Vidéos d'interaction
└── ...
```

---

## Design system

**Palette**
| Token | Valeur | Usage |
|-------|--------|-------|
| `bg-base` | `#0f172a` | Fond principal |
| `bg-elevated` | `#1e1b4b` | Cards, sections alternées |
| `accent-primary` | `#6366f1` (indigo) | CTAs, accents |
| `accent-secondary` | `#c084fc` (violet) | Gradients, highlights |
| `text-primary` | `#ffffff` | Titres |
| `text-secondary` | `#94a3b8` | Corps de texte |
| `text-muted` | `#475569` | Labels, metadata |
| `glass-border` | `rgba(255,255,255,0.10)` | Bordures glass |

**Typographie**
- Titres : Inter ou Geist, `font-weight: 800`, `letter-spacing: -0.5px`
- Corps : Inter, `font-weight: 400`, `line-height: 1.6`
- Labels/tags : monospace, `letter-spacing: 2px`, uppercase

**Effets**
- Glassmorphism : `background: rgba(255,255,255,0.05)` + `backdrop-filter: blur(10px)`
- Aura lumineuse : `box-shadow: 0 0 40px rgba(99,102,241,0.3)` sur les device mockups
- Gradient texte : `background: linear-gradient(90deg, #818cf8, #c084fc)`

---

## Page 1 — Homepage (portfolio grid)

### Section A — HomeHero (compact)
- Label `PM · PRODUCT BUILDER` en monospace indigo
- Prénom + nom (ou juste prénom)
- 1 ligne de tagline : "Je build des apps IA."
- Lien LinkedIn discret (icône + texte)
- Pas d'iPhone ici, pas de scroll CTA — compact, va direct aux projets

### Section B — Grille de projets
- Titre de section : "Projets"
- **Card 1 : App de coaching IA**
  - Thumbnail iPhone avec screenshot principal
  - Tags : `IA` `Vibe-coded` `Personal`
  - Titre + 1 ligne de description
  - CTA "Voir le projet →"
- **Card 2 : More to come**
  - Style différent : outline pointillé ou opacité réduite
  - Texte : "Prochain projet en cours..."
  - Pas de CTA cliquable

---

## Page 2 — Case study (app de coaching IA)

URL : `/coaching`

Même structure 6 sections qu'avant, avec nav de retour vers la homepage.

### Section 1 — Hero (ProjectHero)
- Layout centré
- Label `PM · PRODUCT BUILDER` en monospace indigo
- Titre : "Je build des apps avec de l'IA" (gradient sur "avec de l'IA")
- Sous-titre court
- iPhone mockup centré, flottant (animation `float`), aura lumineuse
- CTA "Voir le projet ↓" pill border

### Section 2 — Présentation produit
- Description de l'app de coaching
- 3 feature pills : mémoire, conversation naturelle, coaching personnalisé

### Section 3 — Features en action
- 2-3 iPhones avec screenshots ou vidéos
- Scroll horizontal sur mobile

### Section 4 — La logique IA
Contenu enrichi basé sur l'analyse du code source :
- Deux Edge Functions distinctes (chat vs analyse auto)
- 4 outils Anthropic (propose, apply, update_memory, fetch_archives)
- Mémoire persistante : l'IA décide quoi retenir
- Logique pending/confirmed (confiance accordée à l'IA)
- Prompt caching, token budget management

### Section 5 — Construit en vibe-coding
- Récit : PM + Claude Code → prod
- Stack badges : Next.js · Supabase · Claude API · Vercel · Claude Code

### Section 6 — À propos + CTA
- Bio courte _(placeholder à personnaliser)_
- Bouton LinkedIn prominent
- Lien retour portfolio

---

## Navigation

- Homepage : pas de nav (assez courte)
- Case study : lien "← Portfolio" en haut à gauche

---

## Comportement responsive

- Mobile first
- Grille homepage : 1 colonne sur mobile, 2 sur desktop
- FeaturesShowcase : scroll horizontal sur mobile

---

## Analytics

**Vercel Analytics** — gratuit, zéro config, 1 package + 1 composant dans layout.tsx.

---

## Contenu à fournir

- [ ] Prénom/nom affiché
- [ ] URL LinkedIn
- [ ] Bio courte (3 lignes max)
- [ ] Screenshots de l'app (3-5 écrans)
- [ ] Vidéos d'interaction (optionnel, 15-30s, autoplay/muted)
- [ ] Description réelle de l'app

---

## Hors scope

- Authentification
- Blog
- Formulaire de contact
- Internationalisation
- Dark/light toggle (dark only)
