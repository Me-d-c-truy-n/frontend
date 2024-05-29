import { Link } from "react-router-dom";
import { INovelRoot } from "../../types/novel"
import { HiUser } from "react-icons/hi2";
import Skeleton from "react-loading-skeleton";
import LoadingImage from "../Loading/LoadingImage";

const BoxNovel = ({ novel, isLoading = false }: {novel?: INovelRoot, isLoading?: boolean}) => {
  
  if (isLoading || novel == null)
  return(
    <div className="flex gap-2 border bg-slate-50 dark:border-gray-700 dark:bg-gray-950 p-2 rounded">
      <div>
        <Skeleton className="h-32 shadow-lg w-24"/>
      </div>
      <div className="flex flex-col justify-between">
        <Skeleton className="w-60"/>
        <Skeleton className="h-16 mb-2"/>
        <div className="flex justify-between items-center">
          <div className="text-slate-600 flex gap-2 items-center">
            <Skeleton className="w-28"/>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex gap-2 border hover:bg-gray-100 dark:hover:bg-gray-900 bg-slate-50 dark:border-neutral-800 dark:bg-gray-950 p-2 rounded shadow dark:shadow-gray-800">
      <Link to={`/truyen/${novel.novelId}`} className="overflow-hidden rounded w-24 !h-32 flash relative">
        <LoadingImage
          name={novel.name}
          imageUrl={novel.image}
          className="h-full w-full object-cover"
        />
      </Link>
      <div className="flex flex-col justify-between w-9/12">
        <Link to={`/truyen/${novel.novelId}`} className="text-slate-700 font-bold hover:text-amber-700 max-h-12 line-clamp-2">      
          {novel.name}
        </Link>
        <div className="font-normal text-slate-500 max-w-72 h-12 line-clamp-2"
        dangerouslySetInnerHTML={{__html: novel.description}}
        ></div>
        <div className="flex justify-between items-center">
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