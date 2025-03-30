
import './Navbar.css'

function Navbar() {

    const changeWordSize = (givenID, newSize) => {
        const elem = document.getElementById(givenID);
        if (elem != null) {
            elem.style.fontSize = `${newSize}px`;
            elem.style.cursor = (newSize == 40) ? 'pointer' : 'default';
        }
    }

    return(
        <>
            <div className='navbar-container'>
                <h3 id='games' onMouseEnter={() => changeWordSize('games', 40)} 
                    onMouseLeave={() => changeWordSize('games', 18.75)}>
                        Games
                </h3>
                <h3 id='using-unity' onMouseEnter={() => changeWordSize('using-unity', 40)} 
                    onMouseLeave={() => changeWordSize('using-unity', 18.75)}>
                        Using Unity
                </h3>
                <h3 id='upload' onMouseEnter={() => changeWordSize('upload', 40)} 
                    onMouseLeave={() => changeWordSize('upload', 18.75)}>
                        Upload
                </h3>
                <h3 id='about' onMouseEnter={() => changeWordSize('about', 40)} 
                    onMouseLeave={() => changeWordSize('about', 18.75)}>
                        About
                </h3>
            </div>
        </>
    )
}

export default Navbar;