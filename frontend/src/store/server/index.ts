import { createSlice } from "@reduxjs/toolkit";
import { Store } from "../name";
import { IServer } from "./type";
import { serverReducer } from "./reducer";
import { INITIAL_KEY } from "../../types/key";

const initialState: IServer = {
  listServer: ["truyenfull", "tangthuvien"],
  server: INITIAL_KEY.SERVER,
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