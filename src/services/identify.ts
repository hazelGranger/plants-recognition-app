import axios from "axios";
// import { exampleResult } from "../mock/exampleResult";

export const identifySpecies = async (image: string) => {
  return axios.post(`${process.env.REACT_APP_API_URL}/identify`, {
    images: [image],
  });

  //   return new Promise((resolve, reject) => {
  //     resolve({ data: exampleResult });
  //   });
};
