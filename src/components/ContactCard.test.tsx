import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ContactCard from "./ContactCard";

describe("ContactCard Component", () => {
  test("renders the contact card container", () => {
    render(<ContactCard />);
    const container = screen.getByTestId("contact-card");
    expect(container).toBeInTheDocument();
  });

  test("renders contact details text", () => {
    render(<ContactCard />);

    expect(
      screen.getByText(/Please contact me with the details below:/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Email:/i)).toBeInTheDocument();
    expect(screen.getByText(/Mobile:/i)).toBeInTheDocument();
    expect(screen.getByText(/Office hours:/i)).toBeInTheDocument();
  });

  test("renders email link correctly", () => {
    render(<ContactCard />);

    const emailLink = screen.getByRole("link", {
      name: /info@integratetherapy.co.uk/i,
    });
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute(
      "href",
      "mailto:info@integratetherapy.co.uk"
    );
  });

  test("renders office hours list correctly", () => {
    render(<ContactCard />);

    expect(
      screen.getByText(/Tuesday - Wednesday: 9AM - 9PM/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Friday: 9AM - 12PM/i)).toBeInTheDocument();
  });

  test("renders the contact image with correct src and alt", () => {
    render(<ContactCard />);

    const image = screen.getByAltText(/Picture of Simon Burgess/i);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "./images/contactpic.jpeg");
  });

  test("renders strong class for email link", () => {
    render(<ContactCard />);
    const emailLink = screen.getByRole("link", {
      name: /info@integratetherapy.co.uk/i,
    });
    expect(emailLink).toHaveClass("contact__strong");
  });
});
