export type Taxonomy = {
  class: string;
  family: string;
  genus: string;
  kingdom: string;
  order: string;
  phylum: string;
};

export type StructuredName = {
  genus: string;
  species: string;
};

export type PlantImage = {
  id: string;
  similarity: number;
  url: string;
  url_small: string;
};

export type PlantDetail = {
  common_names: string[];
  url: string;
  name_authority: string;
  taxonomy: Taxonomy;
  synonyms: string[];
  language: string;
  scientific_name: string;
};

export type PlantSuggestion = {
  id: number;
  plant_name: string;
  plant_details: PlantDetail;
  structured_name: StructuredName;
  probability: number;
  confirmed: boolean;
  similar_images: PlantImage[];
};

export type MetaData = {
  latitude: number | null;
  longitude: number | null;
  date: string;
  datetime: string;
};

export type IdentifyResult = {
  id: string;
  meta_data: MetaData;
  suggestions: PlantSuggestion[];
  is_plant_probability: number;
  is_plant: true;
};
