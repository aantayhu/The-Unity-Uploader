import {HashRouter, Routes, Route} from 'react-router-dom'; 
import GamePage from './webpages/GamePage';
import UploadPage from './webpages/UploadPage';
import AboutPage from './webpages/AboutPage';
import './App.css'

function App() {

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<GamePage />}/>
          <Route path="/upload" element={<UploadPage />}/>
          <Route path="/about" element={<AboutPage />}/>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
