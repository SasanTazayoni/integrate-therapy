import type { Metadata } from 'next'
import Image from 'next/image'
import { SITE_URL } from '@/lib/siteConfig'
import AboutIntro from '@/components/AboutIntro'
import TrainingSection from '@/components/TrainingSection'
import MoreAboutMe from '@/components/MoreAboutMe'

export const metadata: Metadata = {
  title: 'About Simon Burgess',
  description:
    'Meet Simon Burgess, an integrative psychotherapist with over ten years of experience helping adults in Hammersmith, West London and online.',
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    title: 'About Simon Burgess | Integrate Therapy',
    description:
      'Meet Simon Burgess, an integrative psychotherapist with over ten years of experience helping adults in Hammersmith, West London and online.',
    url: `${SITE_URL}/about`,
    images: [{ url: `${SITE_URL}/images/hero.jpg` }],
  },
}

export default function About() {
  return (
    <main>
      <AboutIntro />
      <TrainingSection />
      <div className="training__image" aria-hidden="true">
        <Image src="/images/trainingxlarge.webp" alt="" fill style={{ objectFit: 'cover' }} sizes="100vw" />
      </div>
      <MoreAboutMe />
    </main>
  )
}
