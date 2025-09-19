import { useState, useEffect } from "react";

export default function Home() {
  const [navExpanded, setNavExpanded] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    "My relationships with people have always been hit or miss. I either get along very well with people or badly with little in between. Simon has helped me to get in touch with my anger. I felt well supported, understood and listened to. He was great at keeping me on track when I lost direction. Overall therapy has been challenging but nonetheless very helpful.",
    "I was having a tough time in my life where I had lost my partner and was spiralling into a depression. I had a lot of difficulty coping and had no one to talk to. Simon enabled me to move forward and get my life back together. Thank you.",
    "The thought of telling someone very personal information about myself was very daunting but I knew that I had to push myself to take initiative if I wanted a better life. Simon is non-judgemental, trustworthy and human and with the therapy that I received, I was able to address all of my problems individually. I have been through a life-changing process with him.",
    "I was always confident and never imagined that I would need therapy. After the death of my father I felt overwhelmed and extremely vulnerable. With Simon’s help, I was able to find myself again and have restored my self-confidence. I highly recommend him.",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () =>
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () =>
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );

  return (
    <div>
      <nav
        className={`nav collapsible ${
          navExpanded ? "collapsible--expanded" : ""
        }`}
      >
        <div className="nav__brand__group">
          <a className="nav__brand" href="/">
            <img className="nav__logo" src="./images/logo_inverse.png" alt="" />
            <h3 className="nav__logo__title">Integrate Therapy</h3>
          </a>
        </div>

        <ul className="list nav__list-widescreen">
          {["Home", "About", "Training", "Services", "Fees", "Contact"].map(
            (label) => (
              <li key={label}>
                <a href={`/${label.toLowerCase()}`}>
                  <div
                    className={`btn btn--${
                      label === "Contact" ? "primary" : "secondary"
                    } nav__btn`}
                  >
                    {label}
                    <svg className="icon">
                      <use
                        xlinkHref={`./images/integratesprite.svg#${label.toLowerCase()}`}
                      ></use>
                    </svg>
                  </div>
                </a>
              </li>
            )
          )}
        </ul>

        <div
          className="collapsible__icon"
          onClick={() => setNavExpanded(!navExpanded)}
        >
          <svg className="icon nav__toggler">
            <use xlinkHref="./images/integratesprite.svg#menu"></use>
          </svg>
        </div>

        <ul className="list nav__list collapsible__content">
          {["Home", "About", "Training", "Services", "Fees", "Contact"].map(
            (label) => (
              <li key={label} className="nav__item">
                <a href={`/${label.toLowerCase()}`}>
                  <svg className="icon icon--secondary">
                    <use
                      xlinkHref={`./images/integratesprite.svg#${label.toLowerCase()}`}
                    ></use>
                  </svg>
                  {label}
                </a>
              </li>
            )
          )}
        </ul>
      </nav>

      <section className="hero__container">
        <header className="block__header hero__nameplate">
          <h1 className="hero__heading">Simon Burgess</h1>
          <p className="hero__tagline">(MBACP)</p>
          <p className="hero__tagline">Psychotherapist based in London, UK</p>
          <div>
            <a href="/about">
              <div className="btn btn--secondary hero__btn">
                About Me
                <svg className="icon">
                  <use xlinkHref="./images/integratesprite.svg#about"></use>
                </svg>
              </div>
            </a>
            <a href="/contact">
              <div className="btn btn--primary hero__btn">
                Contact Me
                <svg className="icon">
                  <use xlinkHref="./images/integratesprite.svg#contact"></use>
                </svg>
              </div>
            </a>
          </div>
        </header>
      </section>

      <article className="block block--grey welcome__block">
        <div className="container">
          <header className="block__header block--regular">
            <h2>Welcome to Integrate Therapy</h2>
          </header>
          <div className="grid grid--1x2">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
              ratione quod repellat doloribus repudiandae...
            </p>
            <a href="/about" className="block__anchor">
              <div className="btn btn--secondary">
                Learn More
                <svg className="icon">
                  <use xlinkHref="./images/integratesprite.svg#right-arrow"></use>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </article>

      <article className="block block--white">
        <div className="container">
          <header className="block__header block--regular">
            <h2>How I can help you</h2>
          </header>
          <div className="grid grid--1x2">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
              ratione quod repellat doloribus repudiandae...
            </p>
            <a href="/services" className="block__anchor">
              <div className="btn btn--secondary">
                Learn More
                <svg className="icon">
                  <use xlinkHref="./images/integratesprite.svg#right-arrow"></use>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </article>

      <section className="background__image"></section>

      <section className="block block--grey">
        <div className="container testimonials__container">
          <h2 className="block__header">Testimonials</h2>
          <div className="testimonials__content">
            {testimonials.map((t, i) => (
              <p key={i} className={i === currentTestimonial ? "active" : ""}>
                {t}
              </p>
            ))}
          </div>
          <div className="grid testimonials__slider">
            <button onClick={prevTestimonial}>◀</button>
            <div className="testimonials-bullets">
              {testimonials.map((_, i) => (
                <div
                  key={i}
                  className={i === currentTestimonial ? "active" : ""}
                />
              ))}
            </div>
            <button onClick={nextTestimonial}>▶</button>
          </div>
        </div>
      </section>

      <footer className="block--white footer__block">
        <div className="footer__nav-block">
          <ul className="list footer__list">
            {[
              "Home",
              "About",
              "Training",
              "Services",
              "Fees",
              "FAQ",
              "Contact",
            ].map((label) => (
              <li key={label} className="footer__item">
                <a href={`/${label.toLowerCase()}`}>{label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer__logo-block">
          <img
            className="footer__logo"
            src="./images/logo_inverse.png"
            alt=""
          />
        </div>
        <div className="footer__credits-block">
          <p>
            &copy; Integrate Therapy Ltd 2021. Website designed & created by
            <a href="https://github.com/SasanTazayoni" target="_blank">
              Sasan Tazayoni
            </a>{" "}
            and
            <a href="https://github.com/stazay" target="_blank">
              Saba Tazayoni
            </a>
            .
          </p>
        </div>
      </footer>
    </div>
  );
}
