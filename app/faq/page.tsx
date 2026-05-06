import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/siteConfig'
import LinkButton from '@/components/LinkButton'
import FAQItem from '@/components/FAQItem'
import { faqData } from '@/data/faqData'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description:
    'Answers to common questions about integrative psychotherapy sessions with Simon Burgess, including fees, session formats and what to expect.',
  alternates: {
    canonical: `${SITE_URL}/faq`,
  },
  openGraph: {
    title: 'Frequently Asked Questions | Integrate Therapy',
    description:
      'Answers to common questions about integrative psychotherapy sessions with Simon Burgess, including fees, session formats and what to expect.',
    url: `${SITE_URL}/faq`,
    images: [{ url: `${SITE_URL}/images/hero.jpg` }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}

export default function FAQ() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section
        className="block block--grey block--top-castrated"
        aria-labelledby="faq-title"
      >
        <h1 id="faq-title">Frequently Asked Questions</h1>

        <div className="faq__list">
          {faqData.map((faq) => (
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        <div className="grid grid--1x2 container__buttons">
          <LinkButton href="/" aria-label="Go to Home page">Home</LinkButton>
          <LinkButton href="/contact" aria-label="Go to Contact page">Contact</LinkButton>
        </div>
      </section>
    </main>
  )
}
