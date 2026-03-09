import React from "react";
import { UiGuideDetailsProps } from "../../UiGuideDetails.types";
import { RichText } from "@/ui/components/RichText/RichText";
import { Typography } from "@/ui/components/Typography/Typography";

type Props = {
  chapter: UiGuideDetailsProps["chapters"][number];
  index: number;
};

export const GuideDetailsChapter = ({ chapter, index }: Props) => {
  return (
    <div key={index} id={`chapter-${index + 1}`} className="scroll-mt-20">
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--primary)] text-[var(--primary-foreground)] text-sm font-medium">
            {index + 1}
          </div>
          <Typography variant="2xl-semi-bold" asChild>
            <h2>{chapter.chapterName}</h2>
          </Typography>
        </div>
        <Typography variant="2xl-bold" asChild>
          <h3>{chapter.chapterTitle}</h3>
        </Typography>
        <RichText contentHtml={chapter.contentHtml} />
      </div>
    </div>
  );
};
