import './GameObject.css'

function GameObject(props) {
    const imageURL = props.imageURL;
    const title = props.title;
    const description = props.description;
   
    return (
        <>
            <h2>{title}</h2>
            <img src={imageURL}/>
            <p>{description}</p>
            <div className='download-buttons'>
                <button>MacOS</button>
                <button>Windows</button>
            </div>
        </>
    );
}

export default GameObject;