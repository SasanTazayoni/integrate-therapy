import Navbar from "../components/Navigation";
import Footer from "../components/Footer";

export default function Fees() {
  return (
    <>
      <Navbar />

      <section className="block block--grey block--top-castrated">
        <h2>Fees</h2>
        <div className="container">
          <div className="container--white contact__container">
            <div className="fees__card">
              <h3 className="fees__card-header">
                The following applies to individuals:
              </h3>
              <p>Each session is £85 each consisting of 50 minutes</p>
            </div>
          </div>

          <div className="container--white contact__cancellation-card">
            <h3 className="block__header">Cancellation policy:</h3>
            <p>
              Once a session is booked, two working days (48 hours) notice is
              required for cancellations. Otherwise, the full cost of the
              session will be incurred. If you need to cancel or change an
              appointment, please contact me with the details provided on the{" "}
              <a href="/contact">Contact</a> page.
            </p>
          </div>
        </div>

        <div className="grid grid--1x2 container--buttons">
          <a href="/faq">
            <div className="btn btn--secondary">
              FAQ
              <svg className="icon">
                <use xlinkHref="./integratesprite.svg#faq"></use>
              </svg>
            </div>
          </a>
          <a href="/contact">
            <div className="btn btn--primary">
              Contact
              <svg className="icon">
                <use xlinkHref="./integratesprite.svg#contact"></use>
              </svg>
            </div>
          </a>
        </div>
      </section>

      <section className="fees__image"></section>

      <Footer />
    </>
  );
}
