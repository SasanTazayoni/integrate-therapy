import { describe, test, expect } from "vitest";
import { render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Services from "./Services";

describe("Services Page", () => {
  test("renders Navbar and Footer", () => {
    render(
      <MemoryRouter>
        <Services />
      </MemoryRouter>
    );

    const navbar = screen.getByRole("navigation");
    expect(navbar).toBeInTheDocument();

    const footer = screen.getByTestId("footer-text");
    expect(footer).toBeInTheDocument();
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

    expect(serviceListItems[0].textContent).toBe("Anxiety and Panic Disorders");
    expect(serviceListItems[29].textContent).toBe(
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
