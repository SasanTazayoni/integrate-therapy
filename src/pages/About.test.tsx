import { describe, test, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import About from "./About";

vi.mock("../components/Navbar", () => ({
  default: () => <div data-testid="navbar" />,
}));
vi.mock("../components/Footer", () => ({
  default: () => <div data-testid="footer" />,
}));
vi.mock("../components/AboutIntro", () => ({
  default: () => <div data-testid="about-intro" />,
}));
vi.mock("../components/TrainingSection", () => ({
  default: () => <div data-testid="training-section" />,
}));
vi.mock("../components/MoreAboutMe", () => ({
  default: () => <div data-testid="more-about-me" />,
}));

describe("About page", () => {
  const renderWithRouter = (ui: React.ReactElement) =>
    render(<MemoryRouter>{ui}</MemoryRouter>);

  test("renders without crashing", () => {
    renderWithRouter(<About />);
  });

  test("renders Navbar", () => {
    renderWithRouter(<About />);
    expect(screen.getByTestId("navbar")).toBeInTheDocument();
  });

  test("renders AboutIntro", () => {
    renderWithRouter(<About />);
    expect(screen.getByTestId("about-intro")).toBeInTheDocument();
  });

  test("renders TrainingSection", () => {
    renderWithRouter(<About />);
    expect(screen.getByTestId("training-section")).toBeInTheDocument();
  });

  test("renders MoreAboutMe", () => {
    renderWithRouter(<About />);
    expect(screen.getByTestId("more-about-me")).toBeInTheDocument();
  });

  test("renders Footer", () => {
    renderWithRouter(<About />);
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });

  test("renders training image section", () => {
    renderWithRouter(<About />);
    expect(document.querySelector(".training__image")).toBeInTheDocument();
  });
});
