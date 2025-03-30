import React, { useState } from 'react';
import './UploadPage.css';
import FileUploader from './FileUploader';

function UploadPage() {
    const [titleValue, setTitleValue] = useState("");
    const [categoryValue, setCategoryValue] = useState("");
    
    let array = [];
    const handleTitleChange = (e) => {
        setTitleValue(e.target.value);
    };

    const handleCategory = (e) => {
        setCategoryValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form and game submitted");
    };

    return (
        <div className='container'>
            <h1 className="uploader-header">Upload Your Game!</h1>
            <p>Not only can you learn about making games, you can upload your games to this site.</p>
            <form onSubmit={handleSubmit}>
                <h4>Game: {titleValue}</h4>
                <input placeholder='Game title' value={titleValue} onChange={handleTitleChange} />
                <h4>Description:</h4>
                <textarea placeholder='Description' rows={4} cols={40}/>
                <h4>Genre: {categoryValue} </h4>
                <input placeholder='Puzzle, Platformer, or Other' value={categoryValue} onChange={handleCategory}/>
                <FileUploader />
                <button type='submit'>Submit</button>
            </form>
            
        </div>
    );
}

export default UploadPage;