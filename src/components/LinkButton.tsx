import { useEffect, useRef } from "react";
import { Link, type LinkProps } from "react-router-dom";
import { initializeRippleEffect } from "../utils/ripple";

type LinkButtonProps = LinkProps;

export default function LinkButton({ children, ...props }: LinkButtonProps) {
  const linkRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    if (linkRef.current) {
      return initializeRippleEffect(linkRef.current);
    }
  }, []);

  return (
    <Link ref={linkRef} className="button" {...props}>
      {children}
    </Link>
  );
}
