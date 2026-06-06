import { coaching } from '@/lib/content'

export function ProductOverview() {
  return (
    <section id="project" className="py-24 px-6 max-w-2xl mx-auto text-center">
      <span className="text-xs font-mono text-accent-primary tracking-[0.2em] uppercase mb-4 block">Le projet</span>
      <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
        {coaching.product.title}
      </h2>
      <p className="text-slate-400 leading-relaxed mb-12">
        {coaching.product.description}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        {coaching.product.features.map(f => (
          <div key={f.label} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-left">
            <span className="text-xl">{f.emoji}</span>
            <span className="text-sm text-slate-300 font-medium">{f.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
