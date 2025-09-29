import { describe, test, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import TrainingSection from "../components/TrainingSection";

describe("TrainingSection component", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <TrainingSection />
      </MemoryRouter>
    );
  });

  test("renders the section with the correct heading", () => {
    const heading = screen.getByRole("heading", { name: /my training/i });
    expect(heading).toBeInTheDocument();
  });

  test("renders all paragraphs", () => {
    const paragraphs = screen.getAllByText(
      /I am a fully qualified|My professional training|I am also a member/i
    );
    expect(paragraphs.length).toBe(3);
  });

  test("renders Services button with correct text and aria-label", () => {
    const servicesButton = screen.getByRole("button", {
      name: /go to services page/i,
    });
    expect(servicesButton).toBeInTheDocument();
    expect(servicesButton).toHaveTextContent("Services");
  });

  test("renders Contact button with correct text and aria-label", () => {
    const contactButton = screen.getByRole("button", {
      name: /go to contact page/i,
    });
    expect(contactButton).toBeInTheDocument();
    expect(contactButton).toHaveTextContent("Contact");
  });

  test("buttons are wrapped in correct links", () => {
    const links = screen.getAllByRole("link");
    expect(links[0]).toHaveAttribute("href", "/services");
    expect(links[1]).toHaveAttribute("href", "/contact");
  });
});
