import PlantCard from "./PlantCard";

type IResult = {
  result: any;
};

function Result({ result }: IResult) {
  return result !== null ? (
    <div className="result-container">
      {!result.is_plant ? (
        <p>This might not be a plant!</p>
      ) : (
        <div>
          <p>Possible Results:</p>
          {result.suggestions.map((v: any) => {
            return <PlantCard plant={v} />;
          })}
        </div>
      )}
    </div>
  ) : (
    <></>
  );
}

export default Result;
