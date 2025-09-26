import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import AboutIntro from "./AboutIntro";

describe("AboutIntro Component", () => {
  test("renders the main heading", () => {
    render(<AboutIntro />);
    const heading = screen.getByRole("heading", { name: /about me/i });
    expect(heading).toBeInTheDocument();
  });

  test("renders all paragraphs", () => {
    render(<AboutIntro />);
    const paragraphs = screen.getAllByText(
      /I am Simon Burgess|I believe that everyone|In our work together|Whether you are dealing/i
    );
    expect(paragraphs.length).toBe(4);
  });

  test("renders the image with correct alt text", () => {
    render(<AboutIntro />);
    const image = screen.getByAltText(/A picture of Simon Burgess/i);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "images/aboutpic.jpg");
  });

  test("renders the container and image container divs", () => {
    render(<AboutIntro />);
    const container = screen.getByRole("article").querySelector(".container");
    expect(container).toBeInTheDocument();

    const imageContainer = screen
      .getByRole("article")
      .querySelector(".about__image-container");
    expect(imageContainer).toBeInTheDocument();
  });
});
