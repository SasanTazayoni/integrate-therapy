import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Services from './page'

describe('Services page', () => {
  test('renders page heading', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { level: 1, name: /how i can help/i })).toBeInTheDocument()
  })

  test('renders services list', () => {
    render(<Services />)
    const list = screen.getByTestId('services-list')
    expect(list).toBeInTheDocument()
    expect(list.querySelectorAll('li').length).toBe(30)
  })

  test('renders FAQ and Contact buttons', () => {
    render(<Services />)
    expect(screen.getByTestId('faq-button')).toBeInTheDocument()
    expect(screen.getByTestId('contact-button')).toBeInTheDocument()
  })
})
