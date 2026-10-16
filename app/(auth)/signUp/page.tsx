"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaFilm, FaEye, FaEyeSlash } from "react-icons/fa";
import { z } from "zod";

export default function SignInPage() {
  const route = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  type FormData = z.infer<typeof schema>;
  const submit = (data: FormData) => {
    console.log(data);
    route.push("/");
  };
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

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#09090f] px-4 py-10 text-white">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-[#111119] shadow-2xl md:grid-cols-2">
        <section className="relative hidden flex-col justify-between overflow-hidden bg-gradient-to-br from-red-950 via-[#25111c] to-[#101018] p-10 md:flex">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-600 text-xl">
              <FaFilm />
            </span>
            <span className="text-2xl font-black">
              Cine<span className="text-red-500">Scope</span>
            </span>
          </Link>

          <div>
            <div className="mb-8 grid grid-cols-2 gap-4">
              <div className="flex h-52 items-end rounded-2xl border border-white/10 bg-gradient-to-t from-black via-red-950 to-orange-900/40 p-5">
                <p className="text-lg font-bold">Discover stories.</p>
              </div>
              <div className="mt-10 flex h-52 items-end rounded-2xl border border-white/10 bg-gradient-to-t from-black via-purple-950 to-indigo-900/50 p-5">
                <p className="text-lg font-bold">Find favorites.</p>
              </div>
            </div>

            <h1 className="text-4xl font-black leading-tight">
              Your next
              <span className="text-red-500"> favorite </span>
              movie is waiting.
            </h1>
            <p className="mt-4 leading-7 text-zinc-400">
              Sign in and explore a world full of unforgettable stories.
            </p>
          </div>

          <p className="text-sm text-zinc-500">Made for movie lovers.</p>
        </section>

        <section className="flex items-center justify-center px-6 py-10 sm:px-10 md:px-12">
          <div className="w-full max-w-md">
            <Link href="/" className="mb-9 flex items-center gap-2 md:hidden">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-600">
                <FaFilm />
              </span>
              <span className="text-xl font-black">
                Cine<span className="text-red-500">Scope</span>
              </span>
            </Link>

            <p className="mb-3 text-sm font-semibold tracking-widest text-red-400">
              WELCOME TO CINESCOPE
            </p>

            <h2 className="text-3xl font-black sm:text-4xl">Sign in</h2>

            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Enter your details to continue your movie journey.
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
                  placeholder="name@example.com"
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
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium text-zinc-300"
                >
                  Password
                </label>

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
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-red-600 py-3.5 font-bold transition hover:bg-red-500 active:scale-[0.99]"
              >
                Sign in
              </button>
            </form>

            <div className="my-6 flex items-center gap-4">
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-xs text-zinc-500">OR</span>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            <p className="mt-7 text-center text-sm text-zinc-400">
              Don&apos;t have an account?
              <Link
                href="/SignIn"
                className="font-semibold text-red-400 hover:text-red-300"
              >
                Sign up
              </Link>
            </p>

            <Link
              href="/"
              className="mt-7 block text-center text-sm text-zinc-500 transition hover:text-white"
            >
              ← Back to home
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
