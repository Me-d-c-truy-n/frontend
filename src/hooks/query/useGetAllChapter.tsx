import { useState } from "react";
import { IChapterRoot } from "../../types/novel";
import { getCurrentPageByChapterId } from "../../utils/helpers";
import { useSelector } from "react-redux";
import { getListChapterReaded } from "../../store/readed/selector";
import { useQuery } from "@tanstack/react-query";
import { IResponse } from "../../types/response";
import { ApiGetAllChapter } from "../../api/apiNovel";

interface Props {
  server: string;
  chapterId: string | undefined;
  novelId: string;
}

const useGetAllChapter = ({ server, chapterId, novelId }: Props) => {
  const [chapters, setChapters] = useState<IChapterRoot[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(getCurrentPageByChapterId(server, chapterId || "1"));
  const [firstSelectedPage] = useState(currentPage);

  const [, setPerPage] = useState<number>(0);
  const [totalPage, setTotalPage] = useState<number>(1);

  const listChapterReaded = useSelector(getListChapterReaded(novelId));

  const { isFetching, isError } = useQuery({
    queryKey: ["all_chapter", novelId, currentPage, server],
    queryFn: async () => {
      const data: IResponse<IChapterRoot[]> = await ApiGetAllChapter(server, novelId, currentPage);

      setPerPage(data.perPage);
      setTotalPage(data.totalPage);
      setChapters(data.data);

      return data;
    },
    retry: 1,
  });

  const isLoading = isFetching || chapters.length <= 0;
  return { isLoading, isError, totalPage, currentPage, setCurrentPage, firstSelectedPage, chapters, listChapterReaded };
};

export default useGetAllChapter;
