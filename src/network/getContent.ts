import { DEFAULT_REVALIDATE_TIME } from "@/data-provider/consts";
import { createClient, RedisClientType } from "redis";

// Global Redis client singleton
let redisClient: RedisClientType | null = null;

const getRedisClient = async () => {
  try {
    if (!redisClient) {
      redisClient = createClient({
        url: process.env.REDIS_URL,
        socket: {
          reconnectStrategy: (retries) => {
            return Math.min(retries * 100, 3000);
          },
        },
      });

      redisClient.on("error", (error) => {
        console.error("Redis Client Error:", error);
        redisClient = null;
      });

      redisClient.on("connect", () => {});

      redisClient.on("reconnecting", () => {});

      await redisClient.connect();
    }

    // Verify connection
    if (!redisClient.isOpen) {
      await redisClient.connect();
    }

    return redisClient;
  } catch (error) {
    console.error("Error in getRedisClient:", error);
    redisClient = null;
    throw error;
  }
};

const generateCacheKey = (url: string, query: string): string => {
  return `content:${url}:${Buffer.from(query).toString("base64")}`;
};

type Props = {
  query: string;
  url: string;
  cache?: RequestCache;
  next?: {
    revalidate: number;
  };
};

export const getContent = async <T>({
  query,
  cache = "force-cache", // Use force-cache for Next.js static generation
  next = {
    revalidate: DEFAULT_REVALIDATE_TIME,
  },
  url,
}: Props): Promise<T> => {
  const startTime = Date.now();

  try {
    const redis = await getRedisClient();
    const cacheKey = generateCacheKey(url, query);
    const cachedData = await redis.get(cacheKey);
    await redis.ping();

    if (cachedData) {
      console.log("Using Redis cache");
      const endTime = Date.now();
      const duration = endTime - startTime;
      console.log(`Cache hit! Retrieved from Redis in ${duration}ms`);
      return JSON.parse(cachedData) as T;
    }

    // If no cache, add artificial delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // If no Redis cache, fetch from API
    const response = await fetch(url, {
      method: "POST",
      cache, // This will use force-cache for Next.js static generation
      next,
      headers: {
        Authorization: `Bearer ${process.env.KONTENT_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
      }),
    });

    const { data } = await response.json();

    await redis.setEx(cacheKey, next.revalidate, JSON.stringify(data));

    const endTime = Date.now();
    const duration = endTime - startTime;
    console.log(`Request to ${url} took ${duration}ms`);

    return data as T;
  } catch (error) {
    const endTime = Date.now();
    const duration = endTime - startTime;
    console.log(`Request to ${url} failed after ${duration}ms`);
    console.error(error);
    throw error;
  }
};
