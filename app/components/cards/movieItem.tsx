import { MovieItemProps } from "@/app/type/type";
import Link from "next/link";

export default function MovieItem({ item }: MovieItemProps) {
  return (
    <div className="w-64 overflow-hidden rounded-xl bg-zinc-900 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl ">
      <div className="space-y-2 p-4 transition-all duration-300 ">
        <Link href={`/aboute/${item.id}`}>
          <p className="text-lg font-bold text-white">{item.name}</p>

          <p className="text-sm text-zinc-400">{item.genres.join(" • ")}</p>

          <p className="text-sm text-yellow-400">
            ⭐ {item.rating.average ?? "N/A"}
          </p>
        </Link>
        <button className="w-full rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-zinc-200">
          Add to List
        </button>
      </div>
    </div>
  );
}
