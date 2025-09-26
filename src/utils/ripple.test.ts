import { describe, test, expect, vi } from "vitest";
import { initializeRippleEffect } from "./ripple";

describe("initializeRippleEffect", () => {
  test("creates and removes a ripple span on mouseover", () => {
    vi.useFakeTimers();

    const button = document.createElement("button");
    document.body.appendChild(button);

    initializeRippleEffect(button);

    const mockRect = { left: 0, top: 0, width: 100, height: 50 } as DOMRect;
    button.getBoundingClientRect = vi.fn(() => mockRect);

    const event = new MouseEvent("mouseover", { clientX: 10, clientY: 10 });
    button.dispatchEvent(event);

    const ripple = button.querySelector("span");
    expect(ripple).toBeTruthy();
    expect(ripple!.style.left).toBe("10px");
    expect(ripple!.style.top).toBe("10px");

    const removeSpy = vi.spyOn(ripple!, "remove");

    vi.advanceTimersByTime(600);

    expect(removeSpy).toHaveBeenCalled();

    vi.useRealTimers();
  });

  test("does nothing if event target is not the button", () => {
    const button = document.createElement("button");
    document.body.appendChild(button);

    initializeRippleEffect(button);

    const fakeTarget = document.createElement("div");
    const event = new MouseEvent("mouseover", {
      clientX: 10,
      clientY: 10,
      bubbles: true,
    });
    Object.defineProperty(event, "target", { value: fakeTarget });

    button.dispatchEvent(event);

    expect(button.querySelector("span")).toBeNull();
  });
});
