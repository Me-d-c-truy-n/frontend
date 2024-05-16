import { ReactNode, createContext } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";
import { KEY } from "../types/key";
import { IBookmark } from "../types/bookmark";

interface BookmarkContextType {
  bookmark: IBookmark[];
  updateBookmark: (newBookmark: IBookmark) => void;
  checkIsBookmark: (currentBookmark: IBookmark) => boolean;
}

const BookmarkContext = createContext<BookmarkContextType | undefined>(undefined);

interface BookmarkProviderProps {
  children: ReactNode;
}

const BookmarkProvider: React.FC<BookmarkProviderProps> = ({children}) =>{
  const [bookmark, setBookmark] = useLocalStorageState({
    key: KEY.BOOKMARK,
    initialState: [],
  });

  function updateBookmark(newBookmark: IBookmark) {
    const filteredBookmarks = bookmark.filter((bm: IBookmark) => bm.novelId === newBookmark.novelId);

    if (filteredBookmarks.length <= 0) {
      // nếu truyện chưa được đánh dấu => đánh dấu truyện này (có hay ko chapter)
      setBookmark([newBookmark, ...bookmark]);
    } 
    else {
      // nếu truyện đã được đánh dấu => kiểm tra chapter
      const filteredBookmarkChapter = 
      filteredBookmarks.filter((bm: IBookmark) => 
        bm.chapterId === newBookmark.chapterId);

      if (filteredBookmarkChapter.length <= 0) {
        // nếu chapter chưa đánh dấu => đánh dấu chapter
        setBookmark([newBookmark, ...bookmark]);
      }
      else {
        // nếu chapter đã đánh dấu => xóa đánh dấu chapter
        const restData = 
        bookmark.filter((bm: IBookmark) => 
          bm.novelId !== newBookmark.novelId ||
          bm.chapterId !== newBookmark.chapterId
      );

        setBookmark([...restData]);
      }
    } 
  }

  function checkIsBookmark(currentBookmark: IBookmark) {
    const filteredBookmarks = bookmark.filter((bm: IBookmark) => 
      bm.novelId === currentBookmark.novelId &&
      bm.chapterId === currentBookmark.chapterId
  );

    return filteredBookmarks.length > 0;
  }

  return (
    <BookmarkContext.Provider
      value={{ 
        bookmark,
        updateBookmark,
        checkIsBookmark
      }}
    >
      {children}
    </BookmarkContext.Provider>
  );
}

export { BookmarkContext, BookmarkProvider };