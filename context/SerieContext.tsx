import { createContext, FC, ReactNode, useReducer } from "react";
import { IAction, IContextValue, IDispatches } from "../interfaces/Contexts";
import { Movie, Serie } from "../interfaces/Media";
import { SerieDispatches } from "./Dispatches";

const initialValue: IContextValue<Serie> = {
  trending: [],
  all: [],
  categories: [],
};

const SerieContext = createContext<IContextValue<Serie> & IDispatches>({
  ...initialValue,
  getTrending() {},
  getCategories() {},
  getAll() {},
});

const SerieProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [value, dispatch] = useReducer(
    (state: IContextValue<Serie>, action: IAction<Serie>) => {
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
    <SerieContext.Provider
      value={{
        ...value,
        getTrending: () => SerieDispatches.getTrending(dispatch),
        getCategories: () => SerieDispatches.getCategories(dispatch),
        getAll: () => SerieDispatches.getAll(dispatch),
      }}
    >
      {children}
    </SerieContext.Provider>
  );
};

export { SerieContext, SerieProvider };
