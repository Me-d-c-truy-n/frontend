import { Link } from "react-router-dom";
import { INovelRoot } from "../../types/novel"
import { HiUser } from "react-icons/hi2";
import Skeleton from "react-loading-skeleton";

const BoxNovel = ({ novel, isLoading = false }: {novel?: INovelRoot, isLoading?: boolean}) => {
  
  if (isLoading || novel == null)
  return(
    <div className="flex gap-2">
      <div>
        <Skeleton className="min-h-40 shadow-lg w-32"/>
      </div>
      <div className="flex flex-col justify-between">
        <Skeleton/>
        <Skeleton className="h-16 mb-5"/>
        <div className="flex mb-5 justify-between items-center">
          <div className="text-slate-600 flex gap-2 items-center">
            <Skeleton className="w-40"/>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex gap-2">
      <Link to={`/truyen/${novel.novelId}`}>
        <img src={novel.image} alt={novel.name} className="rounded min-h-40 shadow-2xl" />
      </Link>
      <div className="flex flex-col justify-between">
        <Link to={`/truyen/${novel.novelId}`} className="text-slate-700 font-bold hover:text-amber-700">      
          {novel.name}
        </Link>
        <div className="font-normal text-slate-500 w-72 h-12 text-wrap truncate"
        dangerouslySetInnerHTML={{__html: novel.description}}
        ></div>
        <div className="flex mb-5 justify-between items-center">
          <div className="text-slate-600 flex gap-2 items-center">
            <HiUser />
            <Link to={`/tac-gia/${novel.author.authorId}`} className="font-medium hover:text-amber-700">{novel.author.name}</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BoxNovel