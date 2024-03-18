import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieSearch from "../OMDB/AllMenu";
import Backup from "../assets/images.jpg";
function MovieDetail() {
  const params = useParams();

  const [data, setData] = useState({});

  const bring = MovieSearch();

  useEffect(() => {
    async function fetchMovie() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=fc7cbd63af5e16acd8083125591c2a20`
      );
      const json = await response.json();

      setData(json);
    }
    fetchMovie();
  }, []);

  useEffect(() => {
    document.title = `${data.title}/ Cinemate`;
  }, []);

  const image = data.poster_path
    ? `https://image.tmdb.org/t/p/w500/${data.poster_path}`
    : Backup;

  console.log(data);
  return (
    <main className="w-full">
      <section className="container flex justify-center gap-5  py-5">
        <div className=" w-1/2">
          <img src={image} alt="" />
        </div>
        <div className="w-1/2 text-gray-700 dark:text-white">
          <h1 className="text-4xl font-bold my-3 text-center lg:text-left">
            {data.title}
          </h1>
          <p className="mt-4">{data.overview}</p>

          {data.genres && (
            <p className="mt-7 flex flex-wrap gap-2">
              {data.genres.map(item => (
                <span
                  key={item.id}
                  className="mr-2 border bg-black p-2 text-white rounded hover:scale-110 hover:bg-red-500 transition-all duration-500 hover:text-pink-200 dark:border-gray-200"
                >
                  {item.name}
                </span>
              ))}
            </p>
          )}

          <div className="flex items-center mt-7">
            <svg
              className="w-4 h-4 text-yellow-300 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <p className="ms-2 text-sm font-bold text-gray-900 dark:text-white">
              {data.vote_average}
            </p>
            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
            <a
              href="#"
              className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white"
            >
              {data.vote_count} Review
            </a>
          </div>

          <p className="mt-4">
            <span className="mr-2 font-bold">Runtime </span>
            <span>{data.runtime} min.</span>
          </p>

          <p className="mt-4">
            <span className="mr-2 font-bold">Budget: </span>
            <span>{data.budget}</span>
          </p>

          <p className="mt-4">
            <span className="mr-2 font-bold">Release Date:</span>
            <a
              className={`https://www.imdb.com/title/${data.imdb_id}`}
              target="_blank"
            >
              {data.imdb_id}
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}

export default MovieDetail;
