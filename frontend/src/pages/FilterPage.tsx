import { useSearchParams } from "react-router-dom";
import Slider from "../components/Slider"

import BoxNovelAuthor from "../components/Novel/BoxNovelAuthor";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { IResponse } from "../types/response";
import { INovelRoot } from "../types/novel";
import { ApiSearch } from "../api/apiSearch";
import ListNovelSkeleton from "../components/Loading/ListNovelSkeleton";
import TitleTab from "../components/TitleTab";
import CustomPagination from "../components/CustomPagination";
import { useSelector } from "react-redux";
import { AppState } from "../store";
import EmptyResult from "../components/EmptyResult";
import TitleTabScroll from "../components/TitleTabScroll";

const FilterPage = () => {
  const [searchParams] = useSearchParams();

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [, setPerPage] = useState<number>(0);
  const [totalPage, setTotalPage] = useState<number>(1);
  const [novels, setNovels] = useState<INovelRoot[]>([]);
  
  const server = useSelector((state: AppState) => state.server.server)

  const { isFetching } = useQuery({
    queryKey: ['search', searchParams.get('q'), server, currentPage],
    queryFn: async () => {
      const data: IResponse<INovelRoot[]> = 
        await ApiSearch(server, searchParams.get('q')||'', currentPage);
      
      setPerPage(data.perPage);
      setNovels(data.data);
      setTotalPage(data.totalPage);

      return data.data;
    },
    retry: 1
  })

  return (
    <div>
      <Slider isLoading={isFetching}/>
      <div className="mt-1" id="pagination-search-novel-list">
        {
          isFetching ? (
            <ListNovelSkeleton>
              <TitleTab 
                name="TÌM KIẾM:"
                highlight="Loading"
              />
            </ListNovelSkeleton>
          ):(
            <>
              <TitleTabScroll 
                id="filter_novel"
                name="TÌM KIẾM:"
                title={searchParams.get('q') || ""}
              />
      
              {
                !novels || novels.length <= 0 ?(
                  <EmptyResult 
                    title="KHÔNG TÌM THẤY KẾT QUẢ NÀO"
                  />
                ):(
                  <>
                    <div className="grid grid-cols-1 md:gap-5 gap-3 lg:grid-cols-2">
                      {
                        novels.map((novel, idx) =>
                          <BoxNovelAuthor key={idx} novel={novel}/>
                        )
                      }
                    </div>
                    <CustomPagination
                      totalPage={totalPage}
                      currentPage={currentPage}
                      setCurrentPage={setCurrentPage}
                      topList="pagination-search-novel-list"
                      isDelay={true}
                    />
                  </>
                )
              }
            </>
          )
        }
        
      </div>
    </div>
  )
}

export default FilterPage