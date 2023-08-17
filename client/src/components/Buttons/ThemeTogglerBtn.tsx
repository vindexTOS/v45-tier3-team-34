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
      className={`bg-green-800 p-2 rounded-md text-white text-sm ${
        theme === "dark" ? "bg-blue-800" : ""
      }`}
      onClick={() =>
        setTheme((prevTheme) =>
          prevTheme === "dark" ? "light" : "dark"
        )
      }
    >
      {theme === "dark" ? "Light" : "Dark"}
    </button>
  );
};

export default ThemeToggle;
