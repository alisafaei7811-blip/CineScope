"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Search() {
  const route = useRouter();
  const searchParams = useSearchParams();

  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const params = new URLSearchParams(searchParams.toString());
    params.set("search", input);

    route.push(`/?${params.toString()}`);
  };
  return (
    <div className="flex justify-center my-5">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search movies..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className=" border-2 py-3 px-8 rounded-2xl "
        />
        <button type="submit" className="m-5 p-3 border-2 rounded-2xl">Search</button>
      </form>
    </div>
  );
}
