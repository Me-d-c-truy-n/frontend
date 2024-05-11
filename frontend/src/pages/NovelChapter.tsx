import { useEffect, useState } from "react";
import Slider from "../components/Slider"
import { Link, useParams } from "react-router-dom";
import { INovelRoot } from "../types/novel";
import novels from '../constants/novel.json';

import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import ButtonUtils from "../components/Button/ButtonUtils";

import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineFormatListBulleted } from "react-icons/md";

const NovelChapter = () => {
  const { novelId, chapterId }  = useParams();
  const [novel, setNovel] = useState<INovelRoot | null>(null);

  useEffect(() =>{
    document.body.style.backgroundColor="#f8f8e3";
    
    function handleOnBeforeUnload(e: BeforeUnloadEvent) {
      e.preventDefault();
    }

    window.addEventListener('beforeunload', handleOnBeforeUnload)

    return () => {
      window.removeEventListener('beforeunload', handleOnBeforeUnload);
      document.body.style.backgroundColor="#ffffff";
    };
  },[])

  useEffect(() => {
    novels['novel'].map(novel => {
      if (novel.id === novelId){
        setNovel(novel);
      }
    })
  },[novel, novelId, chapterId])

  if (novel === null) return <div>Loading...</div>

  return (
    <div>
      <Slider/>
      <div className="flex flex-col justify-center items-center mt-2">
        <Link to={`/truyen/${novel.id}`} className="font-bold text-gray-900 text-xl capitalize hover:text-amber-700">{novel.name}</Link>
        <Link to={`/tac-gia/1`} className="text-gray-500">{novel.author}</Link>

        <div className="flex mt-6 items-center gap-4">
          <button className="border flex items-center justify-center rounded-full p-1 text-amber-600 border-amber-600 hover:bg-amber-600 hover:text-white">
            <GrPrevious/>
          </button>

          <div className="text-gray-700">Chương 1: võ hồn thế giới</div>
          
          <button className="border flex items-center justify-center rounded-full p-1 text-amber-600 border-amber-600 hover:bg-amber-600 hover:text-white">
            <GrNext/>
          </button>
        </div>

        <div className="mt-6 flex gap-5">
          <ButtonUtils func={()=>{}}>
            <IoSettingsOutline />
            Cấu hình
          </ButtonUtils>
          <ButtonUtils func={()=>{}}>
            <MdOutlineFormatListBulleted/>
            Mục lục
          </ButtonUtils>
        </div>
      </div>
      <div className="text-xl leading-10 my-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed praesentium ratione, maxime itaque similique suscipit quod aliquid dignissimos eaque quos recusandae mollitia! Earum ut doloribus facilis harum quia quibusdam consectetur?
        <br/>
        <br/>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro incidunt, nesciunt ipsum ex perspiciatis reprehenderit. Voluptate quod, asperiores, nemo est doloribus tenetur, neque animi necessitatibus reprehenderit aperiam consequuntur libero nulla.
        <br/>
        <br/>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, architecto sequi blanditiis error veritatis aliquid quod culpa necessitatibus eligendi, eaque voluptatum quia dolore. 
        <br/>
        <br/>
        Quia culpa asperiores veniam, ad voluptatem in. Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        <br/>
        <br/>
        Esse, architecto sequi blanditiis error veritatis aliquid quod culpa necessitatibus eligendi, eaque voluptatum quia dolore. Quia culpa asperiores veniam, ad voluptatem in.
        <br/>
        <br/>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum adipisci voluptatum numquam, odit earum illum velit dignissimos iure, obcaecati iusto eveniet nihil ullam aperiam asperiores animi sunt provident. Veniam, quia.
        <br/>
        Esse, architecto sequi blanditiis error veritatis aliquid quod culpa necessitatibus eligendi, eaque voluptatum quia dolore. Quia culpa asperiores veniam, ad voluptatem in.
        <br/>
        <br/>
      </div>
      <Slider/>
    </div>
  )
}

export default NovelChapter