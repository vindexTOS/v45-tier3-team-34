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
        {menuItems.map((menu, index) => (
          <div className="" key={index}>
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
                    ? "text-green-900 dark:text-slate-400 hover:text-green-900 dark:hover:text-green-500 font-bold"
                    : menu.name === activeMenu
                    ? "font-bold text-green-900 dark:text-slate-400 hover:text-green-700 dark:hover:text-green-500"
                    : "text-green-900 dark:text-slate-400 hover:text-green-700 dark:hover:text-green-500"
                }`}
              >
                {menu.name}
              </button>

              <div className="group relative">
                {menu.subMenus &&
                  menu.subMenus.length > 0 &&
                  hoveredMenu === menu.name && (
                    <div className="absolute -top-5 -left-5 transition group-hover:translate-y-5 translate-y-0 opacity-0 group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[500px] transform">
                      <div className="relative group p-6 bg-[#F3F4F6] rounded-xl shadow-xl">
                        <div className="w-10 h-10 transform rotate-45 absolute top-0 duration-500 ease-in-out rounded-sm bg-[#F3F4F6]"></div>
                        <ul className="space-y-2">
                          {menu.subMenus.map(
                            (
                              submenu,
                              subIndex
                            ) => (
                              <li
                                key={subIndex}
                                className="p-2 hover:bg-white rounded-md relative group"
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
                                  <p className="text-xs font-light text-green-900">
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
