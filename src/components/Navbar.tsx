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
        <NavLink className="nav__brand" to="/" data-testid="brand-link">
          <img
            className="nav__logo"
            src="images/logo.png"
            alt="Integrate Therapy Logo"
          />
          <h3 className="nav__logo__title">Integrate Therapy</h3>
        </NavLink>
      </div>

      <ul className="list nav__list-widescreen">
        {NAV_LINKS.map((label) => (
          <li key={label}>
            <NavLink
              to={label === "Home" ? "/" : `/${label.toLowerCase()}`}
              className={({ isActive }) =>
                `nav__link${isActive ? " active" : ""}`
              }
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
        aria-label="Menu"
        data-testid="mobile-menu-toggle"
      >
        <svg className="icon nav__toggler">
          <use href="/integrate-therapy/integratesprite.svg#menu" />
        </svg>
      </button>

      <ul id="mobile-menu" className="list nav__list collapsible__content">
        {NAV_LINKS.map((label) => (
          <li key={label} className="nav__item">
            <NavLink
              to={label === "Home" ? "/" : `/${label.toLowerCase()}`}
              className={({ isActive }) => (isActive ? "active" : "")}
              data-testid={`mobile-link-${label.toLowerCase()}`}
            >
              <svg className="icon icon--secondary">
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
