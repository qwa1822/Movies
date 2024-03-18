function MovieSearch() {
  const Search = import.meta.env.VITE_SEARCH;
  const Detail = import.meta.env.VITE_DETAIL;
  const NowPlaying = import.meta.env.VITE_NOWPLAYING;
  const POPULAR = import.meta.env.VITE_POPULAR;
  const TOPRATE = import.meta.env.VITE_TOPRATE;

  return { Search, Detail, NowPlaying, POPULAR, TOPRATE };
}

export default MovieSearch;
