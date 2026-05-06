import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import PrivacyPolicy from './page'

describe('Privacy Policy page', () => {
  test('renders page heading', () => {
    render(<PrivacyPolicy />)
    expect(screen.getByRole('heading', { level: 1, name: /privacy policy/i })).toBeInTheDocument()
  })
})
