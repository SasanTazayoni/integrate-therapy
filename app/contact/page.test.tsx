import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Contact from './page'

describe('Contact page', () => {
  test('renders page heading', () => {
    render(<Contact />)
    expect(screen.getByRole('heading', { level: 1, name: /contact me/i })).toBeInTheDocument()
  })

  test('renders fees information', () => {
    render(<Contact />)
    expect(screen.getByTestId('fees')).toBeInTheDocument()
    expect(screen.getByTestId('fees')).toHaveTextContent('£85')
  })

  test('renders map embed', () => {
    render(<Contact />)
    expect(screen.getByTitle(/map showing the location/i)).toBeInTheDocument()
  })

  test('includes ProfessionalService JSON-LD schema', () => {
    render(<Contact />)
    const script = document.querySelector('script[type="application/ld+json"]')
    expect(script).toBeInTheDocument()
    const schema = JSON.parse(script!.innerHTML)
    expect(schema['@type']).toBe('ProfessionalService')
    expect(schema.name).toBe('Integrate Therapy')
  })
})
