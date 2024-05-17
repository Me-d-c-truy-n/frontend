import { AnyAction, combineReducers, Reducer } from "redux";
import { AppState } from ".";
import settingsSlice from './settings'

export const combinedReducer = combineReducers({
  settings: settingsSlice,
});

const rootReducer: Reducer = (state: AppState, action: AnyAction) => {
  return combinedReducer(state, action);
};

export default rootReducer;