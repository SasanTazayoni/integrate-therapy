import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Contact from "./Contact";

describe("Contact Page", () => {
  test("renders Navbar and Footer", () => {
    render(
      <MemoryRouter>
        <Contact />
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
        <Contact />
      </MemoryRouter>
    );

    const heading = screen.getByRole("heading", { name: /contact me/i });
    expect(heading).toBeInTheDocument();
  });

  test("renders Fees section", () => {
    render(
      <MemoryRouter>
        <Contact />
      </MemoryRouter>
    );

    const feesHeading = screen.getByRole("heading", { name: /fees/i });
    expect(feesHeading).toBeInTheDocument();

    const feesPara = screen.getByTestId("fees");
    expect(feesPara).toHaveTextContent(/Individuals:.*£85 per session/i);
  });

  test("renders Cancellation Policy section", () => {
    render(
      <MemoryRouter>
        <Contact />
      </MemoryRouter>
    );

    const cancellationHeading = screen.getByRole("heading", {
      name: /cancellation policy/i,
    });
    expect(cancellationHeading).toBeInTheDocument();

    expect(
      screen.getByText(/Once a session is booked/i).closest("p")
    ).toHaveTextContent(/two working days.*notice is required/i);
  });

  test("renders ContactCard component", () => {
    render(
      <MemoryRouter>
        <Contact />
      </MemoryRouter>
    );

    const contactCard = screen.getByTestId("contact-card");
    expect(contactCard).toBeInTheDocument();
  });

  test("renders ContactForm component", () => {
    render(
      <MemoryRouter>
        <Contact />
      </MemoryRouter>
    );

    const contactForm = screen.getByTestId("contact-form");
    expect(contactForm).toBeInTheDocument();
  });

  test("renders Google Maps iframe", () => {
    render(
      <MemoryRouter>
        <Contact />
      </MemoryRouter>
    );

    const iframe = screen.getByTitle("map");
    expect(iframe).toBeInTheDocument();
    expect(iframe).toHaveAttribute("src");
  });
});
