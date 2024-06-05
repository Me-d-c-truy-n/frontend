import { configureStore } from "@reduxjs/toolkit"
import rootReducer, { combinedReducer } from "./rootReducer"
import storage from "redux-persist/lib/storage"
import { persistReducer, persistStore } from "redux-persist"
import { Store } from "./name"

const persistConfig = {
  key: Store.ROOT,
  storage,
  blacklist: [Store.CHAPTEROPEN],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export const persistor = persistStore(store)
export type AppDispatch = typeof store.dispatch
export type AppState = ReturnType<typeof combinedReducer>
