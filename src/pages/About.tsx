import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutIntro from "../components/AboutIntro";
import TrainingSection from "../components/TrainingSection";
import MoreAboutMe from "../components/MoreAboutMe";

export default function About() {
  return (
    <>
      <Navbar />
      <main>
        <AboutIntro />
        <TrainingSection />
        <div className="training__image" aria-hidden="true"></div>
        <MoreAboutMe />
      </main>
      <Footer />
    </>
  );
}
