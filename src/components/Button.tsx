import { useEffect, useRef } from "react";
import { initializeRippleEffect } from "../utils/ripple";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "danger";
};

export default function Button({
  variant = "primary",
  children,
  ...props
}: ButtonProps) {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (buttonRef.current) {
      initializeRippleEffect(buttonRef.current);
    }
  }, []);

  const baseClasses = `
    button
    button--${variant}
    flex justify-center items-center px-4 py-2 rounded
  `;

  return (
    <button ref={buttonRef} className={baseClasses} {...props}>
      {children}
    </button>
  );
}
