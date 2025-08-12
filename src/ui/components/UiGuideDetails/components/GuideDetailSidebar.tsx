import React from "react";
import { UiGuideDetailsProps } from "../UiGuideDetails.types";
import { Typography } from "../../Typography/Typography";
import Link from "next/link";

type Props = {
  chapters: UiGuideDetailsProps["chapters"];
};

export const GuideDetailSidebar = ({ chapters }: Props) => {
  return (
    <div className="hidden lg:block w-64 shrink-0">
      <div className="sticky top-20">
        <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-6">
          <Typography variant="lg-bold" asChild>
            <h3 className="mb-4">Table of Contents</h3>
          </Typography>
          <nav className="space-y-2">
            {chapters.map((chapter, index) => (
              <Link
                key={index}
                href={`#chapter-${index + 1}`}
                className="block text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors py-1 px-2 rounded hover:bg-[var(--background)]"
              >
                <div className="flex items-center gap-2">
                  <Typography variant="ag-small" asChild>
                    <span>{index + 1}</span>
                  </Typography>
                  <Typography
                    variant="ag-regular"
                    asChild
                    className="line-clamp-2"
                  >
                    <span>{chapter.chapterName}</span>
                  </Typography>
                </div>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};
