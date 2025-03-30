import {Link} from 'react-router-dom';
import Navbar from '../common-components/Navbar';
import GameObject from '../common-components/GameObject';
import Image1 from '../photos/1713801616273.jpg';
import Image2 from '../photos/1740444203614.jpg';
import './GamePage.css';

function GamePage() {
    return (
        <>
            <Navbar />
            <h1>All The Games:</h1>
            <div id='game-container'>
                <GameObject imageURL={Image1} 
                            title='Example 1' 
                            description='This is the first exmaple of a game object'/>

                <GameObject imageURL={Image2}
                            title='Example 2' 
                            description='This is the second exmaple of a game object'/>
            </div>
            <button id='upload-button'>
                <Link to='/upload'>
                    Upload your game!
                </Link>
            </button>
        </>
    );
}

export default GamePage;