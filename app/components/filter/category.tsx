import { useRouter } from "next/navigation";

export default function Category() {
  const route = useRouter();

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
    { label: "Science-Fiction", value: "Science-Fiction" },
    { label: "Thriller", value: "Thriller" },
    { label: "Western", value: "Western" },
  ];

  return (
    <div className=" m-auto my-5 w-[80%]">
      {category.map((item) => (
        <button
          key={item.value}
          onClick={() => {
            route.push(`/?category=${item.value}`);
          }}
          className="p-3 border-2 rounded-2xl "
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
