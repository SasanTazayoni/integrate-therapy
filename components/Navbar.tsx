'use client'

import { useState, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NAV_LINKS, getNavPath } from '../data/navLinks'

export default function Navbar() {
  const [navExpanded, setNavExpanded] = useState(false)
  const pathname = usePathname()

  const toggleNav = useCallback(() => {
    setNavExpanded((prev) => !prev)
  }, [])

  return (
    <nav
      className={`nav collapsible ${navExpanded ? 'collapsible--expanded' : ''}`}
      data-testid="navbar"
    >
      <div className="nav__brand__group">
        <div className="nav__brand">
          <Image
            className="nav__logo"
            src="/images/logo.png"
            alt="Integrate Therapy Logo"
            width={103}
            height={103}
            priority
          />
          <h2 className="nav__logo__title">Integrate Therapy</h2>
        </div>
      </div>

      <ul className="list nav__list-widescreen">
        {NAV_LINKS.map((label) => (
          <li key={label}>
            <Link
              href={getNavPath(label)}
              className={`nav__link${pathname === getNavPath(label) ? ' active' : ''}`}
              aria-label={`Go to ${label} page`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <button
        className="collapsible__icon"
        onClick={toggleNav}
        aria-expanded={navExpanded}
        aria-controls="mobile-menu"
        aria-label={navExpanded ? 'Close main menu' : 'Open main menu'}
        data-testid="mobile-menu-toggle"
      >
        <svg className="icon nav__toggler" aria-hidden="true">
          <use href="/integratesprite.svg#menu" />
        </svg>
      </button>

      <ul
        id="mobile-menu"
        className="list nav__list collapsible__content"
        role="menu"
      >
        {NAV_LINKS.map((label) => (
          <li key={label} className="nav__item" role="none">
            <Link
              href={getNavPath(label)}
              className={pathname === getNavPath(label) ? 'active' : ''}
              aria-label={`Go to ${label} page`}
              role="menuitem"
              data-testid={`mobile-link-${label.toLowerCase()}`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
