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

      <div className="footer__credits-block">
        <p data-testid="footer-text">
          &copy; Integrate Therapy 2025. Website designed & created by{" "}
          <a
            href="https://github.com/SasanTazayoni"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sasan Tazayoni
          </a>{" "}
          and{" "}
          <a
            href="https://github.com/stazay"
            target="_blank"
            rel="noopener noreferrer"
          >
            Saba Tazayoni
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
