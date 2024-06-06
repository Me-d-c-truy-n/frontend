import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  return (
    <div className={`md:px-4 lg:px-6 px-0 w-full relative overflow-x-hidden`}>
      <Header />
      <main className="p-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;