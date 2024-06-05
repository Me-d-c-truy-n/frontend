import { PayloadAction } from '@reduxjs/toolkit'
import { IServer } from './type'

export const serverReducer = {
  changeServerIndex(state: IServer, action: PayloadAction<string[]>) {
    state.server = action.payload[0]
    state.listServer = action.payload
  },
  updateListServer(state: IServer, action: PayloadAction<string[]>) {
    action.payload.map((srv) => {
      if (!state.listServer.includes(srv)) {
        state.listServer.push(srv)
      }
    })

    state.listServer = state.listServer.filter((srv) => action.payload.includes(srv))

    state.server = state.listServer[0] || 'metruyencv'
  }
}
