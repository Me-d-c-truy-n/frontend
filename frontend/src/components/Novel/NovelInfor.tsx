import { Link, useNavigate } from "react-router-dom"
import { INovelRoot } from "../../types/novel"
import ButtonUtils from "../Button/ButtonUtils"

import { FiBookOpen } from "react-icons/fi";
import { MdOutlineFormatListBulleted } from "react-icons/md";
import { GrNext } from "react-icons/gr";
import { HiUser } from "react-icons/hi2";

import Skeleton from 'react-loading-skeleton'
import { useState } from "react";
import ChapterPopup from "../Popup/ChapterPopup";
import ButtonBookmark from "../Button/ButtonBookmark";
import { getChapterJustReaded } from "../../store/history/selector";
import { useSelector } from "react-redux";

import CustomImageAsBook from "./CustomImageAsBook";

interface Props {
  novel: INovelRoot | null;
  isLoading?: boolean;
  server: string;
}

const NovelInfor = ({ novel, isLoading = false, server }: Props) => {
  const navigate = useNavigate();
  const [openChapterPopup, setOpenChapterPopup] = useState<boolean>(false);

  const chapterId = useSelector(getChapterJustReaded(novel?.novelId));

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
    <div className="flex gap-4 my-6 flex-col md:flex-row items-center md:items-start">
    {
          openChapterPopup && 
        <ChapterPopup
          close ={() => setOpenChapterPopup(false)}
          novelId={novel.novelId + ''}
          name={novel.name}
          server={server}
        />
    }
    
    <CustomImageAsBook image={novel.image} name={novel.name}/>

    <div className="ml-5 flex flex-col flex-1 rounded">
      <div className="font-bold text-3xl md:mb-3 mb-1 text-gray-700 dark:text-white w-fit">{novel.name}</div>
      <Link to={`/tac-gia/${novel.author.authorId || novel.author.id}`} className="text-base text-gray-700 flex gap-1 items-center hover:underline w-fit">
        <HiUser/>
        {novel.author.name}
      </Link>
      <div className="flex gap-5 md:mt-5 mt-3 flex-wrap justify-center md:justify-start">
        <ButtonUtils
          func={()=>navigate(`/truyen/${novel.novelId}/${novel.firstChapter}`)}
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
        >
            <MdOutlineFormatListBulleted/>
            Mục lục
        </ButtonUtils>

        {
          chapterId && chapterId != '0' && (
          <ButtonUtils
            func={()=>navigate(`/truyen/${novel.novelId}/${chapterId}`)}
            className="bg-red-600 text-white border-none shadow hover:text-white"
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