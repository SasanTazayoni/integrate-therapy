import { useState, useEffect } from "react";

type TestimonialsProps = {
  testimonials: string[];
};

export default function Testimonials({ testimonials }: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 15000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const showNextTestimonial = () =>
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);

  const showPreviousTestimonial = () =>
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );

  return (
    <section className="block block--grey">
      <div className="container testimonials__container">
        <h2 className="block__header">Testimonials</h2>

        <div className="testimonials__content">
          <svg className="icon icon--black testimonials__icon-left">
            <use href="/integrate-therapy/integratesprite.svg#left-quote" />
          </svg>

          {testimonials.map((testimonial, index) => (
            <p
              key={index}
              className={`testimonial__text ${
                index === currentIndex ? "active" : ""
              }`}
              data-testimonial={index + 1}
            >
              {testimonial}
            </p>
          ))}

          <svg className="icon icon--black testimonials__icon-right">
            <use href="/integrate-therapy/integratesprite.svg#right-quote" />
          </svg>
        </div>

        <div className="grid testimonials__slider">
          <button
            onClick={showPreviousTestimonial}
            className="testimonials__button"
          >
            <svg className="icon--left">
              <use href="/integrate-therapy/integratesprite.svg#chevron" />
            </svg>
          </button>

          <div className="testimonials-bullets">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`testimonial-bullet ${
                  index === currentIndex ? "active" : ""
                }`}
              />
            ))}
          </div>

          <button
            onClick={showNextTestimonial}
            className="testimonials__button"
          >
            <svg className="icon--right">
              <use href="/integrate-therapy/integratesprite.svg#chevron" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
