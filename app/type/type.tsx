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
