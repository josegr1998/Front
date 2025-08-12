type PropsV2 = {
  query: string;
};

export const getContentV2 = async <T>({ query }: PropsV2): Promise<T> => {
  const response = await fetch(
    `https://preview-graphql.kontent.ai/${process.env.KONTENT_PROJECT_ID}`,
    {
      method: "POST",
      cache: "no-store",
      headers: {
        Authorization: `Bearer ${process.env.KONTENT_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
      }),
    }
  );

  const { data } = await response.json();

  return data as T;
};
