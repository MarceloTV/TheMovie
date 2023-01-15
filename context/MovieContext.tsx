import { createContext, FC, ReactNode, useReducer } from "react";
import { MovieDispatches } from "./Dispatches";

import { IAction, IDispatches, IContextValue } from "../interfaces/Contexts";
import { Movie } from "../interfaces/Media";

const initialValue: IContextValue<Movie> = {
  trending: [],
  all: [],
  categories: [],
};

// MOVIE CONTEXT
const MovieContext = createContext<IContextValue<Movie> & IDispatches>({
  ...initialValue,
  getTrending() {},
  getCategories() {},
  getAll() {},
});

const MovieProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [value, dispatch] = useReducer(
    (state: IContextValue<Movie>, action: IAction<Movie>) => {
      switch (action.type) {
        case "TRENDING":
          return {
            ...state,
            trending: action.trending || [],
          };

        case "CATEGORIES":
          return {
            ...state,
            categories: action.categories || [],
          };

        case "ALL":
          return {
            ...state,
            all: action.all || [],
          };

        default:
          return state;
      }
    },
    initialValue
  );

  return (
    <MovieContext.Provider
      value={{
        ...value,
        getTrending: () => MovieDispatches.getTrending(dispatch),
        getCategories: () => MovieDispatches.getCategories(dispatch),
        getAll: () => MovieDispatches.getAll(dispatch),
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export { MovieContext, MovieProvider };
