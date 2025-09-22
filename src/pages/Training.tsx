import { Link } from "react-router-dom";
import Navbar from "../components/Navigation";
import Footer from "../components/Footer";
import Button from "../components/Button";

export default function Training() {
  return (
    <>
      <Navbar />

      <section className="block block--white block--top-castrated">
        <div className="container">
          <h2 className="training__title">My Training</h2>

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

          <div className="grid grid--1x2 container__buttons">
            <Link to="/services">
              <Button>Services</Button>
            </Link>
            <Link to="/contact">
              <Button>Contact</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="training__image"></section>

      <Footer />
    </>
  );
}
