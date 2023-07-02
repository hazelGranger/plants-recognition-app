import { IdentifyResult, PlantSuggestion } from "../types/identify";
import PlantCard from "./PlantCard";

type ResultProps = {
  result: IdentifyResult | null;
};

function Result({ result }: ResultProps) {
  return result !== null ? (
    <div className="result-container">
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
    </div>
  ) : (
    <></>
  );
}

export default Result;
