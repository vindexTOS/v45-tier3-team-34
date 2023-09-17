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
      className={` bg-white rounded-lg my-10 shadow-lg dark:bg-gray-950 ${
        location.pathname === "/login" ||
        location.pathname === "/register"
          ? "hidden"
          : ""
      }`}
    >
      <div className="py-14 px-8 sm:px-20">
        <section className="">
          <div className="flex flex-col flex-wrap lg:flex-row lg:justify-evenly lg:max-w-screen-2xl mx-auto">
            {footerMenuItems.map(
              (menuItem, global) => (
                <div
                  className="mb-6 lg:mb-0 flex-grow"
                  key={global}
                >
                  <h3 className="text-sm font-semibold dark:text-muted text-muted">
                    {menuItem.name}
                  </h3>
                  <ul className="">
                    {menuItem.subMenus.map(
                      (subMenu, subglobal) => (
                        <Link
                          to={subMenu.link}
                          key={subglobal}
                        >
                          <li className="w-full sm:w-auto text-xs my-3 text-primary hover:text-slate-700 hover:underline dark:text-primary">
                            {subMenu.title}
                          </li>
                        </Link>
                      )
                    )}
                  </ul>
                </div>
              )
            )}
          </div>
        </section>
        <hr className="border-slate-200 dark:border-slate-600 my-5" />

        <section className="flex justify-between py-6 flex-col-reverse sm:flex-row items-center gap-y-2">
          <article className=" w-full sm:w-fit pt-4 sm:pt-0">
            <a
              href="/"
              className="flex text-primary dark:text-primary"
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
                  className="w-full sm:w-auto text-xs text-muted dark:text-muted hover:text-slate-600"
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
