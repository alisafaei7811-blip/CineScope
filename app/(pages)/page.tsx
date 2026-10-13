import BrowseByGenre from "../components/home/browseByGenre";
import Hero from "../components/home/hero";
import TrendingShows from "../components/home/trendingShows";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrendingShows></TrendingShows>
      <BrowseByGenre></BrowseByGenre>
    </main>
  );
}
