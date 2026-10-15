"use client";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { ContextType, Movie } from "../type/type";
import ReducerFunction from "../hook/reducer";

export const UseContext = createContext<ContextType | null>(null);

export default function Context({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(ReducerFunction, [] as Movie[]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const getData = localStorage.getItem("favorites");

    if (getData) {
      dispatch({ type: "load", payload: JSON.parse(getData) });
    }

    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) {
      localStorage.setItem("favorites", JSON.stringify(state));
    }
  }, [state,loaded]);

  return (
    <UseContext.Provider value={{ state, dispatch }}>
      {children}
    </UseContext.Provider>
  );
}

export function useFav() {
  const ctx = useContext(UseContext);
  if (!ctx) throw new Error("useFav must be inside Context");
  return ctx;
}
