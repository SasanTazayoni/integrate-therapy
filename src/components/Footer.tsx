import { Link } from "react-router-dom";

export default function Footer() {
  const footerLinks = ["Home", "About", "Services", "FAQ", "Contact"];

  return (
    <footer id="site-footer" className="block--white footer__block">
      <nav aria-label="Footer Navigation" className="footer__nav-block">
        <ul className="list footer__list">
          {footerLinks.map((label) => (
            <li key={label} className="footer__item">
              <Link
                to={label === "Home" ? "/" : `/${label.toLowerCase()}`}
                aria-label={`Go to ${label} page`}
              >
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
          <a
            href="https://github.com/SasanTazayoni/integrate-therapy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View source on GitHub"
            className="footer__github-link"
          >
            <svg
              className="footer__github-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
