import { Link } from "react-router-dom";
import { INovelRoot } from "../../types/novel"
import { HiUser } from "react-icons/hi2";
import ButtonCategory from "./ButtonCategory";

const BoxNovel = ({ novel }: {novel: INovelRoot}) => {
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
        <div className="flex mb-5 justify-between items-center">
          <div className="text-slate-600 flex gap-2 items-center">
            <HiUser />
            <Link to={'/tac-gia/1'} className="font-medium hover:text-amber-700">{novel.author}</Link>
          </div>
            <ButtonCategory
              name={novel.category[0]}
              color="orange"
            />
        </div>
      </div>
    </div>
  )
}

export default BoxNovel