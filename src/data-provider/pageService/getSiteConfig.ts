import { HEADER_QUERY } from "@/graphql/queries/header";
import { FOOTER_QUERY } from "@/graphql/queries/footer";
import { mapHeader } from "../mappers/mapHeader";
import { mapFooter } from "../mappers/mapFooter";
import { UiFooterProps } from "@/ui/components/UiFooter/UiFooter.types";
import { UiHeaderProps } from "@/ui/components/UiHeader/UiHeader.types";

type SiteConfig = {
  header: UiHeaderProps;
  footer: UiFooterProps;
};

export const getSiteConfig = async (): Promise<SiteConfig> => {
  const headerResponse = await fetch(
    `https://preview-graphql.kontent.ai/${process.env.KONTENT_PROJECT_ID}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.KONTENT_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: HEADER_QUERY }),
    }
  );

  const { data: headerData } = await headerResponse.json();

  const footerResponse = await fetch(
    `https://preview-graphql.kontent.ai/${process.env.KONTENT_PROJECT_ID}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.KONTENT_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: FOOTER_QUERY }),
    }
  );

  const { data: footerData } = await footerResponse.json();

  return {
    header: mapHeader(headerData.header),
    footer: mapFooter(footerData.footer),
  };
};
