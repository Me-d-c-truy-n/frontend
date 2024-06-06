import { PayloadAction } from "@reduxjs/toolkit";
import { IBookmark, IBookmarkRoot } from "./type";

export const bookmarkReducer = {
  updateBookmark(state: IBookmarkRoot, action: PayloadAction<IBookmark>) {
    const filteredBookmarks = state.bookmark.filter((bm: IBookmark) => bm.novelId === action.payload.novelId);

    if (filteredBookmarks.length <= 0) {
      // nếu truyện chưa được đánh dấu => đánh dấu truyện này (có hay ko chapter)
      state.bookmark = [action.payload, ...state.bookmark];
    } else {
      // nếu truyện đã được đánh dấu => kiểm tra chapter
      const filteredBookmarkChapter = filteredBookmarks.filter(
        (bm: IBookmark) => bm.chapterId === action.payload.chapterId,
      );

      if (filteredBookmarkChapter.length <= 0) {
        // nếu chapter chưa đánh dấu => đánh dấu chapter
        state.bookmark = [action.payload, ...state.bookmark];
      } else {
        // nếu chapter đã đánh dấu => xóa đánh dấu chapter
        const restData = state.bookmark.filter(
          (bm: IBookmark) => bm.novelId !== action.payload.novelId || bm.chapterId !== action.payload.chapterId,
        );

        state.bookmark = [...restData];
      }
    }
  },
};
