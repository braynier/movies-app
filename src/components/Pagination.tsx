import { PaginationProps } from "../types/pagination";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    const halfMaxVisiblePages = Math.floor(maxVisiblePages / 2);

    pages.push(1);

    let startPage = Math.max(2, currentPage - halfMaxVisiblePages);
    let endPage = Math.min(totalPages - 1, currentPage + halfMaxVisiblePages);

    if (currentPage <= halfMaxVisiblePages) {
      endPage = Math.min(maxVisiblePages, totalPages - 1);
    } else if (currentPage >= totalPages - halfMaxVisiblePages) {
      startPage = Math.max(totalPages - maxVisiblePages + 1, 2);
    }

    if (startPage > 2) {
      pages.push("...");
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (endPage < totalPages - 1) {
      pages.push("...");
    }

    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="mt-4 flex items-center justify-center gap-2">
      {getPageNumbers().map((page, index) =>
        page === "..." ? (
          <span
            key={index}
            className="px-2 py-1 text-neutral-700/75 dark:text-neutral-300"
          >
            ...
          </span>
        ) : (
          <button
            key={index}
            onClick={() => onPageChange(page as number)}
            className={`rounded-lg px-3 py-1 hover:cursor-pointer ${
              currentPage === page
                ? "bg-green-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {page}
          </button>
        ),
      )}
    </div>
  );
};

export default Pagination;
