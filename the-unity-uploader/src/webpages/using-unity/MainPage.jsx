import {Link} from 'react-router-dom';
import Navbar from '../../common-components/Navbar'
import './MainPage.css'

function MainPage() {
    return (
        <>
           <Navbar /> 
           <h1>Using Unity:</h1>
           <h3>Here, learn about the fundamental and specific information needed to get you started on creating and exporting your games! </h3>
           
           <h2>Fundamentals</h2>
           <p>To deploy the game you've made, you're going to need to select the option to Build and Run your game, checking off all the scenes you want to include in your game.</p>
           
           <h2>Specifics</h2>
           <div className='link-buttons'>
                <button>
                    <Link to='/main-using-unity/platformer'>
                        Platformers
                    </Link>
                </button>
                <button>
                    <Link to='/main-using-unity/puzzle'>
                        Puzzles
                    </Link>
                </button>
           </div>
        </>
    )
}

export default MainPage;