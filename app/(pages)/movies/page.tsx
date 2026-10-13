"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import useMovie from "@/app/hook/useMovie";
import Category from "@/app/components/products/filter/category";
import SortBy from "@/app/components/products/filter/sortBy";
import MovieItem from "@/app/components/products/cards/movieItem";



function Products() {
  const searchParams = useSearchParams();

  const category = searchParams.get("category") ?? "";
  const search = searchParams.get("search") ?? "";

  const [sort, setSort] = useState("default");

  const { data, isLoading, error } = useMovie(category, search, sort);

  if (isLoading) {
    return <p className="text-center text-green-400 mt-10">loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-400 mt-10">{error.message}</p>;
  }

  return (
    <div className="w-[90%] m-auto ">
      <Category />
      <SortBy sort={sort} setSort={setSort} />
      <div className="m-auto flex justify-around items-center gap-6 flex-wrap">
        {data?.length === 0 ? (
          <p>Your video was not found</p>
        ) : (
          data?.map((item) => <MovieItem item={item} key={item.id} />)
        )}
      </div>
    </div>
  );
}

export default Products;
