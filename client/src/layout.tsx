import { ReactElement } from "react";
import Footer from "./components/Home/Footer";
import NavBar from "./components/Home/NavBar";

const Layout = ({
  children,
}: {
  children: ReactElement;
}) => {
  return (
    <div className="px-2 md:px-8 md:py-2 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex flex-col justify-between transition-all duration-700 delay-200 ease-in-out min-h-screen">
      <NavBar />
      <main className="mt-32">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
