import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import GamePage from './webpages/GamePage'
import AboutPage from './webpages/AboutPage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AboutPage />
  </StrictMode>,
)
