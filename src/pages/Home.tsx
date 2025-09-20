import Navbar from "../components/Navigation";
import Hero from "../components/Hero";
import Block from "../components/Block";
import Testimonials from "../components/Testimonials";
import { testimonialsData } from "../data/testimonials";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Block
        title="Welcome to Integrate Therapy"
        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci ratione quod repellat doloribus repudiandae..."
        buttonLabel="Learn More"
        buttonHref="/about"
        backgroundClass="block--grey"
      />
      <Block
        title="How I can help you"
        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci ratione quod repellat doloribus repudiandae..."
        buttonLabel="Learn More"
        buttonHref="/services"
      />

      <section className="background__image"></section>

      <Testimonials testimonials={testimonialsData} />
      <Footer />
    </div>
  );
}
