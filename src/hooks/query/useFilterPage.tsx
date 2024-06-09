import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { INovelRoot } from "../../types/novel";
import { useSelector } from "react-redux";
import { AppState } from "../../store";
import { useQuery } from "@tanstack/react-query";
import { IResponse } from "../../types/response";
import { ApiSearch } from "../../api/apiSearch";

const useFilterPage = () => {
  const [searchParams] = useSearchParams();

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [, setPerPage] = useState<number>(0);
  const [totalPage, setTotalPage] = useState<number>(1);
  const [novels, setNovels] = useState<INovelRoot[]>([]);
  const server = useSelector((state: AppState) => state.server.server);
  const [myServer, setMyServer] = useState<string>(server);

  const { isFetching } = useQuery({
    queryKey: ["search", searchParams.get("q"), myServer, currentPage],
    queryFn: async () => {
      const data: IResponse<INovelRoot[]> = await ApiSearch(myServer, searchParams.get("q") || "", currentPage);

      setPerPage(data.perPage);
      setNovels(data.data);
      setTotalPage(data.totalPage);

      return data.data;
    },
    retry: 1,
  });

  useEffect(() => {
    changeServerByHand(server);
  }, [server]);

  function changeServerByHand(srv: string) {
    setMyServer(srv);
    setCurrentPage(1);
  }

  return { searchParams, myServer, isFetching, novels, changeServerByHand, totalPage, currentPage, setCurrentPage };
};

export default useFilterPage;
