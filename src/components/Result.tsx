import { useRef } from "react";
import { useScrollIntoElement } from "../hooks/useScrollIntoElement";
import { IdentifyResult, PlantSuggestion } from "../types/identify";
import PlantCard from "./PlantCard";

type ResultProps = {
  result: IdentifyResult | null;
};

function Result({ result }: ResultProps) {
  const resultRef = useRef<HTMLDivElement>(null);
  useScrollIntoElement(resultRef.current, result !== null);
  return (
    <div className="result-container" ref={resultRef}>
      {result !== null && (
        <>
          {!result.is_plant ? (
            <p>This might not be a plant!</p>
          ) : (
            <div>
              <p>Possible Results:</p>
              {result.suggestions.map((v: PlantSuggestion) => {
                return <PlantCard plant={v} key={v.id} />;
              })}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Result;
