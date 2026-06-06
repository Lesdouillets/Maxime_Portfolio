import Link from 'next/link'
import { coaching } from '@/lib/content'

export function About() {
  return (
    <section className="py-24 px-6 border-t border-white/5">
      <div className="max-w-lg mx-auto text-center">
        <p className="text-slate-300 leading-relaxed text-lg mb-10">
          {coaching.about.bio}
        </p>
        <a
          href={coaching.about.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-accent-primary hover:bg-indigo-500 text-white font-semibold px-7 py-3.5 rounded-full transition-colors duration-200 text-sm"
        >
          {coaching.about.linkedinLabel}
        </a>
        <div className="mt-12">
          <Link href="/" className="text-slate-600 text-sm hover:text-slate-400 transition-colors">
            ← Retour au portfolio
          </Link>
        </div>
      </div>
    </section>
  )
}
