import { Link } from "react-router-dom";
import {
  footer_links,
  footerMenuItems,
} from "../../contants";
import { useLocation } from "react-router-dom";
export default function Footer() {
  const location = useLocation();
  return (
    <footer
      className={` bg-white border-gray-200 rounded-lg my-10 shadow-lg dark:bg-gray-950 dark:border-gray-700 transition-all duration-500 delay-100 ease-in-out ${
        location.pathname === "/login" ||
        location.pathname === "/register"
          ? "hidden"
          : ""
      }`}
    >
      <div className="py-20 px-16">
        <section className="py-6 lg:py-8 px-10">
          <div className="flex flex-col flex-wrap lg:flex-row lg:justify-evenly lg:max-w-screen-2xl mx-auto">
            {footerMenuItems.map((menuItem) => (
              <div
                className="mb-6 lg:mb-0 flex-grow"
                key={menuItem.name}
              >
                <h3 className="text-sm font-semibold">
                  {menuItem.name}
                </h3>
                <ul>
                  {menuItem.subMenus.map(
                    (subMenu, index) => (
                      <a
                        href={subMenu.link}
                        key={index}
                      >
                        <li>{subMenu.title}</li>
                      </a>
                    )
                  )}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="flex justify-between py-6 px-10 flex-col-reverse lg:flex-row items-center border-t-2 border-t-gray-700  gap-y-2">
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
          <article className="flex flex-col w-full sm:flex-row sm:items-start justify-start gap-4 sm:ml-6 font-thin text-sm">
            {footer_links.map(
              ({ title, link }) => (
                <Link
                  key={title}
                  className="w-full sm:w-auto hover:font-medium transition-all duration-150 ease-out"
                  to={link}
                >
                  {title}
                </Link>
              )
            )}
          </article>
        </section>
      </div>
    </footer>
  );
}
