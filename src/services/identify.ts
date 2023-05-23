import axios from "axios";

export const identifySpecies = async (image: string) => {
    return axios
        .post(`${process.env.REACT_APP_API_URL}/identify`, {
            images: [image],
        });
};