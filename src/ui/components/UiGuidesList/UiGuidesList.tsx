import { UiGuidesListProps } from "./UiGuidesList.types";
import { GuideList } from "./components/GuideList";
import { GuideListHeader } from "./components/GuideListHeader";
import { NoCardsAvailable } from "./components/NoCardsAvailable";

export const UiGuidesList = ({
  title,
  guides,
  itemsPerPage,
}: UiGuidesListProps) => {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <GuideListHeader title={title} />

      {/* Guides Grid */}
      <GuideList guides={guides} itemsPerPage={itemsPerPage} />

      {/* Empty State */}
      {guides.length === 0 && <NoCardsAvailable />}
    </section>
  );
};
