import { useEffect, useState } from "react";

export function useFetch(api, queryTerm = "") {
  const [data, setData] = useState([]);

  const url = `https://api.themoviedb.org/3/${api}?api_key=${
    import.meta.env.VITE_API_KEY
  }&query=${queryTerm}
 `;

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(String(url));
      const data = await response.json();

      setData(data.results);
    }
    fetchMovies();
  }, [url]);

  return { data };
}

export default useFetch;
