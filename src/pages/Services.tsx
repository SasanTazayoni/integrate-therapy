import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";

const services = [
  "Anxiety and Panic Disorders",
  "Depression and Low Mood",
  "Stress and Burnout",
  "Grief, Loss, and Bereavement",
  "Self-Esteem and Confidence",
  "Relationship Challenges",
  "Family and Parenting Support",
  "Trauma and Post-Traumatic Stress",
  "Life Transitions (moving, career change, retirement)",
  "Coping with Chronic Illness or Pain",
  "Childhood Emotional Neglect",
  "Adjustment to University or New Environments",
  "Emotional Regulation and Coping Skills",
  "Identity and Self-Exploration",
  "Attachment Difficulties",
  "Anger Management",
  "Body Image Concerns",
  "Workplace Pressures and Career Stress",
  "Sleep Difficulties and Insomnia",
  "Phobias and Fears",
  "Cultural Adjustment and Relocation Stress",
  "Social Anxiety and Loneliness",
  "Personal Growth and Self-Development",
  "Perfectionism and Procrastination",
  "Sexuality, Gender, and Identity Support",
  "Family of Origin Issues",
  "Managing Uncertainty and Change",
  "Boundaries and Assertiveness",
  "Mindfulness and Stress Reduction",
  "Support for Carers and Helping Professionals",
];

export default function Services() {
  return (
    <>
      <Navbar />

      <section
        className="block block--grey block--top"
        aria-labelledby="services-title"
      >
        <div className="container">
          <h1 id="services-title" className="services__title">
            How I Can Help
          </h1>

          <ul
            className="services__list"
            data-testid="services-list"
            aria-label="List of services I provide"
          >
            {services.map((service, i) => (
              <li key={i} className={`list__item delay-${i}`}>
                {service}
              </li>
            ))}
          </ul>

          <div className="grid grid--1x2 container__buttons">
            <Link to="/FAQ" aria-label="Go to frequently asked questions page">
              <Button data-testid="faq-button">FAQ</Button>
            </Link>
            <Link to="/contact" aria-label="Go to contact page">
              <Button data-testid="contact-button">Contact</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="services__image"></section>

      <Footer />
    </>
  );
}
