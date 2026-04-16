import { describe, test, expect, vi, afterEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button component", () => {
  test("renders the button with children and default class", () => {
    render(<Button>Click Me</Button>);
    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("button");
  });

  test("calls onClick when clicked", () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    const button = screen.getByRole("button", { name: /click me/i });

    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("applies standard button props like disabled", () => {
    render(<Button disabled>Click Me</Button>);
    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toHaveClass("button");
    expect(button).toBeDisabled();
  });

  test("appends a ripple span on mouseenter", () => {
    render(<Button>Click Me</Button>);
    const button = screen.getByRole("button", { name: /click me/i });

    fireEvent(button, new MouseEvent("mouseenter", { bubbles: false, clientX: 10, clientY: 20 }));

    const ripple = button.querySelector("span");
    expect(ripple).toBeInTheDocument();
    expect(ripple).toHaveStyle({ left: "10px", top: "20px" });
  });

  test("removes the ripple span after 600ms", () => {
    vi.useFakeTimers();
    render(<Button>Click Me</Button>);
    const button = screen.getByRole("button", { name: /click me/i });

    fireEvent(button, new MouseEvent("mouseenter", { bubbles: false }));
    expect(button.querySelector("span")).toBeInTheDocument();

    vi.advanceTimersByTime(600);
    expect(button.querySelector("span")).not.toBeInTheDocument();
  });

  afterEach(() => {
    vi.useRealTimers();
  });
});
