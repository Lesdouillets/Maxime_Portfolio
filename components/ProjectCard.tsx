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
      <article className="project-card relative overflow-hidden rounded-2xl transition-all duration-300">
        {/* Phone preview area */}
        <div
          className="relative flex items-end justify-center pt-10 pb-0 overflow-hidden"
          style={{ minHeight: '280px', background: 'radial-gradient(ellipse at 50% 100%, rgba(99,102,241,0.12) 0%, transparent 70%)' }}
        >
          {/* Glow behind phone */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-20 opacity-30 blur-2xl"
            style={{ background: 'radial-gradient(ellipse, #6366f1, transparent)' }}
          />
          <DeviceMockup imageSrc={thumbnailSrc} compact className="relative" />
        </div>

        {/* Card content */}
        <div className="p-6 pt-5">
          <div className="flex gap-2 mb-4 flex-wrap">
            {tags.map(tag => (
              <span
                key={tag}
                className="text-[11px] font-mono text-indigo-300 px-2.5 py-1 rounded-md"
                style={{ background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.2)' }}
              >
                {tag}
              </span>
            ))}
          </div>
          <h2 className="font-display text-xl text-white mb-2 group-hover:text-indigo-200 transition-colors duration-200">
            {title}
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed mb-5">{description}</p>
          <div className="flex items-center gap-2 text-sm text-accent-primary font-medium">
            <span>Voir le projet</span>
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </div>
        </div>
      </article>
    </Link>
  )
}

export function ComingSoonCard({ className = '' }: ComingSoonCardProps) {
  return (
    <div
      className={`relative rounded-2xl flex flex-col items-center justify-center p-10 ${className}`}
      style={{
        minHeight: '420px',
        border: '1px dashed rgba(255,255,255,0.08)',
        background: 'rgba(255,255,255,0.01)',
      }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-2xl opacity-[0.03]"
        style={{ background: 'radial-gradient(ellipse at center, #6366f1, transparent 70%)' }}
      />
      <p className="relative text-slate-600 text-xs font-mono tracking-[0.3em] uppercase">More to come</p>
    </div>
  )
}
