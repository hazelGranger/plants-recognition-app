import { Redis } from "@upstash/redis/nodejs";
import { Ratelimit } from "@upstash/ratelimit";

export const createRateLimit = (url: string, token: string) => {
  const redis = new Redis({
    url: url,
    token: token,
  });
  return new Ratelimit({
    redis: redis,
    limiter: Ratelimit.fixedWindow(3, "1d"),
    prefix: "@upstash/ratelimit",
    analytics: true,
  });
};
