"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function Category() {
  const route = useRouter();
  const searchParams = useSearchParams();
  const category = [
    { label: "All", value: "" },
    { label: "Action", value: "Action" },
    { label: "Adventure", value: "Adventure" },
    { label: "Animation", value: "Animation" },
    { label: "Comedy", value: "Comedy" },
    { label: "Crime", value: "Crime" },
    { label: "Drama", value: "Drama" },
    { label: "Family", value: "Family" },
    { label: "Fantasy", value: "Fantasy" },
    { label: "Horror", value: "Horror" },
    { label: "Mystery", value: "Mystery" },
    { label: "Romance", value: "Romance" },
    { label: "Thriller", value: "Thriller" },
    { label: "Western", value: "Western" },
  ];
  const nameCategory = searchParams.get("category") ?? "";

  return (
    <div className="my-5 flex gap-2 overflow-x-auto pb-2 md:flex-wrap md:justify-center md:overflow-visible">
      {category.map((item) => (
        <button
          key={item.value}
          onClick={() => {
            route.push(`/movies?category=${item.value}`);
          }}
          className={`shrink-0 rounded-2xl border-2 px-4 py-2 text-sm transition-all duration-300 md:px-5 md:py-3 md:text-base ${
            nameCategory === item.value
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}