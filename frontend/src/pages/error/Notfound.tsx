import { Link } from "react-router-dom"
import { AiOutlineHome } from "react-icons/ai";

const Notfound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-indigo-950">
      <p className="text-4xl text-white">404 | NOT FOUND</p>
      <Link to={'/'} replace className="flex gap-2 items-center text-slate-400 mt-10 text-lg hover:text-slate-100 border px-4 py-2 rounded-3xl hover:bg-indigo-500 shadow-4xl hover:border-indigo-500">
        <AiOutlineHome />
        Về trang chủ
      </Link>
    </div>
  )
}

export default Notfound