import { AnyAction, combineReducers, Reducer } from "redux";
import { AppState } from ".";
import readedSlice from './readed'
import bookmarkSlice from './bookmark'

export const combinedReducer = combineReducers({
  readed: readedSlice,
  bookmark: bookmarkSlice,
});

const rootReducer: Reducer = (state: AppState, action: AnyAction) => {
  return combinedReducer(state, action);
};

export default rootReducer;