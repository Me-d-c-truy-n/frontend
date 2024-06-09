import { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { INovelRoot } from "../../types/novel";
import { AppState } from "../../store";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { IResponse } from "../../types/response";
import { ApiGetAllNovelOfAuthor } from "../../api/apiAuthor";

const useAuthorPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { authorId } = useParams();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [, setPerPage] = useState<number>(0);
  const [totalPage, setTotalPage] = useState<number>(1);
  const [novels, setNovels] = useState<INovelRoot[]>([]);
  const { listServer } = useSelector((state: AppState) => state.server);
  const [indexServer, setIndexServer] = useState(0);
  const [myServer, setMyServer] = useState<string>(
    listServer.includes(searchParams.get("server") || "a") ? searchParams.get("server") || "a" : listServer[0],
  );

  const { isFetching, isError } = useQuery({
    queryKey: ["author", authorId, currentPage, indexServer],
    queryFn: async () => {
      const data: IResponse<INovelRoot[]> = await ApiGetAllNovelOfAuthor(myServer, authorId || "a", 1);

      if (data.data.length <= 0) throw new Error();

      setPerPage(data.perPage);
      setTotalPage(data.totalPage);

      setNovels(data.data);

      return data;
    },
    retry: 0,
  });

  useEffect(() => {
    if (isError) {
      if (listServer.length <= 0 || indexServer == listServer.length - 1)
        navigate("/notfound", {
          replace: true,
        });
      else {
        setMyServer(listServer[indexServer + 1]);
        setIndexServer(indexServer + 1);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError]);

  return { isFetching, novels, myServer, isError, totalPage, currentPage, setCurrentPage };
};

export default useAuthorPage;
