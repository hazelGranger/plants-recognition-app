import { useEffect, useState } from "react";

// errorDisplayDuration's unit is as ms
export const useErrorHandle = (errorDisplayDuration: number) => {
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setError(null);
    }, errorDisplayDuration);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [error, errorDisplayDuration]);

  return {
    error,
    setError,
  };
};
