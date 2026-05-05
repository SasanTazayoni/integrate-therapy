'use client'

import { useEffect, useRef } from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, ...props }: ButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const button = buttonRef.current;

    function createRipple(e: MouseEvent): void {
      const rect = button!.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const ripple = document.createElement("span");
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      button!.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    }

    button?.addEventListener("mouseenter", createRipple);
    return () => button?.removeEventListener("mouseenter", createRipple);
  }, []);

  return (
    <button ref={buttonRef} className="button" {...props}>
      {children}
    </button>
  );
}
