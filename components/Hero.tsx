import LinkButton from "./LinkButton";

export default function Hero() {
  return (
    <section className="hero__container">
      <header className="block__header hero__nameplate">
        <div className="hero__text-overlay">
          <h1 className="hero__heading">Simon Burgess</h1>
          <p className="hero__tagline">(MBACP)</p>
          <p className="hero__tagline">Psychotherapist based in London, UK</p>

          <div className="grid grid--1x2 container__buttons">
            <LinkButton href="/about" aria-label="Learn more about the therapist">About</LinkButton>
            <LinkButton href="/contact" aria-label="Contact the therapist">Contact</LinkButton>
          </div>
        </div>
      </header>
    </section>
  );
}
