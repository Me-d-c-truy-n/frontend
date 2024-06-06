import { createSelector } from "@reduxjs/toolkit";
import { AppState } from "..";
import { IHistoryRoot } from "./type";

export const getChapterJustReaded = (novelId: string | undefined) =>
  createSelector(
    (state: AppState) => state.history.history,
    (state: IHistoryRoot[]) => {
      const filterNovel = state.filter((nov: IHistoryRoot) => novelId === nov.novelId);

      if (filterNovel.length <= 0) return "0";
      return filterNovel[0].chapterId;
    },
  );
