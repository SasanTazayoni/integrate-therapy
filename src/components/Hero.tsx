export default function Hero() {
  return (
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
                <use xlinkHref="./integratesprite.svg#about"></use>
              </svg>
            </div>
          </a>
          <a href="/contact">
            <div className="btn btn--primary hero__btn">
              Contact Me
              <svg className="icon">
                <use xlinkHref="./integratesprite.svg#contact"></use>
              </svg>
            </div>
          </a>
        </div>
      </header>
    </section>
  );
}
