import { Redis } from "@upstash/redis";

export const redis = (url: string, token: string) =>
  new Redis({
    url: url,
    token: token,
  });
