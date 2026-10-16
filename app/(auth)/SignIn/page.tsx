"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaFilm, FaEye, FaEyeSlash } from "react-icons/fa";
import { z } from "zod";

export default function LoginPage() {
  const route = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const schema = z.object({
    email: z
      .string()
      .email("Invalid email")
      .endsWith("gmail.com", "Only Gmail is allowed"),
    password: z.string().min(8, "Password must be at least 8 characters"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  type FormData = z.infer<typeof schema>;

  const submit = (data: FormData) => {
    console.log(data);
    route.push("/");
  };
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#09090f] px-4 py-10 text-white">
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-red-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-purple-600/10 blur-[130px]" />

      <div className="relative grid w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-[#111119] shadow-2xl md:grid-cols-2">
        <section className="relative hidden min-h-[650px] flex-col justify-between overflow-hidden bg-gradient-to-br from-red-950 via-[#25111c] to-[#101018] p-10 md:flex">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(239,68,68,0.22),transparent_55%)]" />

          <Link href="/" className="relative flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-600 text-xl">
              <FaFilm />
            </span>
            <span className="text-2xl font-black tracking-tight">
              Cine<span className="text-red-500">Scope</span>
            </span>
          </Link>

          <div className="relative">
            <div className="mb-6 flex items-end gap-3">
              <div className="flex h-48 w-32 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-amber-900/80 via-red-950 to-black shadow-xl">
                <FaFilm className="text-4xl text-white/70" />
              </div>
              <div className="flex h-60 w-36 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-900 via-purple-950 to-black shadow-xl">
                <span className="text-5xl font-black text-white/70">C</span>
              </div>
              <div className="flex h-40 w-28 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-950 via-slate-900 to-black shadow-xl">
                <span className="text-4xl text-white/70">✦</span>
              </div>
            </div>

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-red-400">
              Your next story awaits
            </p>
            <h1 className="max-w-md text-4xl font-black leading-tight">
              Every movie has a story.
              <span className="text-red-500"> Find yours.</span>
            </h1>
            <p className="mt-4 max-w-sm leading-7 text-zinc-400">
              Discover amazing shows, explore new genres, and keep your favorite
              stories close.
            </p>
          </div>

          <p className="relative text-sm text-zinc-500">
            Your personal world of cinema.
          </p>
        </section>

        <section className="flex items-center justify-center px-6 py-10 sm:px-10 md:px-12">
          <div className="w-full max-w-md">
            <Link href="/" className="mb-10 flex items-center gap-2 md:hidden">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-600">
                <FaFilm />
              </span>
              <span className="text-xl font-black">
                Cine<span className="text-red-500">Scope</span>
              </span>
            </Link>

            <p className="mb-3 text-sm font-semibold text-red-400">
              WELCOME BACK
            </p>

            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
              Sign in
            </h2>

            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Pick up where your next cinematic adventure begins.
            </p>

            <form className="mt-8 space-y-5" onSubmit={handleSubmit(submit)}>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-zinc-300"
                >
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                  className="w-full rounded-xl border border-white/10 bg-[#191922] px-4 py-3.5 text-sm outline-none transition placeholder:text-zinc-600 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-400">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between gap-2">
                  <label
                    htmlFor="password"
                    className="text-sm font-medium text-zinc-300"
                  >
                    Password
                  </label>
                </div>

                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    required
                    className="w-full rounded-xl border border-white/10 bg-[#191922] px-4 py-3.5 pr-12 text-sm outline-none transition placeholder:text-zinc-600 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                    {...register("password")}
                  />
                  {errors.password && (
                    <p className="mt-1 text-sm text-red-400">
                      {errors.password.message}
                    </p>
                  )}
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 transition hover:text-white"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-red-600 py-3.5 font-bold transition hover:bg-red-500 active:scale-[0.99]"
              >
                Sign in to CineScope
              </button>
            </form>

            <div className="my-7 flex items-center gap-4">
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-xs text-zinc-500">YOUR CINEMA AWAITS</span>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            <p className="text-center text-sm text-zinc-400">
              New to CineScope?
              <Link
                href="/signUp"
                className="font-semibold text-red-400 transition hover:text-red-300"
              >
                Create account
              </Link>
            </p>

            <Link
              href="/"
              className="mt-8 block text-center text-sm text-zinc-500 transition hover:text-white"
            >
              ← Back to discover
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
