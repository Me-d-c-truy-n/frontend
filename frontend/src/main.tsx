import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './font.css'
import './index.css'
import { SettingsProvider } from './contexts/SettingsContext.tsx'
import { HistoryProvider } from './contexts/HistoryContext.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from './contexts/ThemeContext.tsx'
import { ChapterOpenProvider } from './contexts/ChapterOpenContext.tsx'
import { BookmarkProvider } from './contexts/BookmarkContext.tsx'
import { Provider } from 'react-redux'
import { persistor, store } from './store/index.ts'
import { PersistGate } from 'redux-persist/integration/react'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <HistoryProvider>
    <ThemeProvider>  
      <BookmarkProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <SettingsProvider>
              <ChapterOpenProvider>
                <QueryClientProvider client={queryClient}>
                  <App />
                </QueryClientProvider>
              </ChapterOpenProvider>
            </SettingsProvider>
          </PersistGate>
        </Provider>
      </BookmarkProvider>
    </ThemeProvider>
  </HistoryProvider>
)
