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

  function renderNavLinks(mobile: boolean) {
    return NAV_LINKS.map((label) => {
      const active = pathname === getNavPath(label)
      return (
        <li key={label} className={mobile ? 'nav__item' : undefined}>
          <Link
            href={getNavPath(label)}
            className={mobile ? (active ? 'active' : '') : `nav__link${active ? ' active' : ''}`}
            aria-label={`Go to ${label} page`}
            {...(mobile && {
              'data-testid': `mobile-link-${label.toLowerCase()}`,
              onClick: () => setNavExpanded(false),
            })}
          >
            {label}
          </Link>
        </li>
      )
    })
  }

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
        {renderNavLinks(false)}
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
      >
        {renderNavLinks(true)}
      </ul>
    </nav>
  )
}
