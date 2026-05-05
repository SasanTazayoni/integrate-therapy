import type { Metadata } from 'next'
import LinkButton from '@/components/LinkButton'
import FAQItem from '@/components/FAQItem'
import { faqData } from '@/data/faqData'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description:
    'Answers to common questions about integrative psychotherapy sessions with Simon Burgess, including fees, session formats and what to expect.',
  alternates: {
    canonical: 'https://SasanTazayoni.github.io/integrate-therapy/faq',
  },
  openGraph: {
    title: 'Frequently Asked Questions | Integrate Therapy',
    description:
      'Answers to common questions about integrative psychotherapy sessions with Simon Burgess, including fees, session formats and what to expect.',
    url: 'https://SasanTazayoni.github.io/integrate-therapy/faq',
  },
}

export default function FAQ() {
  return (
    <main>
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
