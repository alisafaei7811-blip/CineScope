import { ReactNode } from "react";

export type children = {
  children: ReactNode;
};

export type Show = {
  id: number;
  name: string;
  image: {
    medium: string;
    original: string;
  } | null;
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
  image: {
    medium: string;
    original: string;
  } | null;
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
  favorites: number[];
  addFavorite: (id: number) => void;
};

export type Action =
  | { type: "add"; id: number }
  | { type: "remove"; id: number };
