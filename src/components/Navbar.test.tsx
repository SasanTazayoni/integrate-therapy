import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Navbar from "./Navbar";

const NAV_LINKS = ["Home", "About", "Services", "FAQ", "Contact"];

describe("Navbar Component", () => {
  test("renders without crashing", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    expect(screen.getByAltText("Integrate Therapy Logo")).toBeInTheDocument();
    expect(screen.getByText("Integrate Therapy")).toBeInTheDocument();

    NAV_LINKS.forEach((label) => {
      expect(screen.getAllByText(label).length).toBeGreaterThan(0);
    });

    expect(screen.getByRole("button", { name: /menu/i })).toBeInTheDocument();
  });

  test("has correct paths for each NavLink", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    NAV_LINKS.forEach((label) => {
      const link = screen.getAllByText(label)[0].closest("a");
      const expectedPath = label === "Home" ? "/" : `/${label.toLowerCase()}`;
      expect(link).toHaveAttribute("href", expectedPath);
    });
  });

  test("toggles mobile menu when hamburger button is clicked", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    const nav = screen.getByRole("navigation");
    const toggleButton = screen.getByRole("button", { name: /menu/i });

    expect(nav.className).not.toContain("collapsible--expanded");
    expect(toggleButton).toHaveAttribute("aria-expanded", "false");

    await user.click(toggleButton);
    expect(nav.className).toContain("collapsible--expanded");
    expect(toggleButton).toHaveAttribute("aria-expanded", "true");

    await user.click(toggleButton);
    expect(nav.className).not.toContain("collapsible--expanded");
    expect(toggleButton).toHaveAttribute("aria-expanded", "false");
  });

  test("renders mobile menu links with icons", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    NAV_LINKS.forEach((label) => {
      const link = screen.getByTestId(`mobile-link-${label.toLowerCase()}`);
      expect(link).toBeInTheDocument();
      const svg = link.querySelector("svg");
      expect(svg).toBeInTheDocument();
    });
  });

  test("hamburger button has correct accessibility attributes", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    const toggleButton = screen.getByRole("button", { name: /menu/i });
    expect(toggleButton).toHaveAttribute("aria-controls", "mobile-menu");
    expect(toggleButton).toHaveAttribute("aria-expanded", "false");
  });
});
