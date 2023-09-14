import { useState } from "react";
import { identifySpecies } from "../services/identify";

export const useImageIdentify = (
  image: string,
  setError: React.Dispatch<React.SetStateAction<string | null>>
) => {
  const [result, setResult] = useState(null);
  const [isIdentifying, setIsIdentifying] = useState(false);

  const handleIdentify = async () => {
    setIsIdentifying(true);

    try {
      const result: any = await identifySpecies(image);
      setResult(result.data);
      setIsIdentifying(false);
    } catch (error: any) {
      setIsIdentifying(false);
      setError(error.response?.data ?? error.message);
      console.error(error);
    }
  };

  return {
    result,
    setResult,
    isIdentifying,
    handleIdentify,
  };
};
