import type { Metadata } from 'next'
import AboutIntro from '@/components/AboutIntro'
import TrainingSection from '@/components/TrainingSection'
import MoreAboutMe from '@/components/MoreAboutMe'

export const metadata: Metadata = {
  title: 'About Simon Burgess',
  description:
    'Meet Simon Burgess, an integrative psychotherapist with over ten years of experience helping adults in Hammersmith, West London and online.',
  alternates: {
    canonical: 'https://SasanTazayoni.github.io/integrate-therapy/about',
  },
  openGraph: {
    title: 'About Simon Burgess | Integrate Therapy',
    description:
      'Meet Simon Burgess, an integrative psychotherapist with over ten years of experience helping adults in Hammersmith, West London and online.',
    url: 'https://SasanTazayoni.github.io/integrate-therapy/about',
  },
}

export default function About() {
  return (
    <main>
      <AboutIntro />
      <TrainingSection />
      <div className="training__image" aria-hidden="true"></div>
      <MoreAboutMe />
    </main>
  )
}
