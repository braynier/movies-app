interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const getPageNumbers = () => {
    const pages = [];

    for (let i = 1; i <= Math.min(5, totalPages); i++) {
      pages.push(i);
    }

    if (totalPages > 5) {
      pages.push("...");
    }

    if (totalPages > 5) {
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="flex items-center justify-center gap-2 mt-4">
      {getPageNumbers().map((page, index) =>
        page === "..." ? (
          <span key={index} className="px-2 py-1">
            ...
          </span>
        ) : (
          <button
            key={index}
            onClick={() => onPageChange(page as number)}
            className={`px-3 py-1 rounded-lg ${
              currentPage === page
                ? "bg-blue-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {page}
          </button>
        )
      )}
    </div>
  );
};

export default Pagination;
