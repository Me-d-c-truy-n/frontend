import { useEffect } from "react";
import { useModal } from "../../hooks/useModal";
import { getCurrentScrollByChapterId } from "../../utils/helpers";
import ChapterRow from "./ChapterRow";
import ListChapterSkeleton from "../Loading/ListChapterSkeleton";
import CustomPagination from "../CustomPagination";
import EmptyResult from "../EmptyResult";
import ButtonClose from "../Button/ButtonClose";
import useGetAllChapter from "../../hooks/query/useGetAllChapter";

interface Props {
  close: () => void;
  novelId: string;
  name: string;
  server: string;
  chapterId?: string;
}

const ChapterPopup = ({ close, novelId, name, server, chapterId }: Props) => {
  const { isLoading, isError, totalPage, currentPage, setCurrentPage, firstSelectedPage, chapters, listChapterReaded } =
    useGetAllChapter({
      server,
      chapterId,
      novelId,
    });
  const { modalRef, handleClickOutside } = useModal(close);

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  useEffect(() => {
    const container = document.getElementById("scroll_chapter");
    if (!container || isLoading || currentPage != firstSelectedPage) return;

    const fullHeight = container.scrollHeight;

    const scrollTo = getCurrentScrollByChapterId(server, chapterId || "1", fullHeight);

    container.scrollTo({
      top: scrollTo,
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  return (
    <div
      ref={modalRef}
      onClick={handleClickOutside}
      className="fixed left-0 mt-0 z-[1000] top-0 w-full h-screen px-2"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.6)",
      }}
    >
      <div
        className="shadow-2xl py-1 lg:w-8/12 mx-auto border rounded-lg border-amber-600 bg-amber-50 dark:bg-stone-950 h-full"
        id="pagination-list-chapter"
      >
        {isLoading && !isError ? (
          <ListChapterSkeleton name={name} close={close} />
        ) : (
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center border-b shadow-sm pb-3 md:px-2 px-1 dark:border-b-gray-800">
              <h1 className="text-lg md:text-xl font-bold dark:text-white">
                {!isError ? chapters[0].novelName : name}
              </h1>
              <ButtonClose close={close} />
            </div>
            {!isError ? (
              <div
                className="grid grid-cols-1 md:gap-4 gap-2 md:grid-cols-2 overflow-y-auto custom_scroll flex-1 md:px-4 px-2"
                id="scroll_chapter"
              >
                {chapters.map((chapter) => (
                  <ChapterRow
                    key={chapter.chapterId}
                    chapter={chapter}
                    close={close}
                    isReaded={listChapterReaded.includes(chapter.chapterId)}
                  />
                ))}
              </div>
            ) : (
              <div className="mb-4">
                <EmptyResult title="Không thể tải danh sách chương" />
              </div>
            )}

            <div className="border-t dark:border-t-gray-700 md:px-4 px-2">
              <CustomPagination
                totalPage={totalPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                changeThemeEffect={true}
                topList="pagination-list-chapter"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChapterPopup;
