import { createClient, RedisClientType } from 'redis';

// Global Redis client singleton
let redisClient: RedisClientType | null = null;

export const getRedisClient = async () => {
  try {
    if (!redisClient) {
      redisClient = createClient({
        url: process.env.REDIS_URL,
        socket: {
          reconnectStrategy: retries => {
            return Math.min(retries * 100, 3000);
          },
        },
      });

      redisClient.on('error', error => {
        console.error('Redis Client Error:', error);
        redisClient = null;
      });

      redisClient.on('connect', () => {});

      redisClient.on('reconnecting', () => {});

      await redisClient.connect();
    }

    // Verify connection
    if (!redisClient.isOpen) {
      await redisClient.connect();
    }

    return redisClient;
  } catch (error) {
    console.error('Error in getRedisClient:', error);
    redisClient = null;
    throw error;
  }
};
