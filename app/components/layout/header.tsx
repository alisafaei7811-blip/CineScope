"use client";

import Link from "next/link";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { TiDelete } from "react-icons/ti";
import { FaHeart, FaHome, FaUserCircle } from "react-icons/fa";
import { FaClapperboard } from "react-icons/fa6";
import Search from "../products/filter/search";

export default function Header() {
  const [nav, setNav] = useState(false);

  return (
    <div>
      <header className="flex items-center justify-around  px-4 py-5">
        <Link href="/" className="text-2xl font-bold">
          CineScope
        </Link>

        <section className="hidden md:block">
          <Search />
        </section>

        <nav className="hidden md:flex items-center gap-5 text-xl">
          <Link href="/" aria-label="Home" title="Home">
            <FaHome />
          </Link>
          <Link href="/movies" aria-label="Movies" title="Movies">
            <FaClapperboard />
          </Link>
          <Link href="/favorites" aria-label="Favorites" title="Favorites">
            <FaHeart />
          </Link>
          <Link href="/profile" aria-label="Profile" title="Profile">
            <FaUserCircle />
          </Link>
        </nav>

        <button className="md:hidden" onClick={() => setNav(!nav)}>
          <IoMenu size={30} />
        </button>
      </header>
      <div className="md:hidden border-t-2">
        <Search></Search>
      </div>

      {nav && (
        <nav className="fixed inset-0 z-50 h-dvh w-screen bg-black/75">
          <button
            className="flex w-full justify-end p-4"
            onClick={() => setNav(false)}
          >
            <TiDelete size={30} color="red" />
          </button>
          <div
            className="mt-10 flex flex-col items-center gap-10 text-3xl"
            onClick={() => setNav(false)}
          >
            <Link href="/">Home</Link>
            <Link href="/movies">Shows</Link>
            <Link href="/favorites">Favorites</Link>
            <Link href="/login">Login</Link>
          </div>
        </nav>
      )}
    </div>
  );
}
