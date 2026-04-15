import { describe, test, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import LinkButton from "./LinkButton";
import * as rippleUtils from "../utils/ripple";

describe("LinkButton component", () => {
  test("renders a link with the button class and correct href", () => {
    render(
      <MemoryRouter>
        <LinkButton to="/contact">Contact</LinkButton>
      </MemoryRouter>
    );

    const link = screen.getByRole("link", { name: /contact/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveClass("button");
    expect(link).toHaveAttribute("href", "/contact");
  });

  test("renders children correctly", () => {
    render(
      <MemoryRouter>
        <LinkButton to="/faq">FAQ</LinkButton>
      </MemoryRouter>
    );

    expect(screen.getByText("FAQ")).toBeInTheDocument();
  });

  test("calls initializeRippleEffect on mount", () => {
    const rippleSpy = vi
      .spyOn(rippleUtils, "initializeRippleEffect")
      .mockImplementation(() => () => {});

    render(
      <MemoryRouter>
        <LinkButton to="/contact">Contact</LinkButton>
      </MemoryRouter>
    );

    expect(rippleSpy).toHaveBeenCalledTimes(1);
    rippleSpy.mockRestore();
  });
});
