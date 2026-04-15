import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import CookiePolicy from "./CookiePolicy";

describe("CookiePolicy Page", () => {
  test("renders Navbar correctly", () => {
    render(
      <MemoryRouter>
        <CookiePolicy />
      </MemoryRouter>
    );

    const navbar = screen.getByTestId("navbar");
    expect(navbar).toBeInTheDocument();
  });

  test("renders main heading", () => {
    render(
      <MemoryRouter>
        <CookiePolicy />
      </MemoryRouter>
    );

    const heading = screen.getByRole("heading", { name: /cookie policy/i });
    expect(heading).toBeInTheDocument();
  });

  test("renders all section headings", () => {
    render(
      <MemoryRouter>
        <CookiePolicy />
      </MemoryRouter>
    );

    expect(screen.getByRole("heading", { name: /what are cookies/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /does this website use cookies/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /third-party cookies/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /changes to this policy/i })).toBeInTheDocument();
  });

  test("states no cookies are set", () => {
    render(
      <MemoryRouter>
        <CookiePolicy />
      </MemoryRouter>
    );

    expect(
      screen.getByText(/this website does not set any cookies/i)
    ).toBeInTheDocument();
  });

  test("mentions Google Maps third-party cookies", () => {
    render(
      <MemoryRouter>
        <CookiePolicy />
      </MemoryRouter>
    );

    expect(screen.getByText(/google maps/i)).toBeInTheDocument();
    const googleLink = screen.getByRole("link", { name: /google's privacy policy/i });
    expect(googleLink).toBeInTheDocument();
    expect(googleLink).toHaveAttribute("href", "https://policies.google.com/privacy");
  });
});
