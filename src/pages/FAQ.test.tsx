import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import FAQ from "./FAQ";
import { faqData } from "../data/faqData";

describe("FAQ Page", () => {
  test("renders Navbar and Footer", () => {
    render(
      <MemoryRouter>
        <FAQ />
      </MemoryRouter>
    );

    const navbar = screen.getByRole("navigation");
    expect(navbar).toBeInTheDocument();

    const footer = screen.getByRole("contentinfo");
    expect(footer).toBeInTheDocument();
  });

  test("renders main heading", () => {
    render(
      <MemoryRouter>
        <FAQ />
      </MemoryRouter>
    );

    const heading = screen.getByRole("heading", {
      name: /frequently asked questions/i,
    });
    expect(heading).toBeInTheDocument();
  });

  test("renders all FAQ items", () => {
    render(
      <MemoryRouter>
        <FAQ />
      </MemoryRouter>
    );

    faqData.forEach((faq) => {
      expect(screen.getByText(faq.question)).toBeInTheDocument();
      expect(screen.getByText(faq.answer)).toBeInTheDocument();
    });
  });
});
