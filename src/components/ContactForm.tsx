import { useRef } from "react";
import Button from "./Button";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const clearForm = () => {
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  return (
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
  );
}
