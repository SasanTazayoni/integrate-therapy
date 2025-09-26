import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactCard from "../components/ContactCard";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <>
      <Navbar />

      <section className="block block--grey block--top-castrated">
        <h2>Contact me</h2>
        <div className="container">
          <ContactCard />

          <div className="container--white contact__fees-card">
            <h3 className="block__header">Fees</h3>
            <p data-testid="fees">
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
          <ContactForm />
        </div>
      </section>

      <section className="block block--grey contact-map__block">
        <div className="container">
          <h3 className="block__header">Where to find us</h3>
          <iframe
            title="map"
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
