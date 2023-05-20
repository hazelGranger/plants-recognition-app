import { Handler } from "@netlify/functions";
import { identifyPlantsByImages } from "../../../src/plants-identify";

export const handler: Handler = async (event, context) => {
  const api_key = process.env.API_KEY;
  const body = JSON.parse(event?.body ?? "{}");
  const images = body.images;
  const headers = {
    "Access-Control-Allow-Origin": "https://plants-recognition.netlify.app/",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  };

  try {
    var result = await identifyPlantsByImages(images, api_key);
    // console.log(result, "call this");
    if (result.status === 200) {
      // console.log(result);
      return {
        statusCode: 200,
        headers: headers,
        body: JSON.stringify({
          ...result.data,
        }),
      };
    }
  } catch (err: any) {
    return {
      headers: headers,
      statusCode: err.response?.status ?? 500,
      body: JSON.stringify({ error: err.message }),
    };
  }

  return {
    headers: headers,
    statusCode: 200,
    body: ": )",
  };
};
