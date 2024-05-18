import { AnyAction, combineReducers, Reducer } from "redux";
import { AppState } from ".";
import settingsSlice from './settings'
import historySlice from './history'
import readedSlice from './readed'
import bookmarkSlice from './bookmark'
import chapterOpenSlice from './chapterOpen'
import serverSlice from './server'

export const combinedReducer = combineReducers({
  settings: settingsSlice,
  history: historySlice,
  readed: readedSlice,
  bookmark: bookmarkSlice,
  chapterOpen: chapterOpenSlice,
  server: serverSlice,
});

const rootReducer: Reducer = (state: AppState, action: AnyAction) => {
  return combinedReducer(state, action);
};

export default rootReducer;