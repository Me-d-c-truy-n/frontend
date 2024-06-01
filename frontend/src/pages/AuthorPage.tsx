import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import Slider from "../components/Slider"

import BoxNovelAuthor from "../components/Novel/BoxNovelAuthor";
import { ApiGetAllNovelOfAuthor } from "../api/apiAuthor";
import { useQuery } from "@tanstack/react-query";
import { INovelRoot } from "../types/novel";
import { IResponse } from "../types/response";
import { useEffect, useState } from "react";
import ListNovelSkeleton from "../components/Loading/ListNovelSkeleton";
import TitleTab from "../components/TitleTab";
import CustomPagination from "../components/CustomPagination";
import { useSelector } from "react-redux";
import { AppState } from "../store";
import EmptyResult from "../components/EmptyResult";
import TitleTabScroll from "../components/TitleTabScroll";

const AuthorPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { authorId }  = useParams();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [, setPerPage] = useState<number>(0);
  const [totalPage, setTotalPage] = useState<number>(1);
  const [novels, setNovels] = useState<INovelRoot[]>([]);
  const {server, listServer} = useSelector((state: AppState) => state.server);
  const [indexServer, setIndexServer] = useState(0);
  const [myServer, setMyServer] = useState<string>(
    listServer.includes(searchParams.get('server')||'a')
    ?searchParams.get('server')||'a':listServer[0]
  )
  
  const { isFetching, isError } = useQuery({
    queryKey: ['author', authorId, server, currentPage, indexServer],
    queryFn: async () => {
      const data: IResponse<INovelRoot[]> = 
        await ApiGetAllNovelOfAuthor(myServer, authorId || 'a', 1);

      if (data.data.length <= 0) throw new Error();

      setPerPage(data.perPage);
      setTotalPage(data.totalPage);

      setNovels(data.data);

      return data;
    },
    retry: 0
  })

  useEffect(() =>{
    if (isError) {
      if (indexServer == listServer.length - 1)
        navigate('/notfound', { replace: true });
      else {
        setMyServer(listServer[indexServer + 1]);
        setIndexServer(indexServer + 1);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[isError]);
  
  return (
    <div>
      <Slider isLoading={isFetching}/>
      <div id="pagination-author-novel-list">
        {
          isFetching?(
            <ListNovelSkeleton>
              <TitleTab name="Truyện Của Tác Giả "
              highlight="Loading"
              />
            </ListNovelSkeleton>
          ):(
            novels?.length > 0 ?
            <>
              <TitleTabScroll 
                id="novel_author" 
                name="Truyện Của Tác Giả "
                title={novels[0].author.name}/>
              <div className="grid grid-cols-1 md:gap-5 gap-3 lg:grid-cols-2">
                {
                  novels.map((novel) =>
                    <BoxNovelAuthor 
                      key={novel.novelId} 
                      novel={novel} 
                      isActive={false}
                    />
                  )
                }
              </div>
              <CustomPagination
                totalPage={totalPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                topList="pagination-author-novel-list"
                isDelay={true}
              />
            </>: 
            <EmptyResult
              title={
                isError?
                "CÓ VẤN ĐỀ XẢY RA, VUI LÒNG KIỂM TRA KẾT NỐI"
                :"Tác giả này không tồn tại"
              }
            />
          )
        }
        
      </div>
    </div>
  )
}

export default AuthorPage