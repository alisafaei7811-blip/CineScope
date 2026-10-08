type SortByProps = {
  sort: string;
  setSort: (value: string) => void;
};

export default function SortBy({ sort, setSort }: SortByProps) {
    
  return (
    <div>
      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2 my-10 text-sm text-white outline-none transition focus:border-zinc-500"
      >
        <option value="default">Sort: Default</option>
        <option value="rating-high">Rating: High → Low</option>
        <option value="rating-low">Rating: Low → High</option>
        <option value="name-a-z">Name: A → Z</option>
        <option value="name-z-a">Name: Z → A</option>
      </select>
    </div>
  );
}
