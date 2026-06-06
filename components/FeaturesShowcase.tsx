import { coaching } from '@/lib/content'
import { DeviceMockup } from './DeviceMockup'

export function FeaturesShowcase() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-accent-primary tracking-[0.2em] uppercase mb-4 block">Fonctionnalités</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">En action</h2>
        </div>
        <div className="flex gap-8 overflow-x-auto pb-6 md:overflow-visible md:justify-center snap-x snap-mandatory">
          {coaching.features.map(f => (
            <div key={f.label} className="flex flex-col items-center gap-4 snap-center flex-shrink-0">
              <DeviceMockup imageSrc={f.imageSrc} videoSrc={f.videoSrc} label={f.label} />
              <p className="text-sm text-slate-400 max-w-[180px] text-center leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
