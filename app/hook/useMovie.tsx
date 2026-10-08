"use client";
import { useQuery } from "@tanstack/react-query";
import Response from "../api/Response";

export default function useMovie(
  category: string,
  search: string,
  sort: string,
) {
  const hook = useQuery({
    queryKey: ["shows", category, search, sort],
    queryFn: () => Response({ category }, search, sort),
  });
  return hook;
}
