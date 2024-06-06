import { createSlice } from "@reduxjs/toolkit";
import { IChapterOpen } from "./type";
import { Store } from "../name";
import { chapterOpenReducer } from "./reducer";

const initialState: IChapterOpen = {
  isOpen: false,
};

const chapterOpenSlice = createSlice({
  name: Store.CHAPTEROPEN,
  initialState,
  reducers: chapterOpenReducer,
});

const { actions, reducer } = chapterOpenSlice;

export const { setIsOpen } = actions;

export default reducer;
