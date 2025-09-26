import { describe, test, expect, vi } from "vitest";
import { render, screen, fireEvent, act } from "@testing-library/react";
import Testimonials from "./Testimonials";

const sampleTestimonials = [
  "I would highly recommend Simon!",
  "A very professional and supportive therapist.",
  "The sessions have really helped me grow.",
];

describe("Testimonials Component", () => {
  test("renders all testimonials with first one active", () => {
    render(<Testimonials testimonials={sampleTestimonials} />);

    sampleTestimonials.forEach((text, index) => {
      const testimonial = screen.getByText(text, { exact: false });
      expect(testimonial).toBeInTheDocument();

      if (index === 0) {
        expect(testimonial).toHaveClass("active");
      } else {
        expect(testimonial).not.toHaveClass("active");
      }
    });
  });

  test("clicking next button shows next testimonial", () => {
    render(<Testimonials testimonials={sampleTestimonials} />);

    const nextButton = screen.getAllByRole("button")[1];
    fireEvent.click(nextButton);

    const firstTestimonial = screen.getByText(sampleTestimonials[0], {
      exact: false,
    });
    const secondTestimonial = screen.getByText(sampleTestimonials[1], {
      exact: false,
    });

    expect(firstTestimonial).not.toHaveClass("active");
    expect(secondTestimonial).toHaveClass("active");
  });

  test("clicking previous button shows previous testimonial", () => {
    render(<Testimonials testimonials={sampleTestimonials} />);

    const prevButton = screen.getAllByRole("button")[0];
    fireEvent.click(prevButton);

    const lastTestimonial = screen.getByText(
      sampleTestimonials[sampleTestimonials.length - 1],
      { exact: false }
    );
    expect(lastTestimonial).toHaveClass("active");
  });

  test("automatically advances testimonial after interval", () => {
    vi.useFakeTimers();

    render(<Testimonials testimonials={sampleTestimonials} />);

    expect(screen.getByText(sampleTestimonials[0])).toHaveClass("active");
    expect(screen.getByText(sampleTestimonials[1])).not.toHaveClass("active");

    act(() => {
      vi.advanceTimersByTime(15000);
    });

    const updatedFirst = screen.getByText(sampleTestimonials[0]);
    const updatedSecond = screen.getByText(sampleTestimonials[1]);

    expect(updatedFirst).not.toHaveClass("active");
    expect(updatedSecond).toHaveClass("active");

    vi.useRealTimers();
  });

  test("clicking previous on first testimonial wraps to last testimonial", () => {
    render(<Testimonials testimonials={sampleTestimonials} />);

    const prevButton = screen.getAllByRole("button")[0];

    const firstTestimonial = screen.getByText(sampleTestimonials[0]);
    expect(firstTestimonial).toHaveClass("active");

    fireEvent.click(prevButton);

    const lastTestimonial = screen.getByText(
      sampleTestimonials[sampleTestimonials.length - 1]
    );
    expect(lastTestimonial).toHaveClass("active");
    expect(firstTestimonial).not.toHaveClass("active");
  });

  test("clicking previous button shows the previous testimonial normally", () => {
    render(<Testimonials testimonials={sampleTestimonials} />);

    const prevButton = screen.getAllByRole("button")[0];

    const nextButton = screen.getAllByRole("button")[1];
    fireEvent.click(nextButton);

    const secondTestimonial = screen.getByText(sampleTestimonials[1]);
    expect(secondTestimonial).toHaveClass("active");

    fireEvent.click(prevButton);

    const firstTestimonial = screen.getByText(sampleTestimonials[0]);
    expect(firstTestimonial).toHaveClass("active");
    expect(secondTestimonial).not.toHaveClass("active");
  });
});
