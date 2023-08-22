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
            {footerMenuItems.map(
              (menuItem, index) => (
                <div
                  className="mb-6 lg:mb-0 flex-grow"
                  key={index}
                >
                  <h3 className="text-sm font-semibold dark:text-gray-400">
                    {menuItem.name}
                  </h3>
                  <ul className="">
                    {menuItem.subMenus.map(
                      (subMenu, subIndex) => (
                        <a
                          href={subMenu.link}
                          key={subIndex}
                        >
                          <li className="w-full sm:w-auto text-xs my-3 text-green-900 hover:text-slate-700 hover:underline dark:text-green-600">
                            {subMenu.title}
                          </li>
                        </a>
                      )
                    )}
                  </ul>
                </div>
              )
            )}
          </div>
        </section>
        <hr className="border-slate-200 dark:border-slate-600" />

        <section className="flex justify-between py-6 px-10 flex-col-reverse lg:flex-row items-center gap-y-2">
          <article className=" w-full sm:w-fit">
            <a
              href="/"
              className="flex transition-all duration-150 ease-out hover:text-green-800 dark:text-green-600"
            >
              <h2 className="whitespace-nowrap text-sm">
                © 2023 DevConnect
              </h2>
            </a>
          </article>
          <article className="flex flex-col w-full sm:flex-row sm:items-start justify-start gap-4 sm:ml-6 text-sm">
            {footer_links.map(
              ({ title, link }) => (
                <Link
                  key={title}
                  className="w-full sm:w-auto text-xs transition-all duration-150 ease-out text-slate-400 hover:text-slate-600"
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
