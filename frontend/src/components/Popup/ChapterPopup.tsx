import { GrClose } from "react-icons/gr";
import { IChapterRoot } from "../../types/novel";
import ChapterRow from "./ChapterRow";
import { useQuery } from "@tanstack/react-query";
import { IResponse, STATUS } from "../../types/response";
import { ApiGetAllChapter } from "../../api/apiNovel";
import { useEffect, useState } from "react";
import ListChapterSkeleton from "../Loading/ListChapterSkeleton";
import CustomPagination from "../CustomPagination";
import { useSelector } from "react-redux";
import { getListChapterReaded } from "../../store/readed/selector";
import { useModal } from "../../hooks/useModal";
import EmptyResult from "../EmptyResult";

interface Props {
  close: ()=>void;
  novelId: string;
  name: string;
  server: string;
}

const ChapterPopup = ({ close, novelId, name, server }: Props) => {
  const [chapters, setChapters] = useState<IChapterRoot[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [, setPerPage] = useState<number>(0);
  const [totalPage, setTotalPage] = useState<number>(1);

  const listChapterReaded= useSelector(getListChapterReaded(novelId));

  const { isFetching, isError } = useQuery({
    queryKey: ['all_chapter', novelId, currentPage, server],
    queryFn: async () => {
      const data: IResponse<IChapterRoot[]> = 
        await ApiGetAllChapter(server, novelId, currentPage);

      if (data.status === STATUS.ERROR) throw new Error();
      setPerPage(data.perPage);
      setTotalPage(data.totalPage);
      setChapters(data.data);

      return data;
    },
    retry: 1
  });

  const { modalRef, handleClickOutside } = useModal(close);
  
  useEffect(()=>{
    document.body.style.overflowY = 'hidden';
    return () => {
      document.body.style.overflowY = 'scroll';
    }
  },[]);

  return (
    <div 
      ref={modalRef}
      onClick={handleClickOutside}
      className="fixed left-0 mt-0 z-10 top-0 w-full h-screen bg-gray-400 px-2"
    >
      <div className="shadow-2xl py-1 lg:w-8/12 mx-auto border rounded-lg border-amber-600 bg-amber-50 h-full"
      id="pagination-list-chapter"
      >
        {
          ((isFetching ||chapters.length<=0) && !isError) ?<ListChapterSkeleton name={name} close={close}/>:(
            <div className="flex flex-col h-full">
              <div className='flex justify-between items-center border-b shadow-sm pb-3 px-2'>
                <h1 className='text-lg md:text-xl font-bold'>
                  {!isError ? chapters[0].novelName : name}
                </h1>
                <GrClose className='md:w-1/12 w-4/12 text-xl cursor-pointer text-gray-500 hover:text-black' onClick={close}/>
              </div>

              {
                !isError ?
                <div className="grid grid-cols-1 md:gap-4 gap-2 md:grid-cols-2 overflow-y-auto flex-1 md:px-4 px-2">
                {
                  chapters.map(chapter => 
                  <ChapterRow 
                    key={chapter.chapterId} 
                    chapter={chapter} 
                    close={close}
                    isReaded={listChapterReaded.includes(chapter.chapterId)}
                  />)
                }
              </div>
                : 
                <div className="mb-4">
                  <EmptyResult title="Không thể tải danh sách chương"/>
                </div>
              }

                <div className="border-t md:px-4 px-2">
                  <CustomPagination
                    totalPage={totalPage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    changeThemeEffect={false}
                    topList="pagination-list-chapter"
                  />
                </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default ChapterPopup