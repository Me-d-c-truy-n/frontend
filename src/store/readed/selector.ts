import { createSelector } from '@reduxjs/toolkit'
import { AppState } from '..'
import { IReaded } from './type'

export const getListChapterReaded = (novelId: string | undefined) =>
  createSelector(
    (state: AppState) => state.readed.readed,
    (state: IReaded[]) => {
      const filterReaded = state.filter((read: IReaded) => read.novelId === novelId)
      return filterReaded[0]?.chapterId || []
    }
  )
