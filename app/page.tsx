"use client";
import { useSearchParams } from "next/navigation";
import MovieItem from "./components/cards/movieItem";
import useMovie from "./hook/useMovie";
import Category from "./components/filter/category";

export default function Home() {
  const searchParams = useSearchParams();

  const category = searchParams.get("category");

  const { data, isLoading, error } = useMovie(category);

  if (isLoading) return <p>loading</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <div>
      <Category></Category>
      <div className="w-[60%] m-auto grid grid-cols-6 gap-6 justify-around items-center">
      {data?.map((item) => (
        <MovieItem item={item} key={item.id}></MovieItem>
      ))}
    </div>
    </div>
  );
}
