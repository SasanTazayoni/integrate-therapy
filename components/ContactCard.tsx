export default function ContactCard() {
  return (
    <div
      className="container--white contact-card__container"
      data-testid="contact-card"
    >
      <div className="grid grid--1x2">
        <div className="contact__card">
          <div className="contact__card-text">
            <h2 className="contact__card-header">Contact Details</h2>
            <p>Please contact me with the details below:</p>
            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:info@integratetherapy.co.uk"
                className="contact__strong"
              >
                info@integratetherapy.co.uk
              </a>
            </p>
            <p>
              <strong>Mobile:</strong> +44 784 604 3703
            </p>
            <h3>Office hours:</h3>
            <ul>
              <li>Tuesday - Wednesday: 9AM - 9PM</li>
              <li>Friday: 9AM - 12PM</li>
            </ul>
          </div>
        </div>
        <div>
          <img
            className="contact__card-image"
            src="./images/contactpic.jpeg"
            alt="Picture of Simon Burgess, therapist"
          />
        </div>
      </div>
    </div>
  );
}
