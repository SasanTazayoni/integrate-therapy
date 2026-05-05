import type { Metadata } from 'next'
import Image from 'next/image'
import { SITE_URL } from '@/lib/siteConfig'
import Hero from '@/components/Hero'
import InfoCard from '@/components/InfoCard'
import Testimonials from '@/components/Testimonials'
import { testimonialsData } from '@/data/testimonials'

export const metadata: Metadata = {
  title: 'Integrate Therapy | Psychotherapy in Hammersmith',
  description:
    'Integrative psychotherapy for adults in Hammersmith, West London and online. Tailored sessions combining multiple therapy models to support your personal growth and mental wellbeing.',
  alternates: {
    canonical: `${SITE_URL}/`,
  },
  openGraph: {
    title: 'Integrate Therapy | Psychotherapy in Hammersmith',
    description:
      'Integrative psychotherapy for adults in Hammersmith, West London and online. Tailored sessions combining multiple therapy models to support your personal growth and mental wellbeing.',
    url: `${SITE_URL}/`,
  },
}

export default function Home() {
  return (
    <main>
      <Hero />
      <InfoCard
        title="Welcome to Integrate Therapy"
        paragraphs={[
          'Therapy provides a safe, non-judgmental space where you can explore your challenges, reflect on your experiences, and gain a deeper understanding of yourself. Drawing on experience supporting clients from diverse backgrounds, each session is tailored to your unique needs, pace, and goals, ensuring the support you receive is meaningful and relevant.',
          "However impossible it may feel right now, I know from experience that there is a real chance for meaningful change and growth. Together, we can uncover strategies to help you navigate life's challenges and move toward a more balanced and fulfilling life.",
        ]}
        image="/images/sunset.jpg"
        imageAlt="Sunset over calm landscape"
        imageWidth={400}
        imageHeight={400}
      />
      <div className="background__image" aria-hidden="true">
        <Image src="/images/childlarge.webp" alt="" fill style={{ objectFit: 'cover' }} sizes="100vw" />
      </div>
      <Testimonials testimonials={testimonialsData} />
    </main>
  )
}
