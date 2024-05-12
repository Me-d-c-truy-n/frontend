import { useContext, useEffect, useState } from "react";
import Slider from "../components/Slider"
import { Link, useNavigate, useParams } from "react-router-dom";
import { IChapter } from "../types/novel";
import novels from '../constants/chapterList.json';

import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import ButtonUtils from "../components/Button/ButtonUtils";

import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineFormatListBulleted } from "react-icons/md";
import { SettingsContext } from "../contexts/SettingsContext";
import SettingPopup from "../components/Popup/SettingPopup";

const NovelChapter = () => {
  const navigate = useNavigate();
  const { novelId, chapterId }  = useParams();
  const [chapter, setChapter] = useState<IChapter | null>(null);
  const [openSettingPopup, setOpenSettingPopup] = useState<boolean>(false);
  const { color, background, fontSize } = useContext(SettingsContext)!;

  useEffect(() =>{
    document.body.style.backgroundColor=background;
    return () => {
      document.body.style.backgroundColor="#ffffff";
    };
  },[background])

  useEffect(() => {
    if (novelId == undefined || chapterId == undefined) return;

    if (novels['chapter'][parseInt(novelId)-1] === undefined) return;

    novels['chapter'][parseInt(novelId)-1][parseInt(novelId)]?.map((chapter: IChapter) => {
      if (chapter.chapterId+'' === chapterId){
        setChapter(chapter);
      }
    })

  },[chapter, novelId, chapterId])

  if (chapter === null || chapterId == undefined) return <div>Loading...</div>

  const handleNextChapter =()=>{
    if (chapterId === '3') navigate(`/truyen/${novelId}/1`)
      navigate(`/truyen/${novelId}/${parseInt(chapterId) + 1}`)
  }

  const handlePrevChapter =()=>{
    if (chapterId === '1') navigate(`/truyen/${novelId}`)
      navigate(`/truyen/${novelId}/${parseInt(chapterId) - 1}`)
  }

  return (
    <div>
      {
        openSettingPopup && 
      <SettingPopup
        close ={() => setOpenSettingPopup(false)}
      />
      }
      <Slider/>
      <div className="flex flex-col justify-center items-center mt-2">
        <Link to={`/truyen/${chapter.novelId}`} className="font-bold text-gray-900 text-xl capitalize hover:text-amber-700">{chapter.novelName}</Link>
        <Link to={`/tac-gia/${chapter.author.authorId}`} className="text-gray-500">{chapter.author.name}</Link>

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

          <ButtonUtils func={()=>{}}>
            <MdOutlineFormatListBulleted/>
            Mục lục
          </ButtonUtils>
        </div>
      </div>
      <div className="leading-10 my-10" 
        style={{fontSize:fontSize, color: color}}
        dangerouslySetInnerHTML={{__html: chapter.content}}
      >
      </div>
      <Slider/>
    </div>
  )
}

export default NovelChapter