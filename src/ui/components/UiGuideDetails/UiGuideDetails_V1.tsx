import { UiGuideDetailsProps } from './UiGuideDetails.types';
import { GuideDetailsHeader } from './components/GuideDetailsHeader/GuideDetailsHeader';
import { GuideDetailsContent } from './components/GuideDetailsContent/GuideDetailsContent';
import { GuideDetailSidebar } from './components/GuideDetailsSidebar/GuideDetailSidebar';

export const UiGuideDetails_V1 = ({
  title,
  description,
  publishedDate,
  chapters,
  labels,
}: UiGuideDetailsProps) => {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <GuideDetailsHeader
        title={title}
        description={description}
        publishedDate={publishedDate}
        publishedDateLabel={labels.publishedDateLabel}
      />

      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex gap-12">
          <GuideDetailsContent chapters={chapters} />

          <GuideDetailSidebar
            chapters={chapters}
            tableOfContentsLabel={labels.tableOfContentsLabel}
          />
        </div>
      </div>
    </div>
  );
};
