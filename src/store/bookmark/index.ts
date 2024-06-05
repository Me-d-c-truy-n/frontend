import { createSlice } from "@reduxjs/toolkit"
import { IBookmarkRoot } from "./type"
import { Store } from "../name"
import { bookmarkReducer } from "./reducer"

const initialState: IBookmarkRoot = {
  bookmark: [],
}

const bookmarkSlice = createSlice({
  name: Store.BOOKMARK,
  initialState,
  reducers: bookmarkReducer,
})

const { actions, reducer } = bookmarkSlice

export const { updateBookmark } = actions

export default reducer
