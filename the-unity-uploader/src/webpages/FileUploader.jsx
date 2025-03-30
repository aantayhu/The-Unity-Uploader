import React, { useState } from 'react';
import { uploadGameFile } from '../api/s3Service';
import { saveGameMetadata } from '../api/dynamoService';

function FileUploader() {
    const [image, setImage] = useState(null);
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [categories, setCategories] = useState('');
    const [platform, setPlatform] = useState('windows'); // Default to Windows
    const [uploading, setUploading] = useState(false);
    const [message, setMessage] = useState('');

    const MAX_IMAGE_SIZE = 1024 * 1024; // 1 MB
    const MAX_FILE_SIZE = 100 * 1024 * 1024; // 100 MB

    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0];
        if (selectedImage && selectedImage.size <= MAX_IMAGE_SIZE) {
            setImage(selectedImage);
        } else {
            alert("Image size should be less than 1MB.");
        }
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile && selectedFile.size <= MAX_FILE_SIZE) {
            setFile(selectedFile);
        } else {
            alert("File size should be less than 100MB.");
        }
    };

    const handleUpload = async () => {
        if (!image || !file || !title || !description || !categories) {
            alert("Please fill in all fields and select both an image and a file.");
            return;
        }

        setUploading(true);
        setMessage("Uploading...");

        try {
            const gameId = Date.now().toString(); // Unique game ID
            const imagePath = `images/${gameId}_${image.name}`;
            const filePath = `gameexe/${gameId}_${file.name}`;

            // Upload Image
            const imageUrl = await uploadGameFile(image, imagePath);
            if (!imageUrl) throw new Error("Image upload failed.");

            // Upload File
            const fileUrl = await uploadGameFile(file, filePath);
            if (!fileUrl) throw new Error("Game file upload failed.");

            // Prepare metadata for DynamoDB
            const metadata = {
                game_id: gameId,
                categories: categories.split(',').map(cat => cat.trim()), // Store as an array
                description: description,
                title: title,
                mac_file: platform === 'mac' ? fileUrl : '',
                windows_file: platform === 'windows' ? fileUrl : '',
            };

            await saveGameMetadata(metadata);

            setMessage("Upload successful!");
        } catch (error) {
            console.error("Upload error:", error);
            setMessage("Upload failed.");
        } finally {
            setUploading(false);
        }
    };

    return (
        <div>
            <h4>Game Title</h4>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter game title" />

            <h4>Description</h4>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter game description"></textarea>

            <h4>Categories (comma-separated)</h4>
            <input type="text" value={categories} onChange={(e) => setCategories(e.target.value)} placeholder="e.g. Puzzle, Strategy" />

            <h4>Choose an image</h4>
            <input type="file" accept="image/*" onChange={handleImageChange} />

            <h4>Choose a file</h4>
            <input type="file" onChange={handleFileChange} />

            <h4>Platform</h4>
            <select value={platform} onChange={(e) => setPlatform(e.target.value)}>
                <option value="windows">Windows</option>
                <option value="mac">Mac</option>
            </select>

            <button onClick={handleUpload} disabled={uploading}>
                {uploading ? "Uploading..." : "Upload"}
            </button>

            <p>{message}</p>
        </div>
    );
}

export default FileUploader;