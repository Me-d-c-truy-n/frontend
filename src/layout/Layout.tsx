import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import ButtonSettings from "../components/Button/Settings/ButtonSettings";

const Layout = () => {
  return (
    <div className={`px-0 md:px-10 min-h-screen mx-auto relative overflow-x-hidden`}>
      <Header />
      <main className="p-1">
        <Outlet />
      </main>
      <Footer />

      <ButtonSettings />
    </div>
  );
};

export default Layout;
