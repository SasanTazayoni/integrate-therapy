export default function ContactCard() {
  return (
    <div
      className="container--white contact-card__container"
      data-testid="contact-card"
    >
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
              <span className="contact__strong">Mobile:</span> +44 784 604 3703
            </p>
            <p>
              <span className="contact__strong contact__office-hours--heading">
                Office hours:
              </span>
            </p>
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
            alt="Picture of Simon Burgess"
          />
        </div>
      </div>
    </div>
  );
}
