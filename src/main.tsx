import { enableMapSet } from 'immer'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

enableMapSet()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
