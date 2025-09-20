import Navbar from "../components/Navigation";
import Footer from "../components/Footer";

const servicesList1 = [
  "Lorem.",
  "Lorem, ipsum.",
  "Lorem.",
  "Lorem, ipsum dolor.",
  "Lorem, ipsum.",
  "Lorem.",
  "Lorem.",
  "Lorem ipsum dolor sit.",
  "Lorem.",
  "Lorem, ipsum.",
];

const servicesList2 = [
  "Lorem ipsum dolor sit.",
  "Lorem, ipsum dolor.",
  "Lorem, ipsum.",
  "Lorem.",
  "Lorem, ipsum dolor.",
  "Lorem, ipsum dolor.",
  "Lorem.",
  "Lorem.",
  "Lorem.",
  "Lorem ipsum dolor sit amet.",
];

export default function Services() {
  return (
    <>
      <Navbar />

      <section className="block block--grey block--top">
        <div className="container">
          <h2 className="services__title">Services provided</h2>
          <div className="grid grid--1x2-castrated">
            <div>
              <ul className="services__list">
                {servicesList1.map((service, i) => (
                  <li key={i} className="list__item">
                    {service}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <ul className="services__list">
                {servicesList2.map((service, i) => (
                  <li key={i} className="list__item">
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid--1x2 container--buttons">
            <a href="/fees">
              <div className="btn btn--secondary">
                Fees
                <svg className="icon">
                  <use xlinkHref="./integratesprite.svg#fees"></use>
                </svg>
              </div>
            </a>
            <a href="/contact">
              <div className="btn btn--primary">
                Contact
                <svg className="icon">
                  <use xlinkHref="./integratesprite.svg#contact"></use>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="services__image"></section>

      <Footer />
    </>
  );
}
