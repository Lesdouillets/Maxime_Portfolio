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
