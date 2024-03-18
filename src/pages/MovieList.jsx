import { NavLink } from "react-router-dom";
import Card from "../components/Card";
import MovieSearch from "../OMDB/AllMenu";
import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

function MovieList({ apiPath, title }) {
  const request = MovieSearch();

  const { Search, Detail, NowPlaying, POPULAR, TOPRATE } = request;

  const { data: movies } = useFetch(apiPath);

  useEffect(() => {
    document.title = `${title}/Cinema`;
  }, []);
  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="md:grid   md:grid-cols-4 flex justify-center   flex-wrap">
          {movies.length > 0 &&
            movies.map(item => <Card movie={item} key={item.id} />)}
        </div>
      </section>
    </main>
  );
}

export default MovieList;
