import { describe, test, expect, vi } from "vitest";
import { initializeRippleEffect } from "./ripple";

describe("initializeRippleEffect", () => {
  test("creates and removes a ripple span on mousedown", () => {
    vi.useFakeTimers();

    const button = document.createElement("button");
    document.body.appendChild(button);

    initializeRippleEffect(button);

    const mockRect = { left: 0, top: 0, width: 100, height: 50 } as DOMRect;
    button.getBoundingClientRect = vi.fn(() => mockRect);

    const event = new MouseEvent("mousedown", { clientX: 10, clientY: 10 });
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

  test("creates a ripple span on touchstart", () => {
    vi.useFakeTimers();

    const button = document.createElement("button");
    document.body.appendChild(button);

    initializeRippleEffect(button);

    const mockRect = { left: 0, top: 0, width: 100, height: 50 } as DOMRect;
    button.getBoundingClientRect = vi.fn(() => mockRect);

    // jsdom doesn't implement Touch — provide a minimal stub
    const touch = { identifier: 1, target: button, clientX: 20, clientY: 20 };
    const event = new TouchEvent("touchstart", { touches: [touch as unknown as Touch] });
    button.dispatchEvent(event);

    const ripple = button.querySelector("span");
    expect(ripple).toBeTruthy();
    expect(ripple!.style.left).toBe("20px");
    expect(ripple!.style.top).toBe("20px");

    vi.useRealTimers();
  });

  test("creates a centred ripple span on Enter key", () => {
    vi.useFakeTimers();

    const button = document.createElement("button");
    document.body.appendChild(button);

    initializeRippleEffect(button);

    const mockRect = { left: 0, top: 0, width: 100, height: 50 } as DOMRect;
    button.getBoundingClientRect = vi.fn(() => mockRect);

    const event = new KeyboardEvent("keydown", { key: "Enter" });
    button.dispatchEvent(event);

    const ripple = button.querySelector("span");
    expect(ripple).toBeTruthy();
    expect(ripple!.style.left).toBe("50px");
    expect(ripple!.style.top).toBe("25px");

    vi.useRealTimers();
  });

  test("creates a centred ripple span on Space key", () => {
    vi.useFakeTimers();

    const button = document.createElement("button");
    document.body.appendChild(button);

    initializeRippleEffect(button);

    const mockRect = { left: 0, top: 0, width: 100, height: 50 } as DOMRect;
    button.getBoundingClientRect = vi.fn(() => mockRect);

    const event = new KeyboardEvent("keydown", { key: " " });
    button.dispatchEvent(event);

    const ripple = button.querySelector("span");
    expect(ripple).toBeTruthy();
    expect(ripple!.style.left).toBe("50px");
    expect(ripple!.style.top).toBe("25px");

    vi.useRealTimers();
  });

  test("returns a cleanup function that removes all listeners", () => {
    const button = document.createElement("button");
    document.body.appendChild(button);

    const cleanup = initializeRippleEffect(button);

    const mockRect = { left: 0, top: 0, width: 100, height: 50 } as DOMRect;
    button.getBoundingClientRect = vi.fn(() => mockRect);

    cleanup();

    button.dispatchEvent(new MouseEvent("mousedown", { clientX: 10, clientY: 10 }));
    expect(button.querySelector("span")).toBeNull();
  });
});
