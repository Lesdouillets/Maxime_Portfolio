import { coaching } from '@/lib/content'

export function AIArchitecture() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-mono text-accent-primary tracking-[0.2em] uppercase mb-4 block">Sous le capot</span>
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
