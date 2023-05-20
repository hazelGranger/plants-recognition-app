import axios from "axios";

export async function identifyPlantsByImages(
  images: string[],
  api_key?: string
) {
  console.log("identifyPlantsByImages", images, api_key);
  const data = {
    api_key: api_key,
    images: images,
    /* modifiers docs: https://github.com/flowerchecker/Plant-id-API/wiki/Modifiers */
    modifiers: ["crops_fast", "similar_images"],
    plant_language: "en",
    /* plant details docs: https://github.com/flowerchecker/Plant-id-API/wiki/Plant-details */
    plant_details: [
      "common_names",
      "url",
      "name_authority",
      "wiki_description",
      "taxonomy",
      "synonyms",
    ],
  };

  return await axios.post("https://api.plant.id/v2/identify", data);
}
