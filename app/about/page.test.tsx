import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import About from './page'

describe('About page', () => {
  test('renders about heading', () => {
    render(<About />)
    expect(screen.getByRole('heading', { level: 1, name: /about me/i })).toBeInTheDocument()
  })

  test('renders Simon Burgess image', () => {
    render(<About />)
    expect(screen.getByAltText(/simon burgess/i)).toBeInTheDocument()
  })
})
