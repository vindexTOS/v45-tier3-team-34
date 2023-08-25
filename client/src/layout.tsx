<<<<<<< HEAD
import { ReactElement } from 'react'
import Footer from './components/Home/Footer'
import NavBar from './components/Home/NavBar'
const Layout = ({ children }: { children: ReactElement }) => {
  return (
    <div className="sm:px-1 md:px-8 md:py-2 bg-gray-100 dark:bg-gray-900   w-[100vw]   flex  flex-col justify-between transition-colors delay-100 ease-in">
      <NavBar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
=======
import { ReactElement } from "react";
import Footer from "./components/Home/Footer";
import NavBar from "./components/Home/NavBar";
const Layout = ({
  children,
}: {
  children: ReactElement;
}) => {
  return (
    <div className="sm:px-1 md:px-8 md:py-2 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex flex-col justify-between transition-all duration-500 delay-100 ease-in-out min-h-screen">
      <NavBar />
      <main className="mt-32">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
>>>>>>> 9c1a03a01a4926110c2e3e6cd705d02ddc99cf2e
