import { useContext, useState } from "react";
import Slider from "../components/Slider";
import { useParams } from "react-router-dom";

import { SettingsContext } from "../contexts/SettingsContext";
import SettingPopup from "../components/Popup/SettingPopup";
import ChapterPopup from "../components/Popup/ChapterPopup";
import NovelChapterSkeleton from "../components/Loading/NovelChapterSkeleton";

import KanbanSelectServer from "../components/Button/KanbanSelectServer";
import MyHelmet from "../components/MyHelmet";
import { subSlugChapter } from "../utils/helpers";
import useChangeChapter from "../hooks/useChangeChapter";
import Content from "../components/Reading/Content";
import ChapterInfo from "../components/Reading/ChapterInfo";
import GroupHandleChapterTop from "../components/Reading/GroupHandleChapterTop";
import GroupButtonControl from "../components/Reading/GroupButtonControl";
import GroupHandleChapterBottom from "../components/Reading/GroupHandleChapterBottom";
import useNovelChapter from "../hooks/query/useNovelChapter";

const NovelChapter = () => {
  const { novelId, chapterId } = useParams();
  const [openSettingPopup, setOpenSettingPopup] = useState<boolean>(false);
  const [openChapterPopup, setOpenChapterPopup] = useState<boolean>(false);

  const { background } = useContext(SettingsContext)!;

  const { DoubleClickChangeServerSuccess, successServer, chapter, isFetching } = useNovelChapter({
    novelId,
    chapterId,
  });

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
