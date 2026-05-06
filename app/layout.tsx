import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { SITE_URL } from '@/lib/siteConfig'
import '@/styles/normalize.css'
import '@/styles/styles.css'

export const metadata: Metadata = {
  title: {
    default: 'Integrate Therapy | Psychotherapy in Hammersmith',
    template: '%s | Integrate Therapy',
  },
  description:
    'Integrative psychotherapy for adults in Hammersmith, West London and online. Tailored sessions combining multiple therapy models to support your personal growth and mental wellbeing.',
  openGraph: {
    siteName: 'Integrate Therapy',
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/images/hero.jpg`,
        width: 3505,
        height: 2337,
      },
    ],
  },
  appleWebApp: {
    capable: true,
    title: 'Integrate Therapy',
    statusBarStyle: 'default',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <Navbar />
        <div id="main-content">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
