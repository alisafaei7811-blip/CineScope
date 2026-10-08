"use client";
import { useSearchParams } from "next/navigation";
import MovieItem from "./components/cards/movieItem";
import useMovie from "./hook/useMovie";
import Category from "./components/filter/category";
import Search from "./components/filter/search";

export default function Home() {
  const searchParams = useSearchParams();

  const category = searchParams.get("category");
  const search = searchParams.get("search");

  const { data, isLoading, error } = useMovie(category, search);

  if (isLoading) return <p>loading</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <div className="w-[90%] m-auto">
      <Search></Search>
      <Category></Category>
      <div className=" m-auto grid grid-cols-6 gap-6 justify-around items-center">
        {data?.map((item) => (
          <MovieItem item={item} key={item.id}></MovieItem>
        ))}
      </div>
    </div>
  );
}
