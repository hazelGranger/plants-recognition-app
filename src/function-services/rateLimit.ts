import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";

export const rateLimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(1, "1 h"),
});
