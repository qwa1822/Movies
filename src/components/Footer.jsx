import { Link } from "react-router-dom";
function Footer() {
  return (
    <div>
      <footer
        className="
       shadow bg-white   dark:bg-darkbg m-0 p-0"
      >
        <div
          className="max-w-full h-full
         p-4 md:flex md:items-center md:justify-between"
        >
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="/" className="hover:underline">
              Movies
            </a>
            Your Movies Site.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Youtube
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Github
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
