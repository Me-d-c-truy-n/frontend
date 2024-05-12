import { useParams } from "react-router-dom"
import novels from '../constants/novelDetail.json';
import { useEffect, useState } from "react";
import { INovelRoot } from "../types/novel";
import Slider from "../components/Slider";
import NovelInfor from "../components/Novel/NovelInfor";
import TitleTabFull from "../components/TitleTabFull";

const NovelPreview = () => {
  const { novelId }  = useParams();
  const [novel, setNovel] = useState<INovelRoot | null>(null);
  console.log(novelId);
  useEffect(() => {
    novels['novels'].map((novel: INovelRoot) => {
      if (novel.novelId+'' === novelId){
        setNovel(novel);
      }
    })

  },[novel, novelId])

  if (novel === null) return <div>Loading...</div>

  return (
    <div>
      <Slider/>
      <NovelInfor
        novel={novel}
      />

      <div className="mb-5">
        <TitleTabFull>
          GIỚI THIỆU
        </TitleTabFull>
        <p className="px-2 pt-3 text-lg leading-10 text-gray-700">{novel.description}</p>
      </div>
    </div>
  )
}

export default NovelPreview