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
    <div className="mt-16 px-4">
      <section className="flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-around sm:text-left">
        <p>
          <span className="text-2xl">Trending Shows</span> <br /> Discover
          popular series
        </p>
        <Link href="/movies" className="text-purple-700">
          View All
        </Link>
      </section>

      <section className="mx-auto mt-10 grid w-full max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {topShows?.map((show) => (
          <div
            key={show.id}
            className="overflow-hidden rounded-2xl bg-black transition-all duration-300"
          >
            <Link href={`/movies/aboute/${show.id}`}>
              <Image
                src={posters[show.name] ?? "/shows/default.jpg"}
                alt={show.name}
                width={200}
                height={280}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                draggable="false"
                className="h-72 w-full object-cover"
              />
            </Link>
            <h3 className="mt-4 pl-3 text-2xl">{show.name}</h3>
            <p className="pl-3">{show.genres.join(", ")}</p>
            <p className="pb-4 pl-3 pt-4">⭐ {show.rating.average ?? "N/A"}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
