import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer";

describe("Footer Component", () => {
  test("renders all footer links with correct hrefs", () => {
    render(<Footer />);

    const links = ["Home", "About", "Services", "FAQ", "Contact"];
    links.forEach((label) => {
      const link = screen.getByText(label);
      expect(link).toBeInTheDocument();

      const expectedHref = label === "Home" ? "/" : `/${label.toLowerCase()}`;
      expect(link).toHaveAttribute("href", expectedHref);
    });
  });

  test("renders footer logo", () => {
    render(<Footer />);
    const logo = screen.getByRole("img");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveClass("footer__logo");
  });

  test("renders footer credits with correct text and links", () => {
    render(<Footer />);

    const creditText = screen.getByText(/Integrate Therapy 2025/i);
    expect(creditText).toBeInTheDocument();

    const sasanlink = screen.getByText("Sasan Tazayoni");
    expect(sasanlink).toHaveAttribute(
      "href",
      "https://github.com/SasanTazayoni"
    );

    const sabalink = screen.getByText("Saba Tazayoni");
    expect(sabalink).toHaveAttribute("href", "https://github.com/stazay");
  });
});
