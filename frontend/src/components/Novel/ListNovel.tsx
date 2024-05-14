import { keepPreviousData, useQuery } from "@tanstack/react-query";
import BoxNovel from "../Novel/BoxNovel";
import TitleTab from "../TitleTab";
import { IResponse } from "../../types/response";
import { ApiGetAllNovel } from "../../api/apiNovel";
import { useContext, useState } from "react";
import { INovelRoot } from "../../types/novel";
import ListNovelSkeleton from "../Loading/ListNovelSkeleton";
import Pagination from '@mui/material/Pagination';
import  '../../assets/style/pagination.css';
import { ThemeContext } from "../../contexts/ThemeContext";

const ListNovel = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [, setPerPage] = useState<number>(0);
  const [totalPage, setTotalPage] = useState<number>(1);
  const [novels, setNovels] = useState<INovelRoot[]>([]);
  const { theme } = useContext(ThemeContext)!;
  
  const handleChangePage = (_e: React.ChangeEvent<unknown>, value: number) =>{
    setCurrentPage(value);
    changePage(value);
  } 

  const changePage=(page: number)=>{
    if (page > totalPage) setCurrentPage(1);
    setCurrentPage(page);
  }

  const { isLoading, isFetching } = useQuery({
    queryKey: ['all_novel', currentPage],
    queryFn: async () => {
      const data: IResponse<INovelRoot[]> = await ApiGetAllNovel('truyenfull', currentPage);
      
      setPerPage(data.perPage);
      setNovels(data.data);
      setTotalPage(data.totalPage);

      return data.data;
    },
    placeholderData: keepPreviousData,
  })

  if (isLoading || isFetching || novels.length == 0) return <ListNovelSkeleton/>
  
  return (
    <div>
      <TitleTab name="DANH SÁCH TRUYỆN" link="/"/>
      <div className="grid grid-cols-1 gap-y-10 gap-x-4 lg:grid-cols-2">
        {
          novels.map((novel, idx) =>
              <BoxNovel
                key={idx}
                novel={novel}
              />
          )
        }
      </div>
      <div className="mt-5 flex justify-center">
        <Pagination 
          count={totalPage} 
          page={currentPage}
          color="primary" size="large" 
          onChange={handleChangePage}  
          className={`${theme=='dark' && 'dark-pagination' }`}
        />
      </div>
    </div>
  )
}

export default ListNovel