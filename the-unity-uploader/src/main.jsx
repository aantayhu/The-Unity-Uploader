import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import GamePage from './webpages/GamePage'
import AboutPage from './webpages/AboutPage'
import PlatformerPage from './webpages/using-unity/PlatformerPage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PlatformerPage />
  </StrictMode>,
)
