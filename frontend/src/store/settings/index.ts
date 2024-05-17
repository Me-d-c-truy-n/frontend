import { createSlice } from "@reduxjs/toolkit";
import { ISettings } from "./type";
import { INITIAL_KEY } from "../../types/key";
import { Store } from "../name";
import { settingsReducer } from "./reducer";

const initialState: ISettings = {
  fontSize: INITIAL_KEY.FONTSIZE,
  fontStyle: INITIAL_KEY.FONTSTYLE,
  leading: INITIAL_KEY.LEADING,
  align: INITIAL_KEY.ALIGN,
  server: INITIAL_KEY.SERVER,
}

const settingsSlice = createSlice({
  name: Store.SETTINGS,
  initialState,
  reducers: settingsReducer
})

const { actions, reducer } = settingsSlice;

export const 
  { 
    changeFontSize, 
    changeFontStyle, 
    changeAlign, 
    changeLeading, 
    changeServer,
    resetSettingsText
  } = actions

export default reducer;