import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import FAQ from "./FAQ";
import { faqData } from "../data/faqData";

describe("FAQ Page", () => {
  test("renders Navbar correctly", () => {
    render(
      <MemoryRouter>
        <FAQ />
      </MemoryRouter>
    );

    const navbar = screen.getByTestId("navbar");
    expect(navbar).toBeInTheDocument();
  });

  test("renders Footer correctly", () => {
    render(
      <MemoryRouter>
        <FAQ />
      </MemoryRouter>
    );

    const footerNav = screen.getByLabelText("Footer Navigation");
    expect(footerNav).toBeInTheDocument();

    const footerLinks = footerNav.querySelectorAll("a");
    expect(footerLinks.length).toBe(5);
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
