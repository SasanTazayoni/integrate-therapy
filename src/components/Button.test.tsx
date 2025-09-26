import { describe, test, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";
import * as rippleUtils from "../utils/ripple";

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

  test("calls initializeRippleEffect on mount", () => {
    const rippleSpy = vi
      .spyOn(rippleUtils, "initializeRippleEffect")
      .mockImplementation(() => {});
    render(<Button>Click Me</Button>);
    expect(rippleSpy).toHaveBeenCalledTimes(1);
    rippleSpy.mockRestore();
  });
});
