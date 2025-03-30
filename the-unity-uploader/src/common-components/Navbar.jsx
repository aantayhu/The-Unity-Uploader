import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [selectedID, changeSelectedID] = useState('games');
  const location = useLocation(); // Hook to get the current location

  // Effectively update selectedID based on current location/path
  useEffect(() => {
    const path = location.pathname.split('/')[1]; // Get the first part of the path after '/'
    changeSelectedID(path || 'games'); // If no path, default to 'games'
  }, [location]); // Update whenever location changes

  return (
    <>
      <div id="logo"><strong>The Unity Uploader</strong></div>
      <div className='navbar-container'>
        <Link to='/'>
          <h3 
            id='games' 
            className={selectedID === 'games' ? 'selected' : ''}
            onMouseEnter={() => changeWordSize('games', 40)} 
            onMouseLeave={() => changeWordSize('games', 18.75)}
            onClick={() => changeSelectedID('games')}
          >
            Games
          </h3>
        </Link>

        <Link to='/main-using-unity'>
          <h3 
            id='using-unity' 
            className={selectedID === 'using-unity' ? 'selected' : ''}
            onMouseEnter={() => changeWordSize('using-unity', 40)} 
            onMouseLeave={() => changeWordSize('using-unity', 18.75)}
            onClick={() => changeSelectedID('using-unity')}
          >
            Using Unity
          </h3>
        </Link>

        <Link to='/upload'>
          <h3 
            id='upload' 
            className={selectedID === 'upload' ? 'selected' : ''}
            onMouseEnter={() => changeWordSize('upload', 40)} 
            onMouseLeave={() => changeWordSize('upload', 18.75)}
            onClick={() => changeSelectedID('upload')}
          >
            Upload
          </h3>
        </Link>

        <Link to='/about'>
          <h3 
            id='about' 
            className={selectedID === 'about' ? 'selected' : ''}
            onMouseEnter={() => changeWordSize('about', 40)} 
            onMouseLeave={() => changeWordSize('about', 18.75)}
            onClick={() => changeSelectedID('about')}
          >
            About
          </h3>
        </Link>
      </div>
    </>
  )
}

export default Navbar;
