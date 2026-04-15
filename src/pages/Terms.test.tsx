import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Terms from "./Terms";

describe("Terms Page", () => {
  test("renders Navbar correctly", () => {
    render(
      <MemoryRouter>
        <Terms />
      </MemoryRouter>
    );

    const navbar = screen.getByTestId("navbar");
    expect(navbar).toBeInTheDocument();
  });

  test("renders main heading", () => {
    render(
      <MemoryRouter>
        <Terms />
      </MemoryRouter>
    );

    const heading = screen.getByRole("heading", { name: /terms & conditions/i });
    expect(heading).toBeInTheDocument();
  });

  test("renders all section headings", () => {
    render(
      <MemoryRouter>
        <Terms />
      </MemoryRouter>
    );

    expect(screen.getByRole("heading", { name: /^services$/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /^fees$/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /cancellation policy/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /confidentiality/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /suitability/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /online sessions/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /limitation of liability/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /governing law/i })).toBeInTheDocument();
  });

  test("renders session fee", () => {
    render(
      <MemoryRouter>
        <Terms />
      </MemoryRouter>
    );

    expect(screen.getByText(/£85/)).toBeInTheDocument();
  });

  test("renders cancellation notice period", () => {
    render(
      <MemoryRouter>
        <Terms />
      </MemoryRouter>
    );

    expect(screen.getByText(/two working days.*48 hours/i)).toBeInTheDocument();
  });
});
