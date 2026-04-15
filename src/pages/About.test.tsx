import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { MemoryRouter } from "react-router-dom";
import About from "./About";

describe("About page", () => {
  const renderWithRouter = (ui: React.ReactElement) =>
    render(<MemoryRouter>{ui}</MemoryRouter>);

  test("renders Navbar", () => {
    renderWithRouter(<About />);
    expect(screen.getByTestId("navbar")).toBeInTheDocument();
  });

  test("renders AboutIntro heading", () => {
    renderWithRouter(<About />);
    expect(
      screen.getByRole("heading", { name: /about me/i, level: 1 })
    ).toBeInTheDocument();
  });

  test("renders TrainingSection heading", () => {
    renderWithRouter(<About />);
    expect(
      screen.getByRole("heading", { name: /training/i })
    ).toBeInTheDocument();
  });

  test("renders MoreAboutMe heading", () => {
    renderWithRouter(<About />);
    expect(
      screen.getByRole("heading", { name: /more about me/i })
    ).toBeInTheDocument();
  });

  test("renders training image div", () => {
    renderWithRouter(<About />);
    expect(document.querySelector(".training__image")).toBeInTheDocument();
  });
});
