import React from 'react';

function FileUploader() {
    const MAX_IMAGE = 1024*1024; //1 MB for the image
    const MAX_FILE = 100*1024*1024; //100 MB for the file
    return (
        <>
            <h4>Choose an image</h4>
            <input type='file'></input>
            <h4>Choose a file</h4>
            <input type='file'></input>
            <p></p>
            <p></p>
        </>
    );
}

export default FileUploader;