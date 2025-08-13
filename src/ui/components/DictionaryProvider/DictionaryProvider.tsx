"use client";

import { createContext, useContext } from "react";

type DictionaryContextType<T> = {
  getDictionaryText: (key: string) => string | undefined;
};

const DictionaryContext = createContext<DictionaryContextType<unknown> | null>(
  null
);

type Props<T> = {
  dictionary: T;
  children: React.ReactNode;
};

export const DictionaryProvider = <T,>({ dictionary, children }: Props<T>) => {
  const getDictionaryText = (key: string) => {
    if (Array.isArray(dictionary)) {
      return dictionary.find((item) => item.key === key)?.value;
    }
    return "";
  };

  return (
    <DictionaryContext.Provider value={{ getDictionaryText }}>
      {children}
    </DictionaryContext.Provider>
  );
};

export const useDictionaryContext = <T,>() => {
  const context = useContext(DictionaryContext);
  if (!context) throw new Error("Missing Dictionary context");

  return context.getDictionaryText as (key: T) => string;
};
