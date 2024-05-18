import { createSlice } from "@reduxjs/toolkit";
import { Store } from "../name";
import { IServer } from "./type";
import { serverReducer } from "./reducer";

const initialState: IServer = {
  listServer: ["truyenfull", "tangthuvien"],
  server: "truyenfull",
}

const serverSlice = createSlice({
  name: Store.SERVER,
  initialState,
  reducers: serverReducer    
})

const { actions, reducer } = serverSlice;

export const { 
  changeServerIndex
} = actions;

export default reducer;