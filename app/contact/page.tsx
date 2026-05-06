import type { Metadata } from 'next'
import { SITE_URL, CONTACT_EMAIL, CONTACT_PHONE } from '@/lib/siteConfig'
import ContactCard from '@/components/ContactCard'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Integrate Therapy. Book a session with Simon Burgess at 77 Fulham Palace Road, London or online. Individual sessions: £85 (50 minutes).',
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    title: 'Contact | Integrate Therapy',
    description:
      'Get in touch with Integrate Therapy. Book a session with Simon Burgess at 77 Fulham Palace Road, London or online. Individual sessions: £85 (50 minutes).',
    url: `${SITE_URL}/contact`,
    images: [{ url: `${SITE_URL}/images/hero.jpg` }],
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Integrate Therapy',
  description: 'Integrative psychotherapy for adults in Hammersmith, West London and online.',
  url: SITE_URL,
  telephone: CONTACT_PHONE,
  email: CONTACT_EMAIL,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '77 Fulham Palace Road',
    addressLocality: 'London',
    postalCode: 'W6 8JA',
    addressCountry: 'GB',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 51.48962547953231,
    longitude: -0.22501694831186675,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Tuesday', 'Wednesday'],
      opens: '09:00',
      closes: '21:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Friday'],
      opens: '09:00',
      closes: '12:00',
    },
  ],
  priceRange: '££',
  currenciesAccepted: 'GBP',
  paymentAccepted: 'Bank transfer, card',
}

export default function Contact() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <section
        className="block block--grey block--top-condensed"
        aria-labelledby="contact-intro"
      >
        <h1 id="contact-intro">Contact Me</h1>
        <div className="container">
          <ContactCard />

          <div
            className="container--white contact__fees-card"
            aria-labelledby="fees-section"
          >
            <h2 id="fees-section" className="block__header">
              Fees
            </h2>
            <p data-testid="fees">
              <strong>Individuals:</strong> £85 per session (50 minutes)
            </p>
          </div>

          <div
            className="container--white contact__cancellation-card"
            aria-labelledby="cancellation-section"
          >
            <h2 id="cancellation-section" className="block__header">
              Cancellation Policy
            </h2>
            <p>
              Once a session is booked,{' '}
              <strong>two working days (48 hours)</strong> notice is required
              for cancellations. Otherwise, the full cost of the session will be
              incurred. If you need to cancel or change an appointment, please
              contact me with the details provided above.
            </p>
          </div>
        </div>
      </section>

      <section
        className="block block--white contact__form-block"
        aria-labelledby="contact-form-section"
      >
        <h2 id="contact-form-section" className="block__header">
          Contact Form
        </h2>
        <div className="container">
          <ContactForm />
        </div>
      </section>

      <section
        className="block block--grey contact-map__block"
        aria-labelledby="map-section"
      >
        <h2 id="map-section" className="block__header">
          Where to find us
        </h2>
        <div className="container">
          <iframe
            title="Map showing the location of Integrate Therapy, Fulham Palace Road, London"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.285644406752!2d-0.22501694831186675!3d51.48962547953231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760fb9f9740375%3A0x3da2c9c882211840!2s77%20Fulham%20Palace%20Rd%2C%20London%20W6%208JA!5e0!3m2!1sen!2suk!4v1637158751612!5m2!1sen!2suk"
            width="100%"
            height={600}
            style={{
              border: '3px solid var(--color-border)',
              borderRadius: '10px',
            }}
            allowFullScreen
            loading="lazy"
          />
        </div>
      </section>
    </main>
  )
}
