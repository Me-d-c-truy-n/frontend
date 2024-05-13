import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { SettingsProvider } from './contexts/SettingsContext.tsx'
import { HistoryProvider } from './contexts/HistoryContext.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <SettingsProvider>
    <HistoryProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </HistoryProvider>
  </SettingsProvider>
)
