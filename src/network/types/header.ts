export type Header = {
  __typename: string;
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

export type HeaderResponse = {
  header: Header;
};
