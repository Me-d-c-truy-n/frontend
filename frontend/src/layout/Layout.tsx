import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"

const Layout = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <Header/>
      <main className="min-h-screen p-1">
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default Layout