import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Terms from './page'

describe('Terms & Conditions page', () => {
  test('renders page heading', () => {
    render(<Terms />)
    expect(screen.getByRole('heading', { level: 1, name: /terms/i })).toBeInTheDocument()
  })
})
