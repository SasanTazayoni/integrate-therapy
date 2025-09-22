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
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo
                esse quod reiciendis numquam non voluptas illo ipsam alias vero
                odio.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                ducimus ex cumque quidem aliquid eius voluptatum qui dignissimos
                nihil!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Explicabo reiciendis velit optio recusandae suscipit distinctio
                facilis tempora fugit nemo modi eos dolor ut obcaecati quod
                quaerat deleniti officia perferendis quam.
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
      </section>

      <article className="block block--grey">
        <div className="container">
          <h3 className="block__header">More About Me</h3>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
              fugiat ipsum dolores laboriosam pariatur possimus atque quos
              asperiores soluta quasi iusto veniam iure voluptatum fuga omnis
              facere distinctio labore.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
              tempore culpa quasi. Labore hic ab architecto quae sapiente ullam
              officiis.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              neque earum, id architecto veritatis molestiae minus dolores sequi
              ex rerum eos praesentium ratione qui recusandae ea, dolorem vero
              facere quaerat porro.
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
        </div>
      </article>

      <section className="training__image"></section>

      <Footer />
    </>
  );
}
