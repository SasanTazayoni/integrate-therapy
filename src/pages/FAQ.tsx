import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LinkButton from "../components/LinkButton";
import FAQItem from "../components/FAQItem";
import { faqData } from "../data/faqData";

export default function FAQ() {
  return (
    <>
      <Navbar />
      <main>
        <section
          className="block block--grey block--top-castrated"
          aria-labelledby="faq-title"
        >
          <h1 id="faq-title">Frequently Asked Questions</h1>

          <div className="faq__list">
            {faqData.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>

          <div className="grid grid--1x2 container__buttons">
            <LinkButton to="/" aria-label="Go to Home page">Home</LinkButton>
            <LinkButton to="/contact" aria-label="Go to Contact page">Contact</LinkButton>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
