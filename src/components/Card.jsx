import { NavLink } from "react-router-dom";
import Backup from "../assets/images.jpg";
function Card({ movie }) {
  const { adult, backdrop_path, id, original_title, overview, poster_path } =
    movie;

  const image = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : Backup;
  return (
    <div className="max-w-sm hover:scale-110 transition-all duration-200 bg-white border m-4 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <NavLink to={`/movie/${id}`}>
        <img className="rounded-t-lg w-full" src={image} alt="" />
      </NavLink>
      <div className="p-5">
        <NavLink to={`/movie/${id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {original_title}
          </h5>
        </NavLink>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {overview}
        </p>
      </div>
    </div>
  );
}

export default Card;
