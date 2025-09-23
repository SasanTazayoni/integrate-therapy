import { useEffect, useRef } from "react";
import { initializeRippleEffect } from "../utils/ripple";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, ...props }: ButtonProps) {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (buttonRef.current) {
      initializeRippleEffect(buttonRef.current);
    }
  }, []);

  const baseClasses = "button";

  return (
    <button ref={buttonRef} className={baseClasses} {...props}>
      {children}
    </button>
  );
}
