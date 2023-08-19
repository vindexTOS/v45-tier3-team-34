import { Link } from "react-router-dom";
import { footer_links } from "../../contants";
import { useLocation } from "react-router-dom";
export default function Footer() {
  const location = useLocation();
  return (
    <footer
      className={`    bg-gray-300 text-gray-900 dark:bg-gray-800 dark:text-gray-400 px-12 py-2 md:rounded-lg ${
        location.pathname === '/login' || location.pathname === '/register'
          ? 'hidden'
          : ''

      }`}
    >
      <section className="py-6 lg:py-10">
        <div className="flex flex-col lg:flex-row lg:justify-evenly lg:max-w-screen-2xl mx-auto">
          <div className="mb-6 lg:mb-0 flex-grow">
            <h3 className="text-lg font-semibold">
              For Developer
            </h3>
            {/* Add developer-related links here */}
          </div>
          <div className="mb-6 lg:mb-0 flex-grow">
            <h3 className="text-lg font-semibold">
              For Companies
            </h3>
            {/* Add company-related links here */}
          </div>
          <div className="mb-6 lg:mb-0 flex-grow">
            <h3 className="text-lg font-semibold">
              Resources
            </h3>
            {/* Add resource links here */}
          </div>
          <div className="flex-grow">
            <h3 className="text-lg font-semibold">
              Company
            </h3>
            {/* Add company-related links here */}
          </div>
        </div>
      </section>

      <section className="flex justify-between flex-col-reverse lg:flex-row items-center border-t-2 border-t-gray-700 py-1 gap-y-2">
        <article className="border-t border-t-gray-800 w-full sm:w-fit lg:border-none">
          <a
            href="/"
            className="flex items-center hover:font-medium transition-all duration-150 ease-out"
          >
            <h2 className="whitespace-nowrap">
              © 2023 DevConnect
            </h2>
          </a>
        </article>
        <article className="flex flex-col w-full sm:flex-row sm:items-start justify-start gap-4 p-2 ml-6 font-thin">
          {footer_links.map(({ title, link }) => (
            <Link
              key={title}
              className="w-full sm:w-auto hover:font-medium transition-all duration-150 ease-out"
              to={link}
            >
              {title}
            </Link>
          ))}
        </article>
      </section>
    </footer>
  );
}
