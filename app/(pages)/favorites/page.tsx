"use client";

import { useFav } from "@/app/context/context";
import Link from "next/link";

export default function Favorites() {
  const { state, dispatch } = useFav();

  return (
    <main className="min-h-screen bg-zinc-950 px-4 py-8 text-white sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <p className="mb-2 text-sm font-medium text-purple-400">
            YOUR COLLECTION
          </p>

          <h1 className="text-3xl font-bold sm:text-4xl">My Favorites</h1>

          <p className="mt-3 text-sm text-zinc-400 sm:text-base">
            Your favorite shows in one place.
          </p>
        </div>

        <div className="mb-6 flex items-center justify-between border-b border-zinc-800 pb-4">
          <h2 className="text-lg font-semibold">Saved Shows</h2>

          <span className="rounded-full bg-zinc-800 px-3 py-1 text-sm text-zinc-300">
            {state.length} shows
          </span>
        </div>

        {state.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-zinc-700 px-5 py-16 text-center sm:py-24">
            <div className="mb-4 text-5xl">♡</div>

            <h2 className="text-xl font-semibold">Your list is empty</h2>

            <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-zinc-400">
              Discover shows and add your favorites to your personal list.
            </p>

            <Link
              href="/movies"
              className="mt-6 inline-flex rounded-lg bg-purple-600 px-5 py-3 text-sm font-semibold transition hover:bg-purple-500"
            >
              Explore Shows
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {state.map((item) => (
              <article
                key={item.id}
                className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 transition hover:-translate-y-1 hover:border-purple-500/50"
              >
                

                <div className="p-4">
                  <Link href={`/movies/aboute/${item.id}`}>
                    <h3 className="truncate text-lg font-bold">{item.name}</h3>
                  </Link>

                  <p className="mt-2 line-clamp-2 min-h-10 text-sm text-zinc-400">
                    {item.genres?.join(" • ") || "No genres"}
                  </p>

                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-sm text-yellow-400">
                      ★ {item.rating.average ?? "N/A"}
                    </span>

                    <button
                      onClick={() =>
                        dispatch({
                          type: "remove",
                          payload: item.id,
                        })
                      }
                      className="rounded-lg border border-red-500/30 px-3 py-2 text-sm text-red-400 transition hover:bg-red-500/10"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
