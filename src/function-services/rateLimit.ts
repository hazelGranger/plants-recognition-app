import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";

export const createRateLimit = (url: string, token: string) => {
  const redis = new Redis({
    url: url,
    token: token,
  });

  console.log(redis);
  return new Ratelimit({
    redis: redis,
    limiter: Ratelimit.fixedWindow(1, "1 h"),
    analytics: true,
  });
};
