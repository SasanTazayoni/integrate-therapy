import { Link } from "react-router-dom";
import { NAV_LINKS, getNavPath } from "../data/navLinks";

export default function Footer() {
  return (
    <footer id="site-footer" className="block--white footer__block">
      <nav aria-label="Footer Navigation" className="footer__nav-block">
        <ul className="list footer__list">
          {NAV_LINKS.map((label) => (
            <li key={label} className="footer__item">
              <Link to={getNavPath(label)} aria-label={`Go to ${label} page`}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="footer__logo-block">
        <img
          className="footer__logo"
          src="images/logo.png"
          alt="Integrate Therapy logo"
        />
      </div>

      <div className="footer__bottom">
        <div className="footer__legal-links">
          <Link to="/privacy-policy" className="footer__privacy-link">
            Privacy Policy
          </Link>
          <Link to="/terms" className="footer__privacy-link">
            Terms &amp; Conditions
          </Link>
          <Link to="/cookie-policy" className="footer__privacy-link">
            Cookie Policy
          </Link>
        </div>
        <div className="footer__credits-block">
          <p data-testid="footer-text">
            &copy; Integrate Therapy 2025. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
