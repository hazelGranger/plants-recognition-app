import { Handler } from "@netlify/functions";
import { identifyPlantsByImages } from "../../../src/function-services/plants-identify";
import { rateLimit } from "../../../src/function-services/rateLimit";

export const handler: Handler = async (event, context) => {
  const ip = event.headers["x-forwarded-for"] ?? "";
  console.log(ip, "ip");

  const api_key = process.env.API_KEY;
  const body = JSON.parse(event?.body ?? "{}");
  const images = body.images;
  const headers = {
    "Access-Control-Allow-Origin": "https://plants-recognition.netlify.app/",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  };

  const { success, reset } = await rateLimit.limit(ip);
  console.log(success, reset);
  if (!success) {
    const now = Date.now();
    const retryAfter = Math.floor((reset - now) / 1000);
    return {
      statusCode: 429,
      headers: {
        ["retry-after"]: `${retryAfter}`,
      },
    };
  }

  try {
    // var result = await identifyPlantsByImages(images, api_key);
    // if (result.status === 200) {
    //   return {
    //     statusCode: 200,
    //     headers: headers,
    //     body: JSON.stringify({
    //       ...result.data,
    //     }),
    //   };
    // }
  } catch (err: any) {
    return {
      headers: headers,
      statusCode: err.response?.status ?? 500,
      body: JSON.stringify({
        error: "Server fails to response, please try again later.",
      }),
    };
  }

  return {
    headers: headers,
    statusCode: 200,
    body: ": )",
  };
};
