import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

/**
 * 페이지 네이션에 표시할 페이지 번호 목록을 생성합니다.
 * 페이지 수가 많으면 앞뒤로 일부만 표시하고 중간에 생략(...)을 넣습니다.
 */
const generatePages = (
  current: number,
  total: number
): Array<number | "ellipsis"> => {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const pages: Array<number | "ellipsis"> = [];
  if (current <= 4) {
    // 초반 페이지일 때
    pages.push(1, 2, 3, 4, 5, "ellipsis", total);
  } else if (current >= total - 3) {
    // 후반 페이지일 때
    pages.push(
      1,
      "ellipsis",
      total - 4,
      total - 3,
      total - 2,
      total - 1,
      total
    );
  } else {
    // 중간 페이지일 때
    pages.push(
      1,
      "ellipsis",
      current - 1,
      current,
      current + 1,
      "ellipsis",
      total
    );
  }
  return pages;
};

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pages = generatePages(currentPage, totalPages);

  const handlePageClick = (page: number | "ellipsis") => {
    if (typeof page === "number" && page !== currentPage) {
      onPageChange(page);
    }
  };

  return (
    <div className="flex items-center justify-center gap-2 mt-4">
      <Button
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        variant="outline"
        size="sm"
        disabled={currentPage === 1}
      >
        <ChevronLeft className="w-4 h-4" />
      </Button>
      {pages.map((page, index) => {
        if (page === "ellipsis") {
          return (
            <span key={`ellipsis-${index}`} className="px-2 select-none">
              ...
            </span>
          );
        }
        return (
          <Button
            key={page}
            onClick={() => handlePageClick(page)}
            variant={page === currentPage ? "default" : "outline"}
            size="sm"
          >
            {page}
          </Button>
        );
      })}
      <Button
        onClick={() =>
          currentPage < totalPages && onPageChange(currentPage + 1)
        }
        variant="outline"
        size="sm"
        disabled={currentPage === totalPages}
      >
        <ChevronRight className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default Pagination;
