import { Link } from "react-router-dom";
import { INovelRoot } from "../../types/novel"
import { HiUser } from "react-icons/hi2";
import LoadingImage from "../Loading/LoadingImage";

const BoxNovelAuthor = ({ novel, isActive=true }: {novel: INovelRoot, isActive?: boolean}) => {
  return (
    <div className="flex gap-2 border hover:bg-gray-100 dark:hover:bg-gray-900 bg-slate-50 dark:border-slate-900 dark:bg-gray-950 p-2 rounded dark:shadow-[1px_1px_12px_2px_rgb(0,0,0,40%)] shadow">
      <Link to={`/truyen/${novel.novelId}`} className="overflow-hidden rounded w-24 !h-32 flash relative">
        <LoadingImage
          name={novel.name}
          imageUrl={novel.image}
          className="h-full w-full object-cover"
        />
      </Link>
      <div className="flex-1 flex flex-col justify-between w-9/12">
        <Link to={`/truyen/${novel.novelId}`} className="text-slate-700 dark:text-gray-200 font-bold hover:text-amber-700 max-h-12 line-clamp-2">      
          {novel.name}
        </Link>
        <div className="font-normal text-slate-500 h-12 line-clamp-2"
        dangerouslySetInnerHTML={{__html: novel.description}}
        ></div>
        <div className="flex justify-between items-center mt-2 gap-2">
          <div className="text-slate-600 flex gap-2 items-center text-sm">
            <HiUser/>
            {
              isActive ?
              <Link 
                to={`/tac-gia/${novel.author.authorId}`}    
                className="font-medium hover:text-amber-700">
                {novel.author.name}
              </Link>
              :
              <div className="font-medium dark:text-slate-400">
                {novel.author.name}
              </div>
            }
          </div>

          <Link to={`/truyen/${novel.novelId}`} 
          className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-2 rounded-md text-sm py-1 text-nowrap">
            Đọc thử
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BoxNovelAuthor