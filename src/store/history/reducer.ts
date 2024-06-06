import { PayloadAction } from "@reduxjs/toolkit";
import { IHistory, IHistoryRoot } from "./type";

export const historyReducer = {
  updateNovelReaded(state: IHistory, action: PayloadAction<IHistoryRoot>) {
    const filterNovel = state.history.filter((nov: IHistoryRoot) => action.payload.novelId !== nov.novelId);

    state.history = [action.payload, ...filterNovel];
  },
  removeNovelReaded(state: IHistory, action: PayloadAction<string>) {
    const filterNovel = state.history.filter((nov: IHistoryRoot) => action.payload !== nov.novelId);

    state.history = [...filterNovel];
  },
};
