import { useState, useEffect } from "react";

const ThemeToggle = () => {
  const temp = localStorage.getItem(
    "theme"
  ) as string;
  const [theme, setTheme] = useState<
    "light" | "dark" | string
  >(temp);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add(
        "dark"
      );
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove(
        "dark"
      );
      localStorage.removeItem("theme");
    }
  }, [theme]);
  return (
    <button
      className={`bg-slate-400 dark:bg-slate-800 p-2 rounded-full text-white text-sm transition-colors delay-300`}
      onClick={() =>
        setTheme((prevTheme) =>
          prevTheme === "dark" ? "light" : "dark"
        )
      }
    >
      {theme !== "dark" ? "🌙" : "🌞"}
    </button>
  );
};

export default ThemeToggle;
