import { createSlice } from "@reduxjs/toolkit";
import { IReadedData } from "./type";
import { Store } from "../name";
import { readedReducer } from "./reducer";

const initialState: IReadedData = {
  readed: [],
};

const readedSlice = createSlice({
  name: Store.READED,
  initialState,
  reducers: readedReducer,
});

const { actions, reducer } = readedSlice;

export const { addNovelReaded } = actions;

export default reducer;
