import Footer from "../components/Footer";
import Navbar from "../components/Navigation";

export default function About() {
  return (
    <>
      <Navbar />

      <section className="block block--white block--top-castrated">
        <h2>About me</h2>
      </section>

      <article className="block block--white block-beaneath-title">
        <div className="container">
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
            <div>
              <img
                className="about__image"
                src="/images/aboutpic.jpg"
                alt="A picture of Simon Burgess"
              />
            </div>
          </div>

          <div className="grid grid--1x2 container--buttons">
            <a href="/training">
              <div className="btn btn--secondary">
                Training
                <svg className="icon training-icon">
                  <use xlinkHref="/images/integratesprite.svg#training"></use>
                </svg>
              </div>
            </a>
            <a href="/contact">
              <div className="btn btn--primary">
                Contact
                <svg className="icon">
                  <use xlinkHref="/images/integratesprite.svg#contact"></use>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </article>

      <article className="block block--grey">
        <div className="container">
          <h3 className="block__header">More about me</h3>
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
        </div>
      </article>

      <Footer />
    </>
  );
}
