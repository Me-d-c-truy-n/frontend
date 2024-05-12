import { Link } from "react-router-dom";
import { INovelRoot } from "../../types/novel"
import { HiUser } from "react-icons/hi2";

const BoxNovel = ({ novel }: {novel: INovelRoot}) => {
  return (
    <div className="flex gap-2">
      <Link to={`/truyen/${novel.novelId}`}>
        <img src={novel.image} alt={novel.name} className="rounded min-h-40 shadow-2xl" />
      </Link>
      <div className="flex flex-col justify-between">
        <Link to={`/truyen/${novel.novelId}`} className="text-slate-700 font-bold hover:text-amber-700">      
          {novel.name}
        </Link>
        <div className="font-normal text-slate-500 w-72 h-12 text-wrap truncate">{novel.description}</div>
        <div className="flex mb-5 justify-between items-center">
          <div className="text-slate-600 flex gap-2 items-center w-7/12">
            <HiUser />
            <Link to={`/tac-gia/${novel.author.authorId}`} className="font-medium hover:text-amber-700">{novel.author.name}</Link>
          </div>
          {/* <ButtonCategory
            name={novel.category[0].name}
            color="orange"
          /> */}
        </div>
      </div>
    </div>
  )
}

export default BoxNovel