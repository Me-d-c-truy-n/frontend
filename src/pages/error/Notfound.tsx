import { Link } from "react-router-dom";
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
        <TypewriterEffect words={words} />
        <Link
          to={"/"}
          replace
          className="mt-5 relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full hover:bg-slate-900 px-3 py-1 font-medium text-white backdrop-blur-3xl gap-2 text-sm md:text-lg bg-black">
            <AiOutlineHome />
            Về trang chủ
          </span>
        </Link>
      </Vortex>
    </div>
  );
};

export default Notfound;
