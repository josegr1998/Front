import { ComponentType } from "@/network/types/common";

type Guide = {
  title: string;
  publishedDate: string;
  description: string;
  slug: string;
};

export type UiGuidesListProps = {
  title: string;
  guides: Guide[];
  __typename: ComponentType;
};
