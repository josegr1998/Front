import { getRedisClient } from '@/network/utils/getRedisClient';
import { revalidatePath } from 'next/cache';
import { NextRequest } from 'next/server';

export const GET = async (request: NextRequest) => {
  const key = request.nextUrl.searchParams.get('key');

  const redis = await getRedisClient();

  if (!key) 
    return Response.json({ message: 'Cache key is required' }, { status: 400 });
  

  const result = await redis.del(key);

  revalidatePath(key);

  console.log('result', result,'key', key);


  return Response.json({ message: 'Cache cleared' });
};
