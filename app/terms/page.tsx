import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/siteConfig'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description:
    'Terms and conditions for psychotherapy services provided by Simon Burgess trading as Integrate Therapy, including fees, cancellation policy and confidentiality.',
  alternates: {
    canonical: `${SITE_URL}/terms`,
  },
  openGraph: {
    title: 'Terms & Conditions | Integrate Therapy',
    description:
      'Terms and conditions for psychotherapy services provided by Simon Burgess trading as Integrate Therapy, including fees, cancellation policy and confidentiality.',
    url: `${SITE_URL}/terms`,
    images: [{ url: `${SITE_URL}/images/hero.jpg` }],
  },
}

export default function Terms() {
  return (
    <main>
      <section
        className="block block--grey block--top-condensed privacy__block"
        aria-labelledby="terms-title"
      >
        <div className="container">
          <h1 id="terms-title">Terms &amp; Conditions</h1>
          <p>
            These terms and conditions govern the provision of psychotherapy services by Simon Jake Burgess,
            trading as Integrate Therapy (<strong>&quot;the Therapist&quot;</strong>). By booking a session, you agree
            to the following terms.
          </p>

          <section aria-labelledby="terms-services">
            <h2 id="terms-services">Services</h2>
            <p>
              Integrate Therapy provides individual psychotherapy sessions delivered either in person or
              online via a secure video platform. Sessions are 50 minutes in duration.
            </p>
          </section>

          <section aria-labelledby="terms-fees">
            <h2 id="terms-fees">Fees</h2>
            <p>
              The fee for an individual session is <strong>£85</strong>. Payment is due at the end of each
              session and can be made by bank transfer or card.
            </p>
            <p>
              Fees are subject to review. You will be given a minimum of one month&apos;s notice of any change
              in fees.
            </p>
          </section>

          <section aria-labelledby="terms-cancellation">
            <h2 id="terms-cancellation">Cancellation Policy</h2>
            <p>
              If you need to cancel or reschedule a session, please provide at least{' '}
              <strong>two working days (48 hours)</strong> notice. Cancellations made with less than 48
              hours notice will be charged the full session fee.
            </p>
            <p>
              In the event that the Therapist needs to cancel a session, you will be notified as soon as
              possible and no charge will be made.
            </p>
          </section>

          <section aria-labelledby="terms-confidentiality">
            <h2 id="terms-confidentiality">Confidentiality</h2>
            <p>
              All information shared within sessions is treated as strictly confidential. There are
              limited exceptions where confidentiality may need to be broken:
            </p>
            <ul>
              <li>Where there is a serious risk of harm to you or another person</li>
              <li>Where disclosure is required by law or court order</li>
              <li>Where required for clinical supervision (shared without identifying details)</li>
            </ul>
            <p>
              The Therapist receives regular clinical supervision as required by the British Association
              for Counselling and Psychotherapy (BACP). Information may be discussed in supervision in
              anonymised form.
            </p>
          </section>

          <section aria-labelledby="terms-suitability">
            <h2 id="terms-suitability">Suitability</h2>
            <p>
              Integrate Therapy provides talking therapy for adults aged 18 and over. If it becomes
              apparent that a different form of support would better meet your needs, the Therapist will
              discuss this with you and, where appropriate, provide a referral.
            </p>
            <p>
              Therapy is not a crisis service. If you are in immediate danger or require urgent support,
              please contact your GP, call 999, or contact the Samaritans on <strong>116 123</strong>.
            </p>
          </section>

          <section aria-labelledby="terms-online">
            <h2 id="terms-online">Online Sessions</h2>
            <p>
              Online sessions are conducted via a secure video platform. You are responsible for ensuring
              you have a private, confidential space and a stable internet connection. The Therapist
              cannot be held responsible for technical issues on your end that affect the quality of the
              session.
            </p>
            <p>
              If a connection failure occurs, the Therapist will attempt to reconnect. If the session
              cannot continue, a reduced fee or rescheduled session will be offered at the Therapist&apos;s
              discretion.
            </p>
          </section>

          <section aria-labelledby="terms-liability">
            <h2 id="terms-liability">Limitation of Liability</h2>
            <p>
              The Therapist is not liable for any indirect or consequential loss arising from the
              provision of therapy services. Nothing in these terms excludes liability for death or
              personal injury caused by negligence, or any other liability that cannot be excluded by law.
            </p>
          </section>

          <section aria-labelledby="terms-governing">
            <h2 id="terms-governing">Governing Law</h2>
            <p>
              These terms are governed by the laws of England and Wales. Any disputes will be subject to
              the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>

          <section aria-labelledby="terms-contact">
            <h2 id="terms-contact">Contact</h2>
            <p>
              If you have any questions about these terms, please contact us at{' '}
              <a href="mailto:info@integratetherapy.co.uk">info@integratetherapy.co.uk</a>.
            </p>
          </section>
        </div>
      </section>
    </main>
  )
}
