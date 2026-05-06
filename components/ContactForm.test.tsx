import { describe, test, expect, vi } from "vitest";
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

  test("required attribute is set on name, email and enquiry but not phone", () => {
    render(<ContactForm />);
    expect(screen.getByLabelText(/full name/i)).toBeRequired();
    expect(screen.getByLabelText(/email/i)).toBeRequired();
    expect(screen.getByLabelText(/your enquiry/i)).toBeRequired();
    expect(screen.getByLabelText(/contact number/i)).not.toBeRequired();
  });

  test("fields have correct minLength and maxLength attributes", () => {
    render(<ContactForm />);
    const name = screen.getByLabelText(/full name/i);
    const email = screen.getByLabelText(/email/i);
    const phone = screen.getByLabelText(/contact number/i);
    const enquiry = screen.getByLabelText(/your enquiry/i);

    expect(name).toHaveAttribute("minLength", "1");
    expect(name).toHaveAttribute("maxLength", "30");
    expect(email).toHaveAttribute("minLength", "5");
    expect(email).toHaveAttribute("maxLength", "30");
    expect(phone).toHaveAttribute("minLength", "7");
    expect(phone).toHaveAttribute("maxLength", "20");
    expect(enquiry).toHaveAttribute("minLength", "10");
    expect(enquiry).toHaveAttribute("maxLength", "300");
  });

  test("form is invalid when required fields are empty", () => {
    render(<ContactForm />);
    const form = screen.getByTestId("contact-form") as HTMLFormElement;
    expect(form.checkValidity()).toBe(false);
  });

  test("form is valid when all required fields are filled correctly", () => {
    render(<ContactForm />);
    const form = screen.getByTestId("contact-form") as HTMLFormElement;

    fireEvent.change(screen.getByLabelText(/full name/i), { target: { value: "Jane Smith" } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: "jane@example.com" } });
    fireEvent.change(screen.getByLabelText(/your enquiry/i), { target: { value: "I would like to book a session." } });

    expect(form.checkValidity()).toBe(true);
  });

  test("email field is invalid with non-email value", () => {
    render(<ContactForm />);
    const emailInput = screen.getByLabelText(/email/i) as HTMLInputElement;
    fireEvent.change(emailInput, { target: { value: "not-an-email" } });
    expect(emailInput.validity.typeMismatch).toBe(true);
    expect(emailInput.checkValidity()).toBe(false);
  });

  test("enquiry field is invalid when shorter than minLength", () => {
    render(<ContactForm />);
    const enquiry = screen.getByLabelText(/your enquiry/i) as HTMLTextAreaElement;
    fireEvent.change(enquiry, { target: { value: "Too short" } });
    expect(enquiry.validity.tooShort).toBe(true);
    expect(enquiry.checkValidity()).toBe(false);
  });

  test("does not submit when required fields are empty", () => {
    render(<ContactForm />);
    const form = screen.getByTestId("contact-form") as HTMLFormElement;
    const submitHandler = vi.fn();
    form.addEventListener("submit", submitHandler);

    fireEvent.submit(form);
    expect(submitHandler).not.toHaveBeenCalled();
  });
});
