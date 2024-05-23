import { Link } from "react-router-dom"
import { AiOutlineHome } from "react-icons/ai";
import { Vortex } from "../../components/ui/vortex";

const Notfound = () => {
  return (
    <div className="w-full mx-auto rounded-md  h-screen overflow-hidden">
    <Vortex
      backgroundColor="black"
      rangeY={800}
      particleCount={500}
      baseHue={120}
      className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
    >
      <p className="text-4xl text-white">404 | NOT FOUND</p>
      <Link to={'/'} replace className="flex gap-2 items-center text-slate-200 mt-10 text-lg hover:text-slate-100 border px-4 py-2 rounded-3xl hover:bg-sky-500 shadow-4xl hover:border-sky-500">
        <AiOutlineHome />
        Về trang chủ
      </Link>
    </Vortex>
  </div>
  )
}

export default Notfound