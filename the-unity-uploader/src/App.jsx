import {HashRouter, Routes, Route} from 'react-router-dom'; 
import GamePage from './webpages/GamePage';
// import UploadPage from './webpages/UploadPage';
import AboutPage from './webpages/AboutPage';
import MainPage from './webpages/using-unity/MainPage';
import PlatformerPage from './webpages/using-unity/PlatformerPage';
import PuzzlePage from './webpages/using-unity/PuzzlePage';
import FileUploader from './webpages/FileUploader';
import './App.css'

function App() {

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<GamePage />}/>
          <Route path="/main-using-unity" element={<MainPage />}/>
          <Route path="/main-using-unity/platformer" element={<PlatformerPage />}/>
          <Route path="/main-using-unity/puzzle" element={<PuzzlePage />}/>
          <Route path="/upload" element={<FileUploader />}/>
          <Route path="/about" element={<AboutPage />}/>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
