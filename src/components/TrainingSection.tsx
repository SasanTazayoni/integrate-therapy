import { Link } from "react-router-dom";
import Button from "./Button";

export default function TrainingSection() {
  return (
    <section className="block block--white">
      <div className="container">
        <h3 className="block__header">My Training</h3>

        <p>
          I am a fully qualified and accredited therapist, committed to
          providing evidence-based and client-centered care.
        </p>

        <p>
          My professional training includes <strong>Schema Therapy</strong>,
          which helps clients identify and change unhelpful patterns developed
          early in life, and <strong>Psychodynamic Therapy</strong>, focusing on
          understanding unconscious processes and past experiences to support
          personal growth.
        </p>

        <p>
          I am also a member of the{" "}
          <strong>
            British Association for Counselling and Psychotherapy (MBACP)
          </strong>
          , which ensures adherence to professional and ethical standards.
          Additional continuous professional development includes workshops and
          seminars to stay updated with best practices in psychotherapy.
        </p>
      </div>

      <div className="grid grid--1x2 container__buttons">
        <Link to="/services">
          <Button>Services</Button>
        </Link>
        <Link to="/contact">
          <Button>Contact</Button>
        </Link>
      </div>
    </section>
  );
}
