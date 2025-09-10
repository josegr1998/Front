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
  console.log("I RUN --->", cache);
  console.log("I RUN --->", next);
  console.log("I RUN --->", query);

  const startTime = Date.now();

  // Add 2 second delay
  await new Promise(resolve => setTimeout(resolve, 2000));

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
