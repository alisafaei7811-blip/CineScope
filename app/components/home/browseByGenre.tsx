import Link from "next/link";

export default function BrowseByGenre() {
  const genres = [
    { name: "Action", value: "Action", image: "/genres/action.jpg" },
    { name: "Drama", value: "Drama", image: "/genres/drama.jpg" },
    { name: "Comedy", value: "Comedy", image: "/genres/comedy.jpg" },
    { name: "Family", value: "Family", image: "/genres/family.jpg" },
    { name: "Fantasy", value: "Fantasy", image: "/genres/fantasy.jpg" },
    { name: "Horror", value: "Horror", image: "/genres/horror.jpg" },
  ];

  return (
    <div className="px-6 py-16 w-[90%] m-auto">
      <h2 className="text-3xl font-bold text-white">Browse by Genre</h2>

      <div className="mt-8 grid grid-cols-2 gap-5 md:grid-cols-3">
        {genres.map((genre) => (
          <Link key={genre.name} href={`/movies?category=${genre.value}`}>
            <div
              key={genre.name}
              className="relative h-52 overflow-hidden rounded-xl bg-zinc-800 hover:scale-105 transition-all duration-300"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${genre.image})` }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              <h3 className="absolute bottom-5 left-5 text-xl font-bold text-white">
                {genre.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
