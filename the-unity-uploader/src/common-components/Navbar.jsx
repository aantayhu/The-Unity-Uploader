import {useState, useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom';
import './Navbar.css';

function Navbar() {

    const [selectedID, changeSelectedID] = useState('games');
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname.split('/')[1]; // Get the first part of the path after '/'
        console.log(path || 'games');
        changeSelectedID(path || 'games'); // If no path, default to 'games'
      }, [location]); // Update whenever location changes


    const changeWordSize = (givenID, newSize) => {
        const elem = document.getElementById(givenID);
        if (elem != null) {
            elem.style.fontSize = `${newSize}px`;
            elem.style.cursor = (newSize == 40) ? 'pointer' : 'default';
        }
    }

    return(
        <>
            <div id="logo"><strong>The Unity Uploader</strong></div>
            <div className='navbar-container'>
                <Link to='/'>
                    <h3 id='games' 
                    className={selectedID === 'games' ? 'selected' : ''} // Apply 'selected' class if the ID matches
                    onMouseEnter={() => changeWordSize('games', 40)} 
                        onMouseLeave={() => changeWordSize('games', 18.75)}
                        onClick={() => changeSelectedID('games')}>
                            Games
                    </h3>
                </Link>

                <Link to='/main-using-unity'>
                    <h3 id='using-unity' onMouseEnter={() => changeWordSize('using-unity', 40)}
                    className={selectedID === 'main-using-unity' ? 'selected' : ''} // Apply 'selected' class if the ID matches 
                        onMouseLeave={() => changeWordSize('using-unity', 18.75)}
                        onClick={() => changeSelectedID('using-unity')}>
                            Using Unity
                    </h3>
                </Link>

                <Link to='/upload'>
                    <h3 id='upload' onMouseEnter={() => changeWordSize('upload', 40)} 
                    className={selectedID === 'upload' ? 'selected' : ''} // Apply 'selected' class if the ID matches
                        onMouseLeave={() => changeWordSize('upload', 18.75)}
                        onClick={() => changeSelectedID('upload')}>
                            Upload
                    </h3>
                </Link>

                <Link to='/about'>
                    <h3 id='about' onMouseEnter={() => changeWordSize('about', 40)} 
                    className={selectedID === 'about' ? 'selected' : ''} // Apply 'selected' class if the ID matches
                        onMouseLeave={() => changeWordSize('about', 18.75)}
                        onClick={() => changeSelectedID('about')}>
                            About
                    </h3>
                </Link>
            </div>
        </>
    )
}

export default Navbar;