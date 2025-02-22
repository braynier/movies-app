import { useState } from "react";

interface UsePaginationProps<T> {
  itemsPerPage: number;
  data: T[];
}

const usePagination = <T>({ itemsPerPage, data }: UsePaginationProps<T>) => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return {
    currentItems,
    currentPage,
    totalPages,
    handlePageChange,
  };
};

export default usePagination;
