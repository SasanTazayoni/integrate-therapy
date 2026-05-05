import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Hero from "./Hero";

describe("Hero Component", () => {
  test("renders hero headings and taglines", () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );

    const heading = screen.getByRole("heading", { name: /Simon Burgess/i });
    expect(heading).toBeInTheDocument();

    expect(screen.getByText(/\(MBACP\)/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Psychotherapist based in London, UK/i)
    ).toBeInTheDocument();
  });

  test("renders About and Contact buttons with correct links", () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );

    const aboutLink = screen.getByRole("link", { name: /About/i });
    expect(aboutLink).toBeInTheDocument();
    expect(aboutLink).toHaveAttribute("href", "/about");

    const contactLink = screen.getByRole("link", { name: /Contact/i });
    expect(contactLink).toBeInTheDocument();
    expect(contactLink).toHaveAttribute("href", "/contact");
  });
});
