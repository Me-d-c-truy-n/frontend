import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import ButtonSettings from "../components/Button/Settings/ButtonSettings";

const Layout = () => {
  return (
    <div className={`md:px-4 lg:px-6 px-0 w-full relative overflow-x-hidden`}>
      <Header />
      <main className="p-1">
        <ButtonSettings />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
