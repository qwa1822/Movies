import { useSearchParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Card from "../components/Card";
import { useEffect } from "react";
import { useTitle } from "../hooks/useTitle";

function Search({ apiPath, title }) {
  const [searchParams] = useSearchParams();

  const queryTerm = searchParams.get("q");
  const { data: movies } = useFetch(apiPath, queryTerm);

  useTitle(`search result for ${queryTerm}`);
  return (
    <main>
      <section className="py-7">
        <p className="text-3xl text-gray-700 dark:text-white">
          {movies.length === 0
            ? `no found for ${queryTerm}`
            : `Result for ${queryTerm}`}
        </p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="md:grid md:grid-cols-3 flex-wrap">
          {movies.map(item => (
            <Card key={item.id} movie={item}>
              {" "}
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Search;
