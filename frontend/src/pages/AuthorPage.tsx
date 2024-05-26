import { useNavigate, useParams } from "react-router-dom";
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

const AuthorPage = () => {
  const navigate = useNavigate();
  const { authorId}  = useParams();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [, setPerPage] = useState<number>(0);
  const [totalPage, setTotalPage] = useState<number>(1);
  const [novels, setNovels] = useState<INovelRoot[]>([]);
  
  const server = useSelector((state: AppState) => state.server.server)

  const { isFetching, isError } = useQuery({
    queryKey: ['author', authorId, server, currentPage],
    queryFn: async () => {
      const data: IResponse<INovelRoot[]> = 
        await ApiGetAllNovelOfAuthor(server, authorId || 'a', 1);

      setPerPage(data.perPage);
      setTotalPage(data.totalPage);

      setNovels(data.data);

      return data;
    },
  })

  useEffect(() =>{
    if (isError) navigate('/notfound', { replace: true });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[isError])
  
  return (
    <div>
      <Slider isLoading={isFetching}/>
      <div id="pagination-author-novel-list">
        {
          isFetching?(
            <ListNovelSkeleton>
              <TitleTab name="TRUYỆN CỦA TÁC GIẢ"/>
            </ListNovelSkeleton>
          ):(
            novels.length > 0 ?
            <>
              <TitleTab name={`TRUYỆN CỦA TÁC GIẢ ${novels[0].author.name}`} 
              uppercase={true}/>
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
                {
                  novels.map((novel) =>
                    <BoxNovelAuthor key={novel.novelId} novel={novel}/>
                  )
                }
              </div>
              <CustomPagination
                totalPage={totalPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                topList="pagination-author-novel-list"
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