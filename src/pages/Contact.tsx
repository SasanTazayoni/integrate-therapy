import { useRef } from "react";
import Navbar from "../components/Navigation";
import Footer from "../components/Footer";
import Button from "../components/Button";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const clearForm = () => {
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  return (
    <>
      <Navbar />

      <section className="block block--grey block--top-castrated">
        <h2>Contact me</h2>
        <div className="container">
          <div className="container--white contact-card__container">
            <div className="grid grid--1x2">
              <div className="contact__card">
                <div className="contact__card-text">
                  <p>Please contact me with the details below:</p>
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
                    <ul>
                      <li>Tuesday - Wednesday: 9AM - 9PM</li>
                      <li>Friday: 9AM - 12PM</li>
                    </ul>
                  </p>
                </div>
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

          <div className="container--white contact__fees-card">
            <h3 className="block__header">Fees</h3>
            <p>
              <strong>Individuals:</strong> £85 per session (50 minutes)
            </p>
          </div>

          <div className="container--white contact__cancellation-card">
            <h3 className="block__header">Cancellation policy</h3>
            <p>
              Once a session is booked,{" "}
              <strong>two working days (48 hours)</strong> notice is required
              for cancellations. Otherwise, the full cost of the session will be
              incurred. If you need to cancel or change an appointment, please
              contact me with the details provided above.
            </p>
          </div>
        </div>
      </section>

      <section className="block block--white contact__form-block">
        <div className="container">
          <div className="container--grey contact-form__container">
            <form
              ref={formRef}
              className="contact__form"
              action="https://formspree.io/f/xgergodj"
              method="POST"
            >
              <h3 className="block__header">Enquiries form</h3>
              <div className="contact__form-row">
                <div className="contact__form-group">
                  <label htmlFor="fullname">Full name:</label>
                  <input
                    id="fullname"
                    type="text"
                    name="name"
                    required
                    minLength={1}
                    maxLength={30}
                  />
                </div>
                <div className="contact__form-group">
                  <label htmlFor="contactnumber">Contact number:</label>
                  <input
                    id="contactnumber"
                    type="tel"
                    name="contact"
                    minLength={7}
                    maxLength={20}
                  />
                </div>
                <div className="contact__form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    minLength={5}
                    maxLength={30}
                  />
                </div>
              </div>
              <div className="contact__form-group">
                <label htmlFor="enquiry">Your enquiry:</label>
                <textarea
                  className="contact__form--textarea"
                  id="enquiry"
                  cols={100}
                  rows={5}
                  name="enquiry"
                  required
                  minLength={10}
                  maxLength={300}
                ></textarea>
              </div>
              <div className="container__buttons">
                <Button type="submit">Submit</Button>
                <Button type="button" onClick={clearForm}>
                  Clear
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="block block--grey contact-map__block">
        <div className="container">
          <h3 className="block__header">Where to find us</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.285644406752!2d-0.22501694831186675!3d51.48962547953231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760fb9f9740375%3A0x3da2c9c882211840!2s77%20Fulham%20Palace%20Rd%2C%20London%20W6%208JA!5e0!3m2!1sen!2suk!4v1637158751612!5m2!1sen!2suk"
            width="100%"
            height={600}
            style={{
              border: "3px solid var(--color-border)",
              borderRadius: "10px",
            }}
            allowFullScreen
            loading="lazy"
          />
        </div>
      </section>

      <Footer />
    </>
  );
}
