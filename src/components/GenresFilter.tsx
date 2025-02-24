import { useRef, useState } from "react";
import useOutsideClick from "../hooks/useoutsideClick";

interface GenresFilterProps {
  genres: string[];
  selectedGenres: string[];
  setSelectedGenres: (genres: string[]) => void;
}

const GenresFilter = ({
  genres,
  selectedGenres,
  setSelectedGenres,
}: GenresFilterProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleGenreChange = (genre: string) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(selectedGenres.filter((g) => g !== genre));
    } else {
      setSelectedGenres([...selectedGenres, genre]);
    }
  };

  useOutsideClick(dropdownRef, () => setIsOpen(false));

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Genre filter label */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`relative flex items-center gap-2 rounded-xl bg-neutral-300 px-5 py-2 text-[14px] text-neutral-700/75 transition-all duration-300 hover:cursor-pointer hover:bg-neutral-300/70 dark:bg-gray-600/30 dark:text-neutral-300 dark:hover:bg-gray-600 ${
          selectedGenres.length > 0 ? "ring-3 ring-neutral-400/80" : ""
        }`}
      >
        Genres filter
        {selectedGenres.length > 0 && (
          <span className=""> ({selectedGenres.length})</span>
        )}
      </button>

      {/* Dropdown list div */}
      {isOpen && (
        <div className="bg-main-light dark:bg-main-dark absolute left-1/2 z-10 mt-5 w-48 -translate-x-1/2 rounded-lg border border-gray-200 shadow-lg">
          <div className="flex flex-col gap-2 p-2">
            {genres.map((genre) => (
              <label
                key={genre}
                className="flex items-center gap-2 rounded-lg text-[14px] text-neutral-700/75 dark:text-neutral-300"
              >
                <input
                  type="checkbox"
                  checked={selectedGenres.includes(genre)}
                  onChange={() => handleGenreChange(genre)}
                  className="form-checkbox"
                />
                <span>{genre}</span>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GenresFilter;
