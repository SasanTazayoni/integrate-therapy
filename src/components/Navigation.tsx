import { useState, useCallback } from "react";
import { Link } from "react-router-dom";

const NAV_LINKS = ["Home", "About", "Training", "Services", "Fees", "Contact"];

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
    >
      <div className="nav__brand__group">
        <Link className="nav__brand" to="/">
          <img
            className="nav__logo"
            src="/images/logo.png"
            alt="Integrate Therapy Logo"
          />
          <h3 className="nav__logo__title">Integrate Therapy</h3>
        </Link>
      </div>

      <ul className="list nav__list-widescreen">
        {NAV_LINKS.map((label) => (
          <li key={label}>
            <Link to={label === "Home" ? "/" : `/${label.toLowerCase()}`}>
              <div
                className={`btn btn--${
                  label === "Contact" ? "primary" : "secondary"
                } nav__btn`}
              >
                {label}
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <button
        className="collapsible__icon"
        onClick={toggleNav}
        aria-expanded={navExpanded}
        aria-controls="mobile-menu"
      >
        <svg className="icon nav__toggler">
          <use xlinkHref="/integratesprite.svg#menu" />
        </svg>
      </button>

      <ul id="mobile-menu" className="list nav__list collapsible__content">
        {NAV_LINKS.map((label) => (
          <li key={label} className="nav__item">
            <Link to={label === "Home" ? "/" : `/${label.toLowerCase()}`}>
              <svg className="icon icon--secondary">
                <use
                  xlinkHref={`/integratesprite.svg#${label.toLowerCase()}`}
                />
              </svg>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
