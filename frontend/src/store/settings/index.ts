import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ISettings } from "./type";
import { INITIAL_KEY } from "../../types/key";
import { Store } from "../name";
import { Align } from "../../types/align";

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
  reducers: {
    changeFontSize(state, action: PayloadAction<string>) {
      state.fontSize = action.payload
    },
    changeFontStyle(state, action: PayloadAction<string>) {
      state.fontStyle = action.payload
    },
    changeLeading(state, action: PayloadAction<string>) {
      state.leading = action.payload
    },
    changeAlign(state, action: PayloadAction<string>) {
      state.align = action.payload as Align;
    },
    changeServer(state, action: PayloadAction<string>) {
      state.server = action.payload
    },
    resetSettingsText(state) {
      state.fontSize = INITIAL_KEY.FONTSIZE;
      state.fontStyle = INITIAL_KEY.FONTSTYLE;
      state.leading = INITIAL_KEY.LEADING;
      state.align = INITIAL_KEY.ALIGN;
    }
  }
})

export const 
  { 
    changeFontSize, 
    changeFontStyle, 
    changeAlign, 
    changeLeading, 
    changeServer,
    resetSettingsText
  } 
  = settingsSlice.actions

export default settingsSlice.reducer;