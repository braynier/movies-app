import { SortOption, SortProps } from "../types/sort";

const Sort = ({ sortOption, setSortOption }: SortProps) => {
  return (
    <select
      value={sortOption}
      onChange={(e) => setSortOption(e.target.value as SortOption)}
      className="max-w-[250px] rounded-xl bg-neutral-300 px-4 py-2 text-[14px] text-neutral-700/75 transition-all duration-300 hover:cursor-pointer hover:bg-neutral-300/70 dark:bg-gray-600/30 dark:text-neutral-300 dark:hover:bg-gray-600"
    >
      <option className="dark:bg-main-dark bg-neutral-200 text-[14px]">
        No sort
      </option>
      <option className="dark:bg-main-dark bg-neutral-200 text-[14px]">
        Name ascending
      </option>
      <option className="dark:bg-main-dark bg-neutral-200 text-[14px]">
        Name descending
      </option>
      <option className="dark:bg-main-dark bg-neutral-200 text-[14px]">
        Premiered ascending
      </option>
      <option className="dark:bg-main-dark bg-neutral-200 text-[14px]">
        Premiered descending
      </option>
    </select>
  );
};

export default Sort;
