import { UiGuideDetailsProps } from "./UiGuideDetails.types";

export const UiGuideDetails = ({
  title,
  description,
  publishedDate,
  chapters,
}: UiGuideDetailsProps) => {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Header Section */}
      <div className="border-b border-[var(--border)] bg-[var(--card)]">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight text-[var(--foreground)] md:text-5xl">
              {title}
            </h1>
            <p className="text-lg text-[var(--muted-foreground)] max-w-3xl">
              {description}
            </p>
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
              <span>
                Published {new Date(publishedDate).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="mx-auto max-w-4xl px-6 py-12">
        <div className="space-y-8">
          {/* Chapters */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-[var(--foreground)]">
              Chapters ({chapters.length})
            </h2>

            <div className="space-y-4">
              {chapters.map((chapter, index) => (
                <div
                  key={index}
                  className="group rounded-lg border border-[var(--border)] bg-[var(--card)] p-6 transition-all hover:shadow-md hover:border-[var(--primary)]/20"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--primary)] text-[var(--primary-foreground)] text-sm font-medium">
                      {index + 1}
                    </div>
                    <div className="flex-1 space-y-3">
                      <h3 className="text-lg font-medium text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
                        {chapter.chapterName}
                      </h3>
                      <div
                        className="prose prose-sm max-w-none text-[var(--muted-foreground)]"
                        dangerouslySetInnerHTML={{
                          __html: chapter.contentHtml,
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Summary Card */}
          <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium text-[var(--foreground)]">
                  Guide Summary
                </h3>
                <p className="text-sm text-[var(--muted-foreground)] mt-1">
                  {chapters.length} chapters • Complete guide
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-[var(--success)]"></div>
                <span className="text-sm font-medium text-[var(--success)]">
                  Available
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
