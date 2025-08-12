export type Footer = {
  __typename: string;
  copyright: string;
  title: string;
  links: {
    __typename: string;
    items: Array<{
      __typename: "Link";
      title: string;
      url: string;
    }>;
  };
};

export type FooterResponse = {
  footer: Footer;
};
