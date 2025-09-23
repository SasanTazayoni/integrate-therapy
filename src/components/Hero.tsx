import { Link } from "react-router-dom";
import Button from "../components/Button";

export default function Hero() {
  return (
    <section className="hero__container">
      <header className="block__header hero__nameplate">
        <h1 className="hero__heading">Simon Burgess</h1>
        <p className="hero__tagline">(MBACP)</p>
        <p className="hero__tagline">Psychotherapist based in London, UK</p>

        <div className="grid grid--1x2 container__buttons">
          <Link to="/about">
            <Button>About</Button>
          </Link>
          <Link to="/contact">
            <Button>Contact</Button>
          </Link>
        </div>
      </header>
    </section>
  );
}
