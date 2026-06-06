import { coaching } from '@/lib/content'

export function VibeCodingStory() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <span className="text-xs font-mono text-accent-primary tracking-[0.2em] uppercase mb-4 block">Comment c'est construit</span>
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
