"use client";

import { UiGuideDetailsProps } from "./UiGuideDetails.types";
import { RichText } from "@/ui/components/RichText/RichText";
import { GuideDetailsHeader } from "./components/GuideDetailsHeader/GuideDetailsHeader";

export const UiGuideDetails_V2 = ({
  title,
  description,
  publishedDate,
  chapters,
  labels,
}: UiGuideDetailsProps) => {
  const scrollToChapter = (index: number) => {
    const element = document.getElementById(`chapter-${index}`);
    if (element) {
      const elementPosition = element.offsetTop;
      const offset = 70;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Hero Section */}
      <GuideDetailsHeader
        title={title}
        description={description}
        publishedDate={publishedDate}
        publishedDateLabel={labels.publishedDateLabel}
      />

      {/* Content Grid */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {chapters.map((chapter, index) => (
              <article
                key={index}
                id={`chapter-${index}`}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                      {index + 1}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        {chapter.chapterTitle}
                      </h2>
                      {chapter.chapterName && (
                        <div className="text-gray-600 leading-relaxed">
                          <RichText contentHtml={chapter.chapterName} />
                        </div>
                      )}
                    </div>
                  </div>

                  {chapter.contentHtml && (
                    <div className="prose prose-lg max-w-none">
                      <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-indigo-500">
                        <RichText contentHtml={chapter.contentHtml} />
                      </div>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <svg
                    className="w-6 h-6 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                  {labels.tableOfContentsLabel}
                </h3>

                <nav className="space-y-2">
                  {chapters.map((chapter, index) => (
                    <button
                      key={index}
                      onClick={() => scrollToChapter(index)}
                      className="block w-full text-left p-3 rounded-lg hover:bg-indigo-50 hover:text-indigo-700 transition-colors duration-200 group"
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-gray-200 group-hover:bg-indigo-200 rounded-full flex items-center justify-center text-xs font-medium text-gray-600 group-hover:text-indigo-700 transition-colors duration-200">
                          {index + 1}
                        </span>
                        <span className="font-medium text-gray-700 group-hover:text-indigo-700 transition-colors duration-200">
                          {chapter.chapterTitle}
                        </span>
                      </div>
                    </button>
                  ))}
                </nav>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Total Chapters</span>
                    <span className="font-semibold text-indigo-600">
                      {chapters.length}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
