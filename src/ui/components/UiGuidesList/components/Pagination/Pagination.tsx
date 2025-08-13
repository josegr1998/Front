import { Button } from "@/ui/components/Button/Button";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  visiblePages: number[];
  onPageChange: (page: number) => void;
}

export const Pagination = ({
  currentPage,
  totalPages,
  visiblePages,
  onPageChange,
}: PaginationProps) => {
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      {/* Previous button */}
      <Button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        variant="outline"
        size="default"
        className="w-10 h-10 p-0"
        aria-label="Previous page"
      >
        ←
      </Button>

      {/* Page numbers */}
      {visiblePages.map((page) => (
        <Button
          key={page}
          onClick={() => onPageChange(page)}
          variant={currentPage === page ? "default" : "outline"}
          size="default"
          className="w-10 h-10 p-0"
        >
          {page}
        </Button>
      ))}

      {/* Next button */}
      <Button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        variant="outline"
        size="default"
        className="w-10 h-10 p-0"
        aria-label="Next page"
      >
        →
      </Button>
    </div>
  );
};
