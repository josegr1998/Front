import { Header } from "@/network/types/header";

export const mapHeader = (header: Header) => {
  return {
    title: header.title,
    links: header.links.items,
  };
};
