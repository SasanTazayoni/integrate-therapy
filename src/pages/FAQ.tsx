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

      <section className="block block--grey block--top-castrated">
        <h2>Frequently Asked Questions</h2>

        {faqData.map((faq, i) => (
          <FAQItem key={i} question={faq.question} answer={faq.answer} />
        ))}

        <div className="grid grid--1x2 container__buttons">
          <Link to="/">
            <Button>Home</Button>
          </Link>
          <Link to="/contact">
            <Button>Contact</Button>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
