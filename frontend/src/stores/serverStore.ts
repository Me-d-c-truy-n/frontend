import { create } from "zustand";
import { INITIAL_KEY } from "../types/key";
import { IServer } from "./types";
import { immer } from "zustand/middleware/immer";
import { persist } from "zustand/middleware";
import { Store } from "./names";

const initialServerValue: IServer = {
  listServer: [INITIAL_KEY.SERVER],
  server: INITIAL_KEY.SERVER,
}

export const useServerStore = create<typeof initialServerValue>()(
  immer(
    persist(() => initialServerValue, {
      name: Store.SERVER,
    })
  )
)

export const changeServerIndex = (listSrv: string []) => 
  useServerStore.setState({ server: listSrv[0], listServer: listSrv })

export const addNewServer = (listSrv: string []) => 
  useServerStore.setState((state) => {
    listSrv.map(srv => {
      if (!state.listServer.includes(srv)) {
        state.listServer.push(srv);
      }
    })
  });