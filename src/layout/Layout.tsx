import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import ButtonSettings from "../components/Button/Settings/ButtonSettings";

const Layout = () => {
  return (
    <div className={`max-w-5xl min-h-screen mx-auto relative overflow-x-hidden`}>
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
