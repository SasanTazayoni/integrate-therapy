import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import FAQ from './page'
import { faqData } from '@/data/faqData'

describe('FAQ page', () => {
  test('renders page heading', () => {
    render(<FAQ />)
    expect(screen.getByRole('heading', { level: 1, name: /frequently asked questions/i })).toBeInTheDocument()
  })

  test('renders all FAQ items', () => {
    render(<FAQ />)
    faqData.forEach(({ question }) => {
      expect(screen.getByText(question)).toBeInTheDocument()
    })
  })

  test('includes FAQPage JSON-LD schema', () => {
    render(<FAQ />)
    const script = document.querySelector('script[type="application/ld+json"]')
    expect(script).toBeInTheDocument()
    const schema = JSON.parse(script!.innerHTML)
    expect(schema['@type']).toBe('FAQPage')
    expect(schema.mainEntity).toHaveLength(faqData.length)
  })
})
