import { ReactElement } from "react";
import Footer from "./components/Home/Footer";
import NavBar from "./components/Home/NavBar";
const Layout = ({
  children,
}: {
  children: ReactElement;
}) => {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
