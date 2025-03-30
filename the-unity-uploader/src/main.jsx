import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import GamePage from './webpages/GamePage'
<<<<<<< Updated upstream
<<<<<<< Updated upstream
import PlatformerPage from './webpages/using-unity/PlatformerPage'
import PuzzlePage from './webpages/using-unity/PuzzlePage'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PuzzlePage />
=======
=======
>>>>>>> Stashed changes
import UploadPage from './webpages/UploadPage';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UploadPage />
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
  </StrictMode>,
)
