import { describe, test, expect } from "vitest";
import { render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Services from "./Services";

describe("Services Page", () => {
  test("renders Navbar correctly", () => {
    render(
      <MemoryRouter>
        <Services />
      </MemoryRouter>
    );

    const navbar = screen.getByTestId("navbar");
    expect(navbar).toBeInTheDocument();

    const navLinks = within(navbar).getAllByRole("link");
    expect(navLinks.length).toBeGreaterThan(0);
  });

  test("renders Footer correctly", () => {
    render(
      <MemoryRouter>
        <Services />
      </MemoryRouter>
    );

    const footer = screen.getByTestId("footer-text");
    expect(footer).toBeInTheDocument();

    const footerNav = screen.getByLabelText("Footer Navigation");
    expect(footerNav).toBeInTheDocument();

    const footerLinks = within(footerNav).getAllByRole("link");
    expect(footerLinks.length).toBe(5);

    expect(footerLinks[0]).toHaveAttribute("href", "/");
    expect(footerLinks[1]).toHaveAttribute("href", "/about");
    expect(footerLinks[2]).toHaveAttribute("href", "/services");
    expect(footerLinks[3]).toHaveAttribute("href", "/faq");
    expect(footerLinks[4]).toHaveAttribute("href", "/contact");
  });

  test("renders all service list items", () => {
    render(
      <MemoryRouter>
        <Services />
      </MemoryRouter>
    );

    const servicesList = screen.getByTestId("services-list");
    const serviceListItems = within(servicesList).getAllByRole("listitem");
    expect(serviceListItems.length).toBe(30);

    expect(serviceListItems[0]).toHaveTextContent(
      "Anxiety and Panic Disorders"
    );
    expect(serviceListItems[29]).toHaveTextContent(
      "Support for Carers and Helping Professionals"
    );
  });

  test("renders FAQ and Contact buttons with correct links", () => {
    render(
      <MemoryRouter>
        <Services />
      </MemoryRouter>
    );

    const faqButton = screen.getByTestId("faq-button");
    expect(faqButton).toBeInTheDocument();
    expect(faqButton.closest("a")).toHaveAttribute("href", "/FAQ");

    const contactButton = screen.getByTestId("contact-button");
    expect(contactButton).toBeInTheDocument();
    expect(contactButton.closest("a")).toHaveAttribute("href", "/contact");
  });

  test("renders services image section", () => {
    render(
      <MemoryRouter>
        <Services />
      </MemoryRouter>
    );

    const imageSection = document.querySelector(".services__image");
    expect(imageSection).toBeInTheDocument();
  });
});
