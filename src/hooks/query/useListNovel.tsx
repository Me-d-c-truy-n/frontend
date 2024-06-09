import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { IResponse } from "../../types/response";
import { INovelRoot } from "../../types/novel";
import { ApiGetAllNovel } from "../../api/apiNovel";
import { useState } from "react";
import { AppState } from "../../store";
import { useSelector } from "react-redux";

const useListNovel = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [, setPerPage] = useState<number>(0);
  const [totalPage, setTotalPage] = useState<number>(1);
  const [novels, setNovels] = useState<INovelRoot[]>([]);
  const server = useSelector((state: AppState) => state.server.server);

  const { isLoading, isFetching, isError } = useQuery({
    queryKey: ["all_novel", currentPage, server],
    queryFn: async () => {
      const data: IResponse<INovelRoot[]> = await ApiGetAllNovel(server, currentPage);

      setPerPage(data.perPage);
      setNovels(data.data);
      setTotalPage(data.totalPage);

      return data.data;
    },
    placeholderData: keepPreviousData,
  });

  return { isLoading, isFetching, isError, novels, totalPage, currentPage, setCurrentPage };
};

export default useListNovel;
