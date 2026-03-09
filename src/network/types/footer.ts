import { Links } from "./common";

export type Footer = {
  __typename: string;
  copyright: string;
  title: string;
  links: Links;
};

export type FooterResponse = {
  footer: Footer;
};
