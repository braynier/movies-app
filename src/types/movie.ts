export interface Movie {
  id: number;
  name: string;
  image: {
    medium: string;
    original: string;
  };
  language: string;
  summary: string;
  rating: {
    average: number;
  };
  genres: string[];
  status: string;
  runtime: number;
  premiered: string;
  ended: string;
  officialSite: string;
  schedule: {
    time: string;
    days: string[];
  };
  network: {
    id: number;
    name: string;
    country: {
      name: string;
      code: string;
      timezone: string;
    };
    officialSite: string;
  };
  webChannel: null | {
    id: number;
    name: string;
    country: {
      name: string;
      code: string;
      timezone: string;
    };
    officialSite: string;
  };
  externals: {
    tvrage: number;
    thetvdb: number;
    imdb: string;
  };
  _links: {
    self: {
      href: string;
    };
    previousepisode: {
      href: string;
      name: string;
    };
  };
}

export interface MovieState {
  movies: Movie[];
  setMovies: (movies: Movie[]) => void;
}

export interface MovieItemProps {
  movie: Movie;
  summaryLength?: number;
}

export interface MoviesListProps {
  movies: Movie[];
  itemsPerPage?: number;
  enableSorting?: boolean;
  enableGenreFilter?: boolean;
  enableStatusFilter?: boolean;
}
