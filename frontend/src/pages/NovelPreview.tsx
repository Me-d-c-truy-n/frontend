import { useParams } from "react-router-dom"
import { useState } from "react";
import { INovelRoot } from "../types/novel";
import Slider from "../components/Slider";
import NovelInfor from "../components/Novel/NovelInfor";
import TitleTabFull from "../components/TitleTabFull";
import { useQuery } from "@tanstack/react-query";
import { ApiGetDetailNovel } from "../api/apiNovel";
import { IResponse } from "../types/response";
import Skeleton from 'react-loading-skeleton'

const NovelPreview = () => {
  const [novel, setNovel] = useState<INovelRoot | null>(null);
  const { novelId }  = useParams();

  const { isLoading } = useQuery({
    queryKey: ['preview', novelId],
    queryFn: async () => {
      const data: IResponse<INovelRoot> = await ApiGetDetailNovel('truyenfull', novelId || 'a');

      setNovel(data.data);
      return data;
    },
  })

  return (
    <div>
      <Slider isLoading={isLoading}/>
      <NovelInfor novel={novel} isLoading={isLoading}/>

      <div className="mb-5">
        
        {
          (isLoading || novel == null) ?
          <>
            <TitleTabFull>
              <Skeleton width={100}/>
            </TitleTabFull>
            <Skeleton height={300}/>
          </>
          :
          <>
            <TitleTabFull>
              GIỚI THIỆU
            </TitleTabFull>
            <p className="px-2 pt-3 text-lg leading-10 text-gray-700" dangerouslySetInnerHTML={{__html: novel.description}}></p>
          </>
        }
      </div>
    </div>
  )
}

export default NovelPreview