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
  const nameCategory = searchParams.get("category");

  return (
    <div className="flex  my-5  justify-around items-center flex-wrap ">
      {category.map((item) => (
        <div key={item.value} className="">
          <button
            onClick={() => {
              route.push(`/?category=${item.value}`);
            }}
            className={`p-3 w-[100px] border-2 rounded-2xl transition-all duration-300 ${
              nameCategory === item.value
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            {item.label}
          </button>
        </div>
      ))}
    </div>
  );
}
