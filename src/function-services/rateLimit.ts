import { Ratelimit } from "@upstash/ratelimit";
import { redis } from "./redis";

export const createRateLimit = (url: string, token: string) => {
  const redisInstance = redis(url, token);
  return new Ratelimit({
    redis: redisInstance,
    limiter: Ratelimit.fixedWindow(2, "1d"),
    prefix: "@upstash/ratelimit",
    analytics: true,
  });
};
