import type { Metadata } from 'next'
import LinkButton from '@/components/LinkButton'

const services = [
  'Anxiety and Panic Disorders',
  'Depression and Low Mood',
  'Stress and Burnout',
  'Grief, Loss, and Bereavement',
  'Self-Esteem and Confidence',
  'Relationship Challenges',
  'Family and Parenting Support',
  'Trauma and Post-Traumatic Stress',
  'Life Transitions (moving, career change, retirement)',
  'Coping with Chronic Illness or Pain',
  'Childhood Emotional Neglect',
  'Adjustment to University or New Environments',
  'Emotional Regulation and Coping Skills',
  'Identity and Self-Exploration',
  'Attachment Difficulties',
  'Anger Management',
  'Body Image Concerns',
  'Workplace Pressures and Career Stress',
  'Sleep Difficulties and Insomnia',
  'Phobias and Fears',
  'Cultural Adjustment and Relocation Stress',
  'Social Anxiety and Loneliness',
  'Personal Growth and Self-Development',
  'Perfectionism and Procrastination',
  'Sexuality, Gender, and Identity Support',
  'Family of Origin Issues',
  'Managing Uncertainty and Change',
  'Boundaries and Assertiveness',
  'Mindfulness and Stress Reduction',
  'Support for Carers and Helping Professionals',
]

export const metadata: Metadata = {
  title: 'How I Can Help',
  description:
    'Explore the range of issues Simon Burgess can help with, including anxiety, depression, trauma, relationship difficulties, stress, grief and more.',
  alternates: {
    canonical: 'https://SasanTazayoni.github.io/integrate-therapy/services',
  },
  openGraph: {
    title: 'How I Can Help | Integrate Therapy',
    description:
      'Explore the range of issues Simon Burgess can help with, including anxiety, depression, trauma, relationship difficulties, stress, grief and more.',
    url: 'https://SasanTazayoni.github.io/integrate-therapy/services',
  },
}

export default function Services() {
  return (
    <main>
      <section
        className="block block--grey block--top"
        aria-labelledby="services-title"
      >
        <div className="container">
          <h1 id="services-title" className="services__title">
            How I Can Help
          </h1>

          <ul
            className="services__list"
            data-testid="services-list"
            aria-label="List of services I provide"
          >
            {services.map((service, i) => (
              <li key={service} className={`list__item delay-${i}`}>
                {service}
              </li>
            ))}
          </ul>

          <div className="grid grid--1x2 container__buttons">
            <LinkButton href="/faq" aria-label="Go to frequently asked questions page" data-testid="faq-button">FAQ</LinkButton>
            <LinkButton href="/contact" aria-label="Go to contact page" data-testid="contact-button">Contact</LinkButton>
          </div>
        </div>
      </section>

      <div className="services__image" aria-hidden="true"></div>
    </main>
  )
}
