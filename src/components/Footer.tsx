export default function Footer() {
  const footerLinks = [
    "Home",
    "About",
    "Training",
    "Services",
    "Fees",
    "FAQ",
    "Contact",
  ];

  return (
    <footer className="block--white footer__block">
      <div className="footer__nav-block">
        <ul className="list footer__list">
          {footerLinks.map((label) => (
            <li key={label} className="footer__item">
              <a href={`/${label.toLowerCase()}`}>{label}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="footer__logo-block">
        <img className="footer__logo" src="/images/logo.png" alt="" />
      </div>
      <div className="footer__credits-block">
        <p>
          &copy; Integrate Therapy 2025. Website designed & created by{" "}
          <a href="https://github.com/SasanTazayoni" target="_blank">
            Sasan Tazayoni
          </a>{" "}
          and{" "}
          <a href="https://github.com/stazay" target="_blank">
            Saba Tazayoni
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
