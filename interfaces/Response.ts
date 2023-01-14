import { Movie, Serie } from "./Media";

interface TrendingMovieResponse {
  page: number;
  total_pages: number;
  results: Movie[];
}

interface TrendingSerieResponse {
  page: number;
  total_pages: number;
  results: Serie[];
}

interface Category {
  id: number;
  name: string;
}

interface CategoryResponse {
  genres: Category[];
}

export type {
  TrendingMovieResponse,
  TrendingSerieResponse,
  CategoryResponse,
  Category,
};
