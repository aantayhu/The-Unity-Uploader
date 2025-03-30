import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import GamePage from './webpages/GamePage'
<<<<<<< Updated upstream
import PlatformerPage from './webpages/using-unity/PlatformerPage'
import PuzzlePage from './webpages/using-unity/PuzzlePage'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PuzzlePage />
=======
import UploadPage from './webpages/UploadPage';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UploadPage />
>>>>>>> Stashed changes
  </StrictMode>,
)
