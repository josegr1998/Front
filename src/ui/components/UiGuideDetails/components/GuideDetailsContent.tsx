import React from "react";

import { UiGuideDetailsProps } from "../UiGuideDetails.types";
import { GuideDetailsChapter } from "./GuideDetailsChapter";

type Props = {
  chapters: UiGuideDetailsProps["chapters"];
};

export const GuideDetailsContent = ({ chapters }: Props) => {
  return (
    <div className="flex-1 max-w-4xl">
      <div className="space-y-12">
        <div className="space-y-8">
          {chapters.map((chapter, index) => (
            <GuideDetailsChapter key={index} chapter={chapter} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
