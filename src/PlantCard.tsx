
function PlantCard ({ plant } : any) {
    return (
        <div className="plant-card">
            <div>
                <h3>{plant.plant_name}</h3>
                <p>{plant.plant_details?.common_names.toString(" ")}</p>
                <a target="_blank" href={plant.plant_details?.url}>View more on Wikipedia</a>
            </div>
            <div>
                <img src={plant.similar_images[0]?.url_small} />
            </div>
        </div>
    )
}


export default PlantCard;