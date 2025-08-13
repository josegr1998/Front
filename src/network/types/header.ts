import { Links } from "./common";

export type Header = {
  __typename: string;
  title: string;
  links: Links;
};

export type HeaderResponse = {
  header: Header;
};
