import { createSlice } from "@reduxjs/toolkit";
import { Store } from "../name";
import { IHistory } from "./type";
import { historyReducer } from "./reducer";

const initialState: IHistory = {
  history: [],
};

const historySlice = createSlice({
  name: Store.HISTORY,
  initialState,
  reducers: historyReducer,
});

const { actions, reducer } = historySlice;

export const { updateNovelReaded, removeNovelReaded } = actions;

export default reducer;
