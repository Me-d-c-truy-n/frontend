import { PayloadAction } from "@reduxjs/toolkit";
import { IReaded, IReadedData, IReadedRoot } from "./type";

export const readedReducer = {
  addNovelReaded(state: IReadedData, action: PayloadAction<IReadedRoot>){
    const filterUnReaded = state.readed.filter((read: IReaded)=>
      read.novelId !== action.payload.novelId);
    const filterReaded = state.readed.filter((read: IReaded)=>
      read.novelId === action.payload.novelId);

    if (filterReaded.length <= 0) {
      const newReaded: IReaded = {
        novelId: action.payload.novelId,
        chapterId: [action.payload.chapterId]
      };

      state.readed = [newReaded, ...filterUnReaded];
    } else {
      const listChapter = 
        filterReaded[0].chapterId.filter((chapter: string) => chapter !== action.payload.chapterId);

      const newReaded: IReaded = {
        novelId: action.payload.novelId,
        chapterId: [...listChapter, action.payload.chapterId]
      };

      state.readed = [newReaded, ...filterUnReaded];
    }
  }
}