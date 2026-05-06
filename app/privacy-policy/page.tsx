import type { Metadata } from 'next'
import { SITE_URL, CONTACT_EMAIL, CONTACT_PHONE_DISPLAY } from '@/lib/siteConfig'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Integrate Therapy privacy policy — how we collect, use and protect your personal data in line with UK GDPR requirements.',
  alternates: {
    canonical: `${SITE_URL}/privacy-policy`,
  },
  openGraph: {
    title: 'Privacy Policy | Integrate Therapy',
    description:
      'Integrate Therapy privacy policy — how we collect, use and protect your personal data in line with UK GDPR requirements.',
    url: `${SITE_URL}/privacy-policy`,
  },
}

export default function PrivacyPolicy() {
  return (
    <main>
      <section
        className="block block--grey block--top-castrated privacy__block"
        aria-labelledby="privacy-title"
      >
        <div className="container">
          <h1 id="privacy-title">Privacy Policy</h1>
          <p>This privacy notice tells you what to expect us to do with your personal information.</p>

          <section aria-labelledby="contact-details">
            <h2 id="contact-details">Contact details</h2>
            <p><strong>Telephone:</strong> {CONTACT_PHONE_DISPLAY}</p>
            <p><strong>Email:</strong> {CONTACT_EMAIL}</p>
          </section>

          <section aria-labelledby="what-we-collect">
            <h2 id="what-we-collect">What information we collect, use, and why</h2>
            <p>We collect or use the following information to provide patient care, services and other goods:</p>
            <ul>
              <li>Name, address and contact details</li>
              <li>Gender</li>
              <li>Date of birth</li>
            </ul>
            <p>We also collect the following special category information to provide patient care, services and other goods. This information is subject to additional protection due to its sensitive nature:</p>
            <ul>
              <li>Health information (including medical conditions, allergies, medical requirements and medical history)</li>
            </ul>
          </section>

          <section aria-labelledby="lawful-bases">
            <h2 id="lawful-bases">Lawful bases and data protection rights</h2>
            <p>
              Under UK data protection law, we must have a &quot;lawful basis&quot; for collecting and using your personal
              information. There is a list of possible lawful bases in the UK GDPR. You can find out more about
              lawful bases on the{' '}
              <a href="https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/lawful-basis/" target="_blank" rel="noopener noreferrer">
                ICO&apos;s website
              </a>.
            </p>
            <p>Which lawful basis we rely on may affect your data protection rights which are set out in brief below. You can find out more about your data protection rights and the exemptions which may apply on the ICO&apos;s website:</p>
            <ul>
              <li><strong>Your right of access</strong> — You have the right to ask us for copies of your personal information. You can request other information such as details about where we get personal information from and who we share personal information with. There are some exemptions which means you may not receive all the information you ask for.</li>
              <li><strong>Your right to rectification</strong> — You have the right to ask us to correct or delete personal information you think is inaccurate or incomplete.</li>
              <li><strong>Your right to erasure</strong> — You have the right to ask us to delete your personal information.</li>
              <li><strong>Your right to restriction of processing</strong> — You have the right to ask us to limit how we can use your personal information.</li>
              <li><strong>Your right to object to processing</strong> — You have the right to object to the processing of your personal data.</li>
              <li><strong>Your right to data portability</strong> — You have the right to ask that we transfer the personal information you gave us to another organisation, or to you.</li>
              <li><strong>Your right to withdraw consent</strong> — When we use consent as our lawful basis you have the right to withdraw your consent at any time.</li>
            </ul>
            <p>If you make a request, we must respond to you without undue delay and in any event within one month.</p>
            <p>To make a data protection rights request, please contact us using the contact details at the top of this privacy notice.</p>

            <h3>Our lawful bases for the collection and use of your data</h3>
            <p>Our lawful bases for collecting or using personal information to provide patient care, services and other goods are:</p>
            <ul>
              <li>
                <strong>Consent</strong> — we have permission from you after we gave you all the relevant information.
                All of your data protection rights may apply, except the right to object. To be clear, you do have
                the right to withdraw your consent at any time.
              </li>
              <li>
                <strong>Vital interests</strong> — collecting or using the information is needed when someone&apos;s
                physical or mental health or wellbeing is at urgent or serious risk. All of your data protection
                rights may apply, except the right to object and the right to portability.
              </li>
            </ul>
          </section>

          <section aria-labelledby="where-we-get">
            <h2 id="where-we-get">Where we get personal information from</h2>
            <ul>
              <li>Directly from you</li>
            </ul>
          </section>

          <section aria-labelledby="who-we-share">
            <h2 id="who-we-share">Who we share information with</h2>
            <h3>Data processors</h3>
            <p><strong>Formspree</strong> — This data processor does the following activities for us: They receive and store customer enquiry submissions made through our website contact form.</p>
          </section>

          <section aria-labelledby="how-long">
            <h2 id="how-long">How long we keep information</h2>
            <p>
              We retain personal information and clinical records for 7 years after the end of therapy, in line
              with BACP guidance and the UK limitation period for legal claims. After this period, records are
              securely deleted or destroyed.
            </p>
          </section>

          <section aria-labelledby="confidentiality">
            <h2 id="confidentiality">Duty of confidentiality</h2>
            <p>We are subject to a common law duty of confidentiality. However, there are circumstances where we will share relevant health and care information. These are where:</p>
            <ul>
              <li>you&apos;ve provided us with your consent (we have taken it as implied to provide you with care, or you have given it explicitly for other uses);</li>
              <li>we have a legal requirement (including court orders) to collect, share or use the data;</li>
              <li>on a case-by-case basis, the public interest to collect, share and use the data overrides the public interest served by protecting the duty of confidentiality (for example sharing information with the police to support the detection or prevention of serious crime).</li>
            </ul>
          </section>

          <section aria-labelledby="complaints">
            <h2 id="complaints">How to complain</h2>
            <p>
              If you have any concerns about our use of your personal data, you can make a complaint to us using
              the contact details at the top of this privacy notice.
            </p>
            <p>
              If you remain unhappy with how we&apos;ve used your data after raising a complaint with us, you can also
              complain to the ICO.
            </p>
            <address>
              <strong>Information Commissioner&apos;s Office</strong><br />
              Wycliffe House<br />
              Water Lane<br />
              Wilmslow<br />
              Cheshire<br />
              SK9 5AF<br />
              <br />
              Helpline number: 0303 123 1113<br />
              Website:{' '}
              <a href="https://www.ico.org.uk/make-a-complaint" target="_blank" rel="noopener noreferrer">
                ico.org.uk/make-a-complaint
              </a>
            </address>
          </section>
        </div>
      </section>
    </main>
  )
}
