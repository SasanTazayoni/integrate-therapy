import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description:
    'Integrate Therapy cookie policy — this website does not use cookies or tracking technologies of any kind.',
  alternates: {
    canonical: 'https://SasanTazayoni.github.io/integrate-therapy/cookie-policy',
  },
  openGraph: {
    title: 'Cookie Policy | Integrate Therapy',
    description:
      'Integrate Therapy cookie policy — this website does not use cookies or tracking technologies of any kind.',
    url: 'https://SasanTazayoni.github.io/integrate-therapy/cookie-policy',
  },
}

export default function CookiePolicy() {
  return (
    <main>
      <section
        className="block block--grey block--top-castrated privacy__block"
        aria-labelledby="cookie-title"
      >
        <div className="container">
          <h1 id="cookie-title">Cookie Policy</h1>
          <p>
            This policy explains how Integrate Therapy uses cookies on this website.
          </p>

          <section aria-labelledby="cookie-what">
            <h2 id="cookie-what">What are cookies?</h2>
            <p>
              Cookies are small text files stored on your device when you visit a website. They are widely
              used to make websites work or to provide information to the site owner.
            </p>
          </section>

          <section aria-labelledby="cookie-use">
            <h2 id="cookie-use">Does this website use cookies?</h2>
            <p>
              No. This website does not set any cookies. We do not use analytics, advertising, or
              tracking technologies of any kind. No personal data is collected through cookies on this site.
            </p>
          </section>

          <section aria-labelledby="cookie-third">
            <h2 id="cookie-third">Third-party cookies</h2>
            <p>
              This website embeds a Google Maps iframe on the Contact page. Google may set its own cookies
              when you interact with the map. We have no control over these cookies. Please refer to{' '}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google&apos;s Privacy Policy
              </a>{' '}
              for more information.
            </p>
          </section>

          <section aria-labelledby="cookie-changes">
            <h2 id="cookie-changes">Changes to this policy</h2>
            <p>
              If we introduce any cookies in the future, this policy will be updated and, where required
              by law, your consent will be sought before any non-essential cookies are set.
            </p>
          </section>

          <section aria-labelledby="cookie-contact">
            <h2 id="cookie-contact">Contact</h2>
            <p>
              If you have any questions about this policy, please contact us at{' '}
              <a href="mailto:info@integratetherapy.co.uk">info@integratetherapy.co.uk</a>.
            </p>
          </section>
        </div>
      </section>
    </main>
  )
}
