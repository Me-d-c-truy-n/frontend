import { useContext, useEffect, useState } from "react";
import Slider from "../components/Slider"
import { Link, useNavigate, useParams } from "react-router-dom";
import { IChapter } from "../types/novel";

import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import ButtonUtils from "../components/Button/ButtonUtils";

import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineFormatListBulleted } from "react-icons/md";
import { SettingsContext } from "../contexts/SettingsContext";
import SettingPopup from "../components/Popup/SettingPopup";
import { HistoryContext } from "../contexts/HistoryContext";
import ChapterPopup from "../components/Popup/ChapterPopup";
import { IResponse } from "../types/response";
import { useQuery } from "@tanstack/react-query";
import { ApiGetOneChapter } from "../api/apiNovel";
import NovelChapterSkeleton from "../components/Loading/NovelChapterSkeleton";
import { ChapterOpenContext } from "../contexts/ChapterOpenContext";
import ButtonChangeChapter from "../components/Button/ButtonChangeChapter";

import { RiSkipLeftLine } from "react-icons/ri";
import { RiSkipRightLine } from "react-icons/ri";

const NovelChapter = () => {
  const navigate = useNavigate();
  const { novelId, chapterId }  = useParams();
  const [chapter, setChapter] = useState<IChapter | null>(null);
  const [openSettingPopup, setOpenSettingPopup] = useState<boolean>(false);
  const [openChapterPopup, setOpenChapterPopup] = useState<boolean>(false);

  const { color, background, fontSize, fontStyle, leading, server } = useContext(SettingsContext)!;
  const { updateNovelReaded, addNovelReaded } = useContext(HistoryContext)!;
  const { setIsOpen } = useContext(ChapterOpenContext)!;

  useEffect(() =>{
    setIsOpen(true);
    return () => {
      setIsOpen(false);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const { isLoading, isError } = useQuery({
    queryKey: ['chapter', chapterId, novelId, server],
    queryFn: async () => {
      const data: IResponse<IChapter> = 
        await ApiGetOneChapter(server, novelId || 'a', chapterId || 'chuong-1');
      
      setChapter(data.data);
      
      return data;
    },
  })

  useEffect(() =>{
    if (chapter == null) return;
    updateNovelReaded({
      time: (new Date).toString(),
      name: chapter.novelName,
      novelId: chapter.novelId,
      chapterId: chapter.chapterId,
      totalChapter: chapter.total
    })
    addNovelReaded({
      novelId: chapter.novelId,
      chapterId: chapter.chapterId
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[chapter])

  const handleNextChapter =()=>{
    if (chapter == null || chapterId == null) return;
    if (chapter.total+'' == chapterId) return;
    // if (chapterId == '3') return navigate(`/truyen/${novelId}/1`)
    navigate(`/truyen/${novelId}/${parseInt(chapterId) + 1}`)
  }

  const handlePrevChapter =()=>{
    if (chapter == null || chapterId == null) return;
    if (parseInt(chapterId) <= 1) return;
        // if (chapterId == '1') return navigate(`/truyen/${novelId}`)
    navigate(`/truyen/${novelId}/${parseInt(chapterId) - 1}`)
  }

  useEffect(() =>{
    if (isError) navigate('/notfound', { replace: true });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[isError])

  if (chapter === null || isLoading || novelId == null) return <NovelChapterSkeleton/>;

  return (
    <div style={{backgroundColor: background }}>
      {
        openSettingPopup && 
      <SettingPopup
        close ={() => setOpenSettingPopup(false)}
      />
      }
      {
        openChapterPopup && 
      <ChapterPopup
        close ={() => setOpenChapterPopup(false)}
        novelId={novelId}
        name={chapter.novelName}
      />
      }
      <Slider/>
      <div className="flex flex-col justify-center items-center mt-2">
        <Link to={`/truyen/${chapter.novelId}`} className="font-bold text-gray-900 text-xl capitalize hover:text-amber-700">{chapter.novelName}</Link>
        <Link to={`/tac-gia/${chapter.author.authorId || chapter.author.id}`} className="text-gray-500">{chapter.author.name}</Link>

        <div className="flex mt-6 items-center gap-4">
          <button 
          onClick={handlePrevChapter}
          className="border flex items-center justify-center rounded-full p-1 text-amber-600 border-amber-600 hover:bg-amber-600 hover:text-white">
            <GrPrevious/>
          </button>

          <div className="text-gray-700">{chapter.name}</div>
          
          <button 
          onClick={handleNextChapter}
          className="border flex items-center justify-center rounded-full p-1 text-amber-600 border-amber-600 hover:bg-amber-600 hover:text-white">
            <GrNext/>
          </button>
        </div>

        <div className="mt-6 flex gap-5">
          <ButtonUtils func={()=>setOpenSettingPopup(true)}>
            <IoSettingsOutline />
            Cấu hình
          </ButtonUtils>

          <ButtonUtils func={()=>setOpenChapterPopup(true)}>
            <MdOutlineFormatListBulleted/>
            Mục lục
          </ButtonUtils>

        </div>
      </div>
      <div className="my-0 md:my-10 px-2" 
        style={{fontSize:fontSize, color: color, fontFamily: fontStyle, lineHeight: leading}}
        dangerouslySetInnerHTML={{__html: chapter.content}}
      >
      </div>
      <Slider/>

      <div className="mt-8 flex gap-14 items-center justify-center">
        {
          (chapterId && chapterId > '1') &&
          <ButtonChangeChapter func={handlePrevChapter}>
            <RiSkipLeftLine className="text-2xl"/>
            TRƯỚC
          </ButtonChangeChapter>
        }
        {
          (chapterId && chapterId < chapter.total+'') &&
          <ButtonChangeChapter func={handleNextChapter}>
            <RiSkipRightLine className="text-2xl"/>
            SAU
          </ButtonChangeChapter>
        }
      </div>
    </div>
  )
}

export default NovelChapter