import { useQuery } from "@tanstack/react-query";
import { ApiGetDetailNovel } from "../../api/apiNovel";
import { INovelRoot } from "../../types/novel";
import { IResponse } from "../../types/response";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppState } from "../../store";

const useNovelPreview = () => {
  const navigate = useNavigate();
  const { novelId } = useParams();

  const { server, listServer } = useSelector((state: AppState) => state.server);
  const [indexServer, setIndexServer] = useState(0);
  const [novel, setNovel] = useState<INovelRoot | null>(null);

  const { isFetching, isError } = useQuery({
    queryKey: ["preview", novelId, server, indexServer],
    queryFn: async () => {
      const data: IResponse<INovelRoot> = await ApiGetDetailNovel(listServer[indexServer], novelId || "a");

      setNovel(data.data);

      return data;
    },
    retry: 1,
  });

  useEffect(() => {
    if (isError) {
      if (listServer.length <= 0 || indexServer == listServer.length - 1)
        navigate("/notfound", {
          replace: true,
        });
      else setIndexServer(indexServer + 1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError]);

  return { isFetching, novel, currentServer: listServer[indexServer] };
};

export default useNovelPreview;
