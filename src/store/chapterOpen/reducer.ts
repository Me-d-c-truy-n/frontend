import { PayloadAction } from "@reduxjs/toolkit";
import { IChapterOpen } from "./type";

export const chapterOpenReducer = {
  setIsOpen(state: IChapterOpen, action: PayloadAction<boolean>) {
    state.isOpen = action.payload;
  },
};
