import { create } from "zustand";
import { IChapterOpen } from "./types";
import { immer } from "zustand/middleware/immer";

const initialChapterOpenValue: IChapterOpen = {
  isOpen: false,
}

export const useChapterOpenStore = create<typeof initialChapterOpenValue>()(
  immer(
    () => initialChapterOpenValue
  )
)

export const setIsOpen = (isOpen: boolean) => 
  useChapterOpenStore.setState({ isOpen });