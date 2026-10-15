import { ReactNode, Dispatch } from "react";
export type children = {
  children: ReactNode;
};

export type Show = {
  id: number;
  name: string;
  genres: string[];
  rating: {
    average: number | null;
  };
  summary: string | null;
  premiered: string | null;
  status: string;
  language: string | null;
};

export type MovieItemProps = {
  item: Show;
};

export type Movie = {
  id: number;
  name: string;
  genres: string[];
  rating: {
    average: number | null;
  };
  summary: string | null;
  language: string | null;
  status: string;
  premiered: string | null;
};

export type ContextType = {
  state: Movie[];
  dispatch: Dispatch<Action>;
};

export type Action =
  | { type: "add"; payload: Movie }
  | { type: "remove"; payload: number }
  | { type: "load"; payload: Movie[] };
