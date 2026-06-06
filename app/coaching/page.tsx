import { ProjectHero } from '@/components/ProjectHero'
import { ProductOverview } from '@/components/ProductOverview'
import { FeaturesShowcase } from '@/components/FeaturesShowcase'
import { AIArchitecture } from '@/components/AIArchitecture'
import { VibeCodingStory } from '@/components/VibeCodingStory'
import { About } from '@/components/About'

export default function CoachingPage() {
  return (
    <main>
      <ProjectHero />
      <ProductOverview />
      <FeaturesShowcase />
      <AIArchitecture />
      <VibeCodingStory />
      <About />
    </main>
  )
}
