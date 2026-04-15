export const initializeRippleEffect = (button: HTMLElement): (() => void) => {
  function spawnRipple(x: number, y: number): void {
    const rect = button.getBoundingClientRect();
    const ripple = document.createElement("span");
    ripple.style.left = `${x - rect.left}px`;
    ripple.style.top = `${y - rect.top}px`;
    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  }

  function onMouseDown(e: MouseEvent): void {
    spawnRipple(e.clientX, e.clientY);
  }

  function onTouchStart(e: TouchEvent): void {
    const touch = e.touches[0];
    spawnRipple(touch.clientX, touch.clientY);
  }

  function onKeyDown(e: KeyboardEvent): void {
    if (e.key === "Enter" || e.key === " ") {
      const rect = button.getBoundingClientRect();
      spawnRipple(rect.left + rect.width / 2, rect.top + rect.height / 2);
    }
  }

  button.addEventListener("mousedown", onMouseDown);
  button.addEventListener("touchstart", onTouchStart);
  button.addEventListener("keydown", onKeyDown);

  return () => {
    button.removeEventListener("mousedown", onMouseDown);
    button.removeEventListener("touchstart", onTouchStart);
    button.removeEventListener("keydown", onKeyDown);
  };
};
