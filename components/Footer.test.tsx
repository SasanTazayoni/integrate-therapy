import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer Component", () => {
  test("renders all footer links with correct destinations", () => {
    render(<Footer />);

    const links = ["Home", "About", "Services", "FAQ", "Contact"];
    links.forEach((label) => {
      const link = screen.getByRole("link", { name: new RegExp(label, "i") });
      expect(link).toBeInTheDocument();

      const expectedHref = label === "Home" ? "/" : `/${label.toLowerCase()}`;
      expect(link).toHaveAttribute("href", expectedHref);
    });
  });

  test("renders footer logo", () => {
    render(<Footer />);

    const logo = screen.getByRole("img", { name: /integrate therapy logo/i });
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveClass("footer__logo");
  });

  test("renders footer credits with correct text and links", () => {
    render(<Footer />);

    const creditText = screen.getByText(
      /Integrate Therapy 2025. All rights reserved/i,
    );
    expect(creditText).toBeInTheDocument();
  });
});
