import { Movie, Serie } from "./Media";
import { Category } from "./Response";

type Trending<T> = [T, T, T] | [];

interface IContextValue<T> {
  trending: Trending<T>;
  categories: Category[];
  all: T[];
}

interface IAction<T> {
  type: "ALL" | "TRENDING" | "CATEGORIES";
  trending?: Trending<T>;
  all?: T[];
  categories?: Category[];
}

interface IDispatches {
  getTrending(): void;
  getAll(): void;
  getCategories(): void;
}

interface ISerieContextValue {
  trending: Trending<Serie>;
  categories: Category[];
  all: Serie[];
}

export type {
  IContextValue,
  ISerieContextValue,
  IDispatches,
  IAction,
  Trending,
};
