interface Movie {
  poster_path: string | null;
  backdrop_path: string;
  overview: string;
  release_date: string;
  id: string;
  title: string;
  vote_average: number;
}

interface Serie {
  poster_path: string | null;
  backdrop_path: string;
  overview: string;
  first_air_date: string;
  id: string;
  name: string;
  vote_average: number;
}

enum MediaType {
  Movie,
  Serie,
}

export type { Movie, Serie };
export { MediaType };
