"use client";
import { useQuery } from "@tanstack/react-query";
import Response from "../api/Response";

export default function useMovie(category: string, search: string) {
  const hook = useQuery({
    queryKey: ["shows", category, search],
    queryFn: () => Response({ category }, search),
  });
  return hook;
}
