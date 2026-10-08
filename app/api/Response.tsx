import axios from "axios";
import { Show } from "../type/type";

const request = axios.create({
  baseURL: "https://api.tvmaze.com",
});

export default async function Response(
  { category }: { category: string | null },
  search: string,
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

  return result;
}
