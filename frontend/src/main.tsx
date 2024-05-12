import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { SettingsProvider } from './contexts/SettingsContext.tsx'
import { HistoryProvider } from './contexts/HistoryContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <SettingsProvider>
    <HistoryProvider>
      <App />
    </HistoryProvider>
  </SettingsProvider>
)
