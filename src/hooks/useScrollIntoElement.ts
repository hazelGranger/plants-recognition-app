import { useEffect } from "react";

export const useScrollIntoElement = (
  element: HTMLElement | null,
  hasResult: boolean
) => {
  useEffect(() => {
    if (element && hasResult) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [hasResult, element]);
};
