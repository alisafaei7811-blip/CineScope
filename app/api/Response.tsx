import axios from "axios";
import { Show } from "../type/type";

const request = axios.create({
  baseURL: "https://api.tvmaze.com",
});

export default async function Response(
  { category }: { category: string | null },
  search: string,
  sort: string,
) {
  const response = await request.get<Show[]>("/shows");

  let result = response.data;

  if (category && category !== "all") {
    result = result.filter((item) => item.genres.includes(category));
  }
  if (search) {
    result = result.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase()),
    );
  }

  if (sort === "rating-high") {
    result.sort((a, b) => (b.rating.average ?? 0) - (a.rating.average ?? 0));
  }
  if (sort === "rating-low") {
    result.sort((a, b) => (a.rating.average ?? 0) - (b.rating.average ?? 0));
  }
  if (sort === "name-a-z") {
    result.sort((a, b) => a.name.localeCompare(b.name));
  }
  if (sort === "name-z-a") {
    result.sort((a, b) => b.name.localeCompare(a.name));
  }

  return result;
}
