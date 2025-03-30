import React, { useState } from 'react'
import './styles/UploadPage.css';
function UploadPage() {
    const [titleValue, setTitleValue] = useState("");
    const [descriptionValue, setDescriptionValue] = useState("");
    const [categoryValue, setCategoryValue] = useState("");
    const [showValue, setShowValue] = useState(false);

    const handleTitleChange = (e) => {
        setTitleValue(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescriptionValue(e.target.value);
    };

    const handleCategory = (e) => {
        setCategoryValue(e.target.value);
    };

    const handleClick = () => {
        setShowValue(!showValue);
    };
    return(
        <div className='container'>
            <h1 className="uploader-header">Upload Your Game!</h1>
            <p>Not only can you learn about making games, you can upload your games to this site.</p>
            <form>
                <h4>Game: {titleValue}</h4>
                <input placeholder='Game title' value={titleValue} onChange={handleTitleChange} />
                <h4>Description:</h4>
                <p>{descriptionValue}</p>
                <input placeholder='Description' value={descriptionValue} onChange={handleDescriptionChange}/>
            </form>
            <h4>Genre: {categoryValue}</h4>
            <button onClick={handleClick}>{showValue ? '-' : '+'}</button>
            {showValue && (<form><input placeholder='Puzzle, Platformer, or Other' value={categoryValue} onChange={handleCategory} /></form>)}
            <button>Add Image</button> 
        </div>
    );
}

export default UploadPage;