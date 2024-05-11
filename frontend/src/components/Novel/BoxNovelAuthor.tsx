import { Link } from "react-router-dom";
import { INovelRoot } from "../../types/novel"
import { HiUser } from "react-icons/hi2";
import { GoStack } from "react-icons/go";

const BoxNovelAuthor = ({ novel }: {novel: INovelRoot}) => {
  return (
    <div className="flex gap-2">
      <Link to={`/truyen/${novel.id}`}>
        <img src={novel.img} alt={novel.name} className="rounded h-40 shadow-2xl" />
      </Link>
      <div className="flex flex-col justify-between">
        <Link to={`/truyen/${novel.id}`} className="text-slate-700 font-bold hover:text-amber-700">      
          {novel.name}
        </Link>
        <div className="font-normal text-slate-500 w-72 h-12 text-wrap truncate">{novel.description}</div>
        <div className="flex justify-between items-center mt-2">
          <div className="text-slate-600 flex gap-2 items-center text-sm">
            <HiUser />
            <div className="font-medium">{novel.author}</div>
          </div>
          <div className="text-xs">
            {novel.totalChapter}{" chương"}
          </div>
        </div>
        <div className="flex mb-5 justify-between items-center">
          <div className="text-slate-600 flex gap-2 items-center text-sm">
            <GoStack />
            <Link to={'/'} className="font-medium hover:text-amber-700">{novel.category[0]}</Link>
          </div>
            <Link to={`/truyen/${novel.id}`} className="bg-amber-700 text-white px-2 rounded-md text-sm py-1 text-sm">
              Đọc thử
            </Link>
        </div>
      </div>
    </div>
  )
}

export default BoxNovelAuthor