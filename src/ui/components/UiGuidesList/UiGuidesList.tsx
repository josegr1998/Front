import { UiGuidesListProps } from "./UiGuidesList.types";
import { GuideCard } from "./components/GuideCard";
import { GuideListHeader } from "./components/GuideListHeader";
import { NoCardsAvailable } from "./components/NoCardsAvailable";

export const UiGuidesList = ({ title, guides }: UiGuidesListProps) => {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <GuideListHeader title={title} />

      {/* Guides Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {guides.map((guide, index) => (
          <GuideCard key={index} {...guide} />
        ))}
      </div>

      {/* Empty State */}
      {guides.length === 0 && <NoCardsAvailable />}
    </section>
  );
};
