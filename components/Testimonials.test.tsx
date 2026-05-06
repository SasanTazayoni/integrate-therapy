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

    sampleTestimonials.forEach((_, index) => {
      const testimonial = screen.getByTestId(`testimonial-${index + 1}`);

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

    const nextButton = screen.getByRole("button", {
      name: /show next testimonial/i,
    });

    fireEvent.click(nextButton);

    const firstTestimonial = screen.getByTestId("testimonial-1");
    const secondTestimonial = screen.getByTestId("testimonial-2");

    expect(firstTestimonial).not.toHaveClass("active");
    expect(secondTestimonial).toHaveClass("active");
  });

  test("automatically advances testimonial after interval", () => {
    vi.useFakeTimers();

    render(<Testimonials testimonials={sampleTestimonials} />);

    const firstTestimonial = screen.getByTestId("testimonial-1");
    const secondTestimonial = screen.getByTestId("testimonial-2");

    expect(firstTestimonial).toHaveClass("active");
    expect(secondTestimonial).not.toHaveClass("active");

    act(() => {
      vi.advanceTimersByTime(15000);
    });

    expect(firstTestimonial).not.toHaveClass("active");
    expect(secondTestimonial).toHaveClass("active");

    vi.useRealTimers();
  });

  test("clicking previous on first testimonial wraps to last testimonial", () => {
    render(<Testimonials testimonials={sampleTestimonials} />);

    const prevButton = screen.getByRole("button", {
      name: /show previous testimonial/i,
    });

    const firstTestimonial = screen.getByTestId("testimonial-1");
    const lastTestimonial = screen.getByTestId("testimonial-3");

    fireEvent.click(prevButton);

    expect(lastTestimonial).toHaveClass("active");
    expect(firstTestimonial).not.toHaveClass("active");
  });

  test("clicking previous button shows the previous testimonial normally", () => {
    render(<Testimonials testimonials={sampleTestimonials} />);

    const nextButton = screen.getByRole("button", {
      name: /show next testimonial/i,
    });

    const prevButton = screen.getByRole("button", {
      name: /show previous testimonial/i,
    });

    fireEvent.click(nextButton);

    const firstTestimonial = screen.getByTestId("testimonial-1");
    const secondTestimonial = screen.getByTestId("testimonial-2");

    expect(secondTestimonial).toHaveClass("active");
    expect(firstTestimonial).not.toHaveClass("active");

    fireEvent.click(prevButton);

    expect(firstTestimonial).toHaveClass("active");
    expect(secondTestimonial).not.toHaveClass("active");
  });

  test("clicking bullet changes testimonial", () => {
    render(<Testimonials testimonials={sampleTestimonials} />);

    const bullet2 = screen.getByLabelText("Go to testimonial 2");

    fireEvent.click(bullet2);

    expect(screen.getByTestId("testimonial-2")).toHaveClass("active");
  });

  test("renders without crashing with empty testimonials array", () => {
    render(<Testimonials testimonials={[]} />);
    expect(screen.getByRole("heading", { name: /testimonials/i })).toBeInTheDocument();
    expect(screen.queryByTestId("testimonial-1")).not.toBeInTheDocument();
  });

  test("clears interval on unmount", () => {
    vi.useFakeTimers();
    const clearIntervalSpy = vi.spyOn(globalThis, "clearInterval");
    const { unmount } = render(<Testimonials testimonials={sampleTestimonials} />);
    unmount();
    expect(clearIntervalSpy).toHaveBeenCalled();
    clearIntervalSpy.mockRestore();
    vi.useRealTimers();
  });

  test("aria-live region contains current testimonial text", () => {
    render(<Testimonials testimonials={sampleTestimonials} />);
    const liveRegion = document.querySelector("[aria-live='polite']");
    expect(liveRegion).toBeInTheDocument();
    expect(liveRegion).toHaveTextContent(sampleTestimonials[0]);
  });

  test("aria-live region updates on navigation", () => {
    render(<Testimonials testimonials={sampleTestimonials} />);
    fireEvent.click(screen.getByRole("button", { name: /show next testimonial/i }));
    const liveRegion = document.querySelector("[aria-live='polite']");
    expect(liveRegion).toHaveTextContent(sampleTestimonials[1]);
  });
});
