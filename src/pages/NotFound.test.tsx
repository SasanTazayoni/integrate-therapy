import { describe, test, expect } from "vitest";
import { render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NotFound from "./NotFound";

describe("NotFound Page", () => {
  test("renders Navbar correctly", () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );

    const navbar = screen.getByTestId("navbar");
    expect(navbar).toBeInTheDocument();

    const navLinks = within(navbar).getAllByRole("link", { name: /page/i });
    expect(navLinks.length).toBe(5);
  });

  test("renders main heading", () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );

    const heading = screen.getByRole("heading", {
      name: /this page does not exist/i,
    });
    expect(heading).toBeInTheDocument();
  });

  test("renders paragraph with Home link", () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );

    const paragraph = screen.getByText(
      /it seems the page you are looking for does not exist/i
    );
    expect(paragraph).toBeInTheDocument();

    const homeLink = screen.getByTestId("notfound-home-link");
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute("href", "/");
  });
});
