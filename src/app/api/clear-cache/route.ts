import { generateCacheKey } from '@/network/utils/generateCacheKey';
import { getRedisClient } from '@/network/utils/getRedisClient';
import { revalidatePath } from 'next/cache';
import { NextRequest } from 'next/server';

export const GET = async (request: NextRequest) => {
  const slug = request.nextUrl.searchParams.get('slug');

  const redis = await getRedisClient();

  if (!slug) {
    return Response.json({ message: 'Slug is required' }, { status: 400 });
  }

  const result = await redis.del(generateCacheKey(slug));

  revalidatePath(`/guide/${slug}`);

  console.log('result', result);


  return Response.json({ message: 'Cache cleared' });
};
