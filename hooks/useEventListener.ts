import { useEffect } from "react";

export const useEventListener = (
  target: EventTarget | undefined,
  event: string,
  listener: EventListenerOrEventListenerObject,
  trigger = true
): void => {
  useEffect(() => {
    const t = target || window;
    t.addEventListener(event, listener);
    trigger && t.dispatchEvent(new Event(event));
    return () => t.removeEventListener(event, listener);
  });
};
