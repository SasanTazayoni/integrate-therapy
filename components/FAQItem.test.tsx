import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import FAQItem from "./FAQItem";

describe("FAQItem Component", () => {
  const questionText = "What is your refund policy?";
  const answerText = "We offer a 30-day money-back guarantee.";

  test("renders question correctly", () => {
    render(<FAQItem question={questionText} answer={answerText} />);

    const questionElement = screen.getByText(questionText);
    expect(questionElement).toBeInTheDocument();
  });

  test("renders answer correctly", () => {
    render(<FAQItem question={questionText} answer={answerText} />);

    const answerElement = screen.getByText(answerText);
    expect(answerElement).toBeInTheDocument();
  });

  test("renders ReactNode as answer", () => {
    const answerNode = <span data-testid="custom-answer">Custom Answer</span>;
    render(<FAQItem question={questionText} answer={answerNode} />);

    const customAnswer = screen.getByTestId("custom-answer");
    expect(customAnswer).toBeInTheDocument();
    expect(customAnswer).toHaveTextContent("Custom Answer");
  });
});
