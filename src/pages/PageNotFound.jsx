import { Link } from "react-router-dom";
import pagetNofFoundImage from "../assets/notfound.jpg";
import Button from "../components/Button";
import { useEffect } from "react";

function PageNotFound() {
  useEffect(() => {
    document.title = `Page Not Found / Cinemate`;
  });
  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="w-full flex flex-col items-center my-4">
          <p className="text-7xl text-gray-700 font-bold dark:text-white">
            404, Oops!
          </p>
          <div className="max-w-lg mt-3">
            <img
              src={pagetNofFoundImage}
              className="rounded-xl"
              alt="404 Page Not Found"
            />
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <Link
            to="/"
            className="w-[600px]  
            
             md:justify-between flex flex-col items-center"
          >
            <Button className="">Back to the Cinemate</Button>
            <Button className="">Back to the Home</Button>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default PageNotFound;
