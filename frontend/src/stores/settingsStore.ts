import { create } from "zustand";
import { Align } from "../types/align";
import { INITIAL_KEY } from "../types/key";
import { ISettings } from "./types";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { Store } from "./names";

const initialSettingsValue: ISettings = {
  fontSize: INITIAL_KEY.FONTSIZE,
  fontStyle: INITIAL_KEY.FONTSTYLE,
  leading: INITIAL_KEY.LEADING,
  align: Align.JUSTIFY,
}

export const useSettingsStore = create<typeof initialSettingsValue>()(
  immer(
    persist(() => initialSettingsValue, {
      name: Store.SETTINGS,
    })
  )
)

export const changeFontSize = (fontSize: string) => 
  useSettingsStore.setState({ fontSize });

export const changeFontStyle = (fontStyle: string) => 
  useSettingsStore.setState({ fontStyle });

export const changeLeading = (leading: string) => 
  useSettingsStore.setState({ leading });

export const changeAlign = (align: Align) => 
  useSettingsStore.setState({ align });

export const resetSettingsText = () => 
  useSettingsStore.setState({ 
    fontSize: INITIAL_KEY.FONTSIZE,
    fontStyle: INITIAL_KEY.FONTSTYLE,
    leading: INITIAL_KEY.LEADING,
    align: Align.JUSTIFY,
  });
