import { Link } from "react-router-dom";
import { INovelRoot } from "../../types/novel"
import { HiUser } from "react-icons/hi2";

const BoxNovelAuthor = ({ novel }: {novel: INovelRoot}) => {
  return (
    <div className="flex gap-2">
      <Link to={`/truyen/${novel.novelId}`} className="overflow-hidden rounded">
        <img src={novel.image} alt={novel.name}  className=
        "min-w-28 max-w-28 max-h-40 min-h-40 md:min-w-40 md:max-w-40 md:max-h-60 md:min-h-60 shadow-2xl object-cover transition-all duration-300 hover:scale-110" />
      </Link>
      <div className="flex flex-col justify-between flex-1">
        <Link to={`/truyen/${novel.novelId}`} className="text-slate-700 font-bold hover:text-amber-700">      
          {novel.name}
        </Link>
        {/* <div className="font-normal text-slate-500 h-12 text-wrap truncate"
        dangerouslySetInnerHTML={{__html: novel.description}}
        ></div> */}
        <div className="flex justify-between items-center mt-2 gap-2">
          <div className="text-slate-600 flex gap-2 items-center text-sm">
            <HiUser />
            <div className="font-medium">{novel.author.name}</div>
          </div>
        </div>
        <div className="flex mb-5 justify-end items-center">
          <Link to={`/truyen/${novel.novelId}`} className="bg-amber-700 text-white px-2 rounded-md text-sm py-1">
            Đọc thử
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BoxNovelAuthor