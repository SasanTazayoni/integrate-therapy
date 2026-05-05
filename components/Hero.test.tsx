import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Hero from "./Hero";

describe("Hero Component", () => {
  test("renders hero headings and taglines", () => {
    render(<Hero />);

    const heading = screen.getByRole("heading", { name: /Simon Burgess/i });
    expect(heading).toBeInTheDocument();

    expect(screen.getByText(/\(MBACP\)/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Psychotherapist based in London, UK/i)
    ).toBeInTheDocument();
  });

  test("renders About and Contact buttons with correct links", () => {
    render(<Hero />);

    const aboutLink = screen.getByRole("link", { name: /About/i });
    expect(aboutLink).toBeInTheDocument();
    expect(aboutLink).toHaveAttribute("href", "/about");

    const contactLink = screen.getByRole("link", { name: /Contact/i });
    expect(contactLink).toBeInTheDocument();
    expect(contactLink).toHaveAttribute("href", "/contact");
  });
});
