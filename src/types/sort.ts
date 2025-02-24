export type SortOption =
  | "no-sort"
  | "name-asc"
  | "name-desc"
  | "premiered-asc"
  | "premiered-desc";

export interface SortProps {
  sortOption: SortOption;
  setSortOption: (option: SortOption) => void;
}
