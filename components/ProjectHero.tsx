import Link from 'next/link'
import { DeviceMockup } from './DeviceMockup'
import { coaching } from '@/lib/content'

export function ProjectHero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden">

      {/* Back link */}
      <Link
        href="/"
        className="absolute top-8 left-8 flex items-center gap-2 text-xs font-mono text-slate-500 hover:text-slate-300 transition-colors tracking-wider uppercase"
      >
        <span>←</span>
        <span>Portfolio</span>
      </Link>

      {/* Atmospheric blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 65%)' }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(192,132,252,0.06) 0%, transparent 65%)' }}
      />

      {/* Label */}
      <span className="reveal reveal-1 relative text-xs font-mono text-accent-primary tracking-[0.25em] uppercase mb-8 opacity-80">
        {coaching.hero.label}
      </span>

      {/* Title */}
      <h1 className="reveal reveal-2 relative font-display text-[clamp(3rem,7vw,5.5rem)] leading-[0.95] tracking-[-0.03em] text-white mb-4">
        {coaching.hero.title}
        <br />
        <span className="gradient-text">{coaching.hero.titleGradient}</span>
      </h1>

      {/* Subtitle */}
      <p className="reveal reveal-3 relative text-slate-400 text-lg mb-16 max-w-xs font-light">
        {coaching.hero.subtitle}
      </p>

      {/* Phone — floating */}
      <div className="reveal reveal-4 relative animate-float">
        <div
          aria-hidden="true"
          className="absolute inset-0 scale-[2] opacity-20 blur-3xl rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, #6366f1, transparent)' }}
        />
        <DeviceMockup imageSrc={coaching.hero.heroImage} />
      </div>

      {/* CTA */}
      <a
        href="#project"
        className="relative mt-12 text-xs font-mono text-slate-500 hover:text-slate-300 tracking-[0.2em] uppercase transition-colors flex flex-col items-center gap-2"
      >
        <span>{coaching.hero.cta}</span>
        <span className="w-px h-8 block" style={{ background: 'linear-gradient(to bottom, #6366f1, transparent)' }} />
      </a>

    </section>
  )
}
