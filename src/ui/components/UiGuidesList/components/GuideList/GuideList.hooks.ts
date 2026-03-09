"use client";

import { useState, useMemo } from "react";
import { Guide } from "../../UiGuidesList.types";

type GuideListProps = {
  guides: Guide[];
  itemsPerPage: number;
};

type PaginationRange = {
  start: number;
  end: number;
};

const calculatePaginationRange = (
  currentPage: number,
  itemsPerPage: number
): PaginationRange => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  return {
    start: startIndex,
    end: startIndex + itemsPerPage,
  };
};

const generateVisiblePageNumbers = (totalPages: number): number[] => {
  // Create an array from 1 to totalPages
  return Array.from(
    { length: totalPages },
    (unusedElement, currentIndex) => currentIndex + 1
  );
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export const useGuideList = ({ guides, itemsPerPage }: GuideListProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(guides.length / itemsPerPage);

  const paginatedGuides = useMemo(() => {
    const { start, end } = calculatePaginationRange(currentPage, itemsPerPage);
    return guides.slice(start, end);
  }, [guides, currentPage, itemsPerPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    scrollToTop();
  };

  const visiblePages = useMemo(
    () => generateVisiblePageNumbers(totalPages),
    [totalPages]
  );

  return {
    paginatedGuides,
    totalPages,
    currentPage,
    visiblePages,
    handlePageChange,
  };
};
