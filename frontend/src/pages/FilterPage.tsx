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

  if (isFetching) return (
    <ListNovelSkeleton>
      <TitleTab name={`TÌM KIẾM: ${searchParams.get('q')}`}/>
    </ListNovelSkeleton>
  )
  
  return (
    <div>
      <Slider isLoading={isFetching}/>
      <div className="mt-3">
        {/* <h1 className="uppercase text-amber-700 mb-5 mt-2">TÌM KIẾM:{" "}{searchParams.get('q')}</h1> */}
        <TitleTab name={`TÌM KIẾM: ${searchParams.get('q')}`}/>

        {
          novels.length <= 0 ?(
            <div className="dark:text-white text-center text-xl">
              KHÔNG TÌM THẤY KẾT QUẢ NÀO
            </div>
          ):(
            <>
              <div className="grid grid-cols-1 gap-y-10 gap-x-4 lg:grid-cols-2">
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
              />
            </>
          )
        }
        
      </div>
    </div>
  )
}

export default FilterPage