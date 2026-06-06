import Link from 'next/link'
import { home } from '@/lib/content'

export function HomeHero() {
  return (
    <header className="relative px-8 pt-20 pb-16 max-w-5xl mx-auto">

      {/* Atmospheric background blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 w-[500px] h-[500px] rounded-full opacity-[0.07]"
        style={{ background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)' }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 w-[300px] h-[300px] rounded-full opacity-[0.05]"
        style={{ background: 'radial-gradient(circle, #c084fc 0%, transparent 70%)' }}
      />

      {/* Label */}
      <p className="reveal reveal-1 text-xs font-mono text-accent-primary tracking-[0.25em] uppercase mb-6 opacity-90">
        {home.label}
      </p>

      {/* Name — the brand stamp */}
      <h1
        className="reveal reveal-2 font-display text-[clamp(3rem,8vw,6rem)] leading-[0.95] tracking-[-0.03em] text-white mb-6"
      >
        {home.name}
      </h1>

      {/* Divider */}
      <div className="reveal reveal-3 flex items-center gap-4 mb-6">
        <div className="h-px flex-1 max-w-[120px]" style={{ background: 'linear-gradient(90deg, #6366f1, transparent)' }} />
        <p className="text-slate-400 text-lg font-light">{home.tagline}</p>
      </div>

      {/* LinkedIn */}
      <div className="reveal reveal-4">
        <Link
          href={home.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2.5 text-sm text-slate-400 hover:text-white transition-colors duration-200"
        >
          <span
            className="flex items-center justify-center w-8 h-8 rounded-lg border border-white/10 bg-white/5 group-hover:bg-indigo-500/20 group-hover:border-indigo-500/40 transition-all duration-200"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-accent-primary">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </span>
          {home.linkedinLabel}
        </Link>
      </div>

    </header>
  )
}
