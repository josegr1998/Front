import { DEFAULT_REVALIDATE_TIME, CACHE_OPTION } from '../consts';

export const getCacheOptions = ({ isPreview }: { isPreview: boolean }) => {
  const cacheOptions = isPreview
    ? {
        cache: CACHE_OPTION.DEFAULT,
      }
    : {
        cache: CACHE_OPTION.FORCE_CACHE,
        next: {
          revalidate: DEFAULT_REVALIDATE_TIME,
        },
      };

  return cacheOptions;
};

export const createUrl = ({ isPreview }: { isPreview: boolean }) => {
  const url = isPreview
    ? `https://preview-graphql.kontent.ai/${process.env.KONTENT_PROJECT_ID}`
    : `https://graphql.kontent.ai/${process.env.KONTENT_PROJECT_ID}`;

  return url;
};
