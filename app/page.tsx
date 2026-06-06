import { HomeHero } from '@/components/HomeHero'
import { ProjectCard, ComingSoonCard } from '@/components/ProjectCard'
import { projects } from '@/lib/content'

export default function Home() {
  return (
    <main>
      <HomeHero />
      <section className="px-8 pb-28 max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <span className="text-[11px] font-mono text-slate-600 tracking-[0.3em] uppercase">Projets</span>
          <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg, rgba(99,102,241,0.3), transparent)' }} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
