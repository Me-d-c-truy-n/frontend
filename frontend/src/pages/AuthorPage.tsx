import { useNavigate, useParams } from "react-router-dom";
import Slider from "../components/Slider"

import BoxNovelAuthor from "../components/Novel/BoxNovelAuthor";
import { ApiGetAllNovelOfAuthor } from "../api/apiAuthor";
import { useQuery } from "@tanstack/react-query";
import { INovelRoot } from "../types/novel";
import { IResponse } from "../types/response";
import { useContext, useEffect, useState } from "react";
import ListNovelSkeleton from "../components/Loading/ListNovelSkeleton";
import TitleTab from "../components/TitleTab";
import { SettingsContext } from "../contexts/SettingsContext";

const AuthorPage = () => {
  const navigate = useNavigate();
  const { authorId}  = useParams();
  const [novels, setNovels] = useState<INovelRoot[]>([]);
  const { server } = useContext(SettingsContext)!;

  const { isLoading, isError } = useQuery({
    queryKey: ['author', authorId, server],
    queryFn: async () => {
      const data: IResponse<INovelRoot[]> = 
        await ApiGetAllNovelOfAuthor(server, authorId || 'a', 1);

      setNovels(data.data);

      return data;
    },
  })

  useEffect(() =>{
    if (isError) navigate('/notfound', { replace: true });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[isError])
  
  if (isLoading || novels.length <= 0) return (
    <>
      <Slider isLoading={true}/>
      <ListNovelSkeleton>
        <TitleTab name="TRUYỆN CỦA TÁC GIẢ"/>
      </ListNovelSkeleton>
    </>
  )

  
  return (
    <div>
      <Slider/>
      <div>
        <TitleTab name={`TRUYỆN CỦA TÁC GIẢ ${novels[0].author.name}`} 
        uppercase={true}/>
        <div className="grid grid-cols-1 gap-y-10 gap-x-4 lg:grid-cols-2">
          {
            novels.map((novel) =>
              <BoxNovelAuthor key={novel.novelId} novel={novel}/>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default AuthorPage