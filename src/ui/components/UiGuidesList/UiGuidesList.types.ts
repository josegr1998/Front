import { ComponentType } from "@/network/types/common";

export type Guide = {
  title: string;
  publishedDate: string;
  description: string;
  slug: string;
};

export type UiGuidesListProps = {
  title: string;
  guides: Guide[];
  itemsPerPage: number;
  __typename: ComponentType;
};
