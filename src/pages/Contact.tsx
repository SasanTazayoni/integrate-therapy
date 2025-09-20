import Navbar from "../components/Navigation";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Navbar />

      <section className="block block--grey block--top-castrated">
        <h2>Contact me</h2>
        <div className="container">
          <div className="container--white">
            <div className="grid grid--1x2-alt">
              <div className="contact__card">
                <p>
                  Your questions may have been answered in the{" "}
                  <a href="/faq" className="contact__strong">
                    FAQ
                  </a>
                  .
                  <br />
                  Please contact me with the details below:
                </p>
                <p>
                  <span className="contact__strong">Email:</span>{" "}
                  <a
                    href="mailto:info@integratetherapy.co.uk"
                    className="contact__strong"
                  >
                    info@integratetherapy.co.uk
                  </a>
                </p>
                <p>
                  <span className="contact__strong">Mobile:</span> +44 784 604
                  3703
                </p>
                <p>
                  <span className="contact__strong contact__office-hours--heading">
                    Office hours:
                  </span>{" "}
                  Monday - Friday: 8AM - 7PM
                </p>
              </div>
              <div>
                <img
                  className="contact__card-image"
                  src="./images/contactpic.jpeg"
                  alt="Picture of Simon Burgess"
                />
              </div>
            </div>
          </div>

          <div className="container--white contact__cancellation-card">
            <h3 className="block__header">Cancellation policy:</h3>
            <p>
              Once a session is booked, two working days (48 hours) notice is
              required for cancellations. Otherwise, the full cost of the
              session will be incurred. If you need to cancel or change an
              appointment, please contact me with the details provided above.
            </p>
          </div>
        </div>
      </section>

      <section className="block block--white contact__form-block">
        <div className="container">
          <div className="container--grey">
            <form
              className="contact__form"
              action="https://formspree.io/f/xgergodj"
              method="POST"
            >
              <h3 className="block__header">Enquiries form</h3>
              <div className="contact__form-group">
                <label htmlFor="fullname">Full name</label>
                <input
                  id="fullname"
                  type="text"
                  placeholder="Full name"
                  name="name"
                  required
                  minLength={1}
                  maxLength={50}
                />
              </div>
              <div className="contact__form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  name="email"
                  required
                  minLength={5}
                  maxLength={30}
                />
              </div>
              <div className="contact__form-group">
                <label htmlFor="contactnumber">Contact number</label>
                <input
                  id="contactnumber"
                  type="tel"
                  placeholder="Contact number"
                  name="contact"
                  required
                  minLength={7}
                  maxLength={20}
                />
              </div>
              <div className="contact__form-group">
                <label htmlFor="enquiry">Your enquiry</label>
                <textarea
                  className="contact__form--textarea"
                  id="enquiry"
                  cols={100}
                  rows={5}
                  placeholder="Your enquiry"
                  name="enquiry"
                  required
                  minLength={10}
                  maxLength={300}
                ></textarea>
              </div>
              <div className="contact__btn-container">
                <button
                  className="btn btn--secondary contact__submit-btn"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="block block--grey contact-map__block">
        <div className="container">
          <h3 className="block__header">Where to find us</h3>
          <iframe
            className="contact-map__container"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.285644406752!2d-0.22501694831186675!3d51.48962547953231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760fb9f9740375%3A0x3da2c9c882211840!2s77%20Fulham%20Palace%20Rd%2C%20London%20W6%208JA!5e0!3m2!1sen!2suk!4v1637158751612!5m2!1sen!2suk"
            width="100%"
            height={600}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </section>

      <Footer />
    </>
  );
}
