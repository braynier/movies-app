export interface StatusFilterProps {
  selectedStatus: string;
  setSelectedStatus: (status: string) => void;
}

export interface GenresFilterProps {
  genres: string[];
  selectedGenres: string[];
  setSelectedGenres: (genres: string[]) => void;
}
