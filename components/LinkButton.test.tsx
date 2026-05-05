import { describe, test, expect, vi, afterEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import LinkButton from "./LinkButton";

describe("LinkButton component", () => {
  test("renders a link with the button class and correct href", () => {
    render(<LinkButton href="/contact">Contact</LinkButton>);

    const link = screen.getByRole("link", { name: /contact/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveClass("button");
    expect(link).toHaveAttribute("href", "/contact");
  });

  test("renders children correctly", () => {
    render(<LinkButton href="/faq">FAQ</LinkButton>);

    expect(screen.getByText("FAQ")).toBeInTheDocument();
  });

  test("appends a ripple span on mouseenter", () => {
    render(<LinkButton href="/contact">Contact</LinkButton>);
    const link = screen.getByRole("link", { name: /contact/i });

    fireEvent(link, new MouseEvent("mouseenter", { bubbles: false, clientX: 10, clientY: 20 }));

    const ripple = link.querySelector("span");
    expect(ripple).toBeInTheDocument();
    expect(ripple).toHaveStyle({ left: "10px", top: "20px" });
  });

  test("removes the ripple span after 600ms", () => {
    vi.useFakeTimers();
    render(<LinkButton href="/contact">Contact</LinkButton>);
    const link = screen.getByRole("link", { name: /contact/i });

    fireEvent(link, new MouseEvent("mouseenter", { bubbles: false }));
    expect(link.querySelector("span")).toBeInTheDocument();

    vi.advanceTimersByTime(600);
    expect(link.querySelector("span")).not.toBeInTheDocument();
  });

  afterEach(() => {
    vi.useRealTimers();
  });
});
