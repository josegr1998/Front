import Link from "next/link";
import { Typography } from "../../Typography/Typography";

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

type Props = {
  title: string;
  publishedDate: string;
  description: string;
  slug: string;
};

export const GuideCard = ({
  title,
  publishedDate,
  description,
  slug,
}: Props) => {
  return (
    <Link href={`/guide/${slug}`} className="group block">
      <article className="relative bg-[var(--card)] border border-[var(--border)] rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:border-[var(--primary)]/20 hover:-translate-y-1 h-full">
        {/* Card Header */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-3">
            <Typography variant="tag" asChild>
              <span> Guide</span>
            </Typography>
            <time className="text-xs text-[var(--muted-foreground)]">
              {formatDate(publishedDate)}
            </time>
          </div>

          <Typography
            variant="xl-bold"
            className="mb-2 group-hover:text-[var(--primary)] transition-colors overflow-hidden text-ellipsis whitespace-nowrap"
            asChild
          >
            <h3>{title}</h3>
          </Typography>
        </div>

        {/* Card Content */}
        <Typography
          variant="ag-regular"
          className="mb-6 overflow-hidden"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
          }}
          asChild
        >
          <p>{description}</p>
        </Typography>

        {/* Card Footer */}
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-[var(--success)] rounded-full"></div>
            <Typography variant="ag-small" asChild>
              <span>Available</span>
            </Typography>
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

        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[var(--primary)]/5 to-[var(--accent)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </article>
    </Link>
  );
};
