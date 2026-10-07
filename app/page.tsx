"use client"
import MovieItem from "./components/cards/movieItem";
import useMovie from "./hook/useMovie";

export default function Home() {

  const { data, isLoading, error } = useMovie();

  if (isLoading) return <p>loading</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <div className="w-[90%] m-auto grid grid-cols-6 gap-6">
      {data?.map((item) => (
        <MovieItem item={item} key={item.id}></MovieItem>
      ))}
    </div>
  );
}
