import { MovieItemProps } from "@/app/type/type";
import Link from "next/link";

export default function MovieItem({ item }: MovieItemProps) {
  return (
    <div className="flex h-full min-h-[160px] flex-col justify-between overflow-hidden rounded-xl bg-zinc-900 p-3 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl sm:p-4">
      <Link href={`/movies/aboute/${item.id}`} className="space-y-1 sm:space-y-2">
        <p className="text-base font-bold text-white sm:text-lg">
          {item.name.length >= 15 ? item.name.slice(0, 15) + "..." : item.name}
        </p>

        <p className="text-xs text-zinc-400 sm:text-sm">
          {item.genres.join(" • ")}
        </p>

        <p className="text-xs text-yellow-400 sm:text-sm">
          ⭐ {item.rating.average ?? "N/A"}
        </p>
      </Link>

      <button className="mt-3 w-full rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-zinc-200">
        Add to List
      </button>
    </div>
  );
}
