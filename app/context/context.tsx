"use client"
import { createContext } from "react";
import { children } from "../type/type";

export const UseContext = createContext(null);

export default function Context({ children }: children) {
  return <UseContext.Provider value="">{children}</UseContext.Provider>;
}
