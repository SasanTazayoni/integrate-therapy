import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "./Home";

describe("Home Page", () => {
  test("renders Navbar", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    const navbar = screen.getByTestId("navbar");
    expect(navbar).toBeInTheDocument();
  });

  test("renders Hero section", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    const heroHeading = screen.getByRole("heading", { name: /Simon Burgess/i });
    expect(heroHeading).toBeInTheDocument();
    const tagline = screen.getByText(/Psychotherapist based in London/i);
    expect(tagline).toBeInTheDocument();
  });

  test("renders InfoCard section", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    const infoCardTitle = screen.getByRole("heading", {
      name: /Welcome to Integrate Therapy/i,
    });
    expect(infoCardTitle).toBeInTheDocument();

    const firstParagraph = screen.getByText(
      /Therapy provides a safe, non-judgmental space/i
    );
    expect(firstParagraph).toBeInTheDocument();
  });

  test("renders Testimonials component", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    const testimonial = screen.getByText(/I highly recommend him/i);
    expect(testimonial).toBeInTheDocument();
  });

  test("renders Footer", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    const footer = screen.getByTestId("footer-text");
    expect(footer).toBeInTheDocument();
  });
});
