import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
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
        url: 'https://SasanTazayoni.github.io/integrate-therapy/images/hero.jpg',
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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/integrate-therapy/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/integrate-therapy/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/integrate-therapy/favicon-16x16.png" />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
