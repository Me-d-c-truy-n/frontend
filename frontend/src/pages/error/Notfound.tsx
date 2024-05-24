import { Link } from "react-router-dom"
import { AiOutlineHome } from "react-icons/ai";
import { Vortex } from "../../components/ui/vortex";
import { TypewriterEffect } from "../../components/ui/typewriter-effect";

const Notfound = () => {
  const words = [
    {
      text: "404",
      className: "text-sky-400",
    },
    {
      text: "|",
      className: "text-white",
    },
    {
      text: "NOT",
      className: "text-white",
    },
    {
      text: "FOUND",
      className: "text-white",
    },
  ];

  return (
    <div className="w-full mx-auto rounded-md  h-screen overflow-hidden">
    <Vortex
      backgroundColor="black"
      rangeY={800}
      particleCount={500}
      baseHue={120}
      className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
    >
      <TypewriterEffect words={words}/>
      <Link to={'/'} replace className="flex gap-2 items-center text-slate-200 mt-5 md:mt-10 text-sm md:text-lg hover:text-slate-100 border px-4 py-2 rounded-3xl hover:bg-sky-500 shadow-4xl hover:border-sky-500">
        <AiOutlineHome />
        Về trang chủ
      </Link>
    </Vortex>
  </div>
  )
}

export default Notfound