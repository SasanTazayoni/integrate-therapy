import { Link } from "react-router-dom";
import Navbar from "../components/Navigation";
import Footer from "../components/Footer";
import Button from "../components/Button";

export default function About() {
  return (
    <>
      <Navbar />

      <article className="block block--grey block--top-castrated">
        <div className="container">
          <h2>About Me</h2>
          <div className="grid grid--1x2-alt">
            <div>
              <p>
                I am Simon Burgess, an integrative therapist. I have been
                working as a psychotherapist for over ten years, helping people
                navigate life's challenges and find greater balance. As an
                integrative therapist, I combine different approaches so that
                each session is tailored to your needs - you are at the center
                of every conversation.
              </p>
              <p>
                I believe that everyone has the capacity to grow, heal, and
                create meaningful change in their life. My role is to provide a
                safe, supportive, and non-judgmental space where we can explore
                your concerns, work through challenges, and discover strategies
                that help you thrive.
              </p>
              <p>
                In our work together, I want to help you feel more connected to
                yourself and the life you want to create. Therapy is a space to
                slow down, reflect, and explore what might be holding you back,
                while also uncovering new ways of moving forward. Together, we
                will find what works best for you so that the process feels
                supportive, empowering, and relevant to your unique journey.
              </p>
              <p>
                Whether you are dealing with anxiety, relationship difficulties,
                or simply looking for personal growth, I am here to support you
                every step of the way.
              </p>
            </div>
            <div className="about__image-container">
              <img
                className="about__image"
                src="/images/aboutpic.jpg"
                alt="A picture of Simon Burgess"
              />
            </div>
          </div>
        </div>
      </article>

      <section className="block block--white">
        <div className="container">
          <h3 className="block__header">My Training</h3>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            deleniti vitae adipisci deserunt quibusdam nihil error excepturi
            natus a dolorem.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
            delectus numquam cupiditate nam esse! Repellat, amet harum placeat
            eius quae accusantium beatae dolore dolorum ad laudantium iure
            itaque doloribus provident!
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
            ipsam? Tempore aut magni doloremque laboriosam eligendi pariatur
            esse voluptatibus numquam? Enim nulla doloribus alias omnis odit
            repellendus eum architecto animi reiciendis! At fugiat dolores ea
            quibusdam eius minus blanditiis amet! Inventore, voluptatibus omnis
            sequi id soluta incidunt harum repudiandae facilis!
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

      <section className="training__image"></section>

      <article className="block block--grey">
        <div className="container">
          <h3 className="block__header">More About Me</h3>
          <div>
            <p>
              Outside of my work as a therapist, I value keeping a healthy
              balance in life. I enjoy weightlifting, tennis, and football,
              which help me stay active and focused. I am also passionate about
              reading and writing - particularly reflecting on personal
              experiences and sharing what I have learned along the way.
            </p>
            <p>
              These activities are not just hobbies for me; they remind me of
              the importance of curiosity, resilience, and connection -
              qualities I also bring into my therapeutic work. I believe it is
              important for clients to know that while I am a therapist, I am
              also a person, with my own interests and experiences, navigating
              life just like everyone else.
            </p>
            <p>
              I strive for continual self-improvement, whether that is through
              learning, physical activity, or personal reflection. I believe
              this commitment to growth not only benefits me but also enhances
              the way I support others in their own journeys.
            </p>
          </div>

          <div className="hobbies__container">
            <img
              src="/images/weightlifting.jpg"
              className="hobby__image"
              alt="Weightlifting"
            />
            <img
              src="/images/tennis.jpg"
              className="hobby__image"
              alt="Tennis racket"
            />
            <img
              src="/images/football.jpg"
              className="hobby__image"
              alt="Football"
            />
            <img
              src="/images/reading.jpg"
              className="hobby__image"
              alt="Reading a book"
            />
            <img
              src="/images/writing.jpg"
              className="hobby__image"
              alt="Writing"
            />
          </div>
        </div>
      </article>

      <Footer />
    </>
  );
}
