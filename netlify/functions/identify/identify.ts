import { Handler } from "@netlify/functions";
import { identifyPlantsByImages } from "../../../src/function-services/plants-identify";
import { createRateLimit } from "../../../src/function-services/rateLimit";
import { createResponse } from "../../../src/function-services/response";

export const handler: Handler = async (event, context) => {
  const ip = event.headers["x-forwarded-for"] ?? "";
  const upstash_key = process.env.UPSTASH_REDIS_REST_TOKEN;
  const upstash_url = process.env.UPSTASH_REDIS_REST_URL;
  const api_key = process.env.API_KEY;

  const body = JSON.parse(event?.body ?? "{}");
  const images = body.images;

  if (!upstash_url || !upstash_key || !api_key) {
    return createResponse(503, "This service is not available!");
  }

  // Rate limiting
  const rateLimit = createRateLimit(upstash_url, upstash_key);
  const { success, reset } = await rateLimit.limit(ip);

  if (!success) {
    const now = Date.now();
    const retryAfter = Math.floor((reset - now) / 1000);
    return createResponse(
      429,
      "Our plants identification services are limited to two requests per day. Please try again tomorrow!",
      { ["retry-after"]: `${retryAfter}` }
    );
  }

  // Identify plants
  try {
    var result = await identifyPlantsByImages(images, api_key);
    if (result.status === 200) {
      return createResponse(
        200,
        JSON.stringify({
          ...result.data,
        })
      );
    }
  } catch (err: any) {
    console.error(err);
    return createResponse(
      err.response?.status ?? 500,
      "Server fails to response, please try again later."
    );
  }

  return createResponse(400, "How do you get here?");
};
