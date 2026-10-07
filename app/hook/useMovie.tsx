"use client"
import { useQuery } from "@tanstack/react-query";
import Response from "../api/Response";

export default function useMovie() {
  const hook = useQuery({
    queryKey: ["shows"],
    queryFn: () => Response(),
  });
  return hook
}
