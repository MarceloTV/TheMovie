import { IAction } from "../interfaces/Contexts";
import { Movie, Serie } from "../interfaces/Media";
import { ApiResponse, CategoryResponse } from "../interfaces/Response";

const MovieDispatches = {
  getTrending: (dispatch: (value: IAction<Movie>) => void) => {
    fetch("/api/get_trending/movie")
      .then((data) => data.json())
      .then(({ movies }: { movies: Movie[] }) => {
        dispatch({
          type: "TRENDING",
          trending: [movies[0], movies[1], movies[2]],
        });
      });
  },

  getCategories: (dispatch: (value: IAction<Movie>) => void) => {
    fetch("/api/get_categories/movie")
      .then((data) => data.json())
      .then((data: CategoryResponse) => {
        dispatch({ type: "CATEGORIES", categories: data.genres });
      });
  },

  getAll: (dispatch: (value: IAction<Movie>) => void) => {
    fetch("/api/get_all/movie")
      .then((data) => data.json())
      .then((data: { movies: ApiResponse<Movie> }) => {
        console.log(data);
        dispatch({ type: "ALL", all: data.movies.results });
      });
  },
};

const SerieDispatches = {
  getTrending: (dispatch: (value: IAction<Serie>) => void) => {
    fetch("/api/get_trending/serie")
      .then((data) => data.json())
      .then(({ series }: { series: Serie[] }) => {
        dispatch({
          type: "TRENDING",
          trending: [series[0], series[1], series[2]],
        });
      });
  },

  getCategories: (dispatch: (value: IAction<Serie>) => void) => {
    fetch("/api/get_categories/serie")
      .then((data) => data.json())
      .then((data: CategoryResponse) => {
        dispatch({ type: "CATEGORIES", categories: data.genres });
      });
  },

  getAll: (dispatch: (value: IAction<Serie>) => void) => {
    fetch("/api/get_all/serie")
      .then((data) => data.json())
      .then((data: { series: ApiResponse<Serie> }) => {
        console.log(data);
        dispatch({ type: "ALL", all: data.series.results });
      });
  },
};

export { MovieDispatches, SerieDispatches };
