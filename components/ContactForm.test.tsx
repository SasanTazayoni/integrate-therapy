import { describe, test, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";

describe("ContactForm Component", () => {
  test("renders the form container", () => {
    render(<ContactForm />);
    const form = screen.getByTestId("contact-form");
    expect(form).toBeInTheDocument();
  });

  test("renders all input fields and textarea", () => {
    render(<ContactForm />);

    expect(screen.getByLabelText(/Full name:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Contact number:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Your enquiry:/i)).toBeInTheDocument();
  });

  test("renders submit and clear buttons", () => {
    render(<ContactForm />);

    const submitButton = screen.getByRole("button", { name: /submit/i });
    const clearButton = screen.getByRole("button", { name: /clear/i });

    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveAttribute("type", "submit");

    expect(clearButton).toBeInTheDocument();
    expect(clearButton).toHaveAttribute("type", "button");
  });

  test("clear button resets form fields", () => {
    render(<ContactForm />);

    const fullnameInput = screen.getByLabelText(
      /Full name:/i
    ) as HTMLInputElement;
    const contactInput = screen.getByLabelText(
      /Contact number:/i
    ) as HTMLInputElement;
    const emailInput = screen.getByLabelText(/Email:/i) as HTMLInputElement;
    const enquiryTextarea = screen.getByLabelText(
      /Your enquiry:/i
    ) as HTMLTextAreaElement;
    const clearButton = screen.getByRole("button", { name: /clear/i });

    fireEvent.change(fullnameInput, { target: { value: "John Doe" } });
    fireEvent.change(contactInput, { target: { value: "123456789" } });
    fireEvent.change(emailInput, { target: { value: "john@example.com" } });
    fireEvent.change(enquiryTextarea, {
      target: { value: "This is a test enquiry." },
    });

    expect(fullnameInput.value).toBe("John Doe");
    expect(contactInput.value).toBe("123456789");
    expect(emailInput.value).toBe("john@example.com");
    expect(enquiryTextarea.value).toBe("This is a test enquiry.");

    fireEvent.click(clearButton);

    expect(fullnameInput.value).toBe("");
    expect(contactInput.value).toBe("");
    expect(emailInput.value).toBe("");
    expect(enquiryTextarea.value).toBe("");
  });

  test("form has correct action and method", () => {
    render(<ContactForm />);

    const form = screen.getByTestId("contact-form");
    expect(form).toHaveAttribute("action", "https://formspree.io/f/xgergodj");
    expect(form).toHaveAttribute("method", "POST");
  });
});
