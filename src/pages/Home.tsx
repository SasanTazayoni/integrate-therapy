import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import InfoCard from "../components/InfoCard";
import Testimonials from "../components/Testimonials";
import { testimonialsData } from "../data/testimonials";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />

      <InfoCard
        title="Welcome to Integrate Therapy"
        paragraphs={[
          "Therapy provides a safe, non-judgmental space where you can explore your challenges, reflect on your experiences, and gain a deeper understanding of yourself. Drawing on experience supporting clients from diverse backgrounds, each session is tailored to your unique needs, pace, and goals, ensuring the support you receive is meaningful and relevant.",
          "However impossible it may feel right now, I know from experience that there is a real chance for meaningful change and growth. Together, we can uncover strategies to help you navigate life's challenges and move toward a more balanced and fulfilling life.",
        ]}
        image="images/sunset.jpg"
        imageAlt="Sunset over calm landscape"
      />

      <section className="background__image"></section>

      <Testimonials testimonials={testimonialsData} />
      <Footer />
    </div>
  );
}
