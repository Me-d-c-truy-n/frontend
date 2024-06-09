import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IChapter } from "../../types/novel";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppState } from "../../store";
import { IResponse } from "../../types/response";
import { setIsOpen } from "../../store/chapterOpen";
import { ApiGetOneChapter } from "../../api/apiNovel";
import { updateNovelReaded } from "../../store/history";
import { addNovelReaded } from "../../store/readed";

interface Props {
  novelId: string | undefined;
  chapterId: string | undefined;
}

const useNovelChapter = ({ novelId, chapterId }: Props) => {
  const navigate = useNavigate();
  const [chapter, setChapter] = useState<IChapter | null>(null);
  const [successServer, setSuccessServer] = useState<string>("");

  const { server, listServer } = useSelector((state: AppState) => state.server);
  const dispatch = useDispatch<AppDispatch>();
  const [indexServer, setIndexServer] = useState(0);
  const [flagListServer, setFlagListServer] = useState(listServer);

  function DoubleClickChangeServerSuccess(data: IResponse<IChapter>, server: string) {
    setChapter(data.data);
    setSuccessServer(server);
  }

  useEffect(() => {
    dispatch(setIsOpen(true));
    return () => {
      dispatch(setIsOpen(false));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { isFetching, isError } = useQuery({
    queryKey: ["chapter", chapterId, novelId, server, indexServer, flagListServer],
    queryFn: async () => {
      console.log(`Call API ${listServer[indexServer]}/${novelId}/${chapterId}`);
      const data: IResponse<IChapter> = await ApiGetOneChapter(
        listServer[indexServer],
        novelId || "a",
        chapterId || "chuong-1",
      );

      setSuccessServer(listServer[indexServer]);
      setChapter(data.data);

      return data;
    },
    retry: 1,
  });

  useEffect(() => {
    if (chapter == null) return;
    dispatch(
      updateNovelReaded({
        time: new Date().toString(),
        name: chapter.novelName,
        novelId: chapter.novelId,
        chapterId: chapter.chapterId,
      }),
    );

    dispatch(
      addNovelReaded({
        novelId: chapter.novelId,
        chapterId: chapter.chapterId,
      }),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chapter]);

  useEffect(() => {
    setFlagListServer(listServer);
    setIndexServer(0);
  }, [listServer]);

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

  return { DoubleClickChangeServerSuccess, successServer, chapter, isFetching };
};

export default useNovelChapter;
