import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Footer from "../components/Footer";

describe("Footer Component", () => {
  test("renders all footer links with correct destinations", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    const links = ["Home", "About", "Services", "FAQ", "Contact"];
    links.forEach((label) => {
      const link = screen.getByRole("link", { name: new RegExp(label, "i") });
      expect(link).toBeInTheDocument();

      const expectedHref = label === "Home" ? "/" : `/${label.toLowerCase()}`;
      expect(link).toHaveAttribute("href", expectedHref);
    });
  });

  test("renders footer logo", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    const logo = screen.getByRole("img", { name: /integrate therapy logo/i });
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveClass("footer__logo");
  });

  test("renders footer credits with correct text and links", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    const creditText = screen.getByText(/Integrate Therapy 2025/i);
    expect(creditText).toBeInTheDocument();

    const sasanlink = screen.getByRole("link", { name: "Sasan Tazayoni" });
    expect(sasanlink).toHaveAttribute(
      "href",
      "https://github.com/SasanTazayoni"
    );

    const sabalink = screen.getByRole("link", { name: "Saba Tazayoni" });
    expect(sabalink).toHaveAttribute("href", "https://github.com/stazay");
  });
});
