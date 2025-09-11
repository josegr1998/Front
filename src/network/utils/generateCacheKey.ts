export const generateCacheKey = (slug: string) => {
  return `content:${slug}:${Buffer.from(slug).toString('base64')}`;
};
