"use client";
import { createContext, useContext, useReducer } from "react";
import { ContextType } from "../type/type";
import ReducerFunction from "../hook/reducer";

export const UseContext = createContext<ContextType | null>(null);

export default function Context({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(ReducerFunction
    , []);
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
