import Navbar from "../components/Navigation";
import Footer from "../components/Footer";
import AboutIntro from "../components/AboutIntro";
import TrainingSection from "../components/TrainingSection";
import MoreAboutMe from "../components/MoreAboutMe";

export default function About() {
  return (
    <>
      <Navbar />
      <AboutIntro />
      <TrainingSection />
      <section className="training__image"></section>
      <MoreAboutMe />
      <Footer />
    </>
  );
}
