import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { SettingsProvider } from './contexts/SettingsContext.tsx'
import { HistoryProvider } from './contexts/HistoryContext.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from './contexts/ThemeContext.tsx'
import { ChapterOpenProvider } from './contexts/ChapterOpenContext.tsx'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <SettingsProvider>
    <HistoryProvider>
      <ThemeProvider>  
        <ChapterOpenProvider>
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
        </ChapterOpenProvider>
      </ThemeProvider>
    </HistoryProvider>
  </SettingsProvider>
)
