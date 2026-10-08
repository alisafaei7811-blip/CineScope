"use client";
import { useQuery } from "@tanstack/react-query";
import Response from "../api/Response";

export default function useMovie(category: string) {
  const hook = useQuery({
    queryKey: ["shows", category],
    queryFn: () => Response({category}),
  });
  return hook;
}
