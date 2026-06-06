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

      <span className="relative text-xs font-mono text-accent-primary tracking-[0.2em] uppercase mb-6">
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

      <a href="#project" className="relative mt-10 text-sm text-accent-primary border border-indigo-500/30 px-6 py-2.5 rounded-full hover:border-indigo-400 transition-colors">
        {coaching.hero.cta}
      </a>
    </section>
  )
}
