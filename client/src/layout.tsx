import { ReactElement } from "react";
import Footer from "./components/Home/Footer";
import NavBar from "./components/Home/NavBar";
const Layout = ({
  children,
}: {
  children: ReactElement;
}) => {
  return (
    <div className="sm:px-1 md:px-8 md:py-2 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex flex-col justify-between transition-all duration-700 delay-200 ease-in-out ">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
