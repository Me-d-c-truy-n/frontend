import { useContext, useEffect, useState } from "react";
import Slider from "../components/Slider";
import { useNavigate, useParams } from "react-router-dom";
import { IChapter } from "../types/novel";

import { SettingsContext } from "../contexts/SettingsContext";
import SettingPopup from "../components/Popup/SettingPopup";
import ChapterPopup from "../components/Popup/ChapterPopup";
import { IResponse } from "../types/response";
import { useQuery } from "@tanstack/react-query";
import { ApiGetOneChapter } from "../api/apiNovel";
import NovelChapterSkeleton from "../components/Loading/NovelChapterSkeleton";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppState } from "../store";
import { updateNovelReaded } from "../store/history";
import { addNovelReaded } from "../store/readed";
import { setIsOpen } from "../store/chapterOpen";
import KanbanSelectServer from "../components/Button/KanbanSelectServer";
import MyHelmet from "../components/MyHelmet";
import { subSlugChapter } from "../utils/helpers";
import useChangeChapter from "../hooks/useChangeChapter";
import Content from "../components/Reading/Content";
import ChapterInfo from "../components/Reading/ChapterInfo";
import GroupHandleChapterTop from "../components/Reading/GroupHandleChapterTop";
import GroupButtonControl from "../components/Reading/GroupButtonControl";
import GroupHandleChapterBottom from "../components/Reading/GroupHandleChapterBottom";

const NovelChapter = () => {
  const navigate = useNavigate();
  const { novelId, chapterId } = useParams();
  const [chapter, setChapter] = useState<IChapter | null>(null);
  const [openSettingPopup, setOpenSettingPopup] = useState<boolean>(false);
  const [openChapterPopup, setOpenChapterPopup] = useState<boolean>(false);
  const [successServer, setSuccessServer] = useState<string>("");

  const { background } = useContext(SettingsContext)!;

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

  const _isLoading = chapter === null || isFetching || novelId == null || chapterId == undefined;

  const isActive = !openChapterPopup && !openSettingPopup && !_isLoading;
  const { handleNextChapter, handlePrevChapter } = useChangeChapter({ chapter, chapterId, novelId, isActive });

  if (_isLoading) return <NovelChapterSkeleton />;

  return (
    <div
      style={{
        backgroundColor: background,
      }}
    >
      {openSettingPopup && <SettingPopup close={() => setOpenSettingPopup(false)} />}
      {openChapterPopup && (
        <ChapterPopup
          close={() => setOpenChapterPopup(false)}
          novelId={novelId}
          name={chapter.novelName}
          server={successServer}
          chapterId={chapterId || "1"}
        />
      )}
      <MyHelmet
        title={`${chapter.novelName} - ${subSlugChapter(chapter.chapterId)} - nguồn ${successServer}`}
        description={`Truyện của tác giả ${chapter.author} - nguồn ${successServer}`}
      />
      <Slider />
      <div className="flex flex-col justify-center items-center mt-2">
        <ChapterInfo chapter={chapter} server={successServer} />
        <GroupHandleChapterTop
          handleNextChapter={handleNextChapter}
          handlePrevChapter={handlePrevChapter}
          chapterName={chapter.name}
        />

        <GroupButtonControl
          setOpenChapterPopup={setOpenChapterPopup}
          setOpenSettingPopup={setOpenSettingPopup}
          chapter={chapter}
        />

        <KanbanSelectServer
          successServer={successServer}
          chapterId={chapterId}
          novelId={chapter.novelId}
          func={DoubleClickChangeServerSuccess}
        />
      </div>
      <Content content={chapter.content} />
      <Slider />

      <GroupHandleChapterBottom
        isShowPrevButton={chapter.preChapterId?.length >= 0}
        isShowNextButton={chapter.nextChapterId?.length >= 0}
        handlePrevChapter={handlePrevChapter}
        handleNextChapter={handleNextChapter}
      />
    </div>
  );
};

export default NovelChapter;
