import { useEffect } from "react";

export const usePassiveEventListenerForScroll = () => {
  function handleTouchstart(e: TouchEvent) {
    e.preventDefault();
  }
  useEffect(() => {
    window.addEventListener("touchstart", handleTouchstart, {
      passive: true,
    });

    return () => {
      window.removeEventListener("touchstart", handleTouchstart);
    };
  }, []);
};
