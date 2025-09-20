import { useState, useEffect } from "react";

type TestimonialsProps = {
  testimonials: string[];
};

export default function Testimonials({ testimonials }: TestimonialsProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 15000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () =>
    setCurrent((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () =>
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  return (
    <section className="block block--grey">
      <div className="container testimonials__container">
        <h2 className="block__header">Testimonials</h2>
        <div className="testimonials__content">
          {testimonials.map((t, i) => (
            <p key={i} className={i === current ? "active" : ""}>
              {t}
            </p>
          ))}
        </div>
        <div className="grid testimonials__slider">
          <button onClick={prevTestimonial}>◀</button>
          <div className="testimonials-bullets">
            {testimonials.map((_, i) => (
              <div key={i} className={i === current ? "active" : ""} />
            ))}
          </div>
          <button onClick={nextTestimonial}>▶</button>
        </div>
      </div>
    </section>
  );
}
