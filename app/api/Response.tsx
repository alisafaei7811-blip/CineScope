import axios from "axios";
import { Show } from "../type/type";

const request = axios.create({
  baseURL: "https://api.tvmaze.com",
});

export default async function Response() {
  let url = "shows";

  const response = await request.get<Show[]>(url);
  return response.data;
}
