import { useState, useCallback } from "react";
import { NavLink } from "react-router-dom";

const NAV_LINKS = ["Home", "About", "Services", "FAQ", "Contact"];

export default function Navbar() {
  const [navExpanded, setNavExpanded] = useState(false);

  const toggleNav = useCallback(() => {
    setNavExpanded((prev) => !prev);
  }, []);

  return (
    <nav
      className={`nav collapsible ${
        navExpanded ? "collapsible--expanded" : ""
      }`}
      data-testid="navbar"
    >
      <div className="nav__brand__group">
        <div className="nav__brand" aria-label="Integrate Therapy Logo">
          <img
            className="nav__logo"
            src="images/logo.png"
            alt="Integrate Therapy Logo"
          />
          <h2 className="nav__logo__title">Integrate Therapy</h2>
        </div>
      </div>

      <ul className="list nav__list-widescreen">
        {NAV_LINKS.map((label) => (
          <li key={label}>
            <NavLink
              to={label === "Home" ? "/" : `/${label.toLowerCase()}`}
              className={({ isActive }) =>
                `nav__link${isActive ? " active" : ""}`
              }
              aria-label={`Go to ${label} page`}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>

      <button
        className="collapsible__icon"
        onClick={toggleNav}
        aria-expanded={navExpanded}
        aria-controls="mobile-menu"
        aria-label={navExpanded ? "Close main menu" : "Open main menu"}
        data-testid="mobile-menu-toggle"
      >
        <svg className="icon nav__toggler" aria-hidden="true">
          <use href="/integrate-therapy/integratesprite.svg#menu" />
        </svg>
      </button>

      <ul
        id="mobile-menu"
        className="list nav__list collapsible__content"
        role="menu"
      >
        {NAV_LINKS.map((label) => (
          <li key={label} className="nav__item" role="none">
            <NavLink
              to={label === "Home" ? "/" : `/${label.toLowerCase()}`}
              className={({ isActive }) => (isActive ? "active" : "")}
              aria-label={`Go to ${label} page`}
              role="menuitem"
              data-testid={`mobile-link-${label.toLowerCase()}`}
            >
              <svg className="icon icon--secondary" aria-hidden="true">
                <use
                  href={`/integrate-therapy/integratesprite.svg#${label.toLowerCase()}`}
                />
              </svg>
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
