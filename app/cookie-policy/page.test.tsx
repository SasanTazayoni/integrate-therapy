import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import CookiePolicy from './page'

describe('Cookie Policy page', () => {
  test('renders page heading', () => {
    render(<CookiePolicy />)
    expect(screen.getByRole('heading', { level: 1, name: /cookie policy/i })).toBeInTheDocument()
  })
})
