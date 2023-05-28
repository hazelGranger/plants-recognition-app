import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";

export const createRateLimit = async (url: string, token: string) => {
  const redis = new Redis({
    url: url,
    token: token,
  });

  const counter = await redis.incr("counter");
  return new Ratelimit({
    redis: redis,
    limiter: Ratelimit.fixedWindow(3, "1d"),
    prefix: "@upstash/ratelimit",
  });
};
