import { Movie } from "@/app/type/type";

export default async function Aboute({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const response = await fetch(`https://api.tvmaze.com/shows/${id}`, {
    cache: "force-cache",
  });

  if (!response.ok) {
    return <p className="p-10 text-white">Movie not found!</p>;
  }

  const movie: Movie = await response.json();

  const summary = movie.summary
    ? movie.summary.replace(/<[^>]*>/g, "")
    : "No summary available.";

  return (
    <div className="min-h-screen bg-zinc-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-5xl rounded-2xl bg-zinc-900 p-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="overflow-hidden rounded-xl bg-zinc-800">
            {movie.image ? (
              <img
                src={movie.image.original}
                alt={movie.name}
                className="h-[500px] w-full object-cover"
              />
            ) : (
              <div className="flex h-[500px] items-center justify-center">
                No image available
              </div>
            )}
          </div>

          <div className="flex flex-col justify-center space-y-5">
            <h1 className="text-4xl font-bold">{movie.name}</h1>

            <p className="text-zinc-400">
              {movie.genres.join(" • ") || "No genres"}
            </p>

            <p className="text-xl text-yellow-400">
              ⭐ {movie.rating.average ?? "No rating"}
            </p>

            <p className="leading-7 text-zinc-300">{summary}</p>

            <div className="space-y-2 text-sm text-zinc-400">
              <p>Language: {movie.language ?? "Unknown"}</p>
              <p>Status: {movie.status}</p>
              <p>Premiered: {movie.premiered ?? "Unknown"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
