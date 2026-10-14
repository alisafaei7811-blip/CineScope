"use client";
import useMovie from "@/app/hook/useMovie";
import Image from "next/image";
import Link from "next/link";

export default function TrendingShows() {
  const { data, isLoading, error } = useMovie("", "", "");
  if (isLoading) {
    return <p className="text-center text-green-400 mt-10">loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-400 mt-10">{error.message}</p>;
  }
  const posters: Record<string, string> = {
    "Breaking Bad": "/top 3 movie/breaking-bad.jpg",
    Firefly: "/top 3 movie/firefly.jpg",
    "Game of Thrones": "/top 3 movie/game-of-thrones.jpg",
  };

  const topShows = data
    ?.slice()
    .sort((a, b) => (b.rating.average ?? 0) - (a.rating.average ?? 0))
    .slice(0, 3);
  return (
    <div className="mt-25">
      <section className="flex justify-around items-center ">
        <Link href="/movies" className="text-purple-700">
          View All
        </Link>
        <p>
          <span className="text-2xl">Trending Shows</span> <br /> Discover
          popular series
        </p>
      </section>
      <section className="flex w-[80%] m-auto justify-evenly items-center mt-10">
        {topShows?.map((show) => (
          <div
            key={show.id}
            className="hover:scale-110 transition-all duration-300"
          >
            <Link href={`/movies/aboute/${show.id}`}>
              <Image
                src={posters[show.name] ?? "/shows/default.jpg"}
                alt={show.name}
                width={200}
                draggable="false"
                height={280}
                className="rounded-xl object-cover"
              />
            </Link>
            <h3>{show.name}</h3>
            <p>{show.genres.join(", ")}</p>
            <p>⭐ {show.rating.average ?? "N/A"}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
