import { Link } from "react-router-dom";
import { INovelRoot } from "../../types/novel"
import { HiUser } from "react-icons/hi2";

const BoxNovelAuthor = ({ novel }: {novel: INovelRoot}) => {
  return (
    <div className="flex gap-2 hover:bg-gray-100 dark:hover:bg-gray-900 border bg-slate-50 dark:border-gray-700 dark:bg-gray-950 p-2 rounded shadow dark:shadow-gray-800">
      <Link to={`/truyen/${novel.novelId}`} className="overflow-hidden rounded w-24 !h-32">
        <img src={novel.image} alt={novel.name}  className=
        "h-full w-full object-cover transition-all duration-300 hover:scale-110" />
      </Link>
      <div className="flex flex-col justify-between w-9/12">
        <Link to={`/truyen/${novel.novelId}`} className="text-slate-700 font-bold hover:text-amber-700 max-h-12 line-clamp-2">      
          {novel.name}
        </Link>
        <div className="font-normal text-slate-500 h-12 line-clamp-2"
        dangerouslySetInnerHTML={{__html: novel.description}}
        ></div>
        <div className="flex justify-between items-center mt-2 gap-2">
          <div className="text-slate-600 flex gap-2 items-center text-sm">
            <HiUser />
            <div className="font-medium">{novel.author.name}</div>
          </div>
        </div>
        <div className="flex justify-end items-center">
          <Link to={`/truyen/${novel.novelId}`} className="bg-amber-700 text-white px-2 rounded-md text-sm py-1">
            Đọc thử
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BoxNovelAuthor