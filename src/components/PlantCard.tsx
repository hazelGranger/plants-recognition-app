import { PlantSuggestion } from "../types/identify";

type PlantCardProps = {
  plant: PlantSuggestion;
};

function PlantCard({ plant }: PlantCardProps) {
  return (
    <div className="plant-card">
      <div>
        <h3>{plant.plant_name}</h3>
        <p className="plant-names">
          {plant.plant_details?.common_names?.map((name, i) => (
            <span key={name}>
              {name}
              {i !== plant.plant_details?.common_names.length - 1 && ","}
            </span>
          ))}
        </p>
        <a target="_blank" rel="noreferrer" href={plant.plant_details?.url}>
          View more on Wikipedia
        </a>
      </div>
      <div>
        <img
          src={plant.similar_images[0]?.url_small}
          alt={`${plant.plant_name}`}
        />
      </div>
    </div>
  );
}

export default PlantCard;
