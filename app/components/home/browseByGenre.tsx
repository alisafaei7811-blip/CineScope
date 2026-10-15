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
    <div className="mt-10 px-4">
      <h2 className="text-2xl font-bold text-white md:text-3xl">
        Browse by Genre
      </h2>

      <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5">
        {genres.map((genre) => (
          <Link key={genre.name} href={`/movies?category=${genre.value}`}>
            <div className="relative h-36 overflow-hidden rounded-xl bg-zinc-800 transition-all duration-300 sm:h-44 md:h-52">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${genre.image})` }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              <h3 className="absolute bottom-3 left-3 text-lg font-bold text-white md:bottom-5 md:left-5 md:text-xl">
                {genre.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
