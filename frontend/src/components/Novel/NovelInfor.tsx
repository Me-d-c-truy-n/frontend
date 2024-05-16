import { Link, useNavigate } from "react-router-dom"
import { INovelRoot } from "../../types/novel"
import ButtonUtils from "../Button/ButtonUtils"

import { FiBookOpen } from "react-icons/fi";
import { MdOutlineFormatListBulleted } from "react-icons/md";
import { GrNext } from "react-icons/gr";

import Skeleton from 'react-loading-skeleton'
import { useContext, useState } from "react";
import ChapterPopup from "../Popup/ChapterPopup";
import { HistoryContext } from "../../contexts/HistoryContext";
import ButtonBookmark from "../Button/ButtonBookmark";

interface Props {
  novel: INovelRoot | null;
  isLoading?: boolean;
}

const NovelInfor = ({ novel, isLoading = false }: Props) => {
  const navigate = useNavigate();
  const [openChapterPopup, setOpenChapterPopup] = useState<boolean>(false);
  const { getChapterJustReaded } = useContext(HistoryContext)!;

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
      {
            openChapterPopup && 
          <ChapterPopup
            close ={() => setOpenChapterPopup(false)}
            novelId={novel.novelId + ''}
            name={novel.name}
          />
      }
      <div>
        <img src={novel.image} alt={novel.name} className="w-52 rounded-md shadow-xl"/>
      </div>
      <div className="flex flex-col">
        <div className="font-bold text-xl mb-3 text-gray-700">{novel.name}</div>
        <Link to={`/tac-gia/${novel.author.authorId || novel.author.id}`} className="text-base text-gray-700">{novel.author.name}</Link>
        <div className="flex gap-5 my-5 flex-wrap justify-center">
          <ButtonUtils
            func={()=>navigate(`/truyen/${novel.novelId}/1`)}
            de={false}
          >
              <FiBookOpen/>
              Đọc Truyện
          </ButtonUtils>
          <ButtonBookmark 
            novelId={novel.novelId}
            novelName={novel.name}
            time={(new Date()).toString()}
          />
          
          <ButtonUtils
            func={()=>setOpenChapterPopup(true)}
            count={novel.total}
          >
              <MdOutlineFormatListBulleted/>
              Mục lục
          </ButtonUtils>

          {
            getChapterJustReaded(novel.novelId) > 0 && (
            <ButtonUtils
              func={()=>navigate(`/truyen/${novel.novelId}/${getChapterJustReaded(novel.novelId)}`)}
              className="bg-red-600 text-white border-red-600 hover:text-white"
            >
                Đọc Tiếp
                <GrNext/>
            </ButtonUtils>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default NovelInfor