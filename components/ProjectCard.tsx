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
              <span key={tag} className="text-xs font-mono text-accent-primary border border-indigo-500/25 bg-indigo-500/10 px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <h2 className="text-lg font-bold text-white mb-1 group-hover:text-indigo-300 transition-colors">
            {title}
          </h2>
          <p className="text-sm text-slate-400 mb-4">{description}</p>
          <span className="text-sm text-accent-primary font-medium">
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
