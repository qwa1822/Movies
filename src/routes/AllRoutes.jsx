import { Route, Routes } from "react-router-dom";
import MovieList from "../pages/MovieList";
import MovieDetail from "../pages/MovieDetail";
import Search from "../pages/Search";
import PageNotFound from "../pages/PageNotFound";

function AllRoutes() {
  return (
    <div className="dark:bg-darkbg">
      <Routes>
        <Route
          path="/"
          element={<MovieList apiPath="movie/now_playing" title="Home" />}
        />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route
          path="/movies/popular"
          element={<MovieList apiPath="movie/popular" title="Popular" />}
        />
        <Route
          path="/movies/top"
          element={<MovieList apiPath="movie/top_rated" title="Toprated" />}
        />
        <Route
          path="/movies/upcoming"
          element={<MovieList apiPath="movie/upcoming" title="UpComing" />}
        />
        <Route path="search" element={<Search apiPath="search/movie" />} />
        <Route path="*" element={<PageNotFound title="page Not Found" />} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
