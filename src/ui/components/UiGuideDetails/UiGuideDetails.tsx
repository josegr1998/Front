import { UiGuideDetailsProps } from "./UiGuideDetails.types";
import sanitizeHtml from "sanitize-html";
import styles from "./UiGuideDetails.module.css";

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
        <div className="mx-auto max-w-7xl px-6 py-12">
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
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex gap-12">
          {/* Main Content */}
          <div className="flex-1 max-w-4xl">
            <div className="space-y-12">
              {/* Chapters */}
              <div className="space-y-8">
                {chapters.map((chapter, index) => (
                  <div
                    key={index}
                    id={`chapter-${index + 1}`}
                    className="scroll-mt-20"
                  >
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--primary)] text-[var(--primary-foreground)] text-sm font-medium">
                          {index + 1}
                        </div>
                        <h2 className="text-2xl font-semibold text-[var(--foreground)]">
                          {chapter.chapterName}
                        </h2>
                      </div>
                      <h3 className="text-lg font-semibold text-[var(--foreground)]">
                        {chapter.chapterTitle}
                      </h3>
                      <div
                        className={styles.richText}
                        dangerouslySetInnerHTML={{
                          __html: sanitizeHtml(chapter.contentHtml),
                        }}
                      />
                    </div>
                  </div>
                ))}
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

          {/* Navigation Sidebar */}
          <div className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-20">
              <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-6">
                <h3 className="text-lg font-medium text-[var(--foreground)] mb-4">
                  Table of Contents
                </h3>
                <nav className="space-y-2">
                  {chapters.map((chapter, index) => (
                    <a
                      key={index}
                      href={`#chapter-${index + 1}`}
                      className="block text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors py-1 px-2 rounded hover:bg-[var(--background)]"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-medium text-[var(--primary)]">
                          {index + 1}
                        </span>
                        <span className="line-clamp-2">
                          {chapter.chapterName}
                        </span>
                      </div>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
