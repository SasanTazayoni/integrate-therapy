import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import InfoCard from "./InfoCard";

describe("InfoCard component", () => {
  const props = {
    title: "Test Card Title",
    paragraphs: [
      "This is the first paragraph.",
      "This is the second paragraph.",
      "This is the third paragraph.",
    ],
    image: "/test-image.jpg",
    imageAlt: "Test Image Alt",
  };

  test("renders the title", () => {
    render(<InfoCard {...props} />);
    const heading = screen.getByRole("heading", { name: /test card title/i });
    expect(heading).toBeInTheDocument();
  });

  test("renders all paragraphs with correct classes", () => {
    render(<InfoCard {...props} />);
    const allParagraphs = screen.getAllByText(/This is/);
    expect(allParagraphs.length).toBe(props.paragraphs.length);

    expect(allParagraphs[0]).not.toHaveClass("card__text-paragraph");
    for (let i = 1; i < allParagraphs.length; i++) {
      expect(allParagraphs[i]).toHaveClass("card__text-paragraph");
    }
  });

  test("renders the image with correct src, alt, and class", () => {
    render(<InfoCard {...props} />);
    const img = screen.getByAltText(props.imageAlt) as HTMLImageElement;
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", props.image);
    expect(img).toHaveClass("card__img");
  });
});
