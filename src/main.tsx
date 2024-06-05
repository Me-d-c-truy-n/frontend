import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import { SettingsProvider } from "./contexts/SettingsContext.tsx"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ThemeProvider } from "./contexts/ThemeContext.tsx"
import { Provider } from "react-redux"
import { persistor, store } from "./store/index.ts"
import { PersistGate } from "redux-persist/integration/react"
import "./font.scss"
import "./index.scss"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
    },
  },
})

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SettingsProvider>
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
        </SettingsProvider>
      </PersistGate>
    </Provider>
  </ThemeProvider>
)
