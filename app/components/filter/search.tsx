"use client";

import useMovie from "@/app/hook/useMovie";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Search() {
  const route = useRouter();
  const searchParams = useSearchParams();

  const category = searchParams.get("category");

  const [search, setSearch] = useState("");

  const { data } = useMovie(category, search);

  return (
    <div>
      <input
        type="text"
        placeholder="Search movies..."
        value={search}
        onChange={(e) => {
          const value = e.target.value;

          setSearch(value);

          const params = new URLSearchParams(searchParams.toString());

          if (value) {
            params.set("search", value);
          } else {
            params.delete("search");
          }

          route.push(`/?${params.toString()}`);
        }}
      />
    </div>
  );
}
