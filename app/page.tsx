"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";

import MovieItem from "./components/cards/movieItem";
import useMovie from "./hook/useMovie";
import Category from "./components/filter/category";
import Search from "./components/filter/search";
import SortBy from "./components/filter/sortBy";

function HomeContent() {
  const searchParams = useSearchParams();

  const category = searchParams.get("category") ?? "";
  const search = searchParams.get("search") ?? "";

  const [sort, setSort] = useState("default");

  const { data, isLoading, error } = useMovie(category, search, sort);

  if (isLoading) {
    return <p>loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div className="w-[90%] m-auto ">
      <Search />
      <Category />
      <SortBy sort={sort} setSort={setSort} />

      <div className="m-auto flex justify-around items-center gap-6 flex-wrap">
        {data?.map((item) => (
          <MovieItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<p>loading...</p>}>
      <HomeContent />
    </Suspense>
  );
}
