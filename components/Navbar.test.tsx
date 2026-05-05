import { describe, test, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navbar from "./Navbar";

vi.mock("next/navigation", () => ({
  usePathname: () => "/",
}));

const NAV_LINKS = ["Home", "About", "Services", "FAQ", "Contact"];

describe("Navbar Component", () => {
  test("renders without crashing", () => {
    render(<Navbar />);

    expect(screen.getByAltText("Integrate Therapy Logo")).toBeInTheDocument();
    expect(screen.getByText("Integrate Therapy")).toBeInTheDocument();

    NAV_LINKS.forEach((label) => {
      expect(screen.getAllByText(label).length).toBeGreaterThan(0);
    });

    expect(screen.getByRole("button", { name: /menu/i })).toBeInTheDocument();
  });

  test("has correct paths for each NavLink", () => {
    render(<Navbar />);

    NAV_LINKS.forEach((label) => {
      const link = screen.getAllByText(label)[0].closest("a");
      const expectedPath = label === "Home" ? "/" : `/${label.toLowerCase()}`;
      expect(link).toHaveAttribute("href", expectedPath);
    });
  });

  test("toggles mobile menu when hamburger button is clicked", async () => {
    const user = userEvent.setup();
    render(<Navbar />);

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

  test("renders mobile menu links", () => {
    render(<Navbar />);

    NAV_LINKS.forEach((label) => {
      const link = screen.getByTestId(`mobile-link-${label.toLowerCase()}`);
      expect(link).toBeInTheDocument();
    });
  });

  test("hamburger button has correct accessibility attributes", () => {
    render(<Navbar />);

    const toggleButton = screen.getByRole("button", { name: /menu/i });
    expect(toggleButton).toHaveAttribute("aria-controls", "mobile-menu");
    expect(toggleButton).toHaveAttribute("aria-expanded", "false");
  });
});
