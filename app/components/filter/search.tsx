"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Search() {
  const route = useRouter();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(
    searchParams.get("search") || ""
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());

      if (search) {
        params.set("search", search);
      } else {
        params.delete("search");
      }

      route.replace(`/?${params.toString()}`);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  return (
    <div className="flex justify-center my-5">
      <input
        type="text"
        placeholder="Search movies..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className=" border-2 py-3 px-8 rounded-2xl "
      />
    </div>
  );
}