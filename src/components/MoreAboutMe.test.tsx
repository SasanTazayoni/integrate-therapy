import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import MoreAboutMe from "./MoreAboutMe";
import { hobbies } from "../data/hobbies";

describe("MoreAboutMe component", () => {
  test("renders main heading", () => {
    render(<MoreAboutMe />);
    const heading = screen.getByRole("heading", { name: /more about me/i });
    expect(heading).toBeInTheDocument();
  });

  test("renders all paragraphs", () => {
    render(<MoreAboutMe />);
    const paragraphs = screen.getAllByText(
      /I enjoy|These activities|I strive/i
    );
    expect(paragraphs.length).toBe(3);
  });

  test("renders all hobby images from hobbies data", () => {
    render(<MoreAboutMe />);
    hobbies.forEach((hobby) => {
      const img = screen.getByAltText(hobby.alt);
      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute("src", hobby.src);
      expect(img).toHaveClass("hobby__image");
    });
  });
});
