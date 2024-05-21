import { create } from "zustand";
import { IHistory, IHistoryRoot } from "./types";
import { immer } from "zustand/middleware/immer";
import { persist } from "zustand/middleware";
import { Store } from "./names";

const initialHistoryValue: IHistory = {
  history: [],
}

export const useHistoryStore = create<typeof initialHistoryValue>()(
  immer(
    persist(() => initialHistoryValue, {
      name: Store.HISTORY
    })
  )
)

export const updateNovelReaded = (newNovel: IHistoryRoot) => 
  useHistoryStore.setState((state) => {
    const filterNovel = state.history.filter((nov: IHistoryRoot)=>
      newNovel.novelId !== nov.novelId)

    state.history = [newNovel, ...filterNovel];
  });

export const removeNovelReaded = (novelId: string) => 
  useHistoryStore.setState((state) => {
    const filterNovel = state.history.filter((nov: IHistoryRoot)=>
      novelId !== nov.novelId)

    state.history = [...filterNovel];
  });

export const getChapterJustReaded = (novelId: string | undefined) => 
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useHistoryStore((state) => {
    const filterNovel = state.history.filter((nov: IHistoryRoot)=>
      novelId === nov.novelId);

    if (filterNovel.length <= 0) return '0';
    return filterNovel[0].chapterId
  })