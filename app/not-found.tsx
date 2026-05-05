import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="block block--grey block--top not-found__container">
      <h1>404 — Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link href="/" className="button">
        Go Home
      </Link>
    </main>
  )
}
