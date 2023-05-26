import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";

export const createRateLimit = (url: string, token: string) =>
  new Ratelimit({
    redis: new Redis({
      url: url,
      token: token,
    }),
    limiter: Ratelimit.slidingWindow(1, "1 h"),
  });
