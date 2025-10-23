import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RouterApp from './router/RouterApp.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterApp />
  </StrictMode>,
)
