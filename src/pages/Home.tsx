import Navbar from "../components/Navigation";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import { testimonialsData } from "../data/testimonials";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />

      <section className="block block--grey">
        <div className="container">
          <div className="card grid grid--1x2-alt overflow-hidden">
            <div className="block__text card__text">
              <header className="block__header">
                <h2>Welcome to Integrate Therapy</h2>
              </header>
              <p>
                Therapy provides a safe, non-judgmental space where you can
                explore your challenges, reflect on your experiences, and gain a
                deeper understanding of yourself. Drawing on experience
                supporting clients from diverse backgrounds, each session is
                tailored to your unique needs, pace, and goals, ensuring the
                support you receive is meaningful and relevant.
              </p>
              <p className="card__text-paragraph">
                However impossible it may feel right now, I know from experience
                that there is a real chance for meaningful change and growth.
                Together, we can uncover strategies to help you navigate life's
                challenges and move toward a more balanced and fulfilling life.
              </p>
            </div>

            <div className="card__image">
              <img
                src={`${import.meta.env.BASE_URL}images/sunset.jpg`}
                alt="Sunset"
                className="card__img"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="background__image"></section>

      <Testimonials testimonials={testimonialsData} />
      <Footer />
    </div>
  );
}
