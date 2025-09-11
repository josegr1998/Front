import { DEFAULT_REVALIDATE_TIME } from '@/data-provider/consts';
import { generateCacheKey } from './utils/generateCacheKey';
import { getRedisClient } from './utils/getRedisClient';

type Props = {
  query: string;
  url: string;
  cache?: RequestCache;
  next?: {
    revalidate: number;
  };
  slug: string;
};

const REDIS_CACHE_TIME = 3600; // 1 hour

export const getContent = async <T>({
  query,
  cache = 'force-cache', // Use force-cache for Next.js static generation
  next = {
    revalidate: DEFAULT_REVALIDATE_TIME,
  },
  url,
  slug,
}: Props): Promise<T> => {
  const startTime = Date.now();

  try {
    const redis = await getRedisClient();
    const cacheKey = generateCacheKey(slug);
    const cachedData = await redis.get(cacheKey);
    await redis.ping();

    if (cachedData) {
      console.log('Using Redis cache',slug);
      const endTime = Date.now();
      const duration = endTime - startTime;
      console.log(`Cache hit! Retrieved from Redis in ${duration}ms`);
      return JSON.parse(cachedData) as T;
    }

    // If no cache, add artificial delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log('No Redis cache, fetching from API',slug);

    // If no Redis cache, fetch from API
    const response = await fetch(url, {
      method: 'POST',
      cache, // This will use force-cache for Next.js static generation
      next,
      headers: {
        Authorization: `Bearer ${process.env.KONTENT_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
      }),
    });

    const { data } = await response.json();

    await redis.setEx(cacheKey, REDIS_CACHE_TIME, JSON.stringify(data));

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
