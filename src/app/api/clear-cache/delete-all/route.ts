import { getRedisClient } from '@/network/utils/getRedisClient';
import { revalidatePath } from 'next/cache';

const isUrlKey = (key: string) => {
  return key.startsWith('/') || key.includes('/');
};

const revalidatePaths= ({keys}: {keys: string[]}) => {
  keys.forEach((key) => {
    if (isUrlKey(key)) 
      revalidatePath(key);
  });
};


export const GET = async () => {
  try { 
    const redis = await getRedisClient();

    const keys = await redis.keys('*');

    if (!keys.length) 
      return Response.json({ message: 'No cache keys found' });
    

    const result = await redis.del(keys);

    revalidatePaths({keys});

    console.log('Deleted', result, 'cache keys:', keys);

    return Response.json({ 
      message: 'All cache cleared successfully', 
      deletedCount: result,
      keys 
    });
  } catch (error) {
    console.error('Error clearing cache:', error);
    return Response.json(
      { message: 'Error clearing cache', error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
};
