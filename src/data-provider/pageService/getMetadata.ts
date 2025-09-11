import { GUIDE_PAGE_QUERY } from '@/graphql/queries/guidePage';
import { getContent } from '@/network/getContent';
import { GuideResponse } from '@/network/types/guide';
import { getCacheOptions, createUrl } from './utils';

export const getMetadata = async (slug: string) => {
  const isPreview = process.env.IS_PREVIEW?.toLowerCase() === 'true';
  const url = createUrl({ isPreview });
  const cacheOptions = getCacheOptions({ isPreview });

  try {
    const data = await getContent<GuideResponse>({
      query: GUIDE_PAGE_QUERY(slug),
      url,
      ...cacheOptions,
      cacheKey: 'metadata',
    });

    const pageData = data.guide_All.items[0];

    return {
      title: pageData.title,
      //TODO: add simmary
      description: `Guide: ${pageData.title}`,
    };
  } catch (error) {
    console.error('Error generating metadata for guide:', error);
    return {
      title: 'Guide',
      description: 'Guide',
    };
  }
};
