import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NotFound from "./NotFound";

describe("NotFound Page", () => {
  test("renders Navbar and Footer", () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );

    const navbar = screen.getByRole("navigation");
    expect(navbar).toBeInTheDocument();

    const footer = screen.getByTestId("footer-text");
    expect(footer).toBeInTheDocument();
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

    const homeLink = screen.getByRole("link", { name: /home page/i });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute("href", "/");
  });
});
