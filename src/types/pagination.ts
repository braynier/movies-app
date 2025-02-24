export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export interface UsePaginationProps<T> {
  itemsPerPage: number;
  data: T[];
}
