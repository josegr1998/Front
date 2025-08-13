import { CACHE_OPTION, DEFAULT_REVALIDATE_TIME } from "@/data-provider/consts";

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
  cache = CACHE_OPTION.NO_STORE,
  next = {
    revalidate: DEFAULT_REVALIDATE_TIME,
  },
  url,
}: Props): Promise<T> => {
  try {
    const response = await fetch(url, {
      method: "POST",
      cache,
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

    return data as T;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
