"use client";

import Link from "next/link";
import { FaGithub, FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-gray-950 text-gray-400">
      <div className="mx-auto w-[90%] py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <section className="max-w-sm">
            <Link href="/" className="text-2xl font-bold text-white">
              CineScope
            </Link>

            <p className="mt-3 text-sm leading-6">
              Discover your next favorite show. Explore genres, ratings and
              more.
            </p>
          </section>

          <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>

            <Link href="/movies" className="transition hover:text-white">
              Shows
            </Link>
            <Link href="/favorites" className="transition hover:text-white">
              favorites
            </Link>

            <Link href="/SignIn" className="transition hover:text-white">
              Sign in
            </Link>
          </nav>

          <a
            href="https://github.com/alisafaei7811-blip"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-fit text-xl transition hover:text-white"
          >
            <FaGithub />
          </a>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-5 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} CineScope. All rights reserved.</p>

          <p className="flex items-center gap-1">
            Made with <FaHeart className="text-red-500" /> for TV lovers
          </p>
        </div>
      </div>
    </footer>
  );
}
