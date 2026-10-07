"use client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { children } from "../type/type";

const query = new QueryClient();
export default function Query({ children }: children) {
  return <QueryClientProvider client={query}>{children}</QueryClientProvider>;
}
