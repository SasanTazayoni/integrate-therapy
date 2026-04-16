import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import PrivacyPolicy from "./PrivacyPolicy";

describe("PrivacyPolicy Page", () => {
  test("renders Navbar correctly", () => {
    render(
      <MemoryRouter>
        <PrivacyPolicy />
      </MemoryRouter>
    );

    const navbar = screen.getByTestId("navbar");
    expect(navbar).toBeInTheDocument();
  });

  test("renders main heading", () => {
    render(
      <MemoryRouter>
        <PrivacyPolicy />
      </MemoryRouter>
    );

    const heading = screen.getByRole("heading", {
      name: /privacy policy/i,
    });
    expect(heading).toBeInTheDocument();
  });

  test("renders all section headings", () => {
    render(
      <MemoryRouter>
        <PrivacyPolicy />
      </MemoryRouter>
    );

    expect(screen.getByRole("heading", { name: /contact details/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /what information we collect/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /lawful bases and data protection rights/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /where we get personal information/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /how long we keep information/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /duty of confidentiality/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /how to complain/i })).toBeInTheDocument();
  });

  test("renders contact details", () => {
    render(
      <MemoryRouter>
        <PrivacyPolicy />
      </MemoryRouter>
    );

    expect(screen.getByText(/07846043703/)).toBeInTheDocument();
    expect(screen.getByText(/info@integratetherapy\.co\.uk/)).toBeInTheDocument();
  });

  test("renders retention period", () => {
    render(
      <MemoryRouter>
        <PrivacyPolicy />
      </MemoryRouter>
    );

    expect(screen.getByText(/7 years after the end of therapy/i)).toBeInTheDocument();
  });
});
