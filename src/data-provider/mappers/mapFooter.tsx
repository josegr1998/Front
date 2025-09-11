import { Footer } from '@/network/types/footer';
import { UiFooterProps } from '@/ui/components/UiFooter/UiFooter.types';

export const mapFooter = (footer: Footer): UiFooterProps => {
  return {
    copyright: footer.copyright,
    title: footer.title,
    links: footer.links.items,
  };
};
