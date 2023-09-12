import { Link } from "react-router-dom";
import { menuItems } from "../../assets/front-end-data/menu_items";
import { useState } from "react";

const MenuItem = () => {
  const [hoveredMenu, setHoveredMenu] = useState<
    string | null
  >(null);
  const [activeMenu, setActiveMenu] = useState<
    string | null
  >(null);

  return (
    <div className="group relative hidden lg:block">
      <div className="flex">
        {menuItems.map((menu, global) => (
          <div className="" key={global}>
            <div
              className="group relative cursor-pointer"
              onMouseEnter={() =>
                setHoveredMenu(menu.name)
              }
              onMouseLeave={() =>
                setHoveredMenu(null)
              }
              onClick={() =>
                setActiveMenu(menu.name)
              }
            >
              <button
                className={`p-2 text-sm ${
                  menu.name === hoveredMenu
                    ? "text-primary dark:text-primary hover:text-primary-hover dark:hover:text-primary-hover font-bold"
                    : menu.name === activeMenu
                    ? "text-primary dark:text-primary hover:text-primary-hover dark:hover:text-primary-hover font-bold"
                    : "text-muted dark:text-muted hover:text-muted-hover dark:hover:text-muted-hover"
                }`}
              >
                {menu.name}
              </button>

              <div className="group relative">
                {menu.subMenus &&
                  menu.subMenus.length > 0 &&
                  hoveredMenu === menu.name && (
                    <div className="absolute -top-5 -left-5 group-hover:translate-y-5 translate-y-0 opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out group-hover:transform z-50 min-w-[500px] transform">
                      <div className="relative group p-6 bg-[#f2f2f2] dark:bg-slate-800 rounded-xl shadow-xl">
                        <div className="w-10 h-10 transform rotate-45 absolute top-0 rounded-sm bg-[#f2f2f2] dark:bg-slate-800"></div>
                        <ul className="space-y-2">
                          {menu.subMenus.map(
                            (
                              submenu,
                              subglobal
                            ) => (
                              <li
                                key={subglobal}
                                className="p-2 hover:bg-white hover:dark:bg-slate-950 rounded-md relative group"
                              >
                                <Link
                                  to={
                                    submenu.link
                                  }
                                  className="relative group"
                                >
                                  <h3 className="font-semibold text-sm">
                                    {
                                      submenu.title
                                    }
                                  </h3>
                                  <p className="text-xs font-light text-primary">
                                    {
                                      submenu.description
                                    }
                                  </p>
                                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="h-4 w-4 text-green-700"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 5l7 7-7 7"
                                      />
                                    </svg>
                                  </div>
                                </Link>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuItem;
