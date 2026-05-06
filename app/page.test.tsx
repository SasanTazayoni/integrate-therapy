import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Home from './page'

describe('Home page', () => {
  test('renders hero heading', () => {
    render(<Home />)
    expect(screen.getByRole('heading', { level: 1, name: /integrate therapy/i })).toBeInTheDocument()
  })

  test('renders welcome section', () => {
    render(<Home />)
    expect(screen.getByRole('heading', { name: /welcome to integrate therapy/i })).toBeInTheDocument()
  })

  test('renders testimonials section', () => {
    render(<Home />)
    expect(screen.getByRole('heading', { name: /testimonials/i })).toBeInTheDocument()
  })
})
