import { ReactElement } from "react";
import Footer from "./components/Home/Footer";
import NavBar from "./components/Home/NavBar";
const Layout = ({
  children,
}: {
  children: ReactElement;
}) => {
  return (
    <div className="sm:px-1 md:px-8 md:py-2 bg-gray-100 dark:bg-gray-900   w-[100vw]   flex  flex-col justify-between transition-colors delay-100 ease-in min-h-screen">
      <NavBar />
      <main className="mt-32">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
