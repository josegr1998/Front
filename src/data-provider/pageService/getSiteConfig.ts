import { HEADER_QUERY } from "@/graphql/queries/header";
import { FOOTER_QUERY } from "@/graphql/queries/footer";
import { client } from "@/network/apollo-server";
import { HeaderResponse } from "@/network/types/header";
import { FooterResponse } from "@/network/types/footer";
import { mapHeader } from "../mappers/mapHeader";
import { mapFooter } from "../mappers/mapFooter";
import { UiFooterProps } from "@/ui/components/UiFooter/UiFooter.types";
import { UiHeaderProps } from "@/ui/components/UiHeader/UiHeader.types";

type SiteConfig = {
  header: UiHeaderProps;
  footer: UiFooterProps;
};

export const getSiteConfig = async (): Promise<SiteConfig> => {
  const { data: headerData } = await client.query<HeaderResponse>({
    query: HEADER_QUERY,
  });

  const { data: footerData } = await client.query<FooterResponse>({
    query: FOOTER_QUERY,
  });

  return {
    header: mapHeader(headerData.header),
    footer: mapFooter(footerData.footer),
  };
};
