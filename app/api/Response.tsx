import axios from "axios";
import { Show } from "../type/type";

const request = axios.create({
  baseURL: "https://api.tvmaze.com",
});

export default async function Response({ category }) {
  const response = await request.get<Show[]>("/shows");
  if (category) {
    return response.data.filter((item) =>
      item.genres.includes(category)
    );
  }
  
  return response.data;

  return response.data;
}
