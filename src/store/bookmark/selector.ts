import { createSelector } from "@reduxjs/toolkit"
import { IBookmark } from "./type"
import { AppState } from ".."

export const checkIsBookmark = (currentBookmark: IBookmark) =>
  createSelector(
    (state: AppState) => state.bookmark.bookmark,
    (state: IBookmark[]) => {
      const filteredBookmarks = state.filter(
        (bm: IBookmark) => bm.novelId === currentBookmark.novelId && bm.chapterId === currentBookmark.chapterId
      )

      return filteredBookmarks.length > 0
    }
  )
