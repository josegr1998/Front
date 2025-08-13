import React from "react";
import { Typography } from "../../Typography/Typography";

type Props = {
  title: string;
  description: string;
  publishedDate: string;
  publishedDateLabel: string;
};

export const GuideDetailsHeader = ({
  title,
  description,
  publishedDate,
  publishedDateLabel,
}: Props) => {
  return (
    <div className="border-b border-[var(--border)] bg-[var(--card)]">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="space-y-4">
          <Typography variant="4xl-bold" asChild>
            <h1>{title}</h1>
          </Typography>
          <Typography variant="lg-regular" asChild>
            <p>{description}</p>
          </Typography>
          <div className="flex items-center gap-2 text-sm text-[var(--muted-foreground)]">
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <Typography variant="ag-small" asChild>
              <span>
                {publishedDateLabel}{" "}
                {new Date(publishedDate).toLocaleDateString()}
              </span>
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};
