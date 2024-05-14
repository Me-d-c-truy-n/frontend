import { Link, useNavigate } from "react-router-dom"
import { INovelRoot } from "../../types/novel"
import ButtonUtils from "../Button/ButtonUtils"

import { FiBookOpen } from "react-icons/fi";
import { MdOutlineFormatListBulleted } from "react-icons/md";
import Skeleton from 'react-loading-skeleton'

interface Props {
  novel: INovelRoot | null;
  isLoading?: boolean;
}

const NovelInfor = ({ novel, isLoading = false }: Props) => {
  const navigate = useNavigate();

  if (isLoading || novel == null) 
    return (
    <div className="flex gap-6 my-6 flex-col md:flex-row items-center">
      <div>
        <Skeleton className="h-64 w-48"/>
      </div>
      <div className="flex flex-col min-w-48">
        <div className="font-bold text-xl mb-3 text-gray-700">
          <Skeleton/>
        </div>
        <Skeleton/>
      </div>
    </div>
  );

  return (
    <div className="flex gap-6 my-6 flex-col md:flex-row items-center">
      <div>
        <img src={novel.image} alt={novel.name} className="w-52 rounded-md shadow-xl"/>
      </div>
      <div className="flex flex-col">
        <div className="font-bold text-xl mb-3 text-gray-700">{novel.name}</div>
        <Link to={`/tac-gia/${novel.author.authorId || novel.author.id}`} className="text-base text-gray-700">{novel.author.name}</Link>
        <div className="flex gap-5 my-5">
          <ButtonUtils
            func={()=>navigate(`/truyen/${novel.novelId}/1`)}
            de={false}
          >
              <FiBookOpen/>
              Đọc Truyện
          </ButtonUtils>
          <ButtonUtils
            func={()=>{}}
            count={novel.total}
          >
              <MdOutlineFormatListBulleted/>
              Mục lục
          </ButtonUtils>
        </div>
        {/* <Specifications/> */}
      </div>
    </div>
  )
}

export default NovelInfor