import { PayloadAction } from "@reduxjs/toolkit";
import { ISettings } from "./type";
import { Align } from "../../types/align";
import { INITIAL_KEY } from "../../types/key";

export const settingsReducer = {
  changeFontSize(state: ISettings, action: PayloadAction<string>) {
    state.fontSize = action.payload
  },
  changeFontStyle(state: ISettings, action: PayloadAction<string>) {
    state.fontStyle = action.payload
  },
  changeLeading(state: ISettings, action: PayloadAction<string>) {
    state.leading = action.payload
  },
  changeAlign(state: ISettings, action: PayloadAction<string>) {
    state.align = action.payload as Align;
  },
  resetSettingsText(state: ISettings) {
    state.fontSize = INITIAL_KEY.FONTSIZE;
    state.fontStyle = INITIAL_KEY.FONTSTYLE;
    state.leading = INITIAL_KEY.LEADING;
    state.align = INITIAL_KEY.ALIGN;
  }
}