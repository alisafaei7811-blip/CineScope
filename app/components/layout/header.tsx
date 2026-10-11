"use client";

import Link from "next/link";
import { FaHeart, FaHome, FaUserCircle } from "react-icons/fa";
import Search from "../products/filter/search";
import { FaClapperboard } from "react-icons/fa6";


export default function Header() {
  return (
    <header className="flex items-center justify-between gap-6 px-6 w-[90%] m-auto py-4">
      <section>
        <Link href="/" className="text-2xl font-bold">
          CineScope
        </Link>
      </section>

      <section>
        <Search />
      </section>

      <section className="flex items-center gap-5 text-xl">
        <Link href="/" aria-label="Home" title="Home">
          <FaHome />
        </Link >
        <Link href="/products"><FaClapperboard></FaClapperboard>
        </Link>

        <Link href="/favorites" aria-label="Favorites" title="Favorites">
          <FaHeart />
        </Link>

        <Link href="/profile" aria-label="Profile" title="Profile">
          <FaUserCircle />
        </Link>
      </section>
    </header>
  );
}
