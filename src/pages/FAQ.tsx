import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import FAQItem from "../components/FAQItem";
import { faqData } from "../data/faqData";

export default function FAQ() {
  return (
    <>
      <Navbar />

      <section
        className="block block--grey block--top-castrated"
        aria-labelledby="faq-title"
      >
        <h1 id="faq-title">Frequently Asked Questions</h1>

        <div role="list" aria-label="Frequently asked questions list">
          {faqData.map((faq, i) => (
            <FAQItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        <div className="grid grid--1x2 container__buttons">
          <Link to="/" aria-label="Go to Home page">
            <Button>Home</Button>
          </Link>
          <Link to="/contact" aria-label="Go to Contact page">
            <Button>Contact</Button>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
