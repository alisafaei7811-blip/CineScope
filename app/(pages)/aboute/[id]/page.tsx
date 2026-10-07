
export default function Aboute({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <div className="min-h-screen bg-zinc-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-5xl rounded-2xl bg-zinc-900 p-8">
        <div className="grid gap-8 md:grid-cols-2">

          <div className="h-[500px] rounded-xl bg-zinc-800">{/* Image */}</div>

          <div className="flex flex-col justify-center space-y-5">

            <h1 className="text-4xl font-bold"></h1>

            <p className="text-zinc-400">Drama • Action • Thriller</p>

            <p className="text-yellow-400 text-xl">⭐ 8.5</p>

            <p className="leading-7 text-zinc-300">
              Movie summary goes here...
            </p>

            <div className="space-y-2 text-sm text-zinc-400">
              <p>Language: English</p>
              <p>Status: Running</p>
              <p>Premiered: 2014-01-01</p>
            </div>

            <button className="w-fit rounded-lg bg-white px-6 py-3 font-semibold text-black">
              watch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
