import { UiGuidesListProps } from "./UiGuidesList.types";
import Link from "next/link";

export const UiGuidesList = ({ title, guides }: UiGuidesListProps) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">
          {title}
        </h2>
        <p className="text-[var(--muted-foreground)] text-lg max-w-2xl mx-auto">
          Explore our comprehensive guides to help you get started and master
          new skills
        </p>
      </div>

      {/* Guides Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {guides.map((guide, index) => (
          <Link
            key={guide.slug}
            href={`/guide/${guide.slug}`}
            className="group block"
          >
            <article className="relative bg-[var(--card)] border border-[var(--border)] rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:border-[var(--primary)]/20 hover:-translate-y-1 h-full">
              {/* Card Header */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[var(--primary)]/10 text-[var(--primary)]">
                    Guide
                  </span>
                  <time className="text-xs text-[var(--muted-foreground)]">
                    {formatDate(guide.publishedDate)}
                  </time>
                </div>

                <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2 group-hover:text-[var(--primary)] transition-colors overflow-hidden text-ellipsis whitespace-nowrap">
                  {guide.title}
                </h3>
              </div>

              {/* Card Content */}
              <p
                className="text-[var(--muted-foreground)] text-sm leading-relaxed mb-6 overflow-hidden"
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                }}
              >
                {guide.description}
              </p>

              {/* Card Footer */}
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[var(--success)] rounded-full"></div>
                  <span className="text-xs text-[var(--muted-foreground)]">
                    Available
                  </span>
                </div>

                <div className="inline-flex items-center text-sm font-medium text-[var(--primary)] group-hover:translate-x-1 transition-transform">
                  Read Guide
                  <svg
                    className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[var(--primary)]/5 to-[var(--accent)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </article>
          </Link>
        ))}
      </div>

      {/* Empty State */}
      {guides.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--muted)] flex items-center justify-center">
            <svg
              className="w-8 h-8 text-[var(--muted-foreground)]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-[var(--foreground)] mb-2">
            No guides available
          </h3>
          <p className="text-[var(--muted-foreground)]">
            Check back later for new guides and tutorials.
          </p>
        </div>
      )}
    </section>
  );
};
