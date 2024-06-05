import { createSlice } from '@reduxjs/toolkit'
import { ISettings } from './type'
import { INITIAL_KEY } from '../../types/key'
import { Store } from '../name'
import { settingsReducer } from './reducer'
import { Align } from '../../types/align'

const initialState: ISettings = {
  fontSize: INITIAL_KEY.FONTSIZE,
  fontStyle: INITIAL_KEY.FONTSTYLE,
  leading: INITIAL_KEY.LEADING,
  align: Align.JUSTIFY
}

const settingsSlice = createSlice({
  name: Store.SETTINGS,
  initialState,
  reducers: settingsReducer
})

const { actions, reducer } = settingsSlice

export const { changeFontSize, changeFontStyle, changeAlign, changeLeading, resetSettingsText } = actions

export default reducer
